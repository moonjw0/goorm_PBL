import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../../../store/cartSlice';

export default function Product({ id, product }) {
const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addCart(product));
  }

  return (
    <div className='product'>
      <div className='product__container'>
        <img className='product__img' src={product.image} alt={product.title} />
        <div className='product__title'>{product.title}</div>
        <div className='product__info'>
          <button className='cart' style={{margin: 0}} onClick={handleCart}>장바구니에 담기</button>
          <div className='product__price'>$ {product.price}</div>
        </div>
      </div>
    </div>
  )
}
