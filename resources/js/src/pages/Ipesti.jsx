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
import { MenuSection } from "../components/MenuSection";

export const Ipesti = () => {
    const { slugOne, slugTwo } = useParams();
    const [data, setData] = useState({});
    
    const pages = {
        histoire: <Histoire />,
        "vision-missions": <VisionMission />,
        "structure-et-gouvernance": <StructureGouvernance data={data} />,
        opportunites: <></>,
        "prix-et-distinctions": <></>,
        equipes: <Equipe data={data} />,
    };

   

    

    return (
        <Page>
            <Container>
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <h3 className="bg-gray-60 text-white text-center py-2">
                            L'IPESTI
                        </h3>
                        <MenuSection list={ipesti} setData={setData} link={"ipesti"} />
                    </div>
                    {pages[slugOne]}
                </div>
            </Container>
        </Page>
    );
};
