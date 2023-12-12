import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";
import recherche from "../assets/images/recherche.png";
import { Filtre } from "../icons/Filtre";
import { DownIcon } from "../icons/DownIcon";
import { RightIcon } from "../icons/RightIcon";

export const Fasolics = () => {
    const tab = ["Thématiques", "Gouvernance", "Impacts", "Projet RCR", "Organisations partenaires"];

    return (
        <Page>
            <Container>
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <h3 className="bg-gray-60 text-white text-center py-2 text-uppercase">
                            FasoLics
                        </h3>
                        <div className="bg-gray-e9 p-4">
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
                        <h1 className="text-success">à propos</h1>
                        <div className="my-4">
                            Le sigle FasoLics signifie en anglais, Burkina Faso
                            Network for the Study of Learning, Innovation &
                            Competence Building Systems. En français, il
                            signifie le Réseau burkinabè pour la recherche sur
                            les Systèmes  de développement de l’apprentissage,
                            l’innovation et des Compétences. Créé en 2019 sous
                            l’initiative du Professeur Natéwindé Sawadogo, le
                            réseau regroupe des enseignants chercheurs et des
                            chercheurs de diverses disciplines des sciences
                            humaines et sociales s’intéressant à la
                            problématique de l’innovation en lien avec les
                            politiques publiques au Burkina Faso. En 2023, le
                            Réseau a acquis le status de Chapitre du Réseau
                            Africain pour la recherche sur les systèmes de
                            développement de l’apprentissage, de l’innovation et
                            des compétences en abrégé Africalics. Il est reconnu
                            par l’Université Thomas SANKARA comme une plateforme
                            de formation, de recherche et de dialogue politique
                            sur les politiques publiques.
                        </div>
                        <div>
                            <div className="d-flex bg-green p-2">
                                <span className="text-white fw-bold">
                                    Objectifs
                                </span>
                                <span className="text-white ms-auto">
                                    <DownIcon />
                                </span>
                            </div>
                            <div className="bg-green-light p-2">
                                <div>
                                    <span className="fw-bold text-success d-inline-block my-3">
                                        Vision
                                    </span>{" "}
                                    <br />
                                    Faciliter la production et l'utilisation de
                                    recherches de haute qualité dans le domaine
                                    de l'innovation et du développement en vue
                                    de promouvoir un développement inclusif et
                                    durable au Burkina Faso.
                                </div>
                                <div>
                                    <span className="fw-bold text-success d-inline-block my-3">
                                        Objectifs
                                    </span>{" "}
                                    <br />
                                    <ul>
                                        <li className="mb-2">
                                            Comprendre l'innovation et
                                            l'apprentissage dans le contexte du
                                            Burkina Faso à la fois d'un point de
                                            vue théorique et pratique.
                                        </li>
                                        <li className="mb-2">
                                            Renforcer les capacités dans le
                                            domaine de l’innovation et de
                                            l’apprentissage.
                                        </li>
                                        <li className="mb-2">
                                            Développer une plateforme de
                                            promotion de la recherche
                                            pluridisciplinaire et
                                            interdisciplinaire sur l'innovation
                                            et les systèmes de recherche et
                                            d’enseignement supérieur
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {
                            tab.map((data, idx) => {

                                return <div className="mb-2" key={idx}>
                                <div className="d-flex bg-green p-2">
                                    <span className="text-white fw-bold">
                                        {data}
                                    </span>
                                    <span className="text-white ms-auto">
                                        <RightIcon />
                                    </span>
                                </div>
                            </div>
                            })
                        }
                        
                    </div>
                </div>
            </Container>
        </Page>
    );
};
