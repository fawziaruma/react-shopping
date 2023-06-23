
import './Product.css'
const Product = ({product}) => {

  const {img , price , name} = product

  return (
    <div className="product" >
        <img src={img} alt="" />
        <div className="product-info" >
           <p className="product-name" >{name}</p>
           <p>price{price}</p>
        </div>
        <button>Add to Cart</button>
    </div>
  )
}

export default Product