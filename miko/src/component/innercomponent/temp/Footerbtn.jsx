import { FaPinterest, FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from "react-icons/fa";
import './fbtn.css';
const Footer = () => {
  return (
    <footer className="footer-background">
      <div className="footer-content">
        <div>
          <h3 className="subscribe-headline">Let's get in touch</h3>
          <p className="subscribe-text">Sign up for our newsletter and receive 10% off your first order</p>
          <div className="email">
            <input
              type="email"
              placeholder="Enter your email"
              //className="border p-2 flex-1"
            />
            <button className="bg-black text-white px-4 py-2 ">Subscribe now</button>
          </div>
        </div>
        <div>
          <ul className=" position-relative footer-style">
          <h4 className=" text-lg font-semibold">Quick link</h4>
            <li className="footer-detail">Crafters Corner</li>
            <li>Artist Corner</li>
            <li>Resin Art</li>
            <li>Journaling</li>
            <li>Entrepreneur's Stationery</li>
            <li>World of Pens!</li>
            <li>Bulk Order</li>
            <li>Track Your Order</li>
          </ul>
        </div>
        <div>
          
          <ul>
          <h4 className="text-lg font-semibold">Company</h4>
            <li>About us</li>
            <li>Wholesale & Bulk Buy</li>
            <li>Terms of Service</li>
            <li>Return & Refund policy</li>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="text-lg font-semibold">Connect with us</h4>
          <p className="text-sm mt-2 font-medium">Trade Name: Parshwa Traders</p>
          <p className="text-sm">Brand Name: Inkarto.com</p>
          <p className="text-sm">GSTIN: 27AACHA1185L1ZB</p>
          <p className="text-sm">Headquarters: 718-A Ganpati Peth, Sangli, Maharashtra 416416, India.</p>
          <p className="text-sm mt-2">Reach us out:</p>
          <p className="text-sm">+919429692701, 07314344387</p>
          <p className="text-sm">Support@inkarto.com</p>
        </div>
        <div className=" footer-icon">
          <FaPinterest size={24} />
          <FaFacebook size={24} />
          <FaInstagram size={24} />
          <FaYoutube size={24} />
          <FaTiktok size={24} />
          <FaWhatsapp size={24} />
        </div>
      </div>
      </div>
      <div className="text-center text-sm text-gray-600 mt-10">© INKARTO 2024</div>
    </footer>
  );
};

export default Footer;
