
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import './SignStyle.css'
import img1 from './../../assets/Rectangle20.png'
import img2 from './../../assets/Rectangle30.png'
import img3 from './../../assets/Rectangle40.jpg'
import logo from './../../assets/Logo.svg'
import { useEffect, useState } from 'react';
import { Col, Row } from "react-bootstrap";
import facebook from './../../assets/facebookLogo.svg'
import google from './../../assets/google.svg'
import apple from './../../assets/apple.svg'
import { Link } from 'react-router-dom'
import ForgetPassWord from "../../pages/ForgetPassWord"

function SignIn() {
  const [signType, setSignType] = useState('Login');

  const [activeIndex, setActiveIndex] = useState(0);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const handleSignUp = () => {
    setSignType('Sign');
  };
  const handleSignIn = () => {
    setSignType('Login');
  }
  const getImageSource = () => {
    const imageSources = [img1, img2, img3];
    return imageSources[activeIndex];
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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

  const handleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleVisibleConfirmPassword = () => {
    setVisibleConfirmPassword(!visibleConfirmPassword);
  };
  return (
    <section className="bg-white">
      <div className="container containerSign">
        <div className={signType === "Login" ? "Login" : "Sign"}>
          <div className="leftSec">
            <div className="logoSign"><img src={logo} alt="logo" className='logoS' /></div>
            <h1>{signType === "Login" ? 'LogIn' : 'Sign Up'}</h1>
            <p >{!signType === "Sign" ? 'Let’s get you all st up so you can access your personal account' : 'Login to access your Golobe account'}</p>

            <form onSubmit={handleSubmit}>
              {signType === "Login" ? (
                <>
                  <div className='d-flex flex-row w-100 my-4 order-0'>
                    <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3  w-100'>
                      <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Email
                      </label>
                      <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='eng.alimoh98m@gmail.com' />
                    </div>

                  </div>
                  <div className='d-flex flex-row w-100 my-4'>  <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3  w-100'>
                    <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                      PassWord
                    </label>
                    <input type={!visiblePassword ? 'text' : 'password'} className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='******************' />
                    <span onClick={handleVisiblePassword}> {visiblePassword ? <BiSolidHide className='fs-4' /> : <BiSolidShow className='fs-4' />}</span>

                  </div></div>
                  <div className='d-flex align-items-center'>
                    <div className='col-12'>
                      <div className='form-check'>
                        <input type='checkbox' id='forgetPass' className='form-check-input' />
                        <label htmlFor='forgetPass' className='form-check-label forgetLine'>
                          Remember me
                        </label>
                        <Link to="../ForgetPassWord">
                          <span className='forgetPass'>Forget Password ?</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-block btn-orange w-100">Login</button>
                  <div className="ToSign">Don’t have an account?<span className="forgetPass" onClick={handleSignUp}>Sign Up
                  </span></div>
                  <div className='d-flex align-items-center my-3 gap-3'>
                    <div className='flex-grow-1 border border-secondary-subtle rounded-3'></div>
                    <p className='mb-0'>Or Log In With</p>
                    <div className='flex-grow-1 border border-secondary-subtle rounded-3'></div>
                  </div>
                  <Row>
                    <Col lg={4} >
                      <button className='w-100 border-orange py-2 hoverButton rounded-2 hoverButton'>
                        <img src={facebook} alt="facebook" />
                      </button>
                    </Col>
                    <Col lg={4} >
                      <button className='w-100 border-orange py-2 hoverButton rounded-2 hoverButton'>
                        <img src={google} alt="google" />
                      </button>
                    </Col>
                    <Col lg={4} >
                      <button className='w-100 border-orange py-2 hoverButton rounded-2 '>
                        <img src={apple} alt="appple" />
                      </button>
                    </Col>

                  </Row>
                </>
              ) :
                (<><div className='w-100  my-3 order-2'>
                  <div className='d-flex flex-row w-100'>
                    <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding me-2  w-100'>
                      <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        First Name
                      </label>
                      <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='Ali' />
                    </div>
                    <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding  w-100'>
                      <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Last Name
                      </label>
                      <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='Mohammad' />
                    </div>
                  </div>
                </div>
                  <div className='w-100 my-3 '>
                    <div className='d-flex flex-row w-100'>
                      <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding me-2  w-100'>
                        <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                          Email
                        </label>
                        <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='eng.alimoh98m@gmail.com' />
                      </div>
                      <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding  w-100'>
                        <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                          Phone Number
                        </label>
                        <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='0999 999 999' />
                      </div>
                    </div>
                  </div>
                  <div className='fa_fromTo-input w-100 my-3 '>
                    <div className='d-flex flex-row w-100'>
                      <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding w-100'>
                        <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                          PassWord
                        </label>
                        <input type={!visiblePassword ? 'text' : 'password'} className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='******************' />
                        <span onClick={handleVisiblePassword}> {visiblePassword ? <BiSolidHide className='fs-4' /> : <BiSolidShow className='fs-4' />}</span>
                      </div>

                    </div>
                  </div>
                  <div className='fa_fromTo-input w-100 my-3 '>
                    <div className='d-flex flex-row w-100'>
                      <div className='position-relative d-flex border border-secondary rounded-2 px-2 fa_custom-padding w-100'>
                        <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                          Confirm PassWord
                        </label>
                        <input type={!visibleConfirmPassword ? 'text' : 'password'} className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='******************' />
                        <span onClick={handleVisibleConfirmPassword}> {visibleConfirmPassword ? <BiSolidHide className='fs-4' /> : <BiSolidShow className='fs-4' />}</span>
                      </div>

                    </div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <input type="checkbox" id='agree' />
                    <label htmlFor="agree" className='ms-2 fa_class-lable'>I agree to all the <span className="orangText">Terms</span> and <span className="orangText">Privacy Policies</span></label>
                  </div>
                  <button type="button" className="btn btn-block btn-orange w-100">Create Account</button>
                  <div className="ToSign">Already have an account? <span className="forgetPass" onClick={handleSignIn}>Login
                  </span></div>
                  <div className='d-flex align-items-center my-3 gap-3'>
                    <div className='flex-grow-1 border border-secondary-subtle rounded-3'></div>
                    <p className='mb-0'>Or Sign Up With</p>
                    <div className='flex-grow-1 border border-secondary-subtle rounded-3'></div>
                  </div>
                  <Row className="mar my-3">
                    <Col lg={4} >
                      <button className='w-100 border-orange py-2 hoverButton rounded-2 '>
                        <img src={facebook} alt="facebook" />
                      </button>
                    </Col>
                    <Col lg={4} >
                      <button className='w-100 border-orange py-2 hoverButton rounded-2 '>
                        <img src={google} alt="google" />
                      </button>
                    </Col>
                    <Col lg={4} >
                      <button className='w-100 border-orange  py-2 hoverButton rounded-2 '>
                        <img src={apple} alt="appple" />
                      </button>
                    </Col>

                  </Row>
                </>
                )}


            </form>
          </div>
          <div className="rightSec order-1">
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
        </div>
      </div>
    </section>
  );
}

export default SignIn;