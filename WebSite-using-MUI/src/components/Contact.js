import { NavLink } from "react-router-dom"

function Contact() {
    return (
        <div>
            <NavLink exact activeClassName="active_class" to='/'> Home</NavLink>
            <NavLink exact activeClassName="active_class" to='/contact'> CONTACT</NavLink>
            <NavLink exact activeClassName="active_class" to='/about'> About</NavLink>
            <h1>This is Contact Page</h1>
        </div>
    )
}

export default Contact
