import './Bill.css'
import img from './../../assets/flightDetailes-7.jpg'

function Bill() {
    return (
        <div className='bg-white shadow-sm rounded-3 p-3 position-sticky fa_sticky-bill'>
            <div className='pb-3 border-bottom border-secondary-subtle d-flex gap-3'>
                <div className='fa_bill-photo rounded-4 overflow-hidden'>
                    <img src={img} alt="photo" className='w-100 h-100 object-fit-cover' />
                </div>
                <div className='flex-grow-1 d-flex flex-column justify-content-between py-2'>
                    <div>
                        <p className='mb-0 fa_bill-flight_class opacity-75'>Economy</p>
                        <p className='mb-0 fa_bill-company'>Emirates A380 Airbus</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <button className='bg-transparent rounded-2 d-flex justify-content-center align-items-center fa_rating-item border-orange'>
                            4.2
                        </button>
                        <p className='mb-0 ms-2 fa_review-text'><span>Very Good</span> 54 reviews</p>
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
                    <p className='mb-0 fa_bill-price'>400 $</p>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <p className='mb-0 fa_price-detail'>Discount</p>
                    <p className='mb-0 fa_bill-price'>400 $</p>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <p className='mb-0 fa_price-detail'>Taxes</p>
                    <p className='mb-0 fa_bill-price'>400 $</p>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <p className='mb-0 fa_price-detail'>Service Fee</p>
                    <p className='mb-0 fa_bill-price'>400 $</p>
                </div>
            </div>
            <div className='py-3'>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <p className='mb-0 fa_price-detail'>Total</p>
                    <p className='mb-0 fa_bill-price'>400 $</p>
                </div>
            </div>
        </div>
    )
}

export default Bill