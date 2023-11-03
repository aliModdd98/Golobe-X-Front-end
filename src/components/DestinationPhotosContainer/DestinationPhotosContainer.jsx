import React from 'react'
import "./DestinationPhotosContainer.css"
import DestinationPhotosCard from "./../DestinationPhotosCard/DestinationPhotosCard"
import image1 from "./../../assets/place1.png"
import image2 from "./../../assets/place2.png"
import image3 from "./../../assets/place3.png"
import image4 from "./../../assets/place4.png"
import image5 from "./../../assets/place5.png"
import image6 from "./../../assets/place6.png"
import image7 from "./../../assets/place7.png"
import image8 from "./../../assets/place8.png"
import { useState } from 'react'
import TitleContainer from '../TitleContainer/TitleContainer'
function DestinationPhotosContainer() {
    const data = [
        {
            id: "1",
            img: image1,
            title: 'Melbourne',
            description: 'An amaizing journey ',
            price: '700$',
        },


        {
            id: "2",
            img: image2,
            title: 'Paris',
            description: ' A Paris Adventure',
            price: '600 $',
        },
        {


            id: "3",
            img: image3,
            title: 'London',
            description: ' London eye adventure',
            price: '350 $',
        },
        {
            id: "4",
            img: image4,
            title: 'Columbia',
            description: ' Amazing streets',
            price: '700 $',
        },
        {
            id: "5",
            img: image5,
            title: 'New york',
            description: ' awsome city',
            price: '900 $',
        },
        {
            id: "6",
            img: image6,
            title: 'berlin',
            description: ' Amazing old buildings',
            price: '700 $',
        },
        {
            id: "7",
            img: image7,
            title: 'italy',
            description: 'beautiful Rome',
            price: '500 $',
        },
        {
            id: "8",
            img: image8,
            title: 'switzerland',
            description: ' awesome nature',
            price: '650 $',
        }


    ]


    const [clicked, setClicked] = useState(false);
    return (
        <div className='destination_section'>
            <TitleContainer button={(clicked) ? 'see less' : 'See All'}
                stateValue={clicked}
                setState={setClicked} />

            <div className='photo_travel_container'>
                {
                    data.slice(0, 4).map((e) => {
                        return (
                            <DestinationPhotosCard
                                img={e.img}
                                title={e.title}
                                description={e.description}
                                price={e.price}
                            />

                        );
                    })
                }
                {
                    (clicked)
                        ? data.slice(4).map((e) => {
                            return (
                                <DestinationPhotosCard
                                    img={e.img}
                                    title={e.title}
                                    description={e.description}
                                    price={e.price}
                                />
                            );
                        })
                        : null
                }

            </div>
        </div>


    )
}

export default DestinationPhotosContainer