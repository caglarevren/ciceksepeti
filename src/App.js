import { useState } from 'react'
//Styles
import './Styles/App.scss'
// Product Data
import data from './data'
// Components
import Nav from './Components/Nav'
import Breadcrumb from './Components/Breadcrumb'
import Categories from './Components/Categories'
import ProductList from './Components/ProductList'
import Campaign from './Components/Campaign'
import Footer from './Components/Footer'
import Copyright from './Components/Copyright'

function App() {
  const [productList, setProductList] = useState(data)
  const [cart, setCart] = useState([])
  const [filteredProductList, setFilteredProductList] = useState(data)
  const [selectedCategory, setSelectedCategory] = useState('Tüm Kategoriler')

  function addToCart(productId, price, count) {
    if (cart.filter((c) => c.productId === productId).length > 0) {
      setCart(
        cart.map((c) => {
          if (c.productId === productId) {
            c.count += count
          }
          return c
        })
      )
    } else {
      setCart((cart) => [...cart, { productId, price, count }])
    }
  }

  const cartProductCount = (function totalProductCount() {
    let total = 0
    cart.forEach((c) => {
      total += c.count
    })
    return total
  })()

  const totalCartPrice = (function totalPrice() {
    let total = 0
    cart.forEach((c) => {
      total += c.price * c.count
    })
    return total
  })()

  function filterProducts(category, categoryName) {
    if (category === 'All') {
      setFilteredProductList(productList)
    } else {
      setFilteredProductList(
        productList.filter((product) => product.category === category)
      )
    }
    setSelectedCategory(categoryName)
  }

  function searchProduct(term) {
    if (term.length >= 3 || term.length === 0) {
      setFilteredProductList(
        productList.filter((product) => {
          return product.name.toLowerCase().includes(term.toLowerCase())
        })
      )
      setSelectedCategory('Tüm Kategoriler')
    }
  }

  return (
    <>
      <Nav
        cartProductCount={cartProductCount}
        totalCartPrice={totalCartPrice}
        searchProduct={searchProduct}
      />
      <Breadcrumb />
      <div className='container'>
        <Categories
          filterProducts={filterProducts}
          selectedCategory={selectedCategory}
        />
        <ProductList
          productList={filteredProductList}
          addToCart={addToCart}
          cart={cart}
        />
        <Campaign />
      </div>
      <Footer />
      <Copyright />
    </>
  )
}

export default App
