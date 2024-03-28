// CSS
import "../Rentalinfo/rentalinfo.css"

const Rentalinfo = ({ Apartment }) => {
    const name = Apartment.host.name.split(' ')
    const rating = Apartment.rating;
    return (
        <section className="apartment_header">
            <div className='apartment_title'>
                <h1>{Apartment.title}</h1>
                <p>{Apartment.location}</p>
                <div className="apartment_tags">
                    {Apartment.tags.map((tag) => (
                        <div key={tag}>{tag}</div>
                    ))}
                </div>
            </div>
            <div className="apartment_owner">
                <div className="apartment_owner_details">
                    <h3>
                        <div>{name[0]}</div>
                        <div>{name[1]}</div>
                    </h3>
                    <div className="apartment_owner_badge">
                        <img src={Apartment.host.picture} alt={Apartment.host.name} />
                    </div>
                </div>
                <div className='apartment_owner_stars'>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <span key={num} className={rating >= num ? "on" : "off"}>★</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Rentalinfo;
