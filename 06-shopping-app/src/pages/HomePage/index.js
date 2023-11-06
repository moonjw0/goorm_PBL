import React from 'react'
import Products from '../../components/Products/Products';
import Category from '../../components/Category/Category';
import './HomePage.css'

export default function HomePage() {
  return (
    <div className='home'>
      <div className='home__container'>
        <Category />
        <Products />
      </div>
    </div>
  )
}
