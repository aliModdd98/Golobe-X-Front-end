import './AddPayStyle.css'
import img1 from './../../assets/Rectangle20.png'
import img2 from './../../assets/Rectangle30.png'
import img3 from './../../assets/Rectangle40.jpg'
import { IoIosArrowBack } from 'react-icons/io'
import logo from './../../assets/Logo.svg'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import DropDownG from '../DropDown/DropDown'

function AddPay() {
  const [activeIndex, setActiveIndex] = useState(null);
  const getImageSource = () => {
    const imageSources = [img1, img2, img3];
    const defaultImageSource = img1;

    if (activeIndex >= 0 && activeIndex < imageSources.length) {
      return imageSources[activeIndex];
    } else {
      return defaultImageSource;
    }
  };

  const handleActive = (index) => {
    setActiveIndex(index);

  };
  useEffect(() => {
    const timer = setTimeout(() => {

      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="container containerPay">
        <div className="Sign">
          <div className="leftSec">
            <div className="logoSign"><img src={logo} alt="logo" className='logoS' /></div>
            <div className="back ">
              <IoIosArrowBack /> <span className='backSize'>Back </span>
            </div>
            <h1>Add a payment method</h1>
            <p >Let’s get you all st up so you can access your personal account.</p>

            <form >
              <form>
                <div className='d-flex flex-row w-100 my-4'>
                  <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3  w-100'>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                      Card Number
                    </label>
                    <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='4321 4321 4321 4321' />
                  </div>

                </div>
                <div className='d-flex flex-row w-100 my-4'>

                  <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3  w-100'>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                      Exp. Date
                    </label>
                    <input
                      type="text"
                      className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100'
                      placeholder='02/27'
                    />
                  </div>
                  <div className='mx-3'></div>
                  <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3  w-100'>
                    <label className='bg-white position-absolute top-0 translate-middle-y'>
                      CVC
                    </label>
                    <input
                      type="text"
                      className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100 px-2'
                      placeholder='123'
                    />
                  </div>
                </div>
                <div className='d-flex flex-row w-100 my-4'>
                  <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3  w-100'>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                      Name on Card
                    </label>
                    <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='Ali Mohammad' />
                  </div>

                </div>

                <div className='d-flex flex-row w-100 '>
                  <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-2  w-100'>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                      Country or Region
                    </label>
                    <DropDownG />
                  </div>

                </div>

                <div className='d-flex align-items-center'>
                  <div className='col-12'>
                    <div className='form-check'>
                      <input type='checkbox' id='forgetPass' className='form-check-input' />
                      <label htmlFor='forgetPass' className='form-check-label forgetLine'>
                        Securely save my information for 1-click checkout
                      </label>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-block btn-orange w-100">Add payment method</button>

                <p className='terms'>By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your card for this payment and future payments in accordance with their terms. You can always cancel your subscription.</p>
              </form></form></div>

          <div className="rightSec">
            <img src={getImageSource()} alt="viewer" className="viewImg" />
            <div className="Slider">
              <span
                className={`circle ${activeIndex === 0 ? 'active' : ''}`}
                style={{
                  width: activeIndex === 0 ? '20px' : '',
                  borderRadius: activeIndex === 0 ? '5px' : '50%'
                }}
                onClick={() => handleActive(0)}
              ></span>
              <span
                className={`circle ${activeIndex === 1 ? 'active' : ''}`}
                style={{
                  width: activeIndex === 1 ? '20px' : '',
                  borderRadius: activeIndex === 1 ? '5px' : '50%'
                }}
                onClick={() => handleActive(1)}
              ></span>
              <span
                className={`circle ${activeIndex === 2 ? 'active' : ''}`}
                style={{
                  width: activeIndex === 2 ? '20px' : '',
                  borderRadius: activeIndex === 2 ? '5px' : '50%'
                }}
                onClick={() => handleActive(2)}
              ></span>
            </div>
          </div>

        </div></div>


    </>
  )
}

export default AddPay