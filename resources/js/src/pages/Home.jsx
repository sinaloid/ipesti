import { ArticleList } from "../components/ArticleList";
import { Banier } from "../components/Banier";
import { Page } from "../components/Page";
import { Partenaire } from "../components/Partenaire";

const Home = () => {
    return (
        <Page>
            <Banier />
            <ArticleList>
                Les <span className="fw-bold">évènements</span> à venir
            </ArticleList>
            <Partenaire>
                Nos <span className="fw-bold">faits</span> et{" "}
                <span className="fw-bold">chiffres</span> clés
            </Partenaire>
            <ArticleList>
                Dernières <span className="fw-bold">Publications</span>
            </ArticleList>
        </Page>
    );
};

export default Home;
