import { DeleteCard } from "../icons/DeleteCard";
import { LogoIcon } from "../icons/LogoIcon";
import { Container } from "./Container";

export const ArticleList = ({ children }) => {
    return (
        <>
            <Container>
                <div className="row my-5 border-top pt-4">
                    <h2 className="text-center mb-4">{children}</h2>
                    <div className="d-flex justify-content-center mb-4">
                        <LogoIcon />
                    </div>
                    <div className="col-12">
                        <div className="row row-cols-3">
                            {[...Array(3).keys()].map((data) => {
                                return <DeleteCard />;
                            })}
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn border">
                                Tous les événements
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
