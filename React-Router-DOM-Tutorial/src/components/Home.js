import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    function goToContact() {
        navigate("/contact");
    }
    function goToAbout() {
        navigate("/about");
    }

    return (
        <>
            <h1>This is Home page</h1>
            <h1 id="navCss" onClick={goToContact}>CONTACT</h1>
            <h1 id="navCss" onClick={goToAbout}>ABOUT</h1>
        </>
    )
}
export default Home;