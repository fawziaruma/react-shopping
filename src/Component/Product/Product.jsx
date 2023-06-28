
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({product , handleAddToCart }) => {

  const {img , price , name} = product

  return (
    <div className="product" >
        <img src={img} alt="" />
        <div className="product-info" >
           <p className="product-name" >{name}</p>
           <p>price : {price}</p>
        </div>
        <button onClick={ () => handleAddToCart(product) } className='btn-cart' >
          <p className='btn-text' >Add to Cart</p>
          <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
        </button>
    </div>
  )
}

export default Product