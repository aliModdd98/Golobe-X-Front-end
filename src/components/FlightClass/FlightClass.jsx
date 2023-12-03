import { Col, Container, Row } from 'react-bootstrap'
import './FlightClass.css'
import { useState } from 'react'

function FlightClass({imgs}) {
    const [selected, setSelected] = useState(6)

    return (
        <section>
            <Container>
                <div className='fa_big-sleected_img fa_transition fa_background-img mb-4 rounded-3' style={{'--selected-img': `url(${imgs[selected].img})`}}></div>
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
                                style={{ '--selected-img': `url(${item.img})` }}
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