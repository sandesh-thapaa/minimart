import "./shop.css";
import samsung from "../assets/samsung.png";
import iphone from "../assets/iphone.png";
import nothing from "../assets/nothing.png";
import vivo from "../assets/vivo.png";
import iqoo from "../assets/iqoo.png";
import xiaomi from "../assets/xiaomi.png";
import motorala from "../assets/motorala.png";
import redmi from "../assets/redmi.png";


import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function Shop() {
  return (
    <>
      <div className="shop-container">
        <div className="shop">
          <div className="shop-left">
            <div className="categories-section">
              <h3>Categories</h3>
              <div className="category-list">
                <ul>
                  <li>
                    <a href="#" className="category-title">
                      Mobiles
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      Tablets
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      Headphones
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      Cameras
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      Wearables
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="line"></div>
            <div className="brands">
              <h3>Brands</h3>
              <div className="brand">
                <input
                  className="brand-checkbox"
                  type="checkbox"
                  id="checkDefault"
                />
                <label className="brand-label" htmlFor="checkDefault">
                  Samsung
                </label>
              </div>
              <div className="brand">
                <input
                  className="brand-checkbox"
                  type="checkbox"
                  id="checkDefault"
                />
                <label className="brand-label" htmlFor="checkDefault">
                  Apple
                </label>
              </div>
              <div className="brand">
                <input
                  className="brand-checkbox"
                  type="checkbox"
                  id="checkDefault"
                />
                <label className="brand-label" htmlFor="checkDefault">
                  OnePlus
                </label>
              </div>
              <div className="brand">
                <input
                  className="brand-checkbox"
                  type="checkbox"
                  id="checkDefault"
                />
                <label className="brand-label" htmlFor="checkDefault">
                  Redmi
                </label>
              </div>
              <div className="brand">
                <input
                  className="brand-checkbox"
                  type="checkbox"
                  id="checkDefault"
                />
                <label className="brand-label" htmlFor="checkDefault">
                  Realme
                </label>
              </div>
              <div className="brand">
                <input
                  className="brand-checkbox"
                  type="checkbox"
                  id="checkDefault"
                />
                <label className="brand-label" htmlFor="checkDefault">
                  Xiaomi
                </label>
              </div>
              <div className="brand">
                <input
                  className="brand-checkbox"
                  type="checkbox"
                  id="checkDefault"
                />
                <label className="brand-label" htmlFor="checkDefault">
                  Nokia
                </label>
              </div>
            </div>
            <div className="line"></div>
            <div className="customer-reviews">
              <h3>Customer Reviews</h3>
              <div className="stars-container">
                <a href="#">
                  <div className="stars">
                    <MdStar size={25} />
                    <MdStar size={25} />
                    <MdStar size={25} />
                    <MdStar size={25} />
                    <MdStarHalf size={25} />
                  </div>
                </a>
                <a href="#">& up</a>
              </div>
            </div>
            <div className="line"></div>
            <div className="by-price">
              <h3>By Price</h3>
              <div className="price-text">
                <div className="price-box">
                  Rs.
                  <input className="price-input" type="text" placeholder="0" />
                </div>
                <FaMinus size={10} />
                <div className="price-box">
                  Rs.
                  <input
                    className="price-input"
                    type="text"
                    placeholder="50,000"
                  />
                </div>
                <button className="price-button">Go</button>
              </div>
            </div>
          </div>

          {/* shop-right */}
          <div className="shop-right">
            <div className="sort-by-container">
              <a href="#" className="free-shipping">
                Free shipping
                <FaCircleCheck style={{ color: "#008ECC" }} />
              </a>
              <div className="sort-by">
                <p>Sort by:</p>
                <select>
                  <option className="sort-by-list" defaultValue>
                    Best Sellers
                  </option>
                  <option className="sort-by-list" value="1">
                    Price:Low to High
                  </option>
                  <option className="sort-by-list" value="1">
                    Price:High to Low
                  </option>
                  <option className="sort-by-list" value="2">
                    Avg. Customer Review
                  </option>
                  <option className="sort-by-list" value="2">
                    Newest Arrivals
                  </option>
                  <option className="sort-by-list" value="2">
                    Featured
                  </option>
                </select>
              </div>
            </div>
            <div className="product-container">
              <div className="card">
                <img src={samsung} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI
                      (Titanium Silverblue, 12GB RAM, 256GB Storage), Titanium
                      Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual
                      Engine and 5000mAh Battery
                    </h5>
                  </a>
                  <div
                    className="stars-container"
                    style={{ padding: "0px", margin: "0px" }}
                  >
                    <a href="#">
                      <div className="stars">
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStarHalf size={20} />
                        <FaAngleDown />
                      </div>
                    </a>
                    <a href="#" style={{ fontSize: "0.8rem" }}>
                      4,535
                    </a>
                  </div>
                  <div className="price">
                    <p className="card-text">रु83,999</p>
                    <p className="actual-price">रु1,04,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={iphone} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      iPhone 16 Pro Max 1 TB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Natural Titanium
                    </h5>
                  </a>
                  <div
                    className="stars-container"
                    style={{ padding: "0px", margin: "0px" }}
                  >
                    <a href="#">
                      <div className="stars">
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStarHalf size={20} />
                        <FaAngleDown />
                      </div>
                    </a>
                    <a href="#" style={{ fontSize: "0.8rem" }}>
                      3,286
                    </a>
                  </div>
                  <div className="price">
                    <p className="card-text">रु2,73,440</p>
                    <p className="actual-price">रु2,79,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={nothing} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      CMF Phone 2 Pro 5G (Light Green, 8GB RAM, 128GB Storage) | Dimensity 7300 Pro Processor | 5000mAh Battery | 33W Fast Charging | 2TB Expandable | 50MP+50MP+8MP Cameras | 16MP Selfie | 6.77" AMOLED Display
                    </h5>
                  </a>
                  <div
                    className="stars-container"
                    style={{ padding: "0px", margin: "0px" }}
                  >
                    <a href="#">
                      <div className="stars">
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStarHalf size={20} />
                        <FaAngleDown />
                      </div>
                    </a>
                    <a href="#" style={{ fontSize: "0.8rem" }}>
                      6,862
                    </a>
                  </div>
                  <div className="price">
                    <p className="card-text">रु35,999</p>
                    <p className="actual-price">रु40,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={motorala} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Motorola razr 60 Ultra (Pantone Mountain Trail, 16 GB RAM, 512 GB Storage) | Moto AI | Snapdragon® 8 Elite Mobile Platform | 6.9" AMOLED 165Hz Display | 50 MP + 50 MP + 50MP Triple Camera
                    </h5>
                  </a>
                  <div
                    className="stars-container"
                    style={{ padding: "0px", margin: "0px" }}
                  >
                    <a href="#">
                      <div className="stars">
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStarHalf size={20} />
                        <FaAngleDown />
                      </div>
                    </a>
                    <a href="#" style={{ fontSize: "0.8rem" }}>
                      2,342
                    </a>
                  </div>
                  <div className="price">
                    <p className="card-text">रु1,59,999</p>
                    <p className="actual-price">रु1,69,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={xiaomi} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Xiaomi 15 (Black, 12GB/512 GB)| 50 MP Leica Triple Camera | SD 8 Elite | 1.5K CrystalRes Dynamic 1-120 Hz AMOLED | Hyper AI
                    </h5>
                  </a>
                  <div
                    className="stars-container"
                    style={{ padding: "0px", margin: "0px" }}
                  >
                    <a href="#">
                      <div className="stars">
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStarHalf size={20} />
                        <FaAngleDown />
                      </div>
                    </a>
                    <a href="#" style={{ fontSize: "0.8rem" }}>
                      1,504
                    </a>
                  </div>
                  <div className="price">
                    <p className="card-text">रु1,04,999</p>
                    <p className="actual-price">रु1,09,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={vivo} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      vivo X200 Pro 5G AI Smartphone (Natural Green, 16GB RAM+ 512GB Storage) | Mediatek Dimensity 9400 Processor | AMOLED Display | Dual Nano-SIM | 6000mAh Battery
                    </h5>
                  </a>
                  <div
                    className="stars-container"
                    style={{ padding: "0px", margin: "0px" }}
                  >
                    <a href="#">
                      <div className="stars">
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStarHalf size={20} />
                        <FaAngleDown />
                      </div>
                    </a>
                    <a href="#" style={{ fontSize: "0.8rem" }}>
                      800
                    </a>
                  </div>
                  <div className="price">
                    <p className="card-text">रु1,39,999</p>
                    <p className="actual-price">रु1,49,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={redmi} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Redmi Note 14 5G (Titan Black, 6GB RAM 128GB Storage) | Global Debut MTK Dimensity 7025 Ultra | 2100 nits Segment Brightest 120Hz AMOLED | 50MP Sony LYT 600 OIS+EIS Triple Camera
                    </h5>
                  </a>
                  <div
                    className="stars-container"
                    style={{ padding: "0px", margin: "0px" }}
                  >
                    <a href="#">
                      <div className="stars">
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStarHalf size={20} />
                        <FaAngleDown />
                      </div>
                    </a>
                    <a href="#" style={{ fontSize: "0.8rem" }}>
                      1,200
                    </a>
                  </div>
                  <div className="price">
                    <p className="card-text">रु23,999</p>
                    <p className="actual-price">रु28,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={iqoo} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      iQOO Z9s 5G (Titanium Matte, 8GB RAM, 128GB Storage) | 120 Hz 3D Curved AMOLED Display | 5500 mAh Ultra-Thin Battery | Dimesity 7300 5G Processor | Sony IMX882 OIS Camera with Aura Light
                    </h5>
                  </a>
                  <div
                    className="stars-container"
                    style={{ padding: "0px", margin: "0px" }}
                  >
                    <a href="#">
                      <div className="stars">
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStarHalf size={20} />
                        <FaAngleDown />
                      </div>
                    </a>
                    <a href="#" style={{ fontSize: "0.8rem" }}>
                      2,456
                    </a>
                  </div>
                  <div className="price">
                    <p className="card-text">रु28,999</p>
                    <p className="actual-price">रु32,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Shop;
