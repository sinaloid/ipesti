import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import request, { URL } from "../../services/request";
import endPoint from "../../services/endPoint";
import rech from "../../assets/images/recherche.png";
import { Calendar } from "../../icons/Calendar";

export const Actualite = ({}) => {
    const { slugOne, slugTwo } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        if (slugTwo) {
            getDetail();
        } else {
            get();
        }
    }, [slugOne,slugTwo]);

    const get = () => {
        request
            .get(endPoint.categories + "/" + slugOne)
            .then((res) => {
                console.log(res.data);
                setData(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getDetail = () => {
        request
            .get(endPoint.categories + "/" + slugTwo)
            .then((res) => {
                console.log(res.data);
                setData(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const detail = (e,slug) => {
        e.preventDefault()
        navigate(slug)
    }



    return (
        <>
            {!slugTwo && (
                <>
                <h1 className="text-primary">{data.titre}</h1>
                    <div className="my-4">
                        <div
                            dangerouslySetInnerHTML={{ __html: data.contenu }}
                        />
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {data.toutes_sous_categories?.map((data, idx) => {
                            return (
                                <div className="col " onClick={e => detail(e, data.slug)}>
                                    <div className="position-relative">
                                        <img
                                            width={"100%"}
                                            src={URL + data.image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="py-3">
                                        <span className="d-block fw-bold mb-3">
                                            {data.titre}
                                        </span>
                                        {/**
                                 * <span className="d-block text-muted mb-3">
                                    De la dizaine de centres de recherche sur
                                    les STIES sur le continent, aucune ne se
                                    trouve en Afrique francophone.
                                </span>
                                 */}
                                        <span className="d-block text-muted mb-3">
                                            <Calendar />{" "}
                                            {new Date(
                                                data.created_at
                                            ).toLocaleDateString() +
                                                " à " +
                                                new Date(
                                                    data.created_at
                                                ).toLocaleTimeString()}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {
                        /**<div className="d-flex justify-content-center mt-4">
                        <div className="btn border">Voir tous les projets</div>
                    </div> */
                    }
                </>
            )}
            {slugTwo && (
                <>
                    <div className="position-relative">
                        <img width={"100%"} src={URL + data.image} alt="" />
                        <div>
                            <span className="d-block text-muted mb-3">
                                <Calendar />{" publier le "}
                                {new Date(
                                    data.created_at
                                ).toLocaleDateString() +
                                    " à " +
                                    new Date(
                                        data.created_at
                                    ).toLocaleTimeString()}
                            </span>
                        </div>
                    </div>
                    <h1 className="text-primary">{data.titre}</h1>
                    <div className="my-4">
                        <div
                            dangerouslySetInnerHTML={{ __html: data.contenu }}
                        />
                    </div>
                </>
            )}
        </>
    );
};
