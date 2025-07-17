import "./contact.css";
import contact from "../assets/contact.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";





function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-page">
          <div className="contact-heading">
            <p>READY TO WORK</p> &nbsp;
            <a className="blue">WITH US</a>
          </div>
          <div className="contact-page-text">
            Contact us for all your questions and opinions
          </div>
          <div className="contact-partition">
            <div className="contact-page-left">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="Name" className="form-label">
                    First Name <span className="red">*</span>
                  </label>
                  <input type="name" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Last Name <span className="red">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Email Address <span className="red">*</span>
                  </label>
                  <input type="email" className="form-control" placeholder="" />
                </div>
                <div className="col-12">
                  <label htmlFor="" className="form-label">
                    Phone Number <span className="optional">(optional)</span>
                  </label>
                  <input type="text" className="form-control" placeholder="" />
                </div>

                <div className="col-12">
                  <label htmlFor="inputCountry" className="form-label">
                    Country/Region <span className="red">*</span>
                  </label>
                  <select id="inputState" className="form-select">
                    <option defaultValue>Nepal</option>
                    <option>Afghanistan</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>Andorra</option>
                    <option>Angola</option>
                    <option>Antigua and Barbuda</option>
                    <option>Argentina</option>
                    <option>Armenia</option>
                    <option>Australia</option>
                    <option>Austria</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                    <option>Belarus</option>
                    <option>Belgium</option>
                    <option>Belize</option>
                    <option>Benin</option>
                    <option>Bhutan</option>
                    <option>Bolivia</option>
                    <option>Bosnia and Herzegovina</option>
                    <option>Botswana</option>
                    <option>Brazil</option>
                    <option>Brunei</option>
                    <option>Bulgaria</option>
                    <option>Burkina Faso</option>
                    <option>Burundi</option>
                    <option>Cabo Verde</option>
                    <option>Cambodia</option>
                    <option>Cameroon</option>
                    <option>Canada</option>
                    <option>Central African Republic</option>
                    <option>Chad</option>
                    <option>Chile</option>
                    <option>China</option>
                    <option>Colombia</option>
                    <option>Comoros</option>
                    <option>Congo, Democratic Republic of the</option>
                    <option>Congo, Republic of the</option>
                    <option>Costa Rica</option>
                    <option>Cote d'Ivoire</option>
                    <option>Croatia</option>
                    <option>Cuba</option>
                    <option>Cyprus</option>
                    <option>Czech Republic</option>
                    <option>Denmark</option>
                    <option>Djibouti</option>
                    <option>Dominica</option>
                    <option>Dominican Republic</option>
                    <option>East Timor (Timor-Leste)</option>
                    <option>Ecuador</option>
                    <option>Egypt</option>
                    <option>El Salvador</option>
                    <option>Equatorial Guinea</option>
                    <option>Eritrea</option>
                    <option>Estonia</option>
                    <option>Eswatini</option>
                    <option>Ethiopia</option>
                    <option>Fiji</option>
                    <option>Finland</option>
                    <option>France</option>
                    <option>Gabon</option>
                    <option>Gambia</option>
                    <option>Georgia</option>
                    <option>Germany</option>
                    <option>Ghana</option>
                    <option>Greece</option>
                    <option>Grenada</option>
                    <option>Guatemala</option>
                    <option>Guinea</option>
                    <option>Guinea-Bissau</option>
                    <option>Guyana</option>
                    <option>Haiti</option>
                    <option>Honduras</option>
                    <option>Hungary</option>
                    <option>Iceland</option>
                    <option>India</option>
                    <option>Indonesia</option>
                    <option>Iran</option>
                    <option>Iraq</option>
                    <option>Ireland</option>
                    <option>Israel</option>
                    <option>Italy</option>
                    <option>Jamaica</option>
                    <option>Japan</option>
                    <option>Jordan</option>
                    <option>Kazakhstan</option>
                    <option>Kenya</option>
                    <option>Kiribati</option>
                    <option>Korea, North</option>
                    <option>Korea, South</option>
                    <option>Kosovo</option>
                    <option>Kuwait</option>
                    <option>Kyrgyzstan</option>
                    <option>Laos</option>
                    <option>Latvia</option>
                    <option>Lebanon</option>
                    <option>Lesotho</option>
                    <option>Liberia</option>
                    <option>Libya</option>
                    <option>Liechtenstein</option>
                    <option>Lithuania</option>
                    <option>Luxembourg</option>
                    <option>Madagascar</option>
                    <option>Malawi</option>
                    <option>Malaysia</option>
                    <option>Maldives</option>
                    <option>Mali</option>
                    <option>Malta</option>
                    <option>Marshall Islands</option>
                    <option>Mauritania</option>
                    <option>Mauritius</option>
                    <option>Mexico</option>
                    <option>Micronesia</option>
                    <option>Moldova</option>
                    <option>Monaco</option>
                    <option>Mongolia</option>
                    <option>Montenegro</option>
                    <option>Morocco</option>
                    <option>Mozambique</option>
                    <option>Myanmar</option>
                    <option>Namibia</option>
                    <option>Nauru</option>
                    <option>Nepal</option>
                    <option>Netherlands</option>
                    <option>New Zealand</option>
                    <option>Nicaragua</option>
                    <option>Niger</option>
                    <option>Nigeria</option>
                    <option>North Macedonia</option>
                    <option>Norway</option>
                    <option>Oman</option>
                    <option>Pakistan</option>
                    <option>Palau</option>
                    <option>Palestine</option>
                    <option>Panama</option>
                    <option>Papua New Guinea</option>
                    <option>Paraguay</option>
                    <option>Peru</option>
                    <option>Philippines</option>
                    <option>Poland</option>
                    <option>Portugal</option>
                    <option>Qatar</option>
                    <option>Romania</option>
                    <option>Russia</option>
                    <option>Rwanda</option>
                    <option>Saint Kitts and Nevis</option>
                    <option>Saint Lucia</option>
                    <option>Saint Vincent and the Grenadines</option>
                    <option>Samoa</option>
                    <option>San Marino</option>
                    <option>Sao Tome and Principe</option>
                    <option>Saudi Arabia</option>
                    <option>Senegal</option>
                    <option>Serbia</option>
                    <option>Seychelles</option>
                    <option>Sierra Leone</option>
                    <option>Singapore</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>Solomon Islands</option>
                    <option>Somalia</option>
                    <option>South Africa</option>
                    <option>South Sudan</option>
                    <option>Spain</option>
                    <option>Sri Lanka</option>
                    <option>Sudan</option>
                    <option>Suriname</option>
                    <option>Sweden</option>
                    <option>Switzerland</option>
                    <option>Syria</option>
                    <option>Taiwan</option>
                    <option>Tajikistan</option>
                    <option>Tanzania</option>
                    <option>Thailand</option>
                    <option>Togo</option>
                    <option>Tonga</option>
                    <option>Trinidad and Tobago</option>
                    <option>Tunisia</option>
                    <option>Turkey</option>
                    <option>Turkmenistan</option>
                    <option>Tuvalu</option>
                    <option>Uganda</option>
                    <option>Ukraine</option>
                    <option>United Arab Emirates</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Uruguay</option>
                    <option>Uzbekistan</option>
                    <option>Vanuatu</option>
                    <option>Vatican City</option>
                    <option>Venezuela</option>
                    <option>Vietnam</option>
                    <option>Yemen</option>
                    <option>Zambia</option>
                    <option>Zimbabwe</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="optional">(optional)</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Message <span className="red">*</span>
                  </label>
                  <textarea
                    placeholder=""
                    type="text"
                    className="form-control"
                    style={{ height: "20vh" }}
                  />
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      I want to receive news and updates once in a while. By
                      submitting, I'm agreed to the &nbsp;
                      <a href="#">Terms & Conditions</a>
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn contact-button btn-primary"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="contact-page-right">
              <div className="contact-image">
                <img src={contact} alt="contact" />
              </div>
              <div className="contact-heading contact-icons-heading">
                <p>Connect With</p> &nbsp;
                <a className="blue">Us On</a>
              </div>
              <div className="contact-icons">
                <FaFacebookSquare size={40} />
                <FaInstagramSquare size={40}/>
                <FaSquareXTwitter size={40} />

              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="contact-heading" >
            <p>Find us on</p> &nbsp;
            <a className="blue">Google Map</a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5819.187588786759!2d81.62849306297585!3d28.06750531341363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39986772ffd0904f%3A0xe45656134c68a4f3!2sLocal%20Mart!5e0!3m2!1sen!2snp!4v1752301661776!5m2!1sen!2snp"
            className="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default Contact;
