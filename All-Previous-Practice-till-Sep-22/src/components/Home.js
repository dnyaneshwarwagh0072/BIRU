import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Link to='/'>HOME</Link>
            <Link to='/contact'> CONTACT</Link>
            <Link to='/about'> ABOUT</Link>
            <h1>this is Home page</h1>
        </>
    )
}
export default Home;