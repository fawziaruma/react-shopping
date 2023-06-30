import { useState } from 'react'
import './Cart.css'
import SelectItem from '../SelcetItem/SelectItem'

const Cart = ({cart}) => {
  const [oneCart, setOneCart] = useState([])
  // const [selectProduct, setSelectProduct] = useState([])
  const handleToOneCart = (cart) =>{
    if(cart.length){
      const x = Math.random()
    }
  }


  return (
    <div className="cart" > 

      <h4 className="cart-text"> Selected Product </h4>
      {cart.length}

      {
        cart.map(item => <SelectItem key={item.id} selectedItem = {item} ></SelectItem> )
      }

    </div>
  )
}

export default Cart