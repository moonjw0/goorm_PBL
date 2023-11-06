import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/index';
import LoginPage from './pages/LoginPage/index';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage/index';

const Layout = () => {
  return (
    <div>
      <Nav />

      {/* <Outlet />

      <Footer /> */}
    </div>
  )
}
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route index element={<HomePage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='register' element={<RegisterPage />}/>
        <Route path='cart' element={<CartPage />}/>
      </Routes>
      <Nav />
    </div>
  );
}

export default App;
