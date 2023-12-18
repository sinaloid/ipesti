import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";
import book from "../assets/images/book.png";
import { Filtre } from "../icons/Filtre";
import { FlecheLongIcon } from "../icons/FlecheLong";
import { EditIcon } from "../icons/EditIcon";
import { expertise, publication } from "../utils/TabMenu";
import { useEffect, useState } from "react";
import { MenuSection } from "../components/MenuSection";
import { useParams } from "react-router-dom";
import request from "../services/request";
import endPoint from "../services/endPoint";

export const Expertise = () => {
    const { slugOne, slugTwo } = useParams();
    const [data, setData] = useState({});
    const [detail, setDetail] = useState({});
    const [index, setIndex] = useState(0);

    const pages = {
        "programmes-de-recherche": <></>,
        "projets-de-recherche": <></>,
        
    };
    //partenaires-academiques-internationaux
    useEffect(() => {
        get();
    }, []);

    const get = () => {
        request
            .get(endPoint.categories + "/expertise-conseil")
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
                        <h3 className="bg-gray-60 text-white text-center1 ps-4 py-2">
                            Expertise Conseil
                        </h3>
                        <MenuSection
                            list={detail.toutes_sous_categories}
                            setData={setData}
                            link={"expertise"}
                        />
                    </div>
                    <div className="col-12 col-md-8">
                        <h1 className="text-primary">{detail.titre}</h1>
                        <div className="my-4">
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem
                            ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum
                        </div>
                        
                    </div>
                </div>
            </Container>
        </Page>
    );
};
