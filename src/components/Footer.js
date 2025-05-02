import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-columns">
        <div class="logo-footer">
          <img
            src="https://www.lakushop.id/images/icons/logo.png"
            alt="logo-footer"
          />
          <p>
            Synthesis Square 10th Floor. Jalan Gatot Subroto Kav 64 <br />
            <br />
            <br />
            No.177A, Jakarta - Selatan 12870.
          </p>
        </div>

        <div class="footer-icon">
          <h4>Follow Us</h4>
          <div class="social-icons">
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/24/000000/facebook-new.png"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/24/000000/youtube-play.png"
                alt="YouTube"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/ios-filled/24/000000/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </div>
          <h4>Available On</h4>
          <div class="available-icons">
            <a href="#">
              <img
                src="https://www.lakuemas.com/images/appstore.svg"
                alt="Appstore"
              />
            </a>
            <a href="#">
              <img
                src="https://www.lakuemas.com/images/googleplay.svg"
                alt="Googleplay"
              />
            </a>
          </div>
        </div>
        <div className="lakushop-contact">
          <div className="footer-column">
            <div className="footer-title">
              <h4>Lakushop.id</h4>
            </div>
            <div className="footer-content">
              <a href="#">Profile</a>
              <a href="#">Keranjang</a>
              <a href="#">Transaksi</a>
              <a href="#">Product</a>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-title">
              <h4>Contact</h4>
            </div>
            <div className="footer-content">
              <a href="#">support@lakuemas.com</a>
              <a href="#">(021) 21243873</a>
              <a href="#">Syarat & Ketentuan</a>
              <a href="#">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </div>
      <div class="copy">
        <p>LAKUEMAS - © 2025. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}

export default Footer;
