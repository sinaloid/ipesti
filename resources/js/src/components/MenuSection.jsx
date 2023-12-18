import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FlecheIcon } from "../icons/FlecheIcon";

export const MenuSection = ({ list = [], setData, link="ipesti" }) => {
    const { slugOne, slugTwo } = useParams();
    //const [data, setData] = useState({});
    const [currentView, setCurrentView] = useState("");
    const [currentViewTwo, setCurrentViewTwo] = useState("");
    const navigate = useNavigate();
    const pages = {
        histoire: <></>,
    };

    useEffect(() => {
        setCurrentView(slugOne);
        setCurrentViewTwo(slugTwo);
        initdata();
        //console.log(slugTwo);
    }, [slugOne, slugTwo]);

    const changerView = (e, slug) => {
        e.preventDefault();
        navigate("/"+link+"/" + slug);
    };

    const initdata = () => {
        list.map((data) => {
            if (slugOne === data.slug) {
                setData(data);
            }
        });
    };

    return (
        <>
            <div className="bg-gray-e9 p-4">
                {list.map((dataOne, idx) => {
                    return (
                        <>
                            <div
                                className={`d-inline-block mb-3 cursor`}
                                key={idx}
                            >
                                <span
                                    className={`d-inline-block mb-1 fw-bold ${
                                        currentView === dataOne.slug &&
                                        "text-primary"
                                    }`}
                                    onClick={(e) => {
                                        let slug =
                                            dataOne.toutes_sous_categories.length !== 0
                                                ? dataOne.slug +
                                                  "/" +
                                                  dataOne.toutes_sous_categories[0].slug
                                                : dataOne.slug;

                                        changerView(e, slug);

                                        setData(dataOne);
                                    }}
                                >
                                    <FlecheIcon /> {dataOne.titre}
                                </span>
                                {dataOne.slug === slugOne && (
                                    <>
                                        {dataOne.toutes_sous_categories.map(
                                            (dateTwo, idx) => {
                                                return (
                                                    <div className="ms-3">
                                                        <div
                                                            className={`d-inline-block mb-3`}
                                                            key={idx}
                                                        >
                                                            <span
                                                                className={`d-inline-block mb-0 text-opacity-70 ${
                                                                    currentViewTwo ===
                                                                        dateTwo.slug &&
                                                                    "text-primary fw-bold text-decoration-underline"
                                                                }`}
                                                                onClick={(
                                                                    e
                                                                ) => {
                                                                    changerView(
                                                                        e,
                                                                        dataOne.slug +
                                                                            "/" +
                                                                            dateTwo.slug
                                                                    );
                                                                }}
                                                            >
                                                                <FlecheIcon />{" "}
                                                                {dateTwo.titre}
                                                            </span>
                                                        </div>{" "}
                                                        <br />
                                                    </div>
                                                );
                                            }
                                        )}
                                    </>
                                )}
                            </div>
                            <br />
                        </>
                    );
                })}
            </div>
        </>
    );
};
