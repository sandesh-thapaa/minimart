import "./footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-left">
            <h1 className="footer-logo-name">MiniMart</h1>
            <h5>Contact Us</h5>
            <div className="contact">
              <FaWhatsapp  size={30}/>
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
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
