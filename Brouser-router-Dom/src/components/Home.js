import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    function goToCurriculum() {
        navigate("/curriculum");
    }

    return (
        <>
            <h1>Home</h1>
            {/* <Link to="/about">About</Link><br /> */}
            {/* <Link to="/contact">Contact us</Link> */}
            <button onClick={goToCurriculum}>Curriculum</button>
        </>
    );
}
export default Home;