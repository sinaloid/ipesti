import { useEffect } from "react";
import AppRoute from "./routes/AppRoute";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";

const App = () => {
    const location = useLocation();
    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    function handleClick() {
        // Track a custom event
        ReactGA.event({
            category: "Button Click",
            action: "Compteur de click",
            label: "Page d'accueil",
        });
        // Continue with your button's click handler
        setCount((count) => count + 1);
    }
    return (
        <>
            <AppRoute type={"app"} />
        </>
    );
};

export default App;
