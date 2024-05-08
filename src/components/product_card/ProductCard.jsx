import Button from "../button/Button"
import "./ProductCard.scss"

const ProductCard = ({ name, price, imageUrl }) => {
    return (
        <li className="product-card-container" >
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

            <Button buttonType="inverted">Add to cart</Button>
        </li>
    )
}

export default ProductCard