import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "../../services/request";
import endPoint from "../../services/endPoint";
import rech from "../../assets/images/recherche.png";

export const PublicationContent = ({}) => {
    const { slugOne } = useParams();
    const [data, setData] = useState({});
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
            <div className="row row-cols-1 g-4">
                {data.toutes_sous_categories?.map((data, idx) => {
                    return (
                        <div className="col-12 ">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: data?.contenu,
                                }}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div className="btn border">Voir tous</div>
            </div>
        </>
    );
};
