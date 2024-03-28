// ASSETS
import logo_footer from "../../Assets/logo_footer.png"
// CSS
import "../Footer/footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo_footer} alt="logo kasa" className="footer_logo" />
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </div>
    );
}
export default Footer;