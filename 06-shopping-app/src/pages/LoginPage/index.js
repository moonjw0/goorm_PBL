import React from 'react'
import './LoginPage.css'
import Form from '../../components/AuthForm/AuthForm'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className='login'>
      <div className='login__container'>
        <Form title="로그인"/>
        <div>계정이 없습니까?<Link to="/register">가입하기</Link></div>
      </div>
    </div>
  )
}
