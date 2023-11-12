import React from 'react'
import PhotoCard from '../PhotoCard/PhotoCard'
import image1 from './../../assets/flights.png'
import image2 from './../../assets/hotels.png'
import { Container, Row } from 'react-bootstrap'
function PhotosContainer() {

    const data = [
        {
            id: "1",
            img: image1,
            title: 'Flights',
            description: 'Search Flights & Places Hire to our most popular destinations',
            button_text: 'Show Flights',
        },
        {
            id: "2",
            img: image2,
            title: 'Hotels',
            description: 'Search Flights & Places Hire to our most popular destinations',
            button_text: 'Show Hotels',
        }
    ]


    return (
        <section>
            <Container>
                <Row>
                    {
                        data.map((e, index) => {
                            return (
                                <PhotoCard
                                    key={index}
                                    img={e.img}
                                    title={e.title}
                                    description={e.description}
                                    button_text={e.button_text}
                                />

                            );
                        })
                    }
                </Row>
            </Container>
        </section>

    )
}

export default PhotosContainer;