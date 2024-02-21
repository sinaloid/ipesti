import { useEffect, useState } from "react";
import img from "../assets/images/equipe.jpg";
import { Container } from "./Container";
import { URL } from "../services/request";
import { useNavigate } from "react-router-dom";
export const Banier = ({datas = {}}) => {
    const  [seletedData, setSelectedData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        if(datas?.toutes_sous_categories){
            setSelectedData(datas?.toutes_sous_categories[0])
        }
    },[datas])

    const detail = (e,slug) => {
        e.preventDefault()
        navigate("/actualites-evenements/actualites"+"/"+slug)
    }
    return (
        <Container>
            <div className="row my-5 border-bottom ">
                <div className="col-3 pe-0">
                    <div className="bg-gray-60 text-white h-100 border-end border-color">
                        <div className="border-bottom text-center fw-bold text-uppercase py-2">
                            Accueil
                        </div>
                        {datas?.toutes_sous_categories?.map((data, idx) => {
                           
                            return (
                                <div className=" border-bottom py-4 cursor" onClick={e => detail(e,data.slug)}>
                                    <p className="px-2 py-0 m-0">
                                        {data.titre}
                                    </p>
                                </div>
                            );
                        })}
                        {datas?.toutes_sous_categories?.map((data, idx) => {
                           
                           return (
                               <div className=" border-bottom py-4 cursor" onClick={e => detail(e,data.slug)}>
                                   <p className="px-2 py-0 m-0">
                                       {data.titre}
                                   </p>
                               </div>
                           );
                       })}
                       {datas?.toutes_sous_categories?.map((data, idx) => {
                           
                           return (
                               <div className=" border-bottom py-4 cursor" onClick={e => detail(e,data.slug)}>
                                   <p className="px-2 py-0 m-0">
                                       {data.titre}
                                   </p>
                               </div>
                           );
                       })}
                       {datas?.toutes_sous_categories?.map((data, idx) => {
                           
                           return (
                               <div className=" border-bottom py-4 cursor" onClick={e => detail(e,data.slug)}>
                                   <p className="px-2 py-0 m-0">
                                       {data.titre}
                                   </p>
                               </div>
                           );
                       })}

                        <div className="h-100 text-center py-3 pt-lg-4 mt-1">
                            <span className="sm-circle bg-white mx-1"></span>
                            <span className="sm-circle bg-white mx-1"></span>
                            <span className="sm-circle bg-white mx-1"></span>
                            <span className="sm-circle bg-white mx-1"></span>
                        </div>
                    </div>
                </div>
                <div className="col-9 ps-0">
                    <div
                        className="position-relative bg-banier w-100 h-100"
                        style={{ backgroundImage: `url(${URL+seletedData?.image})` }}
                    >
                        <span
                            className="bg-primary position-absolute text-white p-2 text-uppercase fw-bold"
                            style={{ right: "3%", top: "3%" }}
                        >
                            Actu
                        </span>
                        <p
                            className="position-absolute text-"
                            style={{ left: "20%", bottom: "3%" }}
                        >
                            {seletedData?.titre}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};
