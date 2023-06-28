import { useState } from 'react'
import './Cart.css'
import SelectItem from '../SelcetItem/SelectItem'

const Cart = ({cart}) => {
  const [selectProduct, setSelectProduct] = useState([])
  return (
    <div className="cart" > 

      <h4 className="cart-text"> Selected Product </h4>
      {cart.length}

      {
        cart.map(item => <SelectItem key={item.id} cart={cart}></SelectItem> )
      }

    </div>
  )
}

export default Cart