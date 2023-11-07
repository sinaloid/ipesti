import { bottom } from "@popperjs/core";
import rect from "../assets/images/rect.png";

export const ActuCard = () => {
    return (
        <>
            <div className="card">
                <div className="position-relative">
                    <img width={"100%"} src={rect} alt="" />
                    <div
                        className="position-absolute w-100 text-center"
                        style={{ bottom: "0", left: "0" }}
                    >
                        <div className="d-inline-block mx-auto bg-white py-3 px-4">
                            <span className="fs-40 fw-bold text-primary">20</span> <br />
                            <span className="text-uppercase">sept. 2023</span>
                        </div>
                    </div>
                </div>
                <div className="text-center px-5 py-3">
                    <span className="text-muted d-inline-block mb-2">
                        Université thomas sankara
                    </span>{" "}
                    <br />
                    <div className="text-start fw-bold">
                        Festival de l’Histoire des Science et des Techniques
                        Burkina Faso 2023
                    </div>
                </div>
            </div>
        </>
    );
};
