import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";
import recherche from "../assets/images/recherche.png";

export const Content = () => {
    const tab = [

        "Projets de recherche",
        "Séminaires de recherches",
        "Tous les séminaires de l’IPESTI",
    ];
    return (
        <Page>
            <Container>
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <h3 className="bg-gray-60 text-white text-center py-2">
                            actualités & événements
                        </h3>
                        <div className="bg-gray-e9 p-4">
                            <div className="d-inline-block bg-gray-25 mb-3">
                                <div className="fw-bold text-primary mb-3"><FlecheIcon /> Programmes / axes de recherches</div>
                                <div className="px-3">
                                    {[...Array(4).keys()].map((data, idx) => {
                                        return (
                                            <>
                                                <div
                                                    className="d-inline-block mb-3"
                                                    key={idx}
                                                >
                                                    <FlecheIcon /> {"Programme de recherche " + (idx +1)}
                                                </div>
                                                <br />
                                            </>
                                        );
                                    })}
                                </div>
                            </div>

                            {tab.map((data, idx) => {
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
                    </div>
                    <div className="col-12 col-md-8">
                        <h1 className="text-primary">Projets de recherches</h1>
                        <div className="my-4">
                            De la dizaine de centres de recherche sur les STIES
                            sur le continent, aucune ne se trouve en Afrique
                            francophone. Pourtant, comme le souligne l’Union
                            Africaine, «Les indicateurs de la science, de la
                            technologie et de l'innovation sont essentiels pour
                            suivre le développement scientifique et
                            technologique de l'Afrique. Ils sont utiles pour
                            formuler, ajuster et mettre en œuvre les politiques
                            de STI. De la dizaine de centres de recherche sur
                            les STIES sur le continent, aucune ne se trouve en
                            Afrique francophone. Pourtant, comme le souligne
                            l’Union Africaine, «Les indicateurs de la science,
                            de la technologie et de l'innovation sont essentiels
                            pour suivre le développement scientifique et
                            technologique de l'Afrique. Ils sont utiles pour
                            formuler, ajuster et mettre en œuvre les politiques
                            de STI.
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {[...Array(6).keys()].map((data, idx) => {
                                return (
                                    <div className="col ">
                                        <div className="position-relative">
                                            <img
                                                width={"100%"}
                                                src={recherche}
                                                alt=""
                                            />
                                            <div
                                                className="position-absolute text-white text-center px-2"
                                                style={{
                                                    bottom: "12px",
                                                    left: "0",
                                                }}
                                            >
                                                <span>
                                                    Innovation et énergie
                                                    renouvelable au Burkina Faso
                                                </span>
                                            </div>
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
