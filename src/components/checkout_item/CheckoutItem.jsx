
const CheckoutItem = (product) => {

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={product.imageUrl} alt={`${product.name}`} />
            </div>
            <div className="item-details">
                <span className="name">{product.name}</span>
                <div className="quantity">
                    <button className="arrow"></button>
                    <span className="value"></span>
                    <button className="arrow"></button>
                </div>
                <span className="price"></span>
                <button className="remove-button"></button>
            </div>
        </div>
    )
}

export default CheckoutItem