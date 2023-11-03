import img from "../assets/images/img.png";
import { Container } from "./Container";
export const Banier = () => {
    return (
        <Container>
            <div className="row my-5 border-bottom ">
                <div className="col-3 pe-0">
                    <div className="bg-gray-60 text-white h-100 border-end border-color">
                        <div className="border-bottom text-center fw-bold text-uppercase py-2">
                            Accueil
                        </div>
                        {[...Array(4).keys()].map((data, idx) => {
                            return (
                                <div className=" border-bottom py-4">
                                    <p className="px-2 py-0 m-0">
                                        Festival de l’Histoire des Science et
                                        des Techniques Burkina Faso 2023
                                    </p>
                                </div>
                            );
                        })}

                        <div className="h-100 text-center pt-4 mt-1">
                            <span className="sm-circle bg-white mx-1"></span>
                            <span className="sm-circle bg-white mx-1"></span>
                            <span className="sm-circle bg-white mx-1"></span>
                            <span className="sm-circle bg-white mx-1"></span>
                        </div>
                    </div>
                </div>
                <div className="col-9 ps-0 position-relative">
                    <img width={"100%"} src={img} alt="" />
                    <span
                        className="bg-primary position-absolute text-white p-2 text-uppercase fw-bold"
                        style={{ right: "3%", top: "3%" }}
                    >
                        Actu
                    </span>
                    <p
                        className="position-absolute text-white"
                        style={{ left: "20%", bottom: "3%" }}
                    >
                        Festival de l’Histoire des Science et des Techniques
                        Burkina Faso 2023...
                    </p>
                </div>
            </div>
        </Container>
    );
};
