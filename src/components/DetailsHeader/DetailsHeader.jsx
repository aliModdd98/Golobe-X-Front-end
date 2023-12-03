import './DetailsHeader.css'
import { Container } from 'react-bootstrap'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'



function DetailsHeader({flight, company, rate, Favorit, button, location, price ,daily}) {

    return (
        <section className='mb-5'>
            <Container>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='fa_description-left'>
                        <h1 className='mb-3 fa_comapny_name-header'>{company} {"    "}</h1>
                        <div className='d-flex align-items-center gap-2 mb-2'>
                            <FaLocationDot />
                            <p className='mb-0 opacity-75'>{location}</p>
                        </div>
                        {
                            rate && <div className='d-flex align-items-center gap-2 fa_reviews'>
                                <button className='bg-transparent border-orange rounded-2 d-flex justify-content-center align-items-center'>{rate}</button>
                                <p className='mb-0'><span>Very Good</span> 54 reviews</p>
                            </div>
                        }
                    </div>
                    <div className='d-flex flex-column justify-content-between align-items-end'>
                        <p className='mb-0 fa_price'>{price} $ <span className='daily'>{daily}</span></p>
                        <div className='d-flex gap-3 fa_actions-button'>
                            {
                                Favorit && <button className='fa_favorite border-orange bg-transparent rounded-2 d-flex justify-content-center align-items-center'>
                                    <AiOutlineHeart />
                                </button>
                            }
                            <button className='fa_share border-orange bg-transparent rounded-2 d-flex justify-content-center align-items-center'>
                                <BsFillShareFill />
                            </button>

                            <Link to={flight?'/BookingDetails': '/BookingDetailsHotel'}>
                                <button className='fa_button-download px-5 bg-orange rounded-2 border-0'>{button}</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default DetailsHeader