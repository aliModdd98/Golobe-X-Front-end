import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import SectionTitle from '../SectionTitle/SectionTitle'
import map from './../../assets/OrangMap.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function FlightMap() {
    const [showAlert, setShowAlert] = useState(true);

  const handleClick = () => {
    if (showAlert) {
      alert("This section is not enabled");
      setShowAlert(false);
    }
  };
   
    return (
        <>
        <div onMouseOver={() => handleClick()}>
            <Container className='mt-5' >
                <SectionTitle title="Let's go places together" subTitle="Discover the latest offers and news and start planning your next trip with us." button="See All" />
            </Container>
            <Container fluid className='px-0 mt-4' data-aos="zoom-in">
                <img src={map} alt="map" className='w-100' />
            </Container></div>
        </>
    )
}

export default FlightMap