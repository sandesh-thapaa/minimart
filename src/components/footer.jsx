import "./footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GrApple } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-left">
            <h1 className="footer-logo-name">MiniMart</h1>
            <h5>Contact Us</h5>
            <div className="contact">
              <FaWhatsapp size={30} />
              <div className="contact-text">
                <p>Whats App</p>
                <p>+977 9834265342</p>
              </div>
            </div>
            <div className="contact">
              <MdOutlinePhoneInTalk size={30} />
              <div className="contact-text">
                <p>Call Us</p>
                <p>+977 9834265342</p>
              </div>
            </div>
            <h5>Download App</h5>
            <div className="app">
              <div className="app-store">
                <GrApple size="35" />
                <div className="app-store-text">
                  <p className="app-store-download-text">DOWNLOAD ON THE</p>
                  <h5 className="">App Store</h5>
                </div>
              </div>
              <div className="app-store">
                <FaGooglePlay size={32} />
                <div className="app-store-text">
                  <p className="app-store-download-text">GET IT ON</p>
                  <h5 className="">Google Play</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right-grid">
              <p className="footer-text">Most Popular Categories</p>
              <div className="footer-links">
                <ul>
                  <a href="#" className="footer-link">
                    <li>Staples</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>Beverages</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>Personal Care</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>Home Care</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>Baby Care</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>Vegetables & Fruits</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>Snacks & Food</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>Dairy & Bakery</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="footer-right-grid">
              <p className="footer-text">Customer Services</p>
              <div className="footer-links">
                <ul>
                  <a href="#" className="footer-link">
                    <li>About Us</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>Terms & Conditions</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>FAQ</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>Privacy Policy</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>E-waste Policy</li>
                  </a>
                  <a href="#" className="footer-link">
                    <li>Cancellation & Return Policy</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="copyright">© 2025 All Rights Reserved. MiniMart Ltd. </div>
      </div>
    </>
  );
}
export default Footer;
