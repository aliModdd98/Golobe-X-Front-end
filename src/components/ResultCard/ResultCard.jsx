import { Col, Row } from 'react-bootstrap'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaHeart } from "react-icons/fa";
import './ResultCard.css'
import { useState } from 'react';

function ResultCard({res}) {

    const [favorite, setFavorite] = useState(res.favorite);

    return (
        <div className='bg-white rounded-3 px-2 py-3 mb-4 shadow-sm'>
            <Row>
                <Col lg={3}>
                    <img src={res.img} alt="airline company logo" className='w-100' />
                </Col>
                <Col lg={9} className='pe-5'>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div className='d-flex align-items-center'>
                            <button className='bg-transparent rounded-2 d-flex justify-content-center align-items-center fa_rating-item border-orange'>
                                {res.rate}
                            </button>
                            <p className='mb-0 ms-2 fa_review-text'><span>Very Good</span> {res.reviewsNumber} reviews</p>
                        </div>
                        <div>
                            <p className='mb-0 fa_review-text'>starting from</p>
                            <p className='mb-0 fa_resulte_card-price text-end'>{res.startingPrice} $</p>
                        </div>
                    </div>
                    <div className='border-bottom border-secondary-subtle mb-3'>
                        <div className='d-flex gap-2 align-items-start mb-3'>
                            <input type="checkbox" className='mt-1 fa_result_card-checkbox' />
                            <div className='d-flex align-items-start gap-4'>
                                <div>
                                    <p className='mb-0 fa_result_card-timing'>{res.firstTrip.leaving} - {res.firstTrip.landing}</p>
                                    <p className='mb-0 fa_result_card-company'>{res.firstTrip.leavingContry}</p>
                                </div>
                                <p className='mb-0 fa_result_card-trip_status'>{res.firstTrip.flightStatus}</p>
                                <div>
                                    <p className='mb-0 fa_result_card-timing opacity-78'>{res.firstTrip.flightDuration}</p>
                                    <p className='mb-0 fa_result_card-company'>{res.firstTrip.landingCountry}</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex gap-2 align-items-start mb-3'>
                            <input type="checkbox" className='mt-1 fa_result_card-checkbox' />
                            <div className='d-flex align-items-start gap-4'>
                                <div>
                                    <p className='mb-0 fa_result_card-timing'>{res.secondTrip.leaving} - {res.secondTrip.landing}</p>
                                    <p className='mb-0 fa_result_card-company'>{res.secondTrip.leavingContry}</p>
                                </div>
                                <p className='mb-0 fa_result_card-trip_status'>{res.secondTrip.flightStatus}</p>
                                <div>
                                    <p className='mb-0 fa_result_card-timing opacity-78'>{res.secondTrip.flightDuration}</p>
                                    <p className='mb-0 fa_result_card-company'>{res.secondTrip.landingCountry}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <button className='fa_favorite-resutls border-orange bg-transparent rounded-2 d-flex justify-content-center align-items-center'
                        onClick={() => setFavorite(!favorite)}>
                            {
                                (favorite)
                                ? <FaHeart />
                                : <AiOutlineHeart />
                            }
                        </button>
                        <button className='flex-grow-1 bg-orange border-0 rounded-2 fa_more_results-button'>
                            View Deals
                        </button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ResultCard