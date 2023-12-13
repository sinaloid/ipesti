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

export const ActuEven = () => {
    const [data, setData] = useState({})
    const {slugOne} = useParams()
    const [label, setLabel] = useState()
    useEffect(() => {
        getLabel()
    },[slugOne])

    const getLabel = () => {
        actualites.map((data) => {
            if(data.slug === slugOne){
                setLabel(data.label)
            }
        })
    }
    return (
        <Page>
            <Container>
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <h3 className="bg-gray-60 text-white text-center py-2">
                            actualités & événements
                        </h3>
                        <MenuSection
                            list={actualites}
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
                        <h1 className="text-primary mb-4">{label}</h1>

                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {[...Array(6).keys()].map((data, idx) => {
                                return (
                                    <div className="col ">
                                        <div className="position-relative">
                                            <img
                                                width={"100%"}
                                                src={actuP}
                                                alt=""
                                            />
                                        </div>
                                        <div className="py-3">
                                            <span className="d-block fw-bold mb-3">
                                                Pourtant, comme le souligne
                                                l’Union Africaine les
                                                indicateurs de la science...
                                            </span>
                                            <span className="d-block text-muted mb-3">
                                                De la dizaine de centres de
                                                recherche sur les STIES sur le
                                                continent, aucune ne se trouve
                                                en Afrique francophone.
                                            </span>
                                            <span className="d-block text-muted mb-3">
                                                <Calendar /> 03/09/2023 à 16h30 minutes
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <div className="btn border">
                                Voir tous les projets
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Page>
    );
};
