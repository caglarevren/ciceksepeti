import React from 'react'
import '../Styles/Breadcrumb.scss'

const Breadcrumb = () => {
    return (
        <>
            <div className='header__container'>
                <div className='container'>
                    <h1 className='header__text'>ÇiçekSepeti H1</h1>
                </div>
            </div>
            <div className='breadcrumb__text container'>
                <p>Ciceksepeti Market &#62; İstanbul &#62;<span> CiceksepetiBreadCrumb</span></p>
            </div>
        </>

    )
}

export default Breadcrumb