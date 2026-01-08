import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
   <div className="footer-main-section">
   <div className="footer-section about">
        <h4>About Us</h4>
        <p>
          At SAADAA, our aim is to make your choice simpler, as easy as having a cup of Chai!
        </p>
        <p>
          The essence of the brand is to make your decision easier, growing beyond the noise,
          and living a more connected life.
        </p>
        <div className="social-icons">
          <span>📷</span> {/* Instagram icon placeholder */}
        </div>
      </div>

      <div className="footer-section menu">
        <h4>Footer menu</h4>
        <ul>
          <li>Shipping Details</li>
          <li>Return & Exchange Policy</li>
          <li>Order Cancellation</li>
          <li>Privacy Policy</li>
          <li>Terms of service</li>
          <li>Refund policy</li>
        </ul>
      </div>

      <div className="footer-section newsletter">
        <h4>Newsletter</h4>
        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
        <div className="subscribe">
          <input type="email" placeholder="E-mail" />
          <button>Subscribe</button>
        </div>
      </div>
   </div>

      <div className="footer-bottom">
        <p>© 2025 - सादा / SAADAA Powered by Shopify</p>
      </div>
    </footer>
  );
}
