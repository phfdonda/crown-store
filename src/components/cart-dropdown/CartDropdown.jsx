import { useContext } from "react"
import Button from '../button/Button'
import { CartContext } from '../../contexts/CartContext'
import './CartDropdown.scss'

const CartDropdown = () => {
    const { cartItems, setCartItems } = useContext(CartContext)


    return (< div className="cart-dropdown-container" >
        <ul className="cart-items">
            {Object.keys(cartItems).map((product) => {
                return (<li>{product.name}</li>)
            })}
        </ul>
        <Button>Go to Checkout</Button>
    </ div >)
}

export default CartDropdown