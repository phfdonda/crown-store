import { Link, Outlet } from "react-router-dom"
import { signOutUser } from '../../utils/firebase/firebase'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from "../../components/cart-icon/CartIcon"
import CartDropdown from "../../components/cart-dropdown/CartDropdown"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"


import './Navigation.scss'

function Navigation() {
    const { currentUser } = useContext(UserContext)

    return (
        <>
            <nav className="navigation">
                <Link to="/" className="logo_container"><CrwnLogo /></Link>
                <ul className="nav_links_container">
                    <li className="nav_link">
                        <Link to="/shop" >Shop</Link>
                    </li>
                    {
                        currentUser ? (
                            <li className="nav-link">
                                <button type="button" onClick={signOutUser}>Sign Out</button>
                            </li>
                        ) : (
                            <li className="nav_link">
                                <Link to="/auth" >Sign In</Link>
                            </li>
                        )
                    }

                    <li><CartIcon /></li>
                </ul>
                <CartDropdown />
            </nav>
            <Outlet />
        </>
    )
}
export default Navigation