import "./home.css";
import watch from "../assets/watch.avif";
import galaxyPhone from "../assets/galaxy-phone.avif";
import accessories from "../assets/accessories.png";
import cosmetics from "../assets/cosmetics.png";
import electonics from "../assets/electronics.png";
import furniture from "../assets/furniture.png";
import decor from "../assets/decor1.avif";
import { FaAngleRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="body">
        <div className="hero-section">
          <div className="hero-text">
            <p>Best Deal Online on Smart Watches</p>
            <h1>SMART WEARABLE.</h1>
            <p>UP to 80% OFF</p>
          </div>
          <img src={watch} alt="watch" className="watch" />
        </div>
        <div className="products">
          <div className="product-text">
            <p>Grab the best deal on &nbsp;</p>
            <a href="#" className="blue">
              smartphones
            </a>
          </div>
          <div className="view-all">
            <a href="#" className="product-text">
              View all
            </a>
            <a href="#">
              <FaAngleRight />
            </a>
          </div>
        </div>
        <div className="line"></div>
        <div className="product-card-container">
          <div className="product-card">
            <img className="phone" src={galaxyPhone} alt="phone" />
            <div className="discount-percent">
              <p>20%</p>
              <p>OFF</p>
            </div>
            <div className="product-details">
              <p className="product-name">Galaxy S25 Ultra</p>
              <div className="price-detail">
                <p className="product-price">रु104999 </p>
                <p className="actual-price">रु83999</p>
              </div>
              <div className="line"></div>
              <p className="discount">Save - रु20999</p>
            </div>
          </div>
          <div className="product-card">
            <img className="phone" src={galaxyPhone} alt="phone" />
            <div className="discount-percent">
              <p>20%</p>
              <p>OFF</p>
            </div>
            <div className="product-details">
              <p className="product-name">Galaxy S25 Ultra</p>
              <div className="price-detail">
                <p className="product-price">रु104999 </p>
                <p className="actual-price">रु83999</p>
              </div>
              <div className="line"></div>
              <p className="discount">Save - रु20999</p>
            </div>
          </div>
          <div className="product-card">
            <img className="phone" src={galaxyPhone} alt="phone" />
            <div className="discount-percent">
              <p>20%</p>
              <p>OFF</p>
            </div>
            <div className="product-details">
              <p className="product-name">Galaxy S25 Ultra</p>
              <div className="price-detail">
                <p className="product-price">रु104999 </p>
                <p className="actual-price">रु83999</p>
              </div>
              <div className="line"></div>
              <p className="discount">Save - रु20999</p>
            </div>
          </div>
          <div className="product-card">
            <img className="phone" src={galaxyPhone} alt="phone" />
            <div className="discount-percent">
              <p>20%</p>
              <p>OFF</p>
            </div>
            <div className="product-details">
              <p className="product-name">Galaxy S25 Ultra</p>
              <div className="price-detail">
                <p className="product-price">रु104999 </p>
                <p className="actual-price">रु83999</p>
              </div>
              <div className="line"></div>
              <p className="discount">Save - रु20999</p>
            </div>
          </div>
          <div className="product-card">
            <img className="phone" src={galaxyPhone} alt="phone" />
            <div className="discount-percent">
              <p>20%</p>
              <p>OFF</p>
            </div>
            <div className="product-details">
              <p className="product-name">Galaxy S25 Ultra</p>
              <div className="price-detail">
                <p className="product-price">रु104999 </p>
                <p className="actual-price">रु83999</p>
              </div>
              <div className="line"></div>
              <p className="discount">Save - रु20999</p>
            </div>
          </div>
        </div>
        {/* Categories */}
        <div className="products">
          <div className="product-text">
            <p>Shop From &nbsp;</p>
            <a href="#" className="blue">
              Top Categories
            </a>
          </div>
          <div className="view-all">
            <a href="#" className="product-text">
              View all
            </a>
            <a href="#">
              <FaAngleRight />
            </a>
          </div>
        </div>
        <div className="line"></div>
        <div className="categories-container">
          <div className="categories-card">
            <div className="category">
              <img
                src={galaxyPhone}
                alt="category"
                className="category-image"
              />
            </div>
            <p>Mobile</p>
          </div>
          <div className="categories-card">
            <div className="category">
              <img
                src={cosmetics}
                alt="category"
                className="category-image"
              />
            </div>
            <p>Cosmetics</p>
          </div>
          <div className="categories-card">
            <div className="category">
              <img
                src={electonics}
                alt="category"
                className="category-image"
              />
            </div>
            <p>Electronics</p>
          </div>
          <div className="categories-card">
            <div className="category">
              <img
                src={furniture}
                alt="category"
                className="category-image"
              />
            </div>
            <p>Furniture</p>
          </div>
          <div className="categories-card">
            <div className="category">
              <img
                src={watch}
                alt="category"
                className="category-image"
              />
            </div>
            <p>Watches</p>
          </div>
          <div className="categories-card">
            <div className="category">
              <img
                src={electonics}
                alt="category"
                className="category-image"
              />
            </div>
            <p>Decor</p>
          </div>
          <div className="categories-card">
            <div className="category">
              <img
                src={accessories}
                alt="category"
                className="category-image"
              />
            </div>
            <p>Accessories</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
