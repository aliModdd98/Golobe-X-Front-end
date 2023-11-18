import React from 'react'
import "./DestinationPhotosCard.css"

function DestinationPhotosCard({ img, title, description, price }) {
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

                <button> Book Flight </button>
            </div>

        </div>
    )
}

export default DestinationPhotosCard