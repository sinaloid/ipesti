import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const StructureGouvernance = ({ data }) => {
    const { slugTwo } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(data);
        if (
            slugTwo === undefined &&
            data.children !== undefined &&
            data.children?.length !== 0
        ) {
            changerView(data.slug + "/" + data?.children[0]?.slug);
        }
    }, [data]);

    const changerView = (slug) => {
        navigate("/ipesti/" + slug);
    };
    return (
        <div className="col-12 col-md-8">
            <h1 className="text-primary mb-4">
                Structure et gouvernance de l’IPESTI
            </h1>
            <div className="d-flex mb-4 border-bottom">
                {data.children?.map((item, idx) => {
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
                                changerView(data.slug + "/" + item.slug);
                            }}
                        >
                            {item.label}
                        </div>
                    );
                })}
            </div>

            {slugTwo === "detail" && (
                <div className="mb-4">
                    <div className="mb-4">
                        Le projet IPESTI est un consortium d’enseignants
                        chercheurs et de chercheurs provenant de six (6)
                        universités et centres de recherche publics. Ces
                        universités et centres de recherche partenaires sont les
                        suivants :
                    </div>
                    <ul className="text-primary mb-4">
                        <li className="text-decoration-underline">
                            Centre National de la Recherche Scientifique et
                            Technologique
                        </li>
                        <li className="text-decoration-underline">
                            Université Thomas SANKARA
                        </li>
                        <li className="text-decoration-underline">
                            Université Joseph KI-ZERBO
                        </li>
                        <li className="text-decoration-underline">
                            Université Nazi BONI
                        </li>
                        <li className="text-decoration-underline">
                            Université Norbert ZONGO
                        </li>
                        <li className="text-decoration-underline">
                            Ecole Nationale Supérieur
                        </li>
                    </ul>
                    <span className="text-primary fs-18 fw-bold mb-4 d-inline-block">
                        Conseil de Groupement
                    </span>
                    <p>
                        L’IPESTI sera gouverné par un Conseil de Groupement où
                        siègent les représentants des institutions membres du
                        projet. La présidence du conseil de groupement est
                        tournante. Le mandat est d’un an non renouvelable.
                    </p>
                    Au plan opérationnel, l’IPESTI s’appuiera sur trois
                    structures complémentaires 
                    <p>
                        <ul>
                            <li>
                                <span className="d-inline-block fw-bold mb-3">
                                    Directeur
                                </span>
                            </li>
                            <li>
                                <span className="d-inline-block fw-bold mb-3">
                                    Le Comité deDirection (CODIR)
                                </span>
                                <br />
                                <span className="d-inline-block mb-3">
                                    Composé de six (6) membres, le CODIR se
                                    réunit tous les mois et assure le pilotage
                                    scientifique. Les membres sont désignés
                                    parmi les enseignants chercheurs et
                                    chercheurs membres du Consortium.
                                </span>
                            </li>
                            <li>
                                <span className="d-inline-block fw-bold mb-3">
                                    Le Comité des Laboratoires membres (CdL)
                                </span>{" "}
                                <br />
                                <span className="d-inline-block mb-3">
                                    Le CdL se réunira au moins une fois par an
                                    et assure le lien avec les unités de
                                    recherche de l’IPESSTI. Il est composé des
                                    représentants des unités  de recherche.
                                </span>
                            </li>
                        </ul>
                    </p>
                </div>
            )}
            {slugTwo === "laboratiores-associes" && (
                <div className="mb-4">
                    <span className="text-primary fs-18 fw-bold mb-4 d-inline-block">
                        LABORATOIRES ASSOCIÉS
                    </span>
                    <div className="mb-4">
                        Le projet IPESTI est un consortium d’enseignants
                        chercheurs et de chercheurs provenant de six (6)
                        universités et centres de recherche publics. Ces
                        universités et centres de recherche partenaires sont les
                        suivants:
                    </div>
                    <ul className="text-primary mb-4">
                        <li className="text-decoration-underline">
                            Cellule Macro-Economie et Economie des Filières/GRN,
                        </li>
                        <li>Département mécanisation</li>
                        <li>Laboratoire de recherche en droit privé</li>
                        <li>
                            Centre de Documentation et de Recherches Economiques
                            et Sociales (CEDRES)
                        </li>
                        <li>
                            Laboratoire Langues, Discours et Pratiques
                            artistiques (LADIPA)
                        </li>
                        <li>Laboratoire de Physiologie Animale</li>
                        <li>
                            Labo SYPERC: SYstème Politique, Economie, Religion
                            et Culture
                        </li>
                        <li>
                            Laboratoire d'études rurales sur l'environnement et
                            le développement économique et social (LERE/DES).
                        </li>
                        <li>
                            Laboratoire d' Algèbre, de Mathématiques Discrètes
                            et d’Informatique (LAMDI)
                        </li>
                        <li>
                            Laboratoire de Recherches en Sciences humaines
                            (LABOSH)
                        </li>
                        <li>
                            Centre Interdisciplinaire de Recherche et de
                            Formation en Communication et Didactique
                            Interculturelle (CIRFCDI)
                        </li>
                    </ul>
                </div>
            )}
            {slugTwo === "conseil-scientifique" && (
                <div className="mb-4">
                    <span className="text-primary fs-18 fw-bold mb-4 d-inline-block">
                        Conseil Scientifique
                    </span>
                    <div className="mb-4">
                        Un Conseil Scientifique international composé d’experts
                        internationaux dans les champs de recherche de l’IPESTI,
                        validera ses choix scientifiques et stratégiques.
                    </div>
                </div>
            )}
        </div>
    );
};
