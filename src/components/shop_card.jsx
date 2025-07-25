import "./shop_card.css";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

import samsung from "../assets/samsung.png";

function ShopCard({image, card_title, description, category, reviews, discounted_price, actual_price, onAddToCart} ) {
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt="watch" />
        <div className="card-body">
          <a href="#">
            <h5 className="card-title">
              {card_title}
            </h5>
          </a>
          <div className="card-description">{description}</div>
          <span className="card-category">
            {category}
          </span >
          {/* <div                  
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
              {reviews}
            </a>
          </div> */}
          <div className="price">
            <p className="card-text"> रु{discounted_price}</p>
            <p className="actual-price">{actual_price}</p>
          </div>
          <button onClick={onAddToCart} href="#" className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
export default ShopCard;
