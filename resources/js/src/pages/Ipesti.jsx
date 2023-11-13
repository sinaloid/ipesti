import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";
import recherche from "../assets/images/recherche.png";
import { Filtre } from "../icons/Filtre";

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
                    <div className="col-12 col-md-8">
                        <h1 className="text-primary mb-4">
                        Structure et gouvernance de l’IPESTI
                        </h1>
                        <div className="d-flex mb-4 border-bottom">
                            <div className="border-bottom border-color fw-bold me-4">
                                Structure & gouvernance
                            </div>
                            <div className="border-bottom me-4 text-muted">
                                Centres de recherche partenaires
                            </div>
                            <div className="border-bottom me-4 text-muted">
                                Conseil scientifique
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="mb-4">
                            Le projet IPESTI est un consortium d’enseignants
                            chercheurs et de chercheurs provenant de six (6)
                            universités et centres de recherche publics. Ces
                            universités et centres de recherche partenaires sont
                            les suivants :
                            </div>
                            <ul className="text-primary mb-4">
                                <li className="text-decoration-underline">
                                    Centre National de la Recherche Scientifique
                                    et Technologique
                                </li>
                                <li className="text-decoration-underline">Université Thomas SANKARA</li>
                                <li className="text-decoration-underline">Université Joseph KI-ZERBO</li>
                                <li className="text-decoration-underline">Université Nazi BONI</li>
                                <li className="text-decoration-underline">Université Norbert ZONGO</li>
                                <li className="text-decoration-underline">Ecole Nationale Supérieur</li>
                            </ul>
                            <span className="text-primary fs-18 fw-bold mb-4 d-inline-block">
                                Conseil de Groupement
                            </span>
                            <p>
                                L’IPESTI sera gouverné par un Conseil de
                                Groupement où siègent les représentants des
                                institutions membres du projet. La présidence du
                                conseil de groupement est tournante. Le mandat
                                est d’un an non renouvelable.
                            </p>
                            Au plan opérationnel, l’IPESTI s’appuiera sur trois
                            structures complémentaires 
                            <p>
                                <ul>
                                    <li>
                                        <span className="d-inline-block fw-bold mb-3">Directeur</span>
                                    </li>
                                    <li>
                                        <span className="d-inline-block fw-bold mb-3">
                                            Le Comité deDirection (CODIR)
                                        </span>
                                        <br />
                                        <span className="d-inline-block mb-3">
                                        Composé de six (6) membres, le CODIR se
                                        réunit tous les mois et assure le
                                        pilotage scientifique. Les membres sont
                                        désignés parmi les enseignants
                                        chercheurs et chercheurs membres du
                                        Consortium.
                                        </span>
                                    </li>
                                    <li>
                                        <span className="d-inline-block fw-bold mb-3">
                                            Le Comité des Laboratoires membres
                                            (CdL)
                                        </span>{" "}
                                        <br />
                                        <span className="d-inline-block mb-3">
                                        Le CdL se réunira au moins une fois par
                                        an et assure le lien avec les unités de
                                        recherche de l’IPESSTI. Il est composé
                                        des représentants des unités  de
                                        recherche.
                                        </span>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Page>
    );
};
