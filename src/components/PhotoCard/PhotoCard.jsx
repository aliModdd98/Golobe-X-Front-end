import React, { useState } from 'react'
import './PhotoCardStyle.css'
import { BsFillSendFill } from './../../../node_modules/react-icons/bs'


  function PhotoCard({ img, title, description, button_text }) {
    // const [img, setimg] = useState(img)
    // style={{ backgroundImage: url({ img }) }}

    return (

        <>
            <div className="aj_card_photo">
                <img src={img} className='card_img' />
                <div className="aj_text_container">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button> <BsFillSendFill />{button_text}</button>

                </div>

            </div >
        </>
    )
}

export default PhotoCard