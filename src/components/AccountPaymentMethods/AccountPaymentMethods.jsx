import {  Col, Container, Row } from 'react-bootstrap'
import './AccountPaymentMethods.css'
import AddingCard from '../AddingCard/AddingCard';
import { useState } from 'react';
import recycle from './../../assets/Bin.png'
import visa from './../../assets/Visa.png'
function AccountPaymentMethods() {
  const [showCard, setShowCard] = useState(false);

  const handleCardClick = () => {
    if (!showCard) {
      setShowCard(true);
    }
  };
  const handleCloseClick = () => {
    setShowCard(false);
  };
 
  return (
    <Container>
    <Row>
      <Col>  <div className='PaymentCard my-4'   >
       <div className="upCard"><span>**** **** ****</span><span><img className='bin' src={recycle}/></span></div>
<div className="cardNum">4321</div>
<div className="cardDown"><div className="leftCard"><span className='valid'>Valid Thru</span><span>02/27</span></div>
<div className="rightCard"><img src={visa} alt="Visa" /></div></div>
        </div></Col>
      <Col>
      <div className='dash_border PaymentAdd my-4 '   >
        <svg className='plus' xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none" onClick={handleCardClick}>
  <path d="M56 32.917C56 19.667 45.25 8.91699 32 8.91699C18.75 8.91699 8 19.667 8 32.917C8 46.167 18.75 56.917 32 56.917C45.25 56.917 56 46.167 56 32.917Z" stroke="#FF8500" strokeWidth="2" strokeMiterlimit="10"/>
  <path d="M32 22.917V42.917M42 32.917H22" stroke="#FF8500" strokeWidth="2" strokeLinejoin="round"/>
</svg>
<p>Add a new card</p>
        </div>
        {showCard ? (
        <div className="overlay">
          <div className="card-overlay" onClick={handleCardClick}>
            <AddingCard onCloseClick={handleCloseClick} />
          </div>
        </div>
      ) : ""}
       
      </Col>
      <Col></Col> 
    </Row>
    <Row></Row>
  </Container>
  )
}

export default AccountPaymentMethods