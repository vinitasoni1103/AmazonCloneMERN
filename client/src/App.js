import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnavbaar';
import Maincomponent from './components/home/Maincomponent';
import Footer from './components/footer/Footer';
import SignUp from './components/signup_sign/SignUp';
import SignIn from './components/signup_sign/SignIn';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbaar />
    <Newnav />
    <Routes>
      <Route path='/' element={<Maincomponent/>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='/register' element={<SignUp/>} />
      <Route path='/getproductsone/:id' element={<Cart/>} />
      <Route path='/buynow' element={<Buynow/>} />
    </Routes>
    <Footer/>
    <SignUp/>
    <SignIn/>
    </>
  );
}

export default App;
