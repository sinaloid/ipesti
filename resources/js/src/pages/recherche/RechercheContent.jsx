import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request, { URL } from "../../services/request";
import endPoint from "../../services/endPoint";
import rech from "../../assets/images/recherche.png";

export const RechercheContent = ({}) => {
    const { slugOne } = useParams();
    const [data, setData] = useState({});
    const [seletedData, setSelectedData] = useState({});
    const [sectionDetail, setSectionDetail] = useState("");

    useEffect(() => {
        get();
    }, [slugOne]);

    const get = () => {
        request
            .get(endPoint.categories + "/" + slugOne)
            .then((res) => {
                //console.log(res.data)
                setData(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <h1 className="text-primary">{data.titre}</h1>
            <div className="my-4">
                <div dangerouslySetInnerHTML={{ __html: data.contenu }} />
            </div>
            {seletedData.titre === undefined ? (
                <>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {data.toutes_sous_categories?.map((data, idx) => {
                            return (
                                <div
                                    className="col "
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedData(data);
                                    }}
                                >
                                    <div className="position-relative">
                                        <img
                                            width={"100%"}
                                            src={URL + data.image}
                                            alt=""
                                        />
                                        <div
                                            className="position-absolute text-white text-center px-2"
                                            style={{
                                                bottom: "12px",
                                                left: "0",
                                            }}
                                        >
                                            <span className="fw-bold text-primary bg-white cursor px-1">
                                                {data.titre}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <div className="btn border">Voir tous les projets</div>
                    </div>
                </>
            ) : (
                <>
                    <div className="row">
                        <div className="col-12">
                            <h6 className="text-primary fs-20">
                                {seletedData.titre}
                            </h6>
                            <div>
                                <span className="fw-bold">
                                    Institution de rattachement :
                                </span>
                            </div>
                            <div className="d-flex flex-wrap border-top mt-4">
                                {[
                                    "Laboratoires associés",
                                    "Descriptif du programme",
                                    "Axes de recherche",
                                    "Projets",
                                    "Equipe scientifique",
                                ].map((data, idx) => {
                                    if (idx === 0 && sectionDetail === "") {
                                        setSectionDetail(data);
                                    }
                                    return (
                                        <div
                                            className={`me-1 mt-3 cursor p-2 ${
                                                sectionDetail === data &&
                                                "bg-primary text-white fw-bold"
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                //setViewContent(!viewContent);
                                                setSectionDetail(data);
                                                console.log(data);
                                            }}
                                        >
                                            {data}
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="py-2">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: sectionDetail?.contenu,
                                    }}
                                />
                            </p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
