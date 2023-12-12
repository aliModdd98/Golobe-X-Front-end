import { Col, Row } from 'react-bootstrap'
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
import { FaHeart } from "react-icons/fa";
import './ResultCard.css'
import { useState } from 'react';
import FlightCardDetails from '../FlightCardDetails/FlightCardDetails';
import { FaLocationDot } from 'react-icons/fa6';
import { RiCupFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import HotelListingDetailes from "../../pages/HotelListingDetailes"

function ResultCard({ flight, img, favoriteActive, rate, reviewsNumber, startingPrice, firstTrip, secondTrip, title, location, aminties }) {

    const [favorite, setFavorite] = useState(favoriteActive);

    return (
        <div className='bg-white rounded-3 mb-4 shadow-sm overflow-hidden'>
            <Row>
                <Col lg={flight ? 3 : 4} className={`${flight ? 'py-4 px-4' : ''}`}>
                    <img src={img} alt="airline company logo" className={`w-100 ${flight ? '' : 'h-100 object-fit-cover'}`} />
                </Col>
                <Col lg={flight ? 9 : 8} className='py-3 pe-5'>
                    <div className={`d-flex justify-content-between mb-3 ${flight ? 'align-items-center' : 'border-bottom border-secondary-subtle pb-4 mb-4'}`}>
                        <div>
                            {
                                !flight &&
                                <>
                                    <p className='fa_result_card-title mb-2'>{title}</p>
                                    <p className='mb-1 d-flex align-items-center gap-2 fa_hotel_location'>
                                        <FaLocationDot />
                                        <span className='opacity-75'>{location}</span>
                                    </p>
                                    <div className=' mb-2 d-flex align-items-center'>
                                        <span className='text-orange me-2'>
                                            {(() => {
                                                let starts = [];
                                                for (let index = 1; index <= 5; index++) {
                                                    if (index <= rate) {
                                                        starts.push(<AiFillStar key={index} />)
                                                    } else {
                                                        starts.push(<AiOutlineStar key={index} />)
                                                    }
                                                }
                                                return starts;
                                            }
                                            )()}
                                        </span>
                                        <p className='mb-0 me-4 fa_hotal-rate'>
                                            {rate} Star Hotel
                                        </p>
                                        <p className='mb-0 fa_hotal-rate d-flex align-items-center gap-2'>
                                            <RiCupFill />
                                            {aminties}+ Aminities
                                        </p>
                                    </div>
                                </>
                            }
                            <div className='d-flex align-items-center'>
                                <button className='bg-transparent rounded-2 d-flex justify-content-center align-items-center fa_rating-item border-orange'>
                                    {rate}
                                </button>
                                <p className='mb-0 ms-2 fa_review-text'><span>Very Good</span> {reviewsNumber} reviews</p>
                            </div>
                        </div>
                        <div>
                            <p className='mb-0 fa_review-text'>starting from</p>
                            <p className='mb-0 fa_resulte_card-price text-end'>{startingPrice} $ <span className='fs-5'>{!flight && '/night'}</span></p>
                            {!flight && <p className='mb-0 fa_review-text text-end'>excl. tax</p>}
                        </div>
                    </div>
                    {
                        flight && <div className='border-bottom border-secondary-subtle mb-3'>
                            <FlightCardDetails firstTrip={firstTrip} />
                            <FlightCardDetails firstTrip={secondTrip} />
                        </div>
                    }
                    <div className='d-flex gap-3'>
                        <button className='fa_favorite-resutls border-orange bg-transparent rounded-2 d-flex justify-content-center align-items-center'
                            onClick={() => setFavorite(!favorite)}>
                            {
                                (favorite)
                                    ? <FaHeart />
                                    : <AiOutlineHeart />
                            }
                        </button>

                        {
                            (flight)
                                ?
                                <Link to="../FlightDetails" className='flex-grow-1 bg-orange border-0 rounded-2 fa_more_results-button' >  View Deals</Link>
                                :
                                <Link to="../HotelListingDetailes" className='flex-grow-1 bg-orange border-0 rounded-2 fa_more_results-button' >  View Place</Link>
                        }

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ResultCard