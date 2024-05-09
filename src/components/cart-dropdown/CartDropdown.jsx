import { useContext } from "react"
import Button from '../button/Button'
import { CartContext } from '../../contexts/CartContext'
import { ProductsContext } from "../../contexts/ProductsContext"

import './CartDropdown.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const { products } = useContext(ProductsContext)
    const cartItemsIDs = Object.keys(cartItems)


    return (
        < div className={"cart-dropdown-container"} >
            {
                cartItemsIDs.length == 0 ?
                    <span>Your Shopping Cart <br />is empty</span>
                    :
                    <ul className="cart-items">
                        {cartItemsIDs.map((productID) => {
                            const filteredItem = products.filter(product => product.id == productID)
                            const item = filteredItem[0]
                            return (
                                <li key={item.id}>
                                    <img src={item.imageUrl} alt={`${item.name}`} />
                                    <div className="item-description">
                                        <p>
                                            {item.name}
                                        </p>
                                        <div>
                                            <span className="quantity">{`${cartItems[item.id]} X $${item.price}`}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
            }

            <Button>Go to Checkout</Button>
        </ div >)
}

export default CartDropdown