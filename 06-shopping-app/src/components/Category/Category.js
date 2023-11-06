import React from 'react'
import './Category.css'
import CategoryTab from './CategoryTab/CategoryTab';

export default function Category() {
  return (
    <div className='categories'>
      <div className='categories__container'>
        <div className='categories__title'>Products</div>
        <div className='categories__content'>
          <CategoryTab category={"All"} />
          <CategoryTab category={"electronics"} />
          <CategoryTab category={"jewelery"} />
          <CategoryTab category={"men's clothing"} />
          <CategoryTab category={"women's clothing"} />
        </div>
      </div>
    </div>
  )
}
