import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from"./pages/home"
import Footer from"./components/footer"
import Shop from "./pages/shop"
<comp></comp>
function App() {

  return (
    <>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/shop" element={<Shop/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
