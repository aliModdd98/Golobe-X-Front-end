import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BigCard.css'
import { Link } from 'react-router-dom'
import FlightSListing from '../../../pages/FlightsListing'

  ;
function BigCard({ title, text, price, button }) {
  return (
    <Card className='d-flex h-100 border-0 bg-transparent'>
      <Card.Body className='cardBody d-flex flex-column justify-content-between'>
        <div>
          <div className='d-flex align-items-start justify-content-between w-100'>
            <Card.Title className='cardTitle'>{title}</Card.Title>
            <div className=' bg-white d-flex flex-column rounded p-1 border-0 Salary'>
              <span className='from'>From</span>
              <span className='price'>{price}</span>
            </div>
          </div>
          <Card.Text className='cardText'>{text}</Card.Text>
        </div>
        <Link to="../FlightSListing">
          <Button className='ha_btn border-0'>{button}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default BigCard;