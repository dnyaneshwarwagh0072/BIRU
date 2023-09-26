import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            <NavLink exact activeClassName="active_class" to='/'>HOME</NavLink>
            <NavLink exact activeClassName="active_class" to='/contact'> Contact</NavLink>
            <NavLink exact activeClassName="active_class" to='/about'> About</NavLink>
            <h1>This is Home Page</h1>
        </div>
    )
}

export default Home;