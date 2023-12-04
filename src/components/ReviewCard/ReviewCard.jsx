import './ReviewCard.css'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import google from './../../assets/google.svg';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function ReviewCard({ img, title, review, rate, userName, country }) {
    const [clicked, setClicked] = useState(false);
    return (
        <div className='d-inline-block bg-white rounded-4 CustomShadow maxWidthCard p-3 me-5' data-aos="flip-right">
            <div className='d-flex flex-column justify-content-between h-100' >

                <div className='cardHeader'>
                    <h2 className='mb-4'>{title}</h2>
                    <p className={`${(clicked)? '' : 'lineClamp'} opacity-50 mb-2`}>
                        {review}
                    </p>
                    <p className='text-end mb-0' onClick={() => setClicked(!clicked)}>
                        {
                            (clicked)? 'view less' : 'view more'
                        }
                    </p>
                </div>
                <div>
                    <div>
                        <div className='starts mb-4'>
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
                        </div>
                        <div className='userName'>
                            <p className='mb-0'>{userName}</p>
                            <p className='opacity-50'>{country}</p>
                            <div className='mb-5'>
                                <img src={google} alt="google" />
                                <span className='ms-2'>Google</span>
                            </div>
                        </div>
                    </div>
                    <img src={img} alt="photo" className='rounded-3 overflow-hidden' />
                </div>
            </div>
        </div>
    )
}

export default ReviewCard