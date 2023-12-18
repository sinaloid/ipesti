import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";
import recherche from "../assets/images/recherche.png";
import { Filtre } from "../icons/Filtre";
import { DownIcon } from "../icons/DownIcon";
import { RightIcon } from "../icons/RightIcon";
import { MenuSection } from "../components/MenuSection";
import { useEffect, useState } from "react";
import { fasolics } from "../utils/TabMenu";
import request from "../services/request";
import endPoint from "../services/endPoint";
import { useParams } from "react-router-dom";
import { FasolicsContent } from "./fasolics/FasolicsContent";

export const Fasolics = () => {
    const { slugOne, slugTwo } = useParams();
    const [data, setData] = useState({});
    const [detail, setDetail] = useState({});
    const [index, setIndex] = useState(0);
    const tab = [
        "Thématiques",
        "Gouvernance",
        "Impacts",
        "Projet RCR",
        "Organisations partenaires",
    ];
    const pages = {
        "a-propos": <FasolicsContent />,
        "nos-activites": <FasolicsContent />,
    };
    //partenaires-academiques-internationaux
    useEffect(() => {
        get();
    }, []);

    const get = () => {
        request
            .get(endPoint.categories + "/fasolics")
            .then((res) => {
                console.log(res.data.data);
                setDetail(res.data.data);
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
                        <h3 className="bg-gray-60 text-white text-center py-2 text-uppercase">
                            FasoLics
                        </h3>
                        <MenuSection
                            list={detail.toutes_sous_categories}
                            setData={setData}
                            link={"fasolics"}
                        />
                    </div>
                    <div className="col-12 col-md-8">
                        {pages[slugOne]}
                    </div>
                </div>
            </Container>
        </Page>
    );
};
