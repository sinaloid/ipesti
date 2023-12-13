import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";
import book from "../assets/images/book.png";
import { Filtre } from "../icons/Filtre";
import { FlecheLongIcon } from "../icons/FlecheLong";
import { EditIcon } from "../icons/EditIcon";
import { expertise, publication } from "../utils/TabMenu";
import { useEffect, useState } from "react";
import { MenuSection } from "../components/MenuSection";
import { useParams } from "react-router-dom";

export const Expertise = () => {
    const [data, setData] = useState({});
    const {slugOne} = useParams()
    const [label, setLabel] = useState()
    useEffect(() => {
        getLabel()
    },[slugOne])

    const getLabel = () => {
        expertise.map((data) => {
            if(data.slug === slugOne){
                setLabel(data.label)
            }
        })
    }
    return (
        <Page>
            <Container>
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <h3 className="bg-gray-60 text-white text-center1 ps-4 py-2">
                            Expertise Conseil
                        </h3>
                        <MenuSection
                            list={expertise}
                            setData={setData}
                            link={"expertise"}
                        />
                    </div>
                    <div className="col-12 col-md-8">
                        <h1 className="text-primary">{label}</h1>
                        <div className="my-4">
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem
                            ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum
                        </div>
                        
                    </div>
                </div>
            </Container>
        </Page>
    );
};
