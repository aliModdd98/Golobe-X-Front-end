

// function PhotoCard({img, title, description, button_text }) {
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    AOS.init();

import './PhotoCardStyle.css'
import { BsFillSendFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import FlightsSearch from '../../pages/FlightsSearch'
import HotelSearch from '../../pages/HotelSearch'
function PhotoCard({ img, title, description, button_text, hotels }) {



    return (

        <>

            {
                hotels
                    ? <div className="aj_card_photo" data-aos="zoom-in-right">
                        <img src={img} className='card_img' />
                        <div className="aj_text_container">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <Link to="../HotelSearch">
                                <button> <BsFillSendFill className='bs_fill' />{button_text}</button>
                            </Link>


                        </div>

                    </div >
                    : <div className="aj_card_photo" data-aos="zoom-out">
                        <img src={img} className='card_img' />
                        <div className="aj_text_container">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <Link to="../FlightsSearch">
                                <button> <BsFillSendFill className='bs_fill' />{button_text}</button>
                            </Link>


                        </div>

                    </div >
            }

        </>
    )
    // =======
    // import './PhotoCard.css'
    // import { BsFillSendFill } from 'react-icons/bs'
    // import { Col } from 'react-bootstrap'

    // function PhotoCard({ img, title, description, button_text }) {

    //     return (
    //         <Col md={6}>
    //             <div className="aj_card_photo" style={{ backgroundImage: `url(${img})` }}>
    //                 <img src={img} className='w-100 h-100' />
    //                 <div className="aj_text_container px-5">
    //                     <h2 className='text-white mb-1'>{title}</h2>
    //                     <p className='text-white w-75 opacity-75 mb-2'>{description}</p>
    //                     <button><BsFillSendFill />{button_text}</button>
    //                 </div>
    //             </div>
    //         </Col>
    //     );
    // >>>>>>> main
}

export default PhotoCard