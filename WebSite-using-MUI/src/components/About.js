import { NavLink } from "react-router-dom"

function About() {
    return (
        <div>
            <NavLink exact activeClassName="active_class" to='/'>Home</NavLink>
            <NavLink exact activeClassName="active_class" to='/contact'> Contact</NavLink>
            <NavLink exact activeClassName="active_class" to='/about'> ABOUT</NavLink>
            <h1>This is About Page</h1>
        </div>
    )
}

export default About
