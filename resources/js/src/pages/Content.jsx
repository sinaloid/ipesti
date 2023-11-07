import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { FlecheIcon } from "../icons/FlecheIcon";

export const Content = () => {
    return (
        <Page>
            <Container>
            <div className="row my-5">
                <div className="col-12 col-md-4">
                    <h3 className="bg-gray-60 text-white text-center py-2">
                        actualités & événements
                    </h3>
                    <div className="bg-gray-e9 p-4">
                        <div className="d-inline-block text-primary bg-gray-25 mb-4">
                            <FlecheIcon /> Actualités
                        </div>
                        <br />
                        <div className="d-inline-block">
                            <FlecheIcon /> Actualités
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <h1 className="text-primary">Section Title</h1>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptas ab earum, eius beatae corrupti, aliquam veniam
                    nemo, labore quaerat expedita illum? Quas nemo consequuntur
                    in excepturi natus? Nemo, totam animi.
                </div>
            </div>
            </Container>
        </Page>
    );
};
