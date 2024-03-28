import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ErrorTitle from "../../Assets/404.jpg"
import "../Error/error.css"

const Error = () => {
    return (
        <>
            <div className="navbar_error">
                <Navbar />
            </div>
            <div className="error_page">
                <img src={ErrorTitle} alt="erreur 404" className="error_title" />
                <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </>
    );
}
export default Error;




