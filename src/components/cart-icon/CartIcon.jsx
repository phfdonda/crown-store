
import { useContext } from 'react'
import { DropdownContext } from '../../contexts/DropdownContext'
import { CartContext } from '../../contexts/CartContext'
import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(DropdownContext)
    const { cartItems } = useContext(CartContext)
    const numberOfItems = Object.values(cartItems).reduce((sum, curr) => sum + curr)
    return (
        <button type="button" onClick={() => setIsCartOpen(!isCartOpen)} className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">{numberOfItems}</span>
        </button>
    )
}

export default CartIcon