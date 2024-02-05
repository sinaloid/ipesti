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
import { RechercheContent } from "./recherche/RechercheContent";
import { ProjetContent } from "./recherche/ProjetContent";
import { MenuSectionTwo } from "../components/MenuSectionTwo";


export const Recherche = () => {
    const { slugOne, slugTwo } = useParams();
    const [data, setData] = useState({});
    const [detail,setDetail] = useState({})
    const [index, setIndex] = useState(0)

    const pages = {
        "programmes-de-recherche": <RechercheContent/>,
        "projets-de-recherche": <ProjetContent/>,
        "seminaires-de-recherche": <ProjetContent/>,
        "tous-les-seminaires-de-lipesti": <ProjetContent/>,
        "structure-gouvernance": <MultiContent data={data} slug={"structure-gouvernance"} />,
        "partenaires-de-recherche": <MultiContent data={data} slug={"partenaires-de-recherche"} />,
        opportunites: <MultiContent data={data} slug={"opportunites"} />,
        "prix-et-distinctions": <></>,
        equipes: <Equipe data={data} />,
    };
//partenaires-academiques-internationaux 
    useEffect(() => {
        get()
    },[])

    const get = () => {
        request
            .get(endPoint.categories+"/la-recherche")
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
                        La recherche
                        </h3>
                        <MenuSectionTwo
                            list={detail.toutes_sous_categories}
                            setData={setData}
                            link={"la-recherche"}
                        />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="my-41">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: detail?.contenu,
                                }}
                            />
                        </div>
                        <div className="">{pages[slugOne]}</div>
                    </div>
                </div>
            </Container>
        </Page>
    );
};
