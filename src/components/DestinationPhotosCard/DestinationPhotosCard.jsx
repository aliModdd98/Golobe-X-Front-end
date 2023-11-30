import React from 'react'
import "./DestinationPhotosCard.css"
import { Link } from 'react-router-dom'
import FlightSListing from '../../pages/FlightsListing'
import HotelListing from '../../pages/HotelListing'
import { useState } from "react"
function DestinationPhotosCard({ img, title, description, price, hotels }) {
    const [Flight, setflight] = useState(!hotels);
    const handleclick = (value) => {
        (Flight == value) ? setflight(!Flight) : null;
        console.log(Flight);
    }

    return (
        <div className='aj_travel_card'>
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