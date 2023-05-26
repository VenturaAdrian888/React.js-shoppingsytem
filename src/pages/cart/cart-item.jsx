import {React, useContext} from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const{id, productName, price,productImage} = props.data;
    const{cartItems, removeFromCart, addToCart, updateCartItemCount} = useContext(ShopContext)

    const cartItemAmount = cartItems[id];
  return (
    <div className='cartItem'>
      {""}
      <img src={productImage}/>
      
      <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p> ${price}</p>
            <div className='countHandler'>
              <button className='removeToCartBttn' onClick={() => removeFromCart(id)}>
                - </button>
              <input className='input' value={cartItemAmount} onChange={(e) =>updateCartItemCount(Number(e.target.value),id)}/>
              <button className='addToCartBttn' onClick={() => addToCart(id)}>
                +</button>
            </div>
            
        </div>
      
    </div>
  )
}


