import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import request, { URL } from "../../services/request";
import endPoint from "../../services/endPoint";

export const EquipeContent = ({ data, slug }) => {
    const { slugOne, slugTwo } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState({});
    const [index, setIndex] = useState(0);
    const [detail, setDetail] = useState({
        isset: false,
        data: {},
    });
    const [sectionDetail, setSectionDetail] = useState("");

    useEffect(() => {
        console.log(data);
        get();
        if (
            slugTwo === undefined &&
            data.children !== undefined &&
            data.children?.length !== 0
        ) {
            changerView(data.slug + "/" + data?.children[0]?.slug);
        }
    }, [data, slugOne]);

    const changerView = (slug) => {
        navigate("/ipesti/" + slug);
    };

    const get = () => {
        request
            .get(endPoint.categories + "/" + slugOne)
            .then((res) => {
                //console.log(res.data);
                setContent(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const dataSelected = (data) => {
        setDetail({
            isset: true,
            data: data,
        });
    };
    return (
        <div className="col-12 col-md-8">
            <h1 className="text-primary mb-4">{content.titre}</h1>
            <div className="d-flex mb-4 border-bottom">
                {content.toutes_sous_categories?.map((item, idx) => {
                    return (
                        <div
                            key={"scat" + idx}
                            className={`cursor border-bottom me-4 ${
                                item.slug === slugTwo
                                    ? "border-color fw-bold"
                                    : "text-opacity-70"
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                setIndex(idx);
                                changerView(slug + "/" + item.slug);
                                setDetail({
                                    isset:false,
                                    data:[]
                                })
                                setSectionDetail({})
                            }}
                        >
                            {item.titre}
                        </div>
                    );
                })}
            </div>

            {content.toutes_sous_categories &&
                content.toutes_sous_categories?.length !== 0 && (
                    <>
                        <span className="text-primary fs-18 fw-bold mb-4 d-inline-block">
                            {content.toutes_sous_categories[index].titre}
                        </span>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: content.toutes_sous_categories[index]
                                    .contenu,
                            }}
                        />
                        {!detail.isset && (
                            <>
                                <div className="row row-cols-2 g-4 mb-4">
                                    {content.toutes_sous_categories[
                                        index
                                    ]?.toutes_sous_categories.map(
                                        (data, idx) => {
                                            return (
                                                <div
                                                    className="col"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        //setViewContent(!viewContent);
                                                        dataSelected(data);
                                                    }}
                                                >
                                                    <div className="d-flex">
                                                        <img
                                                            className="rounded-3"
                                                            width={"100px"}
                                                            height={"100px"}
                                                            src={
                                                                URL +
                                                                "" +
                                                                data.image
                                                            }
                                                        />
                                                        <div className="ps-2">
                                                            <div>
                                                                <div
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: data.htmlOne,
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </>
                        )}
                        {detail.isset && (
                            <>
                                <div className="row">
                                    <div className="col">
                                        <div className="d-flex">
                                            <img
                                                className="rounded-3"
                                                width={"100px"}
                                                height={"100px"}
                                                src={
                                                    URL + "" + detail.data.image
                                                }
                                            />
                                            <div className="ps-2">
                                                <div>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: detail.data
                                                                .htmlOne,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 my-4">
                                        <div className="d-flex flex-wrap border-bottom">
                                            {detail.data.toutes_sous_categories.length !== 0 && detail.data.toutes_sous_categories.map(
                                                (data, idx) => {
                                                    if(idx === 0 && sectionDetail?.titre === undefined){
                                                        setSectionDetail(
                                                            data
                                                        );
                                                    }
                                                    return (
                                                        <div
                                                            className={`me-4 mt-3 cursor p-2 ${sectionDetail?.titre === data.titre && "bg-primary text-white fw-bold"}`}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                //setViewContent(!viewContent);
                                                                setSectionDetail(
                                                                    data
                                                                );
                                                                console.log(data)
                                                            }}
                                                        >
                                                            {data.titre}
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                        <p className="py-2">
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: sectionDetail?.contenu,
                                                }}
                                            />
                                        </p>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary">Voir le CV complete</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
        </div>
    );
};
