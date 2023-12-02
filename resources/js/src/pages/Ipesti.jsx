import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";
import recherche from "../assets/images/recherche.png";
import { Filtre } from "../icons/Filtre";
import { StructureGouvernance } from "./ipesti/StructureGouvernance";
import { useState } from "react";
import { Equipe } from "./ipesti/Equipe";

export const Ipesti = () => {
    const ipesti = [
        "Histoire",
        "Vision & Missions",
        "Structure & Gouvernance",
        "équipes",
        "Partenaires de recherche",
        "Opportunités",
        "Prix & distinctions",
    ];
    const [equipe, setEquipe] = useState(false)
    return (
        <Page>
            <Container>
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <h3 className="bg-gray-60 text-white text-center py-2">
                            L'IPESTI
                        </h3>
                        <div className="bg-gray-e9 p-4">
                            {ipesti.map((data, idx) => {
                                return (
                                    <>
                                        <div
                                            className="d-inline-block mb-3 fw-bold"
                                            key={idx}
                                            onClick={e => {
                                                e.preventDefault()
                                                if(data === "équipes"){
                                                    setEquipe(true)
                                                }else{
                                                    setEquipe(false)
                                                }
                                            }}
                                        >
                                            <FlecheIcon /> {data}
                                        </div>
                                        <br />
                                    </>
                                );
                            })}
                        </div>

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
                    {
                        equipe ? <Equipe /> : <StructureGouvernance /> 
                    }
                </div>
            </Container>
        </Page>
    );
};
