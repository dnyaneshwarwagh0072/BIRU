import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <Link to='/'>HOME</Link>
            <Link to='/contact'> CONTACT</Link>
            <Link to='/about'> ABOUT</Link>
            <h1>this is contact page</h1>
        </>
    )
}
export default Contact;