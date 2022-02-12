import React from 'react'
import '../Styles/Campaign.scss'
// Campaign Images
import campaign1 from '../Assets/campaign1.png'
import campaign2 from '../Assets/campaign2.png'
import campaign3 from '../Assets/campaign3.png'

const Campaign = () => {
    const campaigns = [
        {
            image: campaign1,
            title: '75 TL Üzerine Teslimat Ücreti Bizden',
            buttonText: 'Detaylı Bilgi',
            backgroundColor: '#FFEAE8'
        },
        {
            image: campaign2,
            title: 'Hediye Kategorisi için Sepette %15 İndirim',
            buttonText: 'Hediye Ürünleri',
            backgroundColor: '#E8F1FF'
        },
        {
            image: campaign3,
            title: 'Kırtasiye Kategorisi için Sepette %15 İndirim',
            buttonText: 'Detaylı Bilgi',
            backgroundColor: '#E2F7E1'
        },
    ]

    return (
        <div className='campaign'>
            {campaigns.map((campaign) => (
                <div className='campaign__card' key={campaign.title} style={{backgroundColor: campaign.backgroundColor}}>
                    <div className='campaign__card__imagewrapper'>
                        <img src={campaign.image} alt="çiçeksepeti kampanya" />
                    </div>
                    <div className='campaign__right'>
                        <p>{campaign.title}</p>
                        <button>{campaign.buttonText}</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Campaign