import React from 'react'
import './CartItem.css';

export default function CartItem({ cartItem }) {

  return (
    <div className='cartItem'>
      <div className='cartItem__container'>
        <img className='cartItem__img' src={cartItem.image} alt={cartItem.title}/>
        <div className='cartItem__info'>
          <div className='cartItem__category_delete'>
            <div className='cartItem__category'>{cartItem.category}</div>
            <button className='cartItem__delete'>delete</button>
          </div>
          <div className='cartItem__title'>{cartItem.title}</div>
        </div>
      </div>
    </div>
  )
}
