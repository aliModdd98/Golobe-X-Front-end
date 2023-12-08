import { Link } from 'react-router-dom'
import './Bill.css'


function Bill({flight, img, topTitle, title, rate, reviewsNumber, BaseFare, Discount, Taxes, ServiceFee}) {
    return (
        <div className='bg-white shadow-sm rounded-3 p-3 position-sticky fa_sticky-bill'>
            <div className='pb-3 border-bottom border-secondary-subtle d-flex gap-3'>
                <div className='fa_bill-photo rounded-4 overflow-hidden'>
                    <img src={img} alt="photo" className='w-100 h-100 object-fit-cover' />
                </div>
                <div className=' d-flex flex-column justify-content-between py-2'>
                    <div className='mb-4'>
                        <p className='mb-0 fa_bill-flight_class opacity-75'>{topTitle}</p>
                        <p className='mb-0 fa_bill-company'>{title}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <button className='bg-transparent rounded-2 d-flex justify-content-center align-items-center fa_rating-item border-orange'>
                        {rate}
                        </button>
                        <p className='mb-0 ms-2 fa_review-text'><span>Very Good</span> {reviewsNumber} reviews</p>
                    </div>
                </div>
            </div>
            <div className='py-3 border-bottom border-secondary-subtle'>
                <p className='mb-0 fa_bill-protector'>Your booking is protected by <span>golobe</span></p>
            </div>
            <div className='py-3 border-bottom border-secondary-subtle'>
                <p className='fa_price_detailes-header mb-2'>Price Details</p>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <p className='mb-0 fa_price-detail'>Base Fare</p>
                    <p className='mb-0 fa_bill-price'>{BaseFare} $</p>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <p className='mb-0 fa_price-detail'>Discount</p>
                    <p className='mb-0 fa_bill-price'>{Discount} $</p>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <p className='mb-0 fa_price-detail'>Taxes</p>
                    <p className='mb-0 fa_bill-price'>{Taxes} $</p>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <p className='mb-0 fa_price-detail'>Service Fee</p>
                    <p className='mb-0 fa_bill-price'>{ServiceFee} $</p>
                </div>
            </div>
            <div className='py-3'>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <p className='mb-0 fa_price-detail'>Total</p>
                    <p className='mb-0 fa_bill-price'>{BaseFare+Taxes+ServiceFee-Discount} $</p>
                </div>
            </div>
            <div>
                <Link to={flight?'/FlightTicket':'/HotelTicket'} className='w-100 d-block border-0 bg-orange rounded-2 py-3 text-black text-center'>
                    Book Now
                </Link>
            </div>
        </div>
    )
}

export default Bill