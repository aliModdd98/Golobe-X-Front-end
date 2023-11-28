

// function PhotoCard({img, title, description, button_text }) {


import './PhotoCardStyle.css'
import { BsFillSendFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import FlightsSearch from '../../pages/FlightsSearch'
function PhotoCard({ img, title, description, button_text }) {



    return (

        <>
            <div className="aj_card_photo">
                <img src={img} className='card_img' />
                <div className="aj_text_container">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Link to="../FlightsSearch">
                        <button> <BsFillSendFill className='bs_fill' />{button_text}</button>
                    </Link>


                </div>

            </div >
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