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
import request from "../services/request";
import endPoint from "../services/endPoint";
import { OneContent } from "./ipesti/OneContent";
import { MultiContent } from "./ipesti/MultiContent";
import { EquipeContent } from "./ipesti/EquipeContent";

export const Ipesti = () => {
    const { slugOne, slugTwo } = useParams();
    const [data, setData] = useState({});
    const [detail,setDetail] = useState({})
    const [index, setIndex] = useState(0)

    const pages = {
        presentation: <OneContent/>,
        "vision-missions": <OneContent/>,
        "objectifs": <OneContent/>,
        "structure-gouvernance": <MultiContent data={data} slug={"structure-gouvernance"} />,
        "partenaires-de-recherche": <MultiContent data={data} slug={"partenaires-de-recherche"} />,
        opportunites: <MultiContent data={data} slug={"opportunites"} />,
        "prix-distinctions": <OneContent/>,
        equipe: <EquipeContent data={data} slug={"equipe"} />,
        "point-focal-gdn": <MultiContent data={data} slug={"structure-gouvernance"} />,
        "reseau-stid": <MultiContent data={data} slug={"structure-gouvernance"} />,
    };
//partenaires-academiques-internationaux
    useEffect(() => {
        get()
    },[])

    const get = () => {
        request
            .get(endPoint.categories+"/ipesti")
            .then((res) => {
                console.log(res.data.data);
                setDetail(res.data.data)
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
                            L'IPESTI
                        </h3>
                        <MenuSection
                            list={detail.toutes_sous_categories}
                            setData={setData}
                            link={"ipesti"}
                        />
                    </div>
                    {pages[slugOne]}
                </div>
            </Container>
        </Page>
    );
};
