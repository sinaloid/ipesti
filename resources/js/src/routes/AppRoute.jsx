import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import { AppLink } from "./AppLink";
import { Content } from "../pages/Content";


const AppRoute = ({type}) => {

    if(type === "app"){

        return <Routes>
            <Route path={AppLink.home} element={<Home />} />
            <Route path={AppLink.content} element={<Content />} />
        </Routes>
    }
}

export default AppRoute;