import { NavLink } from "react-router-dom";
import logo from "../assets/images/header.png";
import { FRIcon } from "../icons/FRIcon";
import { ModeIcon } from "../icons/ModeIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { UserIcon } from "../icons/UserIcon";
import { DropDown } from "./DropDown";
import { LinkSelectedIcon } from "../icons/LinkSelectedIcon";

export const Header = () => {
    const ipesti = [
        "Histoire",
        "Vision & Missions",
        "Structure & Gouvernance",
        "équipes",
        "Partenaires de recherche",
        "Opportunités",
        "Prix & distinctions",
    ];

    const rech = [
        "Programmes de recherche",
        "Projets de recherche",
        "Séminaires de recherche",
        "Tous les séminaires de l’IPESTI",
    ];

    const form = [
        "Formation courte durée",
        "Formation longue durée",
        "PhD Academy",
        "Etudier à IPESTI",
    ];

    const pub = [
        "Thèses",
        "Rapports annuels",
        "Articles",
        "Livres",
        "Rapport de projets",
        "Plans stratégiques",
        "Newsletters",
    ];

    const actu = ["Actualités", "événements"];
    return (
        <>
            <header className="row py-3 border-bottom px-0">
                <div className="col-12 col-md-10 mx-auto d-flex flex-wrap justify-content-center">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-uppercase text-white text-decoration-none"
                    >
                        <img height={"80px"} src={logo} alt="logo ipesti" />
                    </a>
                    <div className="col-12 col-lg-auto d-flex mb-3 mb-lg-0 pt-5">
                        <div class="dropdown text-center mx-3">
                            <button
                                class="btn h-44 border dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <span
                                    className="me-2"
                                    style={{ marginTop: "-20px" }}
                                >
                                    <UserIcon />
                                </span>
                                <span className="pt-2">Je suis</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Visiteur
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        étudiant
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        Autre
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="input-group mx-3 input-width-165">
                            <input
                                type="text"
                                className="form-control border-end-0"
                                placeholder="Rechercher..."
                            />
                            <span
                                className="input-group-text bg-white border-start-0 h-44"
                                id="basic-addon2"
                            >
                                <SearchIcon />
                            </span>
                        </div>
                        <div className="mx-3 d-inline-block d-flex align-items-center">
                            <div className="fw-bold">
                                <span className="fs-20">A+/</span>
                                <span className="fs-14">A-</span>
                            </div>
                            <span className="ms-3 me-5">
                                <ModeIcon />
                            </span>
                            <div className="">
                                <span className="ms-3 me-1">
                                    <FRIcon />
                                </span>
                                <div className="btn-group">
                                    <button
                                        className="btn btn-primary1 dropdown-toggle border-0 px-0 pxx-2"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="true"
                                        aria-expanded="false"
                                    >
                                        <span className="d-inline-block px-1">
                                            FR
                                        </span>
                                    </button>
                                    {/**
                                                 * <ul className="dropdown-menu">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        FR 
                                                    </a>
                                                </li>
                                            </ul>
                                                 */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="row border-bottom border-color bg-black">
                <div className="col-12 col-md-10 mx-auto d-flex flex-wrap">
                    <ul className="nav me-auto py-2">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-link text-uppercase text-white px-2 active"
                            >
                                accueil
                                <span className="d-flex arrow-up w-100 px-2">
                                    <span className="selected mx-auto">
                                        <LinkSelectedIcon />
                                    </span>
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <div class="dropdown position-relative">
                                <NavLink
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle text-uppercase text-white px-2"
                                >
                                    <span>L’IPESTI</span>

                                    <span className="d-flex arrow-up w-100 px-2">
                                        <span className="selected mx-auto">
                                            <LinkSelectedIcon />
                                        </span>
                                    </span>
                                </NavLink>
                                <DropDown menu={ipesti} />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div class="dropdown">
                                <NavLink
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle text-uppercase text-white px-2"
                                >
                                    La Recherche
                                    <span className="d-flex arrow-up w-100 px-2">
                                        <span className="selected mx-auto">
                                            <LinkSelectedIcon />
                                        </span>
                                    </span>
                                </NavLink>
                                <DropDown menu={rech} />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div class="dropdown">
                                <NavLink
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle text-uppercase text-white px-2"
                                >
                                    Formations
                                    <span className="d-flex arrow-up w-100 px-2">
                                        <span className="selected mx-auto">
                                            <LinkSelectedIcon />
                                        </span>
                                    </span>
                                </NavLink>
                                <DropDown menu={form} />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div class="dropdown">
                                <NavLink
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle text-uppercase text-white px-2"
                                >
                                    Publications
                                    <span className="d-flex arrow-up w-100 px-2">
                                        <span className="selected mx-auto">
                                            <LinkSelectedIcon />
                                        </span>
                                    </span>
                                </NavLink>
                                <DropDown menu={pub} />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div class="dropdown">
                                <NavLink
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle text-uppercase text-white px-2"
                                >
                                    Actualités & Evénements
                                    <span className="d-flex arrow-up w-100 px-2">
                                        <span className="selected mx-auto">
                                            <LinkSelectedIcon />
                                        </span>
                                    </span>
                                </NavLink>
                                <DropDown menu={actu} />
                            </div>
                        </li>
                    </ul>
                    <ul className="nav bg-primary py-2">
                        <li className="nav-item ">
                            <NavLink
                                href="#"
                                className="nav-link text-uppercase text-white px-2"
                            >
                                fasolics
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
