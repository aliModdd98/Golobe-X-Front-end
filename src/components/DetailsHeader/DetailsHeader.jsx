import './DetailsHeader.css'
import { Container } from 'react-bootstrap'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillShareFill } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'

function DetailsHeader() {
    return (
        <section className='mb-4'>
            <Container>
                <div className='d-flex justify-content-between'>
                    <div className='fa_description-left'>
                        <h1 className='mb-3 fa_comapny_name-header'>Emirates A380 Airbus</h1>
                        <div className='d-flex align-items-center gap-2 mb-2'>
                            <FaLocationDot />
                            <p className='mb-0 opacity-75'>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                        </div>
                        <div className='d-flex align-items-center gap-2 fa_reviews'>
                            <button className='bg-transparent border-orange rounded-2 d-flex justify-content-center align-items-center'>4.2</button>
                            <p className='mb-0'><span>Very Good</span> 54 reviews</p>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-between align-items-end'>
                        <p className='mb-0 fa_price'>204 $</p>
                        <div className='d-flex gap-3 fa_actions-button'>
                            <button className='border-orange bg-transparent rounded-2 d-flex justify-content-center align-items-center'>
                                <AiOutlineHeart />
                            </button>
                            <button className='border-orange bg-transparent rounded-2 d-flex justify-content-center align-items-center'>
                                <BsFillShareFill />
                            </button>
                            <button className='px-5 bg-orange rounded-2 border-0'>Book now</button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default DetailsHeader