import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";
import { Filtre } from "../icons/Filtre";
import { EditIcon } from "../icons/EditIcon";
import { publication } from "../utils/TabMenu";
import { useEffect, useState } from "react";
import { MenuSection } from "../components/MenuSection";
import { useParams } from "react-router-dom";
import { Livre } from "./publication/Livre";
import request from "../services/request";
import endPoint from "../services/endPoint";
import { PublicationContent } from "./publication/PublicationContent";

export const Publication = () => {
    const { slugOne, slugTwo } = useParams();
    const [data, setData] = useState({});
    const [detail, setDetail] = useState({});
    const [index, setIndex] = useState(0);

    const pages = {
        "programmes-de-recherche": <PublicationContent />,
        "projets-de-recherche": <PublicationContent />,
        
    };
    //partenaires-academiques-internationaux
    useEffect(() => {
        get();
    }, []);

    const get = () => {
        request
            .get(endPoint.categories + "/publications")
            .then((res) => {
                console.log(res.data.data);
                setDetail(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <Page>
            <Container>
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <h3 className="bg-primary text-white text-center1 ps-4 py-2">
                            <EditIcon /> publications
                        </h3>
                        <MenuSection
                            list={detail.toutes_sous_categories}
                            setData={setData}
                            link={"publication"}
                        />

                        <div className="bg-gray-e9  mt-4 p-4">
                            <div className="mb-3 fs-18 fw-bold">
                                {" "}
                                <Filtre /> Filtres
                            </div>
                            <select
                                class="form-select mb-3"
                                aria-label="Default select example"
                            >
                                <option selected>Année de publication</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select
                                class="form-select mb-3"
                                aria-label="Default select example"
                            >
                                <option selected>Auteur</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select
                                class="form-select mb-3"
                                aria-label="Default select example"
                            >
                                <option selected>
                                    Programmes de recherche
                                </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <select
                                class="form-select mb-3"
                                aria-label="Default select example"
                            >
                                <option selected>Statut</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        {pages[slugOne]}
                    </div>
                </div>
            </Container>
        </Page>
    );
};
