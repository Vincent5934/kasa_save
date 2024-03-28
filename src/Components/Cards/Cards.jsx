// REACT
import { Link } from 'react-router-dom';
// CSS
import './cards.css';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`}>
      <div className='card'>
        <img src={cover} alt={title} className='card__image' />
        <h3 className='card__subtitle'>{title}</h3>
      </div>
    </Link>
  )
}
export default Card;