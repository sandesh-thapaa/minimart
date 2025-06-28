import logo from "../assets/images.jpg"
import "./navbar.css"
function Navbar(){

    return (
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      <ul class="navbar-link">
        <li>
            <a href="#" >Home</a>
        </li>
        <li>
            <a href="#" >Products</a>
        </li>
        <li>
            <a href="#" >Contacts</a>
        </li>
      </ul>
    </a>
  </div>
</nav>
    )
}
export default Navbar;