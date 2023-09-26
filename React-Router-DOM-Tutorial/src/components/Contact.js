import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    function goToHome() {
        navigate("/");
    }
    function goToAbout() {
        navigate("/about");
    }

    return (
        <>
            <h1>This is Contact page</h1>
            <h1 id="navCss" onClick={goToHome}>HOME</h1>
            <h1 id="navCss" onClick={goToAbout}>ABOUT</h1>
        </>
    )
}
export default Contact;