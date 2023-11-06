import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import './Products.css'
import Product from './Product/Product';

export default function Products() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categories);
  const products = useSelector(state => state.products.products);

  // console.log('products', products); 
  useEffect(() => {
    dispatch(fetchProducts(selectedCategory));
  }, [dispatch, selectedCategory]);
  
  return (
    <div className='products'>
      <div className='products__show'>Showing: {products.length} items</div>
      <div className='products__container'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
