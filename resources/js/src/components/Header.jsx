import { NavLink } from "react-router-dom";
import logo from "../assets/images/header.png";
import { FRIcon } from "../icons/FRIcon";
import { ModeIcon } from "../icons/ModeIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { UserIcon } from "../icons/UserIcon";
import { DropDown } from "./DropDown";
import { LinkSelectedIcon } from "../icons/LinkSelectedIcon";
import {
    actualites,
    expertise,
    formation,
    ipesti,
    publication,
    recherche,
} from "../utils/TabMenu";
import { useEffect } from "react";

export const Header = () => {
    const url = window.location.pathname;

    useEffect(() => {
        console.log(url);
        const content = url.includes("ipesti");
        console.log(content);
    }, []);

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
                    <div className="col-12 col-lg-auto ms-auto d-flex flex-wrap mb-3 mb-lg-0 pt-5">
                        <div className="dropdown text-center mx-3">
                            <button
                                className="btn h-44 border dropdown-toggle"
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
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Visiteur
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        étudiant
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
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

            <div 
            
            className={`row border-bottom  bg-black ${
                url.includes("fasolics") ? "border-color-green" : "border-color"
            }`}
            >
                <div className="col-12 col-md-10 mx-auto d-flex flex-wrap">
                    <nav
                        className="navbar navbar-dark navbar-expand-md navbar-expand-xxl1 w-100 m-0 p-0"
                        aria-label="Seventh navbar example"
                    >
                        <div className="container-fluid px-0">
                            <button
                                className="navbar-toggler custom-toggler ms-auto my-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarsExampleXxl"
                                aria-controls="navbarsExampleXxl"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div
                                className="collapse navbar-collapse"
                                id="navbarsExampleXxl"
                            >
                                <ul className="navbar-nav me-auto py-2">
                                    <li className="nav-item">
                                        <NavLink
                                            to="/"
                                            className={`nav-link text-uppercase text-white px-2 active ${
                                                url === "/" && "text-primary"
                                            }`}
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
                                        <div className="dropdown position-relative">
                                            <NavLink
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                className={`dropdown-toggle nav-link text-uppercase text-white px-2 active ${
                                                    url.includes("ipesti") &&
                                                    "text-primary"
                                                }`}
                                            >
                                                <span>L’IPESTI</span>

                                                <span className="d-flex arrow-up w-100 px-2">
                                                    <span className="selected mx-auto">
                                                        <LinkSelectedIcon />
                                                    </span>
                                                </span>
                                            </NavLink>
                                            <DropDown
                                                menu={ipesti}
                                                link={"ipesti"}
                                            />
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <NavLink
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                className={`dropdown-toggle nav-link text-uppercase text-white px-2 active ${
                                                    url.includes("recherche") &&
                                                    "text-primary"
                                                }`}
                                            >
                                                La Recherche
                                                <span className="d-flex arrow-up w-100 px-2">
                                                    <span className="selected mx-auto">
                                                        <LinkSelectedIcon />
                                                    </span>
                                                </span>
                                            </NavLink>
                                            <DropDown
                                                menu={recherche}
                                                link="recherche"
                                            />
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <NavLink
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                className={`dropdown-toggle nav-link text-uppercase text-white px-2 active ${
                                                    url.includes("formation") &&
                                                    "text-primary"
                                                }`}
                                            >
                                                Formations
                                                <span className="d-flex arrow-up w-100 px-2">
                                                    <span className="selected mx-auto">
                                                        <LinkSelectedIcon />
                                                    </span>
                                                </span>
                                            </NavLink>
                                            <DropDown
                                                menu={formation}
                                                link="formation"
                                            />
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <NavLink
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                className={`dropdown-toggle nav-link text-uppercase text-white px-2 active ${
                                                    url.includes(
                                                        "publication"
                                                    ) && "text-primary"
                                                }`}
                                            >
                                                Publications
                                                <span className="d-flex arrow-up w-100 px-2">
                                                    <span className="selected mx-auto">
                                                        <LinkSelectedIcon />
                                                    </span>
                                                </span>
                                            </NavLink>
                                            <DropDown
                                                menu={publication}
                                                link="publication"
                                            />
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <NavLink
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                className={`dropdown-toggle nav-link text-uppercase text-white px-2 active ${
                                                    url.includes("expertise") &&
                                                    "text-primary"
                                                }`}
                                            >
                                                Expertise conseil
                                                <span className="d-flex arrow-up w-100 px-2">
                                                    <span className="selected mx-auto">
                                                        <LinkSelectedIcon />
                                                    </span>
                                                </span>
                                            </NavLink>
                                            <DropDown
                                                menu={expertise}
                                                link="expertise"
                                            />
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <NavLink
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                className={`dropdown-toggle nav-link text-uppercase text-white px-2 active ${
                                                    url.includes(
                                                        "actualites-evenements"
                                                    ) && "text-primary"
                                                }`}
                                            >
                                                Actualités & Evénements
                                                <span className="d-flex arrow-up w-100 px-2">
                                                    <span className="selected mx-auto">
                                                        <LinkSelectedIcon />
                                                    </span>
                                                </span>
                                            </NavLink>
                                            <DropDown
                                                menu={actualites}
                                                link="actualites-evenements"
                                            />
                                        </div>
                                    </li>
                                </ul>
                                <ul
                                    className={`nav py-2 ${
                                        url.includes("fasolics") && "bg-green no-hover"
                                    }`}
                                >
                                    <li className="nav-item ">
                                        <NavLink
                                            to={"/fasolics"}
                                            className="nav-link text-uppercase text-white px-2"
                                        >
                                            fasolics
                                        </NavLink>
                                    </li>
                                </ul>
                                <ul className="nav py-2">
                                    <li className="nav-item">
                                        <NavLink
                                            to="/login"
                                            className="nav-link text-uppercase text-white px-2 active"
                                        >
                                            connexion
                                            <span className="d-flex arrow-up w-100 px-2">
                                                <span className="selected mx-auto">
                                                    <LinkSelectedIcon />
                                                </span>
                                            </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
