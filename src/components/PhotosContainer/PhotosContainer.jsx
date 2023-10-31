import React from 'react'
import "./PhotosContainerStyle.css"
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
function PhotosContainer() {
    return (
        <div class="aj_photo_container">
            <div className="aj_first_photo">
                <div className="aj_text_container">
                    <h2>Flights</h2>
                    <p>Search Flights & Places Hire to our most popular destinations</p>
                    <button><i className="fa-solid fa-paper-plane" style="color: #000000;"></i>Show Flights</button>
                </div>

            </div>
            <div className="aj_second_photo">
                <div className="aj_text_container">
                    <h2>Flights</h2>
                    <p>Search Flights & Places Hire to our most popular destinations</p>
                    <button><i className="fa-solid fa-paper-plane" style="color: #000000;"></i>Show Flights</button>
                </div>

            </div>
        </div>
    )
}

export default PhotosContainer