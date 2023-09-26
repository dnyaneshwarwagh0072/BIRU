import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    function goToHome() {
        navigate("/");
    }
    function goToContact() {
        navigate("/contact");
    }

    return (
        <>
            <h1>This is About page</h1>
            <h1 id="navCss" onClick={goToHome}>HOME</h1>
            <h1 id="navCss" onClick={goToContact}>CONTACT</h1>
        </>
    )
}
export default About;