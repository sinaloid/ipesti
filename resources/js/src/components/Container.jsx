export const Container = ({children}) => {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-10 mx-auto">{children}</div>
            </div>
        </>
    );
};
