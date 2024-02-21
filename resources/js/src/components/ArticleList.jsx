import { DeleteCard } from "../icons/DeleteCard";
import { LogoIcon } from "../icons/LogoIcon";
import { ActuCard } from "./ActuCard";
import { Container } from "./Container";

export const ArticleList = ({ children, datas=[], type=""}) => {
    return (
        <>
            <Container>
                <div className="row my-5 border-top pt-4">
                    <h2 className="text-center mb-4">{children}</h2>
                    <div className="d-flex justify-content-center mb-4">
                        <LogoIcon />
                    </div>
                    <div className="col-12">
                        <div className="row row-cols-12 row-cols-md-3">
                            {datas?.toutes_sous_categories?.map((data) => {
                                return <div className="col">
                                    <ActuCard data={data} type={type}/>
                                </div>
                            })}
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <button className="btn border">
                                Voir tous
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
