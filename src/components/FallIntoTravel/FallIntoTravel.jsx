import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../SectionTitle/SectionTitle'
import BigCard from '../HaCard/BigCard/BigCard'
import img1 from './../../assets/img1.jpg'
import img2 from './../../assets/img2.jpg'
import img3 from './../../assets/img3.jpg'
import img4 from './../../assets/img4.jpg'
import './FallIntoTravel.css'


function FallIntoTravel() {
    const images = [
        { Id: 1, imageUrl: img1 },
        { Id: 2, imageUrl: img2 },
        { Id: 3, imageUrl: img3 },
        { Id: 4, imageUrl: img4 },
    ]
    return (

        <section className='my-5'>
            <Container>
                <SectionTitle
                    title="Fall into travel" subTitle="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
                    button="See All" />
                <Row className='mt-4'>
                    <Col lg={5}>
                        <BigCard title="Backpacking Sri Lanka"
                            text="Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living."
                            price="700$"
                            button="Book Flight" />
                    </Col>
                    <Col lg={7}>
                        <Row className='g-3'>
                            {
                                images.map(img => (
                                    <Col lg={6} key={img.Id}>
                                        <img src={img.imageUrl} className="ha-img w-100 rounded-4" />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FallIntoTravel