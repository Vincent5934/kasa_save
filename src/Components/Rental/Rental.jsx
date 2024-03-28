// COMPONENTS
import Cards from "../Cards/Cards";
// DATAS
import rentalData from "../../data/data.json"
// CSS
import "../Rental/rental.css"


const Rental = () => {
    return (
        <section className="rental">
            {rentalData.map(data => {
                return (
                    <Cards
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}

        </section>
    );
}
export default Rental;