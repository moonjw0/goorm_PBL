import React from 'react'
import './CartPage.css'
import Cart from '../../components/Cart/Cart'

export default function CartPage() {

  return (
    <div className='cart'>
      <div className='cart__container'>
        <Cart />
      </div>
    </div>
  )
}
