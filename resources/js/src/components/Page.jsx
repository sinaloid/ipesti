import { Footer } from "./Footer";
import { Header } from "./Header";

export const Page = ({ children }) => {
    return (
        <>
            <Header />
            <div className="row">
                <div className="col-12 col-md-10 mx-auto">{children}</div>
            </div>
            <Footer />
        </>
    );
};
