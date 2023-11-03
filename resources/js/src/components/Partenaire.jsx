import { DeleteCard } from "../icons/DeleteCard";
import { LogoIcon } from "../icons/LogoIcon";

export const Partenaire = ({ children }) => {
    return (
        <>
            <div className="row my-5 border-top pt-5 bg-gray-f6">
                <h2 className="text-center mb-4">{children}</h2>
                <div className="d-flex justify-content-center mb-4">
                    <LogoIcon />
                </div>
                <div className="col-12 col-md-8 col-lg-7 mx-auto mb-5">
                    <div className="row row-cols-4">
                        {[...Array(4).keys()].map((data) => {
                            return (
                                <div className="col px-3">
                                    <div className="card p-3 pb-2 text-center">
                                        <span className="text-primary fw-bold fs-36">300</span>
                                        <p className="p-0 pt-2 m-0">partenaires à travers le monde...</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
