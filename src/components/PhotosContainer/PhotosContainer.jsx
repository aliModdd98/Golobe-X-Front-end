import React from 'react'
import "./PhotosContainerStyle.css"
import { BsFillSendFill } from './../../../node_modules/react-icons/Bs'
function PhotosContainer() {
    return (
        <div className="aj_photo_container">
            <div className="aj_first_photo">
                <div className="aj_text_container">
                    <h2>Flights</h2>
                    <p>Search Flights & Places Hire to our most popular destinations</p>
                    <button> <BsFillSendFill />Show Flights</button>
                </div>

            </div>
            <div className="aj_second_photo">
                <div className="aj_text_container">
                    <h2>Flights</h2>
                    <p>Search Flights & Places Hire to our most popular destinations</p>
                    <button> <BsFillSendFill />Show Flights </button>
                </div>

            </div>
        </div>
    )
}

export default PhotosContainer;