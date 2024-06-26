// REACT
import { NavLink } from 'react-router-dom'
// ASSETS
import logo from "../../Assets/logo.jpg"
// CSS
import "../Navbar/navbar.css"

const Navbar = () => {
   return (
      <div className="navbar">
         <img src={logo} alt="logo Kasa" className="logo" />
         <nav >
            <NavLink to="/"><h2>Accueil</h2></NavLink>
            <NavLink to="/About"><h2>A propos</h2></NavLink>
         </nav>
      </div>
   );
}
export default Navbar;