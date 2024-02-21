import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";
import actuP from "../assets/images/actu.png";
import { Filtre } from "../icons/Filtre";
import { Calendar } from "../icons/Calendar";
import { MenuSection } from "../components/MenuSection";
import { useEffect, useState } from "react";
import { actualites } from "../utils/TabMenu";
import { useParams } from "react-router-dom";
import request from "../services/request";
import endPoint from "../services/endPoint";
import { Actualite } from "./actuEven/Actualite";
import { MenuSectionTwo } from "../components/MenuSectionTwo";

export const ActuEven = () => {
    const { slugOne, slugTwo } = useParams();
    const [data, setData] = useState({});
    const [detail, setDetail] = useState({});
    const [index, setIndex] = useState(0);

    const pages = {
        "actualites": <><Actualite /></>,
        "projets-de-recherche": <></>,
    };
    //partenaires-academiques-internationaux
    useEffect(() => {
        get();
    }, []);

    const get = () => {
        request
            .get(endPoint.categories + "/actualites-evenements")
            .then((res) => {
                console.log(res.data.data);
                setDetail(res.data.data);
                window.scrollTo(0, 0);

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
                        <h3 className="bg-gray-60 text-white text-center py-2">
                            actualités & événements
                        </h3>
                        <MenuSectionTwo
                            list={detail.toutes_sous_categories}
                            setData={setData}
                            link={"actualites-evenements"}
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
