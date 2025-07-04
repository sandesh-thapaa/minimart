
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <a className="blue"><IoBagOutline size={50} /></a>
          <h2 class="logo-name">MiniMart</h2>
        </a>
        <div className="navbar-right">
          <ul className="navbar-link">
            <a href="#">
              <li>Shop</li>
            </a>
            <a href="#">
              <li>On Sale</li>
            </a>
            <a href="#">
              <li>New Arrivals</li>
            </a>
            <a href="#">
              <li>Brands</li>
            </a>
          </ul>
          <div className="search">
            <a href="#" className="blue"><IoSearch size={24} /></a>
            <input className="search-box" type="text" placeholder="Search"></input>
          </div>
          <a href="#" className="blue"><IoCartOutline size={30} /></a>
          <a href="#" className="blue"><FaRegUserCircle size={24} /></a>
        </div>
      </div>
      <div className="line"></div>
    </nav>

  );
}
export default Navbar;
