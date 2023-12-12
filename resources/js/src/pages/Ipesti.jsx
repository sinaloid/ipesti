import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";
import recherche from "../assets/images/recherche.png";
import { Filtre } from "../icons/Filtre";
import { StructureGouvernance } from "./ipesti/StructureGouvernance";
import { useEffect, useState } from "react";
import { Equipe } from "./ipesti/Equipe";
import { ipesti } from "../utils/TabMenu";
import { useNavigate, useParams } from "react-router-dom";
import { Histoire } from "./ipesti/Histoire";
import { VisionMission } from "./ipesti/VisionMission";

export const Ipesti = () => {
    const { slugOne, slugTwo } = useParams();
    const [data, setData] = useState(false);
    const [currentView, setCurrentView] = useState("");
    const [currentViewTwo, setCurrentViewTwo] = useState("");
    const navigate = useNavigate();
    const pages = {
        histoire: <Histoire />,
        "vision-missions": <VisionMission  />,
        "structure-et-gouvernance": <StructureGouvernance data={data} />,
        opportunites: <></>,
        "prix-et-distinctions": <></>,
        equipes: <Equipe data={data}/>,
    };

    useEffect(() => {
        setCurrentView(slugOne);
        setCurrentViewTwo(slugTwo);
        console.log(slugTwo);
    }, [slugOne, slugTwo]);

    const changerView = (e, slug) => {
        e.preventDefault();
        navigate("/ipesti/" + slug);
    };

    return (
        <Page>
            <Container>
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <h3 className="bg-gray-60 text-white text-center py-2">
                            L'IPESTI
                        </h3>
                        <div className="bg-gray-e9 p-4">
                            {ipesti.map((dataOne, idx) => {
                                return (
                                    <>
                                        <div
                                            className={`d-inline-block mb-3 cursor`}
                                            key={idx}
                                        >
                                            <span
                                                className={`d-inline-block mb-1 fw-bold ${
                                                    currentView ===
                                                        dataOne.slug &&
                                                    "text-primary"
                                                }`}
                                                onClick={(e) => {
                                                    changerView(
                                                        e,
                                                        dataOne.slug
                                                    );
                                                }}
                                            >
                                                <FlecheIcon /> {dataOne.label}
                                            </span>
                                            {dataOne.slug === slugOne && (
                                                <>
                                                    {dataOne.children.map(
                                                        (dateTwo, idx) => {
                                                            return (
                                                                <div className="ms-3">
                                                                    <div
                                                                        className={`d-inline-block mb-3`}
                                                                        key={
                                                                            idx
                                                                        }
                                                                    >
                                                                        <span
                                                                            className={`d-inline-block mb-0 text-opacity-70 ${
                                                                                currentViewTwo ===
                                                                                    dateTwo.slug &&
                                                                                "text-primary fw-bold text-decoration-underline"
                                                                            }`}
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                changerView(
                                                                                    e,
                                                                                    dataOne.slug +
                                                                                        "/" +
                                                                                        dateTwo.slug
                                                                                );
                                                                            }}
                                                                        >
                                                                            <FlecheIcon />{" "}
                                                                            {
                                                                                dateTwo.label
                                                                            }
                                                                        </span>
                                                                    </div>{" "}
                                                                    <br />
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </>
                                            )}
                                        </div>
                                        <br />
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    {pages[slugOne]}
                </div>
            </Container>
        </Page>
    );
};
