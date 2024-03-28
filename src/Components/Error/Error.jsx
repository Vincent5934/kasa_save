// REACT
import { Link } from "react-router-dom";
// ASSETS
import ErrorTitle from "../../Assets/404.jpg"
// CSS
import "../Error/error.css"

const Error = () => {
    return (
        <div className="navbar_error">
            <div className="error_page">
                <img src={ErrorTitle} alt="erreur 404" className="error_title" />
                <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    );
}
export default Error;




