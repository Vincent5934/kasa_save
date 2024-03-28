import {useParams} from "react-router-dom"
import "../Rental/rental.css"
import datas from "../../data/data.json"
import Navbar from "../../Components/Navbar/Navbar";
import Gallery from "../../Components/Gallery/Gallery";
import Footer from "../../Components/Footer/Footer";
import ApartmentLocation from "../../Components/Rentalinfo/Rentalinfo"
import Collapse from "../../Components/Collapse/Collapse";
import Error from "../Error/Error";

const Rental = () => {
    const idLocation = useParams("id").id;
    const currentLocation = datas.filter(data => data.id === idLocation);
    const errorLocation = datas.find(data => data.id === idLocation);
    if (errorLocation === undefined) {
      return(
         <Error />
      )
    }
    return ( 
        <>
        <div className="rentalpage" >
        <Navbar/>
        <Gallery pictures={currentLocation[0].pictures} numberPhotos={currentLocation[0].pictures.length}/>
        <ApartmentLocation Apartment={currentLocation[0]} />
        <div className='rentalCollapse'>
        <Collapse title="Description" content={currentLocation[0].description} />
        <Collapse title="Équipements" content={currentLocation[0].equipments.map((eq, index) => (
          <li key={index}>{eq}</li>
        ))} />
        </div>
        <Footer />
        </div>
        </>
       
     );
}
 
export default Rental;

