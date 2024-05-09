import { useContext } from "react"
import Button from "../button/Button"
import { CartContext } from "../../contexts/CartContext"

import "./ProductCard.scss"

const ProductCard = ({ id, name, price, imageUrl }) => {
    const { addItem } = useContext(CartContext)


    return (
        <li className="product-card-container" >
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

            <Button type="button" onClick={() => addItem(id)} buttonType="inverted">Add to cart</Button>
        </li>
    )
}

export default ProductCard