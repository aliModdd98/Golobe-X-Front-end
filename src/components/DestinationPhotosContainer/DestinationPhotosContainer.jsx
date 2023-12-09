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
import SectionTitle from '../SectionTitle/SectionTitle'
import { Container, Row } from 'react-bootstrap'
function DestinationPhotosContainer({ hotels }) {

    const data = [
        {
            id: "1",
            img: image1,
            title: 'Melbourne',
            description: 'An amazing journey ',
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
            description: ' Amazing city',
            price: '900 $',
        },
        {
            id: "6",
            img: image6,
            title: 'Berlin',
            description: ' Amazing old buildings',
            price: '700 $',
        },
        {
            id: "7",
            img: image7,
            title: 'Italy',
            description: ' Beautiful Rome',
            price: '500 $',
        },
        {
            id: "8",
            img: image8,
            title: 'Switzerland',
            description: ' Awesome nature',
            price: '650 $',
        },
    ]

    const [Flight, setflight] = useState(!hotels);
    const [clicked, setClicked] = useState(false);

    return (
        <div className='mt-5'>
            <Container>
                <SectionTitle
                    title='Fall into travel'
                    subTitle="SearGoing somewhere to celebrate this season? Whether you're going home or somewhere to roam , we've got the travel tools to get you to your destination"
                    button={(clicked) ? 'see less' : 'see more'}
                    stateV={clicked}
                    setState={setClicked} />
                <Row>
                    {
                        !clicked
                            ? data.slice(0, 4).map((e) => {
                                return (
                                    <DestinationPhotosCard
                                        key={e.id}
                                        img={e.img}
                                        title={e.title}
                                        description={e.description}
                                        price={e.price}
                                        hotels={hotels}
                                    />
                                );
                            })
                            : data.map((e) => {
                                return (
                                    <DestinationPhotosCard
                                        key={e.id}
                                        img={e.img}
                                        title={e.title}
                                        description={e.description}
                                        price={e.price}
                                        hotels={hotels}
                                    />
                                );
                            })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default DestinationPhotosContainer