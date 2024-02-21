import { useEffect, useState } from "react";
import { ArticleList } from "../components/ArticleList";
import { Banier } from "../components/Banier";
import { Page } from "../components/Page";
import { Partenaire } from "../components/Partenaire";
import endPoint from "../services/endPoint";
import request from "../services/request";

const Home = () => {
    const [actualites, setActualites] = useState([])
    useEffect(() => {
        getActualites();
    }, []);

    const getActualites = () => {
        request
            .get(endPoint.categories + "/actualites")
            .then((res) => {
                console.log(res.data.data);
                setActualites(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const evenements = () => {
        request
            .get(endPoint.categories + "/actualites")
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
            <Banier datas={actualites} />
            <ArticleList datas={actualites} type={"actualites" /*"evenements"*/}>
                Les <span className="fw-bold">évènements</span> à venir
            </ArticleList>
            <Partenaire>
                Nos <span className="fw-bold">faits</span> et{" "}
                <span className="fw-bold">chiffres</span> clés
            </Partenaire>
            <ArticleList datas={actualites} type="actualites">
                Dernières <span className="fw-bold">Publications</span>
            </ArticleList>
        </Page>
    );
};

export default Home;
