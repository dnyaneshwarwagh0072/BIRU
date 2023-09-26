import { NavLink } from "react-router-dom";

const Menu = () => {

    return (
        <>
            <div className="menu_style">
                <NavLink to="/" className="hey">HOME</NavLink>
                <NavLink to="/contact" className="hey"> CONTACT</NavLink>
                <NavLink to="/about" className="hey"> ABOUT</NavLink>
                <NavLink to="/service" className="hey"> SERVICE</NavLink>
            </div>
        </>
    )
}
export default Menu;