import { Link } from "react-router-dom";
import { FlecheIcon } from "../icons/FlecheIcon";
import { Logo } from "../icons/Logo";
import ReseauxSociauxIcon from "../icons/ReseauxSociauxIcon";
import { SuivFlecheIcon } from "../icons/SuivFlecheIcon";
import ubobo from "../assets/logo/ubobo.png";
import unz from "../assets/logo/unz.png";
import cnrst from "../assets/logo/cnrst.png";
import ens from "../assets/logo/ens.png";
import ujkz from "../assets/logo/ujkz.png";
import uts from "../assets/logo/uts.png";

import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Footer = () => {
    const partenaires = [
        { lien: "https://www.cnrst.bf", image: cnrst },
        { lien: "https://www.uts.bf", image: uts },
        { lien: "https://www.ujkz.bf", image: ujkz },
        { lien: "https://www.univ-bobo.gov.bf", image: ubobo },
        { lien: "https://www.unz.bf", image: unz },
        { lien: "https://www.ens-burkina.bf", image: ens },
    ];
    return (
        <div className="row bg-black">
            <div className="col-12 col-md-10 border-bottom mx-auto">
                <div className="my-3">
                    <Logo />
                </div>
                <div className="row footer">
                    <div className="col-12 col-md mb-4 pe-lg-5">
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
                        </ul>
                    </div>

                    <div className="col-12 col-md mb-4 text-white">
                        <h5 className="text-uppercase text-18 fw-bold">
                            Nos liens utiles
                        </h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <FlecheIcon />
                                <a
                                    href="https://www.cnrst.bf"
                                    target="blank"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    CNRST
                                </a>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <a
                                    href="https://www.uts.bf"
                                    target="blank"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Thomas SANKARA
                                </a>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <a
                                    href="https://www.ujkz.bf"
                                    target="blank"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Joseph KI-ZERBO
                                </a>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <Link to="#" className=""></Link>
                                <a
                                    href="https://www.univ-bobo.gov.bf"
                                    target="blank"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Nazi BONI
                                </a>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <a
                                    href="https://www.unz.bf"
                                    target="blank"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    Université Norbert ZONGO
                                </a>
                            </li>
                            <li className="nav-item">
                                <FlecheIcon />
                                <a
                                    href="https://www.ens-burkina.bf"
                                    target="blank"
                                    className="nav-link p-0 text-white d-inline-block ms-1"
                                >
                                    École Nationale Supérieur
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md mb-4 text-white">
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
                            <span
                                className="input-group-text bg-primary px-4"
                                id="basic-addon2"
                            >
                                <SuivFlecheIcon />
                            </span>
                        </div>
                        <div>
                            <ReseauxSociauxIcon />
                        </div>
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col-8 col-md-8 mx-auto mb-4 text-white">
                        <h5 className="text-uppercase text-center text-18 fw-bold">
                            Nos partenaires
                        </h5>
                        <div className="d-flex flex-wrap pt-3">
                            <Swiper
                                // install Swiper modules
                                modules={[
                                    Navigation,
                                    Pagination,
                                    Scrollbar,
                                    A11y,
                                    Autoplay,
                                ]}
                                spaceBetween={1}
                                slidesPerView={6}
                                //centeredSlides={true}
                                //navigation
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                //pagination={{ clickable: true }}
                                //scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() =>
                                    console.log("slide change")
                                }
                            >
                                {[
                                    ...partenaires,
                                    ...partenaires,
                                    ...partenaires,
                                ].map((data, idx) => {
                                    return (
                                        <SwiperSlide key={idx}>
                                            <a
                                                href={data.lien}
                                                target="blank"
                                                className="me-2"
                                            >
                                                <img
                                                    width={"120px"}
                                                    src={data.image}
                                                    alt=""
                                                />
                                            </a>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-white py-4">
                Droits d'auteur © 2023. IPESTI. Tous les droits sont réservés.
            </div>
        </div>
    );
};
