import { useContext } from "react"
import Button from "../button/Button"
import { CartContext } from "../../contexts/CartContext"
import { ProductsContext } from "../../contexts/ProductsContext"

import "./ProductCard.scss"

const ProductCard = ({ id, name, price, imageUrl }) => {
    const { cartItems, setCartItems } = useContext(CartContext)

    const addItem = (e) => {
        e.preventDefault()
        let quantity = 0
        if (cartItems[id]) quantity = cartItems[id]
        quantity += 1
        setCartItems({ ...cartItems, [id]: quantity })
        console.log(cartItems)
    }

    return (
        <li className="product-card-container" >
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

            <Button onClick={addItem} buttonType="inverted">Add to cart</Button>
        </li>
    )
}

export default ProductCard