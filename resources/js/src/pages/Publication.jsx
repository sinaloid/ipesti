import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";
import book from "../assets/images/book.png";
import { Filtre } from "../icons/Filtre";
import { FlecheLongIcon } from "../icons/FlecheLong";
import { EditIcon } from "../icons/EditIcon";

export const Publication = () => {
    const pub = [
        "Thèses",
        "Rapports annuels",
        "Articles",
        "Livres",
        "Rapport de projets",
        "Plans stratégiques",
        "Newsletters",
    ];
    return (
        <Page>
            <Container>
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <h3 className="bg-primary text-white text-center1 ps-4 py-2">
                            <EditIcon /> publications
                        </h3>
                        <div className="bg-gray-e9 p-4">
                            {pub.map((data, idx) => {
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
                        <h1 className="text-primary">Livres</h1>
                        <div className="my-4">
                            De la dizaine de centres de recherche sur les STIES
                            sur le continent, aucune ne se trouve en Afrique
                            francophone. Pourtant, comme le souligne l’Union
                            Africaine. De la dizaine de centres de recherche sur
                            les STIES sur le continent, aucune ne se trouve en
                            Afrique francophone.
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {[...Array(6).keys()].map((data, idx) => {
                                return (
                                    <div className="col ">
                                        <div className="position-relative">
                                            <img
                                                width={"100%"}
                                                src={book}
                                                alt=""
                                            />
                                            <div
                                                className="position-absolute text-white text-center px-2 d-none"
                                                style={{
                                                    bottom: "12px",
                                                    left: "0",
                                                }}
                                            >
                                                <span>
                                                    Projet {idx + 1}{" "}
                                                    <FlecheLongIcon />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <div className="btn border">Voir tous les livres</div>
                        </div>
                    </div>
                </div>
            </Container>
        </Page>
    );
};
