// REACT
import { useParams } from "react-router-dom"
import "../Rental/rental.css"
// DATA
import datas from "../../data/data.json"
// COMPONENTS
import Gallery from "../../Components/Gallery/Gallery";
import ApartmentLocation from "../../Components/Rentalinfo/Rentalinfo"
import Collapse from "../../Components/Collapse/Collapse";
import Error from "../Error/Error";

const Rental = () => {
  const idLocation = useParams("id").id;
  const currentLocation = datas.filter(data => data.id === idLocation);
  const errorLocation = datas.find(data => data.id === idLocation);
  if (errorLocation === undefined) {
    return (
      <Error />
    )
  }
  return (
    <div className="rentalpage" >
      <Gallery pictures={currentLocation[0].pictures} numberPhotos={currentLocation[0].pictures.length} />
      <ApartmentLocation Apartment={currentLocation[0]} />
      <div className='rentalCollapse'>
        <Collapse title="Description" content={currentLocation[0].description} />
        <Collapse title="Équipements" content={currentLocation[0].equipments.map((eq, index) => (
          <li key={index}>{eq}</li>
        ))} />
      </div>
    </div>
  );
}
export default Rental;

