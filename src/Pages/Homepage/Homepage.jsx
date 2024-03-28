import Navbar from "../../Components/Navbar/Navbar";
import Homeheader from "../../Components/Header/Homeheader"
import Rental from "../../Components/Rental/Rental";
import Footer from "../../Components/Footer/Footer";
import "../Homepage/homepage.css"
import homeHeaderImage from "../../Assets/homeheader.jpg"

const Homepage = () => {

    return ( 
        <>
        <div className="homepage">
        <Navbar/>
        <Homeheader title="Chez vous, partout et ailleurs" imageSrc={homeHeaderImage}/>
        <Rental/>
        <Footer />
        </div>
        </>
     );
}
 
export default Homepage;
