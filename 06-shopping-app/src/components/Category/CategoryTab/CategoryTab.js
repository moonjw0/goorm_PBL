import React from 'react'
import './CategoryTab.css'
import { useDispatch, useSelector } from 'react-redux';
import { currentCategory } from '../../../store/categoriesSlice';

export default function CategoryTab({category}) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categories);
  
  const handleCategory = (category) => {
    dispatch(currentCategory(category));
    // button에서 선택된 카테고리를 store에 저장
  }

  return (
    <button className={`category ${selectedCategory === category ? 'selected' : ''}`} onClick={() => handleCategory(category)}>
      {category}
    </button>
  )
}
// onClick={handleCategory(category)}