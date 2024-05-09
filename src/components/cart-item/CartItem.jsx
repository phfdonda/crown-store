import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CartItem.scss'

const CartItem = (item) => {
    const { cartItems } = useContext(CartContext)

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
}

export default CartItem