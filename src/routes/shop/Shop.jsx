import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'
import ProductCard from '../../components/product_card/ProductCard'
import './Shop.scss'


function Shop() {

    const { products } = useContext(ProductsContext)
    return (
        <>
            <ul className='products-container'>
                {products.map(({ id, ...product }) =>
                    <ProductCard key={id} id={id} {...product} />
                )}
            </ul>
        </>
    )
}

export default Shop