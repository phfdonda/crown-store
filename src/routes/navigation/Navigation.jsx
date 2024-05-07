import { Link, Outlet } from "react-router-dom"

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'

function Navigation() {
    return (
        <>
            <nav className="navigation">
                <Link to="/" className="logo_container"><CrwnLogo /></Link>
                <ul className="nav_links_container">
                    <li className="nav_link">
                        <Link to="/shop" >Shop</Link>
                    </li>
                    <li className="nav_link">
                        <Link to="/auth" >Sign In</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
export default Navigation