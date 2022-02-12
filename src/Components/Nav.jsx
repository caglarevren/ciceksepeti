import React from 'react'
import '../Styles/Nav.scss'
import logo from '../Assets/logo.svg'

const Nav = ({ cartProductCount, totalCartPrice, searchProduct }) => {
    const remainingPrice = 500 - totalCartPrice;
    const progressRatio = 100 - ((remainingPrice / 500) * 100).toFixed(0);
    return (
        <nav className='nav container'>
            <div className='nav__logo__search'>
                <img src={logo} alt="logo" />
                <div className='nav__input__wrapper'>
                    <i className='fas fa-search' />
                    <input onChange={(e) => searchProduct(e.target.value)} type='text' placeholder='Ürün Ara' />
                    <button className='nav__input__wrapper__btn'>Ara</button>
                </div>
            </div>
            <div className='nav__cart__icon'>
                <i
                    className='fa fa-shopping-cart mr-1'
                    aria-hidden='true'
                />
                <span className='nav__cart__icon--text'>Sepetim</span>
                <div className='nav__cart__icon__item__count'>
                    {cartProductCount}
                </div>
                {cartProductCount > 0 &&
                    <div className="nav__progress">
                        <span className='nav__progress__tooltip'></span>
                        <div>
                            {remainingPrice >= 0 ? `${remainingPrice.toFixed(2)} TL ürün daha ekleyin kargo bedava` : 'Kargonuz Bedava'}
                        </div>
                        <div className="nav__progress__bar__wrapper">
                            <div className="nav__progress__bar__wrapper--progress" style={{ width: `${progressRatio > 100 ? 100 : progressRatio}%` }}></div>
                        </div>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Nav
