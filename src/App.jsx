import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from"./pages/home"
import Footer from"./components/footer"
import Shop from "./pages/shop"
import Contact from "./pages/contact"
import Cart from "./pages/cart"
import {useContext} from "react";
import { ThemeContext } from "./context/themeContext"
function App() {
 const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <>
    <div className={theme == "light"? "bg-white text-dark min-vh-100": "bg-dark text-white min-vh-100"}>
     <Navbar/>
     <div>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
     </div>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/shop" element={<Shop/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/cart" element={<Cart/>}/>
     </Routes>
     <Footer/>
    </div>
    </>
  )
}

export default App
