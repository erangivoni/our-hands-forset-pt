import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa";
import "./footer.css"; // Import CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* About Section */}
                <div className="footer-section">
                    <h2>העמותה שלנו</h2>
                    <p>ארגון חינוכי קהילתי הפועל בסביבה טבעית ואקולוגית </p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h2>קישורים מהירים</h2>
                    <ul className="footer-links">
                        <li><a href="/about">עלינו</a></li>
                        <li><a href="/services">סדנאות</a></li>
                        <li><a href="/contact">יצירת קשר</a></li>
                        <li><a href="/faq">שאלות נפוצות</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h2>עקבו אחרינו</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/share/15tSihuPCL/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                        <a href="https://www.facebook.com/share/15tSihuPCL/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                        <a href="https://www.youtube.com/channel/yourchannelid" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>

                    </div>
                </div>




            </div>
            <div className="copyright">
                © {new Date().getFullYear()} בידיים שלנו. כל הזכויות שמורות
            </div>
        </footer>
    );
};

export default Footer;
