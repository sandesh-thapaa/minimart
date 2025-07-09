import "./shop.css";
import galaxyPhone from "../assets/galaxy-phone.avif";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

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
                <div className="hypen">-</div>
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
                    Popularity
                  </option>
                  <option className="sort-by-list" value="1">
                    Price
                  </option>
                  <option className="sort-by-list" value="2">
                    Rating
                  </option>
                </select>
              </div>
            </div>
            {/* <div className="line"></div> */}
            <div className="product-container">
              <div className="card">
                <img src={galaxyPhone} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI
                      (Titanium Silverblue, 12GB RAM, 256GB Storage), Titanium
                      Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual
                      Engine and 5000mAh Battery
                    </h5>
                  </a>
                  <div className="price">
                    <p className="card-text">रु1,04,999</p>
                    <p className="actual-price">रु83,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={galaxyPhone} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI
                      (Titanium Silverblue, 12GB RAM, 256GB Storage), Titanium
                      Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual
                      Engine and 5000mAh Battery
                    </h5>
                  </a>
                  <div className="price">
                    <p className="card-text">रु1,04,999</p>
                    <p className="actual-price">रु83,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={galaxyPhone} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI
                      (Titanium Silverblue, 12GB RAM, 256GB Storage), Titanium
                      Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual
                      Engine and 5000mAh Battery
                    </h5>
                  </a>
                  <div className="price">
                    <p className="card-text">रु1,04,999</p>
                    <p className="actual-price">रु83,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={galaxyPhone} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI
                      (Titanium Silverblue, 12GB RAM, 256GB Storage), Titanium
                      Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual
                      Engine and 5000mAh Battery
                    </h5>
                  </a>
                  <div className="price">
                    <p className="card-text">रु1,04,999</p>
                    <p className="actual-price">रु83,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={galaxyPhone} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI
                      (Titanium Silverblue, 12GB RAM, 256GB Storage), Titanium
                      Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual
                      Engine and 5000mAh Battery
                    </h5>
                  </a>
                  <div className="price">
                    <p className="card-text">रु1,04,999</p>
                    <p className="actual-price">रु83,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={galaxyPhone} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI
                      (Titanium Silverblue, 12GB RAM, 256GB Storage), Titanium
                      Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual
                      Engine and 5000mAh Battery
                    </h5>
                  </a>
                  <div className="price">
                    <p className="card-text">रु1,04,999</p>
                    <p className="actual-price">रु83,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={galaxyPhone} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI
                      (Titanium Silverblue, 12GB RAM, 256GB Storage), Titanium
                      Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual
                      Engine and 5000mAh Battery
                    </h5>
                  </a>
                  <div className="price">
                    <p className="card-text">रु1,04,999</p>
                    <p className="actual-price">रु83,999</p>
                  </div>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={galaxyPhone} className="card-img-top" alt="watch" />
                <div className="card-body">
                  <a href="#">
                    <h5 className="card-title">
                      Samsung Galaxy S25 Ultra 5G Smartphone with Galaxy AI
                      (Titanium Silverblue, 12GB RAM, 256GB Storage), Titanium
                      Frame, Snapdragon 8 Elite, 200 MP Camera with ProVisual
                      Engine and 5000mAh Battery
                    </h5>
                  </a>
                  <div className="price">
                    <p className="card-text">रु1,04,999</p>
                    <p className="actual-price">रु83,999</p>
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
