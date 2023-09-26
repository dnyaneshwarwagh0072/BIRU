import { useLocation, useParams } from "react-router-dom";

const Service = () => {

    const { fname, lname } = useParams();
    const location = useLocation();
    console.log(location);

    return (
        <>
            <h1>this is Service for {fname} {lname}</h1>
        </>
    )
}
export default Service;