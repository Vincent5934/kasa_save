// COMPONENTS
import Homeheader from "../../Components/Header/Homeheader"
import Rental from "../../Components/Rental/Rental";
// CSS
import "../Homepage/homepage.css"
// ASSETS
import homeHeaderImage from "../../Assets/homeheader.jpg"

const Homepage = () => {
    return (
        <div className="homepage">
            <Homeheader title="Chez vous, partout et ailleurs" imageSrc={homeHeaderImage} />
            <Rental />
        </div>
    );
}
export default Homepage;
