import React, { useState } from 'react'
import app from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';
import './AuthForm.css'

export default function AuthForm({title}) { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmail = (e) => {   
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {   
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handleSignUp = (e) => { // 회원가입
    e.preventDefault();

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);  
    createUserWithEmailAndPassword(auth, email, password) //password 6
      .then((userCredential) => { // 회원가입 성공
        const user = userCredential.user;
        console.log(user);
        navigate('/login');
      })
      .catch((error) => { // 회원가입 실패
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        switch(errorCode) {
          case 'auth/email-already-in-use':
            alert('이미 사용중인 이메일입니다.');
            break;
          case 'auth/missing-email':
            alert('이메일을 입력해주세요');
            break;
          case 'auth/missing-password':
            alert('비밀번호를 입력해주세요');
            break;
          case 'auth/weak-password':
            alert('최소 6자 이상의 비밀번호를 입력해주세요');
            break;
          default:
            alert(errorMessage); 
        }
      });
  }


  const handleSignIn = (e) => { // 로그인
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch(login({
          id: user.uid,
          email: user.email,
          token: user.refreshToken,
        }));
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <form className='form' onSubmit={title === "회원가입" ? handleSignUp : handleSignIn}>
      <div className='form__title'>{title}</div>
      <input type='email' placeholder='E-mail' onChange={handleEmail}/>
      <input type='password' placeholder='Password' onChange={handlePassword}/>
      <button type='submit'>{title}</button>
    </form>
  )
}
