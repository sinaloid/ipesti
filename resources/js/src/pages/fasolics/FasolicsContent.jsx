import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import request from "../../services/request";
import endPoint from "../../services/endPoint";
import rech from "../../assets/images/recherche.png";
import { RightIcon } from "../../icons/RightIcon";
import { DownIcon } from "../../icons/DownIcon";

export const FasolicsContent = ({}) => {
    const { slugOne, slugTwo } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        get();
    }, [slugOne]);

    const get = () => {
        request
            .get(endPoint.categories + "/" + slugOne)
            .then((res) => {
                //console.log(res.data)
                setData(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const changerView = (e, slug) => {
        e.preventDefault();
        if(slugTwo === slug){
            navigate("/fasolics/"+slugOne);
        }else{
            navigate("/fasolics/"+slugOne+"/" + slug);
        }
        
    };
    


    return (
        <>
            <h1 className="text-success">{data.titre}</h1>
            <div className="my-4">
                Le sigle FasoLics signifie en anglais, Burkina Faso Network for
                the Study of Learning, Innovation & Competence Building Systems.
                En français, il signifie le Réseau burkinabè pour la recherche
                sur les Systèmes  de développement de l’apprentissage,
                l’innovation et des Compétences. Créé en 2019 sous l’initiative
                du Professeur Natéwindé Sawadogo, le réseau regroupe des
                enseignants chercheurs et des chercheurs de diverses disciplines
                des sciences humaines et sociales s’intéressant à la
                problématique de l’innovation en lien avec les politiques
                publiques au Burkina Faso. En 2023, le Réseau a acquis le status
                de Chapitre du Réseau Africain pour la recherche sur les
                systèmes de développement de l’apprentissage, de l’innovation et
                des compétences en abrégé Africalics. Il est reconnu par
                l’Université Thomas SANKARA comme une plateforme de formation,
                de recherche et de dialogue politique sur les politiques
                publiques.
            </div>
            
            {data.toutes_sous_categories?.map((data, idx) => {
                return (
                    <div className="mt-4" key={idx} onClick={e => changerView(e,data.slug)}>
                        <div className="d-flex bg-green p-2">
                            <span className="text-white fw-bold">
                                {data.titre}
                            </span>

                            {slugTwo !== data.slug ? (
                                <>
                                    <span className="text-white ms-auto">
                                        <RightIcon />
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="text-white ms-auto">
                                        <DownIcon />
                                    </span>
                                </>
                            )}
                        </div>
                        {slugTwo === data.slug && (
                            <div className="bg-green-light p-2">
                                <div dangerouslySetInnerHTML={{__html: data.contenu}} />
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
};
