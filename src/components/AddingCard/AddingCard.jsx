import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './AddingCard.css'
import { useState } from 'react';
import DropDownG from '../DropDown/DropDown';
const AddingCard = ({ onCloseClick, data, setData }) => {

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [expDate, setExpDate] = useState('');
  const [expDateError, setExpDateError] = useState('');
  const [cvc, setCvc] = useState('');
  const [cvcError, setCvcError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlPush = () => {
    let newData = {
      id: data.length,
      number: inputValue,
      date: expDate
    }
    setData(current => [...current, newData]);
    console.log(data);
    onCloseClick();
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();

    if (/^[0-9\s]+$/.test(value) || value === '') {
      if (value.length <= 19) {
        setInputValue(formattedValue);
        setErrorMessage('');
      } else {
        setErrorMessage('Please enter only 16 numbers.');
      }
    } else {
      setErrorMessage('Please enter only numbers.');
    }
  };
  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
    validateName(value);
  };

  const handleExpDateChange = (event) => {
    const { value } = event.target;
    setExpDate(value);
    validateExpDate(value);
  };

  const handleCvcChange = (event) => {
    const { value } = event.target;
    setCvc(value);
    validateCvc(value);
  };

  const validateName = (value) => {
    if (!value.trim()) {
      setNameError('Please enter a name.');
    } else {
      setNameError('');
    }
  };

  const validateExpDate = (value) => {
    if (!/^\d{2}\/\d{2}$/.test(value)) {
      setExpDateError('Please enter a valid expiration date (MM/YY).');
    } else {
      setExpDateError('');
    }
  };

  const validateCvc = (value) => {
    if (!/^\d{3,4}$/.test(value)) {
      setCvcError('Please enter a valid CVV/CVC.');
    } else {
      setCvcError('');
    }
  };

  return (
    <>
      <Container >
        <div className={`BigCard bg-white`}>
          <svg className='ms-auto' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" onClick={onCloseClick} >
            <path fillRule="evenodd" clipRule="evenodd" d="M14.7299 1.57214C14.8155 1.48672 14.8833 1.38531 14.9296 1.27367C14.976 1.16203 14.9998 1.04237 14.9999 0.921502C15 0.800637 14.9763 0.680941 14.9301 0.569248C14.8839 0.457555 14.8162 0.356052 14.7308 0.270536C14.6453 0.185019 14.5439 0.117163 14.4323 0.0708412C14.3206 0.0245197 14.201 0.000640007 14.0801 0.00056572C13.9593 0.000491433 13.8396 0.024224 13.7279 0.0704082C13.6162 0.116593 13.5147 0.184324 13.4291 0.269736L7.87875 5.82014L2.32995 0.269736C2.15724 0.0970267 1.923 -1.81979e-09 1.67875 0C1.4345 1.81978e-09 1.20026 0.0970267 1.02755 0.269736C0.854839 0.442445 0.757813 0.676688 0.757812 0.920936C0.757812 1.16518 0.854839 1.39943 1.02755 1.57214L6.57795 7.12094L1.02755 12.6697C0.942031 12.7553 0.874196 12.8568 0.827914 12.9685C0.781633 13.0802 0.757812 13.2 0.757812 13.3209C0.757812 13.4419 0.781633 13.5616 0.827914 13.6734C0.874196 13.7851 0.942031 13.8866 1.02755 13.9721C1.20026 14.1448 1.4345 14.2419 1.67875 14.2419C1.79969 14.2419 1.91944 14.2181 2.03118 14.1718C2.14291 14.1255 2.24443 14.0577 2.32995 13.9721L7.87875 8.42174L13.4291 13.9721C13.6019 14.1446 13.836 14.2415 14.0801 14.2413C14.3242 14.2412 14.5583 14.144 14.7308 13.9713C14.9032 13.7986 15.0001 13.5645 14.9999 13.3204C14.9998 13.0763 14.9027 12.8422 14.7299 12.6697L9.17955 7.12094L14.7299 1.57214Z" fill="black" />
          </svg>
          <h1>Add a new Card</h1>
          <div>
            <div className=''>
              <Form.Group className=" mb-3 position-relative border border-dark rounded-2 px-3 py-3 my-4 " controlId="formGridAddress2">
                <Form.Label className='bg-white position-absolute top-0 translate-middle-y px-2' >Card Number</Form.Label>
                <input type="text" className='fa_outline-none border-0 flex-grow-1' placeholder='4321 4321 4321 4321' value={inputValue}
                  onChange={handleInputChange} /> {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
                <svg className='img' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <g clipPath="url(#clip0_965_3362)">
                    <path d="M0.96 4.70587C0.429912 4.70587 0 5.13566 0 5.66587V18.8179C0 19.3481 0.430128 19.7779 0.96 19.7779H23.04C23.5701 19.7779 24 19.3481 24 18.8179V5.66587C24 5.13569 23.5699 4.70587 23.04 4.70587H0.96ZM14.334 9.19762C14.9181 9.19762 15.3862 9.32664 15.6847 9.44662L15.4807 10.7299L15.3457 10.6616C15.0677 10.5416 14.7105 10.4262 14.2177 10.4344C13.6279 10.4344 13.3553 10.6975 13.3553 10.9436C13.3518 11.221 13.6739 11.4039 14.2005 11.6779C15.0697 12.1005 15.4714 12.613 15.4658 13.2866C15.4541 14.5158 14.426 15.3101 12.8423 15.3101C12.1666 15.3027 11.5156 15.1596 11.1637 14.9944L11.3753 13.6684L11.5695 13.7629C12.0643 13.984 12.3847 14.0734 12.9877 14.0734C13.4208 14.0734 13.8856 13.8921 13.8893 13.4951C13.8921 13.2359 13.695 13.0511 13.1085 12.7609C12.537 12.4776 11.7794 12.003 11.7878 11.1521C11.7967 10.0011 12.8453 9.19762 14.334 9.19762ZM2.12249 9.38587H4.55474C4.88227 9.39826 5.1467 9.50371 5.238 9.85913L5.76226 12.5651C5.76233 12.5654 5.76216 12.5664 5.76226 12.5666L5.91974 13.3774L7.39649 9.38587H8.994L6.61949 15.2284L5.02349 15.2299L3.753 10.5154C4.50895 10.9158 5.15254 11.3792 5.52526 12.0169C5.42916 11.8151 5.30254 11.5873 5.14051 11.3629C4.95182 11.1015 4.54433 10.764 4.374 10.6204C3.78048 10.12 2.97444 9.71594 2.10374 9.50213L2.12249 9.38587ZM9.62926 9.39262H11.1915L10.2142 15.2261H8.652L9.62926 9.39262ZM18.453 9.39262H19.6365L20.8755 15.2261H19.455C19.455 15.2261 19.3141 14.556 19.2683 14.3516C19.045 14.3516 17.4834 14.3494 17.3077 14.3494C17.2483 14.5073 16.9853 15.2261 16.9853 15.2261H15.378L17.6513 9.87713C17.8122 9.49702 18.0865 9.39262 18.453 9.39262ZM18.5693 10.9616C18.4924 11.1786 18.3585 11.529 18.3675 11.5136C18.3675 11.5136 17.8866 12.7962 17.7608 13.1291L19.0245 13.1284C18.9071 12.5721 18.7896 12.0159 18.672 11.4597L18.5693 10.9617V10.9616Z" fill="#1434CB" />
                  </g>
                  <defs>
                    <clipPath id="clip0_965_3362">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.241882)" />
                    </clipPath>
                  </defs>
                </svg>
              </Form.Group>
            </div>
            <Container fluid>
              <Row className="ha-box my-4  mb-3">
                <Form.Group className=' position-relative border border-dark rounded-2 px-2 py-3' as={Col} controlId="formGridEmail">
                  <Form.Label className='bg-white position-absolute top-0 translate-middle-y px-2'>Exp.Date</Form.Label>
                  <input type="text" className='fa_outline-none border-0 flex-grow-1' placeholder='02/27' value={expDate} onChange={handleExpDateChange} />
                  {expDateError && <p className='errorMessage'>{expDateError}</p>}
                </Form.Group>
                <Form.Group className='position-relative border border-dark rounded-2 px-2 py-3' as={Col} controlId="formGridPassword">
                  <Form.Label className='bg-white position-absolute top-0 translate-middle-y px-2'>CVC</Form.Label>
                  <input type="text" className='fa_outline-none border-0 flex-grow-1' placeholder='123' value={cvc} onChange={handleCvcChange} />
                  {cvcError && <p className='errorMessage'>{cvcError}</p>}
                </Form.Group>
              </Row>
            </Container>
            <Form.Group className=" mb-3 position-relative border border-dark rounded-2 px-2 py-3 my-4" controlId="formGridAddress2">
              <Form.Label className='bg-white position-absolute top-0 translate-middle-y px-2'>Name on Card</Form.Label>
              <input type="text" className='fa_outline-none border-0 flex-grow-1' placeholder='John Doe' value={name} onChange={handleNameChange} />
              {nameError && <p className='errorMessage'>{nameError}</p>}
            </Form.Group>
            <div className='d-flex flex-row w-100 '>
              <div className='position-relative d-flex border border-dark rounded-2 px-2 py-2  w-100'>
                <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                  Country or Region
                </label>
                <DropDownG />
              </div>
            </div>
            <div className='d-flex align-items-center py-3'>
              <input type="checkbox" id='agree' />
              <label htmlFor="agree" className='ms-2 fa_class-lable'> Securely save my information for 1-click checkout</label>
            </div>
            <button className='w-100 bg-orange border-0 py-3 rounded-2' onClick={handlPush}>
              Add Card
            </button>
            <p className='para'>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AddingCard