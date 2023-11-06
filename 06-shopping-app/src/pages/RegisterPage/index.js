import React from 'react'
import Form from '../../components/AuthForm/AuthForm'
import './RegisterPage.css'

export default function RegisterPage() {
  return (
    <div className='register'>
      <div className='register__container'>
        <Form title="회원가입"/>
      </div>
    </div>
  )
}
