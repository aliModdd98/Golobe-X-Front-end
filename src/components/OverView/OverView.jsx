import React from 'react'
import './OverViewStyle.css'
import { BsStars } from "react-icons/bs";
function OverView() {
    const Services = [
        {
            id: 0,
            icon: "4.5",
            rate: "Very Good",
            servName: "371 reviews"
        }, {
            id: 1,
            icon: <BsStars className='upSec' />,
            rate: "",
            servName: "Near park"
        }, {
            id: 2,
            icon: <BsStars className='upSec' />,
            rate: "",
            servName: "Near nightlife"
        }, {
            id: 3,
            icon: <BsStars className='upSec' />,
            rate: "",
            servName: "Near theater"
        }, {
            id: 4,
            icon: <BsStars className='upSec' />,
            rate: "",
            servName: "Clean Hotel"
        },]
    return (
        <div className='container containerOverView mt-5'>
            <h2>Overview</h2>
            <div className="text">
                Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.
            </div>

            <div className="row " >
                <div className="rowBoxes ">
                    {Services.map((serv) =>
                        <>
                            <div key={serv.id} className="borderBox">
                                <div className="upSec">
                                    <h2>{serv.icon} </h2>  </div>
                                <div className="bottomSec">
                                    <h4> {serv.rate}</h4>
                                    <p>{serv.servName}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div></div>
            <div className="line"></div>
        </div>
    )
}

export default OverView