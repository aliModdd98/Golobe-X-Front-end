import React, { useState } from 'react'
import './PhotoCardStyle.css'
import { BsFillSendFill } from './../../../node_modules/react-icons/bs'

function PhotoCard({ img, title, description, button_text }) {


    return (

        <>
            <div className="aj_card_photo">
                <img src={img} className='card_img' />
                <div className="aj_text_container">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button> <BsFillSendFill className='bs_fill' />{button_text}</button>

                </div>

            </div >
        </>
    )
}

export default PhotoCard