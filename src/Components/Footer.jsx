import React from 'react'
import '../Styles/Footer.scss'
import logo from '../Assets/logo.svg'
import footerPhone from '../Assets/footerPhone.png'
import footerQrCode from '../Assets/footerQrCode.png'
import footerAndroid from '../Assets/footerAndroid.svg'
import footerIOS from '../Assets/footerIOS.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className="footer__top">
          <div className="footer__top__left">
            <img src={footerPhone} alt="phone" />
          </div>
          <div className='footer__top__right'>
            <div className="footer__top__right__up">
              <img src={footerQrCode} alt="Qr Code" />
              <div className='footer__top__right__up__text'>
                <p>Çiçek Sepeti Mobil Uygulamayı İndirin</p>
                <p>Mobil Uygulamayı QR Kod ile İndirin.</p>
              </div>
            </div>
            <div className="footer__top__right__bottom">
              <img src={footerAndroid} alt="Android" className='footer__top__right__bottom--android' />
              <img src={footerIOS} alt="IOS" />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className='footer__bottom__left'>
            <img src={logo} alt="logo" />
            <div className='footer__bottom__left__logos'>
              <i className="fab fa-facebook fa-lg" style={{color: '#4172B8'}}></i>
              <i className="fab fa-twitter fa-lg" style={{color: '##1DA1F2'}}></i>
              <i className="fab fa-instagram fa-lg" style={{color: '#E4405F'}}></i>
              <i className="fab fa-youtube fa-lg" style={{color: '#FF0000'}}></i>
              <i className="fab fa-foursquare fa-lg" style={{color: '#25a0ca'}}></i>
            </div>
            <div className="footer__bottom__left__text">
              <p>CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine buradan ulaşabilirsiniz.</p>
            </div>
          </div>
          <div className='footer__bottom__right__container'>
            <ul className='footer__bottom__right__container__items'>
              <li>Faydalı Bilgiler</li>
              <li>Çiçek Bakımı</li>
              <li>Çiçek Eşliğinde Notlar</li>
              <li>Çiçek Anlamları</li>
              <li>Özel Günler</li>
              <li>Mevsimlere Göre Çiçekler</li>
              <li>BonnyFood Saklama Koşulları</li>
              <li>Site Haritası</li>
            </ul>
            <ul className='footer__bottom__right__container__items'>
              <li>Kurumsal</li>
              <li>Hakkımızda</li>
              <li>Kariyer</li>
              <li>ÇiçekSepeti’nde Satış Yap</li>
              <li>Kurumsal Müşterilerimiz</li>
              <li>Reklamlarımız</li>
              <li>Basında Biz</li>
              <li>Kampanyalar</li>
              <li>Vizyonumuz</li>
            </ul>
            <ul className='footer__bottom__right__container__items'>
              <li>İletişim</li>
              <li>Bize Ulaşın</li>
              <li>Sıkça Sorulan Sorular</li>
            </ul>
            <ul className='footer__bottom__right__container__items'>
              <li>Gizlilik Sözleşmesi</li>
              <li>Mesafeli Satış Sözleşmesi</li>
              <li>Bilgi Toplumu Hizmetleri</li>
              <li>Gizlilik Sözleşmesi</li>
              <li>Ödeme Seçenekleri</li>
              <li>Hesap Bilgileri</li>
            </ul>
          </div>
        </div>
        <div className='footer__info'>
          <p>Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin adresi; ÇiçekSepeti.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer