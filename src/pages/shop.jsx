import "./shop.css";
import ShopCard from "../components/shop_card";

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
import { FaAngleRight } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import axios from "axios";
import { useEffect, useState } from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const itemsToShow = products.slice(start, end);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

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
                    <a href="#" className="category-title category-selected">
                      <div>
                        Mobiles <FaAngleRight />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      <div>
                        Tablets <FaAngleRight />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      <div>
                        Laptops <FaAngleRight />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      <div>
                        Headphones <FaAngleRight />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      <div>
                        Cameras <FaAngleRight />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      <div>
                        Wearables <FaAngleRight />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-title">
                      <div>
                        Accessories <FaAngleRight />
                      </div>
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
              <div className="product-container">
                {itemsToShow.map((item) => (
                  <ShopCard
                    key={item.id}
                    image={item.image}
                    card_title={item.title}
                    description={item.description}
                    category={item.category}
                    reviews={item.rating.count}
                    discounted_price={item.price}
                    onAddToCart={() => handleAddToCart(item)}
                  />
                ))}
              </div>
            </div>
            <div className="pagination-container">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>

                  {Array.from({ length: totalPages }).map((_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        onClick={() => handlePageChange(index + 1)}
                        href="#"
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}

                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <a
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      href="#"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Shop;
