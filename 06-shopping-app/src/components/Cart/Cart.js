import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem/CartItem';
import CartEmpty from './CartEmpty/CartEmpty';

export default function Carts() {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <div className='cart'>
      <div className='cart_container'>
        {cartItems.length === 0 ? <CartEmpty /> 
          : (
            <>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            </>
            )
        }     
      </div>
    </div>
  )
}
