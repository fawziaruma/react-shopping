import { useEffect } from "react"
import { useState } from "react"
import Product from "../Product/Product"
import './Shop.css'
import Cart from "../Cart/Cart"



const Shop = () => {
    const[products, setProducts] = useState([])
    useEffect( ()=> {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [] )
  return (
    <div className="shop-container" >
        <div className="product-container" >
            {
                products.map(product => <Product
                key={product.id}
                product={product}
                >

                </Product>)
            }
        </div>
        <div className="cart-container">
            <Cart></Cart>
        </div>
    </div>
  )
}

export default Shop