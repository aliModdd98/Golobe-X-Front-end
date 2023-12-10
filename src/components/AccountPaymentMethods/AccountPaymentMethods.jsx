import { Card, Col, Container, Row } from 'react-bootstrap'
import './AccountPaymentMethods.css'
import AddingCard from '../AddingCard/AddingCard';
import { useState } from 'react';
import recycle from './../../assets/Bin.png'
import visa from './../../assets/Visa.png'
function AccountPaymentMethods() {
  const [showCard, setShowCard] = useState(false);
  const [cards, setCards] = useState(
    [
      {
        id: 0,
        number: '**** **** **** 4321',
        date: '02/27'
      },
      {
        id: 1,
        number: '**** **** **** 1234',
        date: '07/18'
      }
    ]
  );

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
      <p className='mb-4 mt-4 fa_tab-title'>Payment methods</p>
      <Row className='bg-white rounded-5 shadow-sm p-4 g-3'>
        {
          cards.map(card => (
            <Col xl={4} className='ps-0 mb-2'>
              <div className='PaymentCard'>
                <div className="upCard"><span>**** **** ****</span><span><img className='bin' src={recycle} onClick={() => {setCards(current => current.filter(cardI => cardI.id != card.id ))}} /></span></div>
                <div className="cardNum">{card.number.slice(-4)}</div>
                <div className="cardDown"><div className="leftCard"><span className='valid'>Valid Thru</span><span>{card.date}</span></div>
                  <div className="rightCard"><img src={visa} alt="Visa" /></div>
                </div>
              </div>
            </Col>
          ))
        }
        <Col xl={4} className='mb-2'>
          <div className='dash_border PaymentAdd'>
            <svg className='plus' xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none" onClick={handleCardClick}>
              <path d="M56 32.917C56 19.667 45.25 8.91699 32 8.91699C18.75 8.91699 8 19.667 8 32.917C8 46.167 18.75 56.917 32 56.917C45.25 56.917 56 46.167 56 32.917Z" stroke="#FF8500" strokeWidth="2" strokeMiterlimit="10" />
              <path d="M32 22.917V42.917M42 32.917H22" stroke="#FF8500" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <p>Add a new card</p>
          </div>
          {showCard ? (
            <div className="overlay">
              <div className="card-overlay" onClick={handleCardClick}>
                <AddingCard data={cards} setData={setCards} onCloseClick={handleCloseClick} />
              </div>
            </div>
          ) : ""}

        </Col>
      </Row>
      <Row></Row>
    </Container>
  )
}

export default AccountPaymentMethods