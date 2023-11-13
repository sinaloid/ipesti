import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import { AppLink } from "./AppLink";
import { Content } from "../pages/Content";
import { Ipesti } from "../pages/Ipesti";
import { Formation } from "../pages/Formation";
import { Publication } from "../pages/Publication";
import { ActuEven } from "../pages/ActuEven";
import { Fasolics } from "../pages/Fasolics";


const AppRoute = ({type}) => {

    if(type === "app"){

        return <Routes>
            <Route path={AppLink.home} element={<Home />} />
            <Route path={AppLink.ipesti} element={<Ipesti />} />
            <Route path={AppLink.content} element={<Content />} />
            <Route path={AppLink.formation} element={<Formation />} />
            <Route path={AppLink.publication} element={<Publication />} />
            <Route path={AppLink.actuEven} element={<ActuEven />} />
            <Route path={AppLink.fasolics} element={<Fasolics />} />
        </Routes>
    }
}

export default AppRoute;