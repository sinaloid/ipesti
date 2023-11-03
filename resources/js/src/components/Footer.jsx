import { Link } from "react-router-dom";
import { FlecheIcon } from "../icons/FlecheIcon";
import { Logo } from "../icons/Logo";
import ReseauxSociauxIcon from "../icons/ReseauxSociauxIcon";
import { SuivFlecheIcon } from "../icons/SuivFlecheIcon";

export const Footer = () => {
    return (
        <div className="row bg-black">
            <div className="col-12 col-md-10 border-bottom mx-auto">
                <div className="my-3">
                    <Logo />
                </div>
                <div className="row pb-3 footer">
                    <div className="col pe-lg-5">
                        <p className="text-justify1 text-white">
                            Restez informés de l'actualité de l’IPESTI en vous
                            inscrivant à notre newsletter trimestrielle :
                        </p>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Tél. : +226 70 00 00 00
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Email : contact@ipesti.com
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Email : contact@ipesti.com
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col text-white">
                        <h5 className="text-uppercase text-18 fw-bold">
                            Nos liens utiles
                        </h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    CNRST
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Thomas SANKARA
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Joseph KI-ZERBO
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Nazi BONI
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Norbert ZONGO
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    École Nationale Supérieur
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col text-white">
                        <h5 className="text-uppercase text-18 fw-bold">
                            SUIVEZ-NOUS
                        </h5>
                        <p>
                            Restez informés de l'actualité de l’IPESTI en vous
                            inscrivant à notre newsletter trimestrielle :
                        </p>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                class="form-control border-end-0 rounded-end-0"
                                placeholder="Votre adresse mail ici"
                            />
                            <span className="input-group-text bg-primary px-4" id="basic-addon2">
                                <SuivFlecheIcon />
                            </span>
                        </div>
                        <div>
                            <ReseauxSociauxIcon />
                        </div>
                    </div>
                    <div className="col text-white">
                        <h5 className="text-uppercase text-18 fw-bold">
                            Nos partenaires
                        </h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    CNRST
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Thomas SANKARA
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Joseph KI-ZERBO
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Nazi BONI
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Norbert ZONGO
                                </Link>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link
                                    to="#"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    École Nationale Supérieur
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center text-white py-4">
                Droits d'auteur © 2023. IPESTI. Tous les droits sont réservés.
            </div>
        </div>
    );
};
