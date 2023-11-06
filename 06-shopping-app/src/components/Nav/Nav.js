import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
      <div className='nav__container'>
        <div className='nav__left-title'>
          <Link to ="/" style={{ textDecoration: "none", color: "black"}}>
            Shop
          </Link>
        </div>
        
        <div className='nav__right'>
          <span className='nav__right-item'>
            <Link to ="/cart" style={{ textDecoration: "none", color: "black"}}>
            cart
            </Link>
          </span>
          <span className='nav__right-item'>user</span>
          <span className='nav__right-item'>logout</span>
        </div>

      </div>
    </div>
  )
}
