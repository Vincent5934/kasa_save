// REACT
import { useState } from 'react';
// CSS
import "../Gallery/gallery.css";

const Gallery = ({pictures, numberPhotos}) => {
  const [currentPicture, setCurrentPicture] = useState(0);
  const getClassName = (index) => {
    if (index === currentPicture) return "show";
    return "";
  };

  // Flèche suivante
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // Flèche précédente et retour à la photo 1
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1)
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  const isPicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  // Carousel ou image par défaut
  const getCarousel = () => {
    return pictures.map((pic, index, description) => (
      <img key={pic} src={pic} alt={description} className={getClassName(index)} />
    ));
  };

  return (
    <div className='image__banner_img'>
      <div className="image__container">
        {getCarousel()}
      </div>
      {isPicturesAvailable() &&
        <>
          {numberPhotos > 1 ? <button id='button' className='btn btn-previous' onClick={moveToPrevious}>
            <i className='fas fa-chevron-left'></i>

          </button> : <span></span>
          }
          {numberPhotos > 1 ? <span className='slide__counter'>
            {currentPicture + 1} / {pictures.length}
          </span> : <span></span>}
          {numberPhotos > 1 ? <button className='btn btn-next' onClick={moveToNext}>
            <i className='fas fa-chevron-right'></i>
          </button> : <span></span>}
        </>
      }
    </div>
  )
}
export default Gallery;

