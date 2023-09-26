import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <Link to='/'>HOME</Link>
            <Link to='/contact'> CONTACT</Link>
            <Link to='/about'> ABOUT</Link>
            <h1>this is about page</h1>
        </>
    )
}
export default About;