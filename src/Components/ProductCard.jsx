import React from 'react'
import '../Styles/ProductCard.scss'

const ProductCard = ({ product, addToCart, productCount }) => {
    return (
        <div className='productCard__wrapper'>
            <img className='productCard__wrapper__img' src={product.image} alt='' />
            <h4>{product.name}</h4>
            {product.ship ? <p className='productCard__wrapper__ship'>Ücretsiz Teslimat</p> : <p className='productCard__wrapper__ship'></p>}
            <div className='productCard__wrapper__price'>
                <p>{product.price} TL</p>
            </div>
            {!productCount ?
                (
                    <button
                        className='productCard__wrapper__button' onClick={() => addToCart(product.id, product.price, 1)}>
                        Sepete Ekle
                    </button>

                ) : (
                    <div className='productCard__btn__wrapper'>
                        <button onClick={() => addToCart(product.id, product.price, -1)}><i className="fas fa-minus"></i></button>
                        <span>{productCount}</span>
                        <button onClick={() => addToCart(product.id, product.price, 1)}><i className="fas fa-plus"></i></button>
                    </div>
                )}
        </div>
    )
}

export default ProductCard
