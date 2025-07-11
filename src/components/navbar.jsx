import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <IoBagOutline size={50} style={{color: "#008ECC"}}/>
          <h2 className="logo-name">MiniMart</h2>
        </Link>
        <div className="navbar-right">
          <ul className="navbar-link">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <a href="#">On Sale</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
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
