import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import request from "../../services/request";
import endPoint from "../../services/endPoint";

export const MultiContent = ({ data, slug }) => {
    const { slugOne, slugTwo } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState({});
    const [index, setIndex] = useState(0);

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
    }, [data,slugOne]);

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
    return (
        <div className="col-12 col-md-8">
            <h1 className="text-primary mb-4">
                Structure et gouvernance de l’IPESTI
            </h1>
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
                                setIndex(idx)
                                changerView(slug + "/" + item.slug);
                            }}
                        >
                            {item.titre}
                        </div>
                    );
                })}
            </div>

            {(content.toutes_sous_categories && content.toutes_sous_categories?.length !== 0) && (
                <>
                <span className="text-primary fs-18 fw-bold mb-4 d-inline-block">
                        {content.toutes_sous_categories[index].titre}
                    </span>
                <div
                    dangerouslySetInnerHTML={{
                        __html: content.toutes_sous_categories[index].contenu,
                    }}
                />
                </>
            )}
        </div>
    );
};
