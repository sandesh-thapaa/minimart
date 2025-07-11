import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from"./pages/home"
import Footer from"./components/footer"
import Shop from "./pages/shop"
import Contact from "./pages/contact"
<comp></comp>
function App() {

  return (
    <>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/shop" element={<Shop/>}/>
     <Route path="/contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
