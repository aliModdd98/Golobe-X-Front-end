import React, { useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import './HotelViewerStyle.css'
import img1 from './../../assets/Hotel1.png'
import img2 from './../../assets/Hotel2.avif'
import img3 from './../../assets/Hotel3.avif'
import img4 from './../../assets/Hotel4.png'
import img5 from './../../assets/Hotel5.png'
import img6 from './../../assets/Hotel6.avif'
import img7 from './../../assets/Hotel7.avif'
import img8 from './../../assets/Hotel8.avif'
import img9 from './../../assets/Hotel9.avif'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FlightTracker from '../FlightTracker/FlightTracker'
import DetailsHeader from '../DetailsHeader/DetailsHeader'
function HotelViewer() {
    const [mainImage, setMainImage] = useState(img1);
    const [images, setImages] = useState([img2,img3,img4,img5,]);
    const [showAllImages, setShowAllImages] = useState(false);
const allimgs=[img6,img7,img8,img9];
    const handleImageClick = (image) => {
        const clickedImageIndex = images.indexOf(image);
        const newImages = [...images];
        newImages[clickedImageIndex] = mainImage;
    
        setMainImage(image);
        setImages(newImages);
      };
      const handleShowAllImages = () => {
        setShowAllImages(!showAllImages);
      };
      const visibleImages = showAllImages ? images : images.slice(0, 4);

    return (
      <div className='container'>
        
   <FlightTracker country='Turkey' city='Istanbul' place='CVK Park Bosphorus Hotel Istanbul' />
   <DetailsHeader company='Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437' rate={4.2} daily="/night" location="CVK Park Bosphorus Hotel Istanbul" price="450" Favorit button='Book now' />
  
        <Row className='my-5'>
<Col ><img src={mainImage} alt="Main Image" className="img-fluid w-100 h-100 mainImg" /></Col>
<Col className='maingrid'> {!showAllImages && (
    <>
      {visibleImages.map((image, index) => (
        <div className={`item ${index < 4 ? 'gap-right-bottom' : 'gap-top'}`} key={index}>
          <div className="r w-100 h-100 imgItem ">
            <img
              src={image}
              alt={`Hotel ${index + 1}`}
              className="img-fluid w-100 h-100 item object-fit-cover"
              onClick={() => handleImageClick(image)}
            />
          </div>
        </div>
      ))}
      <div className="col-md-12 text-center">
        <button className="showBtn" onClick={handleShowAllImages}>View All Photos</button>
      </div>
    </>
  )}</Col>
        </Row>
       
      </div>
  )
}

export default HotelViewer

{/* <div className="col-lg-6">
<img src={mainImage} alt="Main Image" className="img-fluid w-100 h-100 mainImg" />
</div>
<div className="col-lg-6 gapImage">
<div className="row imagesGrid">
  {!showAllImages && (
    <>
      {visibleImages.map((image, index) => (
        <div className={`col-md-6 mb-3 ${index < 4 ? 'gap-right-bottom' : 'gap-top'}`} key={index}>
          <div className="r w-100 h-100 imgItem ">
            <img
              src={image}
              alt={`Hotel ${index + 1}`}
              className="img-fluid w-100 h-100 object-fit-cover"
              onClick={() => handleImageClick(image)}
            />
          </div>
        </div>
      ))}
      <div className="col-md-12 text-center">
        <button className="showBtn" onClick={handleShowAllImages}>View All Photos</button>
      </div>
    </>
  )}
  {showAllImages && (
    <>
      {images.map((image, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="image-wrapper">
            <img
              src={image}
              alt={`Hotel ${index + 1}`}
              className="img-fluid w-100 h-100 object-fit-cover"
              onClick={() => handleImageClick(image)}
            />
          </div>
        </div>
      ))}
    </>
  )}
</div>
</div>
</div> */}