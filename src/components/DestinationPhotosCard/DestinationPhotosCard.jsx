import React from 'react'
import "./DestinationPhotosCard.css"
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { useState } from "react"
function DestinationPhotosCard({ img, title, description, price, hotels }) {
    const [Flight, setflight] = useState(!hotels);
    // const handleclick = (value) => {
    //     (Flight == value) ? setflight(!Flight) : null;
    //     console.log(Flight);
    // }

    return (
        <div className='aj_travel_card' key={1} data-aos="fade-left" >
            <img src={img} alt="" />
            <div className='aj_travel_card_text'>
                <div className='aj_text_flex'>
                    <div>
                        <h3>{title}</h3>
                        <p>{description} </p>
                    </div>

                    <span>{price}</span>
                </div>


                {
                    (Flight)

                        ? <Link to="../FlightSListing">
                            <button> Book Flight </button></Link>
                        : <Link to="../HotelListing">
                            <button> Book a Hotel</button></Link>
                }


            </div>

        </div>
    )
}

export default DestinationPhotosCard