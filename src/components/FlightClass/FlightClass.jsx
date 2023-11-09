import { Col, Container, Row } from 'react-bootstrap'
import './FlightClass.css'
import image1 from './../../assets/flightDetailes-1.jpg'
import image2 from './../../assets/flightDetailes-2.jpg'
import image3 from './../../assets/flightDetailes-3.jpg'
import image4 from './../../assets/flightDetailes-4.jpg'
import image5 from './../../assets/flightDetailes-5.jpg'
import image6 from './../../assets/flightDetailes-6.jpg'
import image7 from './../../assets/flightDetailes-7.jpg'
import { useState } from 'react'
import { IoGitMerge } from 'react-icons/io5'

function FlightClass() {
    const [selected, setSelected] = useState(6)

    
    const imgs = [
        {
            id: 0,
            img: image1
        },
        {
            id: 1,
            img: image2
        },
        {
            id: 2,
            img: image3
        },
        {
            id: 3,
            img: image4
        },
        {
            id: 4,
            img: image5
        },
        {
            id: 5,
            img: image6
        },
        {
            id: 6,
            img: image7
        },
        {
            id: 7,
            img: image2
        },
        {
            id: 8,
            img: image1
        }
    ]

    return (
        <section>
            <Container>
                <div className='fa_big-sleected_img fa_transition fa_background-img mb-4 rounded-3' style={{'--slelecte-img': `url(${imgs[selected].img})`}}></div>
                <div className='d-flex justify-content-between align-items-center mb-4'>
                    <h1 className='fa_class-title mb-0'>Basic Economy Features</h1>
                    <div className='d-flex align-items-center gap-3'>
                        <div className='d-flex align-items-center'>
                            <input type="checkbox" id='Econonmy' />
                            <label htmlFor="Econonmy" className='ms-2 fa_class-lable'>Economy</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input type="checkbox" id='First' />
                            <label htmlFor="First" className='ms-2 fa_class-lable'>First Class</label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input type="checkbox" id='Busines' />
                            <label htmlFor="Busines" className='ms-2 fa_class-lable'>Busines Class</label>
                        </div>
                    </div>
                </div>
                <Row>
                    {
                        imgs.map((item) => (
                            <Col key={item.id}>
                                <div 
                                className='fa_background-img fa_select-img rounded-2' 
                                style={{ '--slelecte-img': `url(${item.img})` }}
                                onClick={() => setSelected(item.id)}>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default FlightClass