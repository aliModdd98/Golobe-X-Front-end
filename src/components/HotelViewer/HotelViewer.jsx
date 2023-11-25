import React, { useState } from 'react'
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

function HotelViewer() {
    const [mainImage, setMainImage] = useState(img1);
    const [images, setImages] = useState([img2,img3,img4,img5,img6,img7,img8,img9]);
    const [showAllImages, setShowAllImages] = useState(false);

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
        <div className="container">
        <div className="row">
          <div className="col-lg-6">
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
        </div>
      </div>
  )
}

export default HotelViewer