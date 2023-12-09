import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import './PhotoCardStyle.css'
import { BsFillSendFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap';
function PhotoCard({ img, title, description, button_text, hotels }) {



    return (
        <Col className="aj_card_photo overflow-hidden rounded-5 px-0" data-aos="zoom-out" style={{ '--img-url': `url(${img})` }}>
            <div className="aj_text_container py-5">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={hotels ? "../HotelSearch" : "../FlightsSearch"}>
                    <button> <BsFillSendFill className='bs_fill' />{button_text}</button>
                </Link>
            </div>
        </Col >
    )
}

export default PhotoCard