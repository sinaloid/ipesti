import { useEffect, useRef, useState } from "react";
import endPoint from "../../../../services/endPoint";
import request, { URL } from "../../../../services/request";
import { Input } from "../../../../components/Input";
import { useFormik } from "formik";
import { pagination } from "../../../../services/function";
import { useParams } from "react-router-dom";
//import { CKEditor } from "@ckeditor/ckeditor5-react";
//import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor } from "@tinymce/tinymce-react";

const lang = "http://127.0.0.1:8000/assets/langs/fr_FR.js";
const initData = {
    nom: "",
    image: "",
    description: "",
};
export const PageList = ({ setView }) => {
    const [datas, setDatas] = useState({
        all: [],
        small: [],
    });
    const [pages, setPages] = useState({
        list: [],
        counter: 0,
        index: 0,
    });
    const close = useRef();
    const closeDelete = useRef();
    const [detail, setDetail] = useState("");
    const [viewData, setViewData] = useState({});
    const { slug } = useParams();
    useEffect(() => {
        get();
    }, []);
    const formik = useFormik({
        initialValues: initData,
        onSubmit: (values) => {
            values.parent = slug;
            console.log(values);
            if (values.slug) {
                update(values);
            } else {
                post(values);
            }
        },
    });

    const get = () => {
        request
            .get(endPoint.categories + "/" + slug)
            .then((res) => {
                //console.log(res.data.data);
                setDetail(res.data.data);
                const tab = pagination(
                    res.data.data.toutes_sous_categories,
                    10
                );

                //console.log(tab);

                if (tab.counter !== 0) {
                    setDatas({
                        all: res.data.data.toutes_sous_categories,
                        small: tab.list[0],
                    });
                    setPages(tab);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const post = (values) => {
        request
            .post(endPoint.categories, values)
            .then((res) => {
                console.log(res.data);
                close.current.click();
                get();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const update = (values) => {
        request
            .post(endPoint.categories + "/" + values.slug, values)
            .then((res) => {
                console.log(res.data);
                close.current.click();
                get();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const destroy = () => {
        request
            .delete(endPoint.categories + "/" + viewData.slug)
            .then((res) => {
                console.log(res.data);
                closeDelete.current.click();
                get();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const changePage = (e, values) => {
        e.preventDefault();
        const pageNumber = pages.index + parseInt(values);
        console.log(pageNumber);
        if (pageNumber >= 0 && pageNumber < pages.counter) {
            setPages({ ...pages, index: pageNumber });
            setDatas({
                ...datas,
                small: pages.list[pageNumber],
            });
        }
    };

    const onSelectData = (e, data) => {
        e.preventDefault();
        setViewData(data);
    };

    const editData = (e, data) => {
        e.preventDefault();
        formik.setFieldValue("_method", "put");
        formik.setFieldValue("slug", data.slug);
        formik.setFieldValue("nom", data.nom);
        formik.setFieldValue("description", data.description);
    };

    return (
        <>
            <div className="row mb-5">
                <div className="col-12">
                    <div className="d-flex">
                        <span className="fs-40 ">Page : </span>
                        <div className="ms-3 text-start">
                            <span className="fw-bold fs-40 ">{detail.nom}</span>
                            <p className="text-start">{detail.description}</p>
                            <div>
                                Créer le :{" "}
                                {new Date(
                                    detail.created_at
                                ).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 mb-3">
                    <h1 className="text-start mb-3 fs-30">Liste des pages</h1>
                    <div className="d-flex">
                        <div className="d-flex align-items-center me-auto">
                            <div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Rechercher..."
                                    />
                                    <span className="input-group-text">
                                        recherche
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span
                                    className="ms-2"
                                    onClick={(e) => changePage(e, "-1")}
                                >
                                    Prec
                                </span>
                                <span
                                    className="ms-2"
                                    onClick={(e) => changePage(e, "+1")}
                                >
                                    Suiv
                                </span>
                            </div>
                            <span className="fw-bold">
                                Page {pages.index + 1} / {pages.list.length}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="me-auto">
                        <button
                            type="button"
                            className="btn btn-primary me-2"
                            onClick={(e) => {
                                e.preventDefault();
                                setView("pages");
                            }}
                        >
                            Pages
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                setView("categories");
                            }}
                        >
                            Categories
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#produit"
                            onClick={(e) => formik.resetForm()}
                        >
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Catégories</th>
                                <th scope="col">Description</th>
                                <th scope="col">Date</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.small.map((data, idx) => {
                                if (data.is_deleted) {
                                    return null;
                                }
                                return (
                                    <tr key={idx}>
                                        <th scope="row">{idx + 1}</th>
                                        <td>
                                            <div className="d-flex">
                                                <img
                                                    width={"64px"}
                                                    src={URL + data.image}
                                                    alt=""
                                                />
                                                <div className="text-100">
                                                    {data.nom}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="text-200">
                                                {data.description}
                                            </p>
                                        </td>
                                        <td>
                                            {new Date(
                                                data.created_at
                                            ).toLocaleDateString()}
                                        </td>
                                        <td>
                                            <div className="btn-group">
                                                <button
                                                    className="btn btn-primary-light mx-1 rounded-3"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#view"
                                                    onClick={(e) =>
                                                        onSelectData(e, data)
                                                    }
                                                >
                                                    Voir
                                                </button>
                                                <button
                                                    className="btn btn-warning mx-1 rounded-3"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#produit"
                                                    onClick={(e) =>
                                                        editData(e, data)
                                                    }
                                                >
                                                    Modifier
                                                </button>
                                                <button
                                                    className="btn btn-danger mx-1 rounded-3"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#delete"
                                                    onClick={(e) =>
                                                        onSelectData(e, data)
                                                    }
                                                >
                                                    Supprimer
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                className="modal fade"
                id="produit"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                Ajout d'un nouvelle catégorie
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <Input
                                type={"text"}
                                placeholder="Nom de la catégorie"
                                name={"nom"}
                                formik={formik}
                            />
                            <Input
                                type={"file"}
                                placeholder="image du produit"
                                name={"image"}
                                formik={formik}
                            />
                            <Input
                                type={"textarea"}
                                placeholder="Description du produit"
                                name={"description"}
                                formik={formik}
                            />
                            <Editor
                                apiKey="inw3u1xr6hvvw2ezjwlonyy3wu489wqh6vl0437mbkfyakgv"
                                init={{
                                    
                                    tinycomments_mode: "embedded",
                                    tinycomments_author: "Author name",
                                    mergetags_list: [
                                        {
                                            value: "First.Name",
                                            title: "First Name",
                                        },
                                        { value: "Email", title: "Email" },
                                    ],
                                    ai_request: (request, respondWith) =>
                                        respondWith.string(() =>
                                            Promise.reject(
                                                "See docs to implement AI Assistant"
                                            )
                                        ),
                                    language: "fr_FR",
                                    language_url: lang,
                                    toolbar_mode: 'wrap'
                                }}
                                initialValue="Welcome to TinyMCE!"
                                
                            />
                            {/**
                                 * <CKEditor
                                editor={ClassicEditor}
                                onfig={ {
                                    //plugins: [ Base64UploadAdapter],
                                    //toolbar: [ 'bold', 'italic' ]
                                } }
                                data="<p>Hello from CKEditor&nbsp;5!</p>"
                                onReady={(editor) => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log(
                                        "Editor is ready to use!",
                                        editor
                                    );
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                }}
                                onBlur={(event, editor) => {
                                    console.log("Blur.", editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log("Focus.", editor);
                                }}
                                    />
                                 */}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                ref={close}
                            >
                                Annuler
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={formik.handleSubmit}
                            >
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="delete"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                Supprimer les données
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-start">
                            Voulez-vous continuer ?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                ref={closeDelete}
                            >
                                Non
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={destroy}
                            >
                                Oui
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade modal-lg" id="view">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                Détails
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-start">
                            <div className="d-flex">
                                <img
                                    width={"160px"}
                                    height={"160px"}
                                    src={URL + viewData.image}
                                    alt=""
                                />
                                <div className="ps-3">
                                    <span className="fw-bold fs-20">
                                        {viewData.nom}
                                    </span>
                                    <br />
                                    <span>Créer le : </span>
                                    <span className="text-muted">
                                        {new Date(
                                            viewData.created_at
                                        ).toLocaleDateString()}
                                    </span>
                                    <br />
                                    <br />
                                    <p>{viewData.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
