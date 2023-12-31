import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "../../services/request";
import endPoint from "../../services/endPoint";

export const OneContent = ({}) => {
    const {slugOne} = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        get()
    },[slugOne])

    const get = () => {

        request.get(endPoint.categories+"/"+slugOne).then((res) => {
            //console.log(res.data)
            setData(res.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className="col-12 col-md-8">
            <h1 className="text-primary mb-4">{data.titre} </h1>

            <div dangerouslySetInnerHTML={{__html: data.contenu}} />
        </div>
    );
};
