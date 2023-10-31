import { Routes, Route } from "react-router-dom"

import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Menu from './pages/menu/Menu'
import Contact from './pages/contact/Contact'
import Cart from './pages/cart/Cart'
import Register from './pages/register/Register'
import Error from './pages/error/Error'

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
  )
}
