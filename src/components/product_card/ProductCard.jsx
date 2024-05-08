import { useContext } from "react"
import Button from "../button/Button"
import { CartContext } from "../../contexts/CartContext"

import "./ProductCard.scss"

const ProductCard = ({ id, name, price, imageUrl }) => {
    const { cartItems, setCartItems } = useContext(CartContext)

    const addItem = () => {
        let quantity = 0
        if (cartItems[id]) quantity = cartItems[id]
        quantity += 1
        setCartItems({ ...cartItems, [id]: quantity })
    }

    return (
        <li className="product-card-container" >
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

            <Button type="button" onClick={addItem} buttonType="inverted">Add to cart</Button>
        </li>
    )
}

export default ProductCard