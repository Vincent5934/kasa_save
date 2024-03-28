// CSS
import "../Header/header.css"

const HomeHeader = ({ title, imageSrc }) => {
    return (
        <div className="header">
            <img src={imageSrc} alt={title} className="header_image" />
            {title && <h1 className="header_text">{title}</h1>}
        </div>
    )
}
export default HomeHeader;





