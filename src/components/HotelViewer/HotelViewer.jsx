import React, { useState } from 'react'

import './HotelViewerStyle.css'
import img1 from './../../assets/hotels/hotel5.jfif'
import img2 from './../../assets/hotels/hotel2.jfif'
import img3 from './../../assets/hotels/hotel1.jfif'
import img4 from './../../assets/hotels/hotel4.jfif'
import img5 from './../../assets/hotels/hotel3.jfif'
import img6 from './../../assets/Hotel6.avif'
import img7 from './../../assets/Hotel7.avif'
import img8 from './../../assets/Hotel8.avif'
import img9 from './../../assets/Hotel9.avif'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FlightTracker from '../FlightTracker/FlightTracker'
import DetailsHeader from '../DetailsHeader/DetailsHeader'
function HotelViewer() {
  const [main, setMain] = useState(img1);
  const [show, setShow] = useState(false);
  const [right, setRight] = useState([img2, img3, img4, img5]);
  const [bottom, setBottom] = useState([img6, img7, img8, img9]);
  const handleRightSwitch = (id) => {
    let transfare = main;
    setMain(right[id]);
    let newArr = right;
    newArr[id] = transfare;
    setRight(newArr);
  }
  const handleBottomSwitch = (id) => {
    let transfare = main;
    setMain(bottom[id]);
    let newArr = bottom;
    newArr[id] = transfare;
    setBottom(newArr);
  }

  return (
    <Container>
      <FlightTracker country='Turkey' city='Istanbul' place='CVK Park Bosphorus Hotel Istanbul' />
      <DetailsHeader company='Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437' rate={4.2} daily="/night" location="CVK Park Bosphorus Hotel Istanbul" price="450" Favorit button='Book now' />

      <Row className='g-2 px-0'>
        <Col xl={6}>
          <img src={main} alt="hotel" className='w-100 h-100 object-fit-cover' />
        </Col>
        <Col xl={6}>
          <Container fluid className='position-relative px-0'>
            <Row className='g-2 px-0'>
              {
                right.map((item, index) => (
                  <Col xl={6} key={index} className='fa_hotelview' onClick={() => handleRightSwitch(index)}>
                    <img src={item} alt="hotel" className='w-100 h-100 object-fit-cover' />
                  </Col>
                ))
              }
            </Row>
            <button className='position-absolute px-3 py-2 bg-orange border-0 fa_absolute-val' onClick={() => setShow(!show)}>
              view {show ? 'less' : 'all'} photos
            </button>
          </Container>
        </Col>
        {
          show &&
          <>
            {
              bottom.map((item, index) => (
                <Col xl={3} key={index} className='fa_hotelview' onClick={() => handleBottomSwitch(index)}>
                  <img src={item} alt="hotel" className='w-100 h-100 object-fit-cover' />
                </Col>
              ))
            }
          </>
        }
      </Row>
    </Container>

  )
}

export default HotelViewer

/* <div className="col-lg-6">
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
</div> */

//     setMainImage(image);
//     setImages(newImages);
//   };
//   const handleShowAllImages = () => {
//     setShowAllImages(!showAllImages);
//   };
//   const visibleImages = showAllImages ? images : images.slice(0, 4);

//   return (
//     <div className='container'>

//       <FlightTracker country='Turkey' city='Istanbul' place='CVK Park Bosphorus Hotel Istanbul' />
//       <DetailsHeader company='CVK Park Bosphorus Hotel Istanbul' rate={4.2} location="CVK Park Bosphorus Hotel Istanbul" Favorit button='Book now' />

//       <Row className='my-5'>
//         <Col ><img src={mainImage} alt="Main Image" className="img-fluid w-100 h-100 mainImg" /></Col>
//         <Col className='maingrid'> {!showAllImages && (
//           <>
//             {visibleImages.map((image, index) => (
//               <div className={`item ${index < 4 ? 'gap-right-bottom' : 'gap-top'}`} key={index}>
//                 <div className="r w-100 h-100 imgItem ">
//                   <img
//                     src={image}
//                     alt={`Hotel ${index + 1}`}
//                     className="img-fluid w-100 h-100 item object-fit-cover"
//                     onClick={() => handleImageClick(image)}
//                   />
//                 </div>
//               </div>
//             ))}
//             <div className="col-md-12 text-center">
//               <button className="showBtn" onClick={handleShowAllImages}>View All Photos</button>
//             </div>
//           </>
//         )}</Col>
//       </Row>
//     </div>
// >>>>>>> cb990bda2a130bff676060679f3f3e8815fab35f