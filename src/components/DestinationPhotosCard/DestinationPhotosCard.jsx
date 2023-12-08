import React from 'react'
import "./DestinationPhotosCard.css"
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col } from 'react-bootstrap';
AOS.init();
function DestinationPhotosCard({ img, title, description, price, hotels }) {
    return (
        <Col lg={3} className='aj_travel_card' key={1} data-aos="fade-left" >
            <div className='overflow-hidden rounded-3 h-100 d-flex align-items-end position-relative'>
                <img src={img} alt="img" className='w-100 h-100 object-fit-cover position-absolute z-0' />
                <div className='position-relative z-1 w-100 p-4 fa_grandient-background'>
                    <div className='aj_text_flex'>
                        <div>
                            <h3>{title}</h3>
                            <p>{description} </p>
                        </div>
                        <span>{price}</span>
                    </div>
                    <Link to={!hotels?"../FlightSListing":"../HotelListing"} className='d-block w-100 bg-orange text-black py-2 rounded-1 text-center'>
                        Book {!hotels?'Flight':'a Hotel'}
                    </Link>
                </div>
            </div>
        </Col>
    )
}

export default DestinationPhotosCard