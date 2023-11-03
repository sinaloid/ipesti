import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import { AppLink } from "./AppLink";


const AppRoute = ({type}) => {

    if(type === "app"){

        return <Routes>
            <Route path={AppLink.home} element={<Home />} />
        </Routes>
    }
}

export default AppRoute;