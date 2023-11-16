import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { AppLink } from "./AppLink";
import { Content } from "../pages/Content";
import { Ipesti } from "../pages/Ipesti";
import { Formation } from "../pages/Formation";
import { Publication } from "../pages/Publication";
import { ActuEven } from "../pages/ActuEven";
import { Fasolics } from "../pages/Fasolics";
import Dashboard from "../pages/Dashboard";
import { Categorie } from "../pages/admin/Categorie";
import { Page } from "../pages/admin/Page";
import { MonCompte } from "../pages/admin/MonCompte";
import { Utilisateur } from "../pages/admin/Utilisateur";
import { Newsletter } from "../pages/admin/Newsletter";
import { Login } from "../pages/Login";
import { Infos } from "../pages/admin/Infos";

const AppRoute = ({ type }) => {
    if (type === "app") {
        return (
            <Routes>
                <Route path={AppLink.home} element={<Home />} />
                <Route path={AppLink.ipesti} element={<Ipesti />} />
                <Route path={AppLink.content} element={<Content />} />
                <Route path={AppLink.formation} element={<Formation />} />
                <Route path={AppLink.publication} element={<Publication />} />
                <Route path={AppLink.actuEven} element={<ActuEven />} />
                <Route path={AppLink.fasolics} element={<Fasolics />} />
                <Route path={AppLink.login} element={<Login />} />
                <Route path={AppLink.dashboard} element={<Dashboard />} />
            </Routes>
        );
    }

    if (type === "tdb") {
        return <Routes>
            <Route path={AppLink.categories} element={<Categorie />} />
            <Route path={AppLink.pages} element={<Page />} />
            <Route path={AppLink.utilisateurs} element={<Utilisateur />} />
            <Route path={AppLink.newsletters} element={<Newsletter />} />
            <Route path={AppLink.infos} element={<Infos />} />
            <Route path={AppLink.compte} element={<MonCompte />} />
        </Routes>;
    }
};

export default AppRoute;
