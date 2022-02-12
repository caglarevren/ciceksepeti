import React from 'react'
import ProductCard from './ProductCard'

function ProductList({productList, addToCart, cart}) {
    return (
        <div className='productCard' style={{ justifyContent: productList.length < 5 ? 'flex-start' : '', gap: productList.length < 5 ? '30px' : ''}}>
            {productList.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} productCount={cart.filter(c => c.productId === product.id)[0]?.count } />
            ))}
        </div>
    )
}

export default ProductList