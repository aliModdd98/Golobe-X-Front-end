import './ForgetPassStyle.css'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { Col, Row } from "react-bootstrap"
import img1 from './../../assets/Rectangle20.png'
import img2 from './../../assets/Rectangle30.png'
import img3 from './../../assets/Rectangle40.jpg'
import { useEffect, useState } from "react";
import facebook from './../../assets/facebookLogo.svg'
import google from './../../assets/google.svg'
import apple from './../../assets/apple.svg'
import logo from './../../assets/Logo.svg'
import { IoIosArrowBack } from "react-icons/io";
function ForgetPass() {

  const [Forget, setForget] = useState('forget');

  const [activeIndex, setActiveIndex] = useState(0);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleVerify = () => {
    setForget('verify')
  }
  const getImageSource = () => {
    const imageSources = [img1, img2, img3];
    return imageSources[activeIndex];
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== rePassword) {
      alert("Passwords do not match")

      setIsValid(false);
    } else if (password.length < 8) {
      alert("Password should be at least 8 characters long")

      setIsValid(false);
    } else {
      alert(" PassWord has been Updated")

      setIsValid(true);
    }
  };
  const handleReset = () => {
    setForget('reset')
  }
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

  const handleConfirm = () => {
    alert("done")
  }

  return (
    <section className='bg-white'>
      <div className="container containerForget">
        <div className={Forget === "forget" ? "forget" : Forget === 'reset' ? "reset" : "verify"}>
          <div className="leftSec">
            <div className="logoSign"><img src={logo} alt="logo" className='logoS' /></div>
            <div className={Forget === "verify" ? "noback" : "back "}>
              <IoIosArrowBack /> <span className='backSize'>Back to login</span>
            </div>
            <h1 className=' my-3 '>{Forget === "forget" ? 'Forgot your password?' : Forget === 'reset' ? 'Verify code' : "Set a password"}</h1>
            <p className='backSize'>{Forget === "forget" ? 'Don’t worry, happens to all of us. Enter your email below to recover your password' : Forget === "reset" ? 'An authentication code has been sent to your email.' : "Your previous password has been reseted. Please set a new password for your account."}</p>

            <form onSubmit={handleSubmit}>
              {Forget === "forget" ? (
                <>
                  <div className='d-flex flex-row w-100 my-4'>
                    <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3  w-100'>
                      <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Email
                      </label>
                      <input type="text" className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='eng.alimoh98m@gmail.com' />
                    </div>

                  </div>


                  <button type="button" className="btn btn-block btn-orange w-100 py-3 my-3" onClick={handleReset}>Submit</button>



                  <div className='d-flex align-items-center my-3 gap-3'>
                    <div className='flex-grow-1 border border-secondary-subtle rounded-3'></div>
                    <p className='mb-0'>Or Log In With</p>
                    <div className='flex-grow-1 border border-secondary-subtle rounded-3'></div>
                  </div>
                  <Row className='socialsIcon'>
                    <Col lg={4} >
                      <button className='w-100 border-orange py-2  rounded-2 hoverButton'>
                        <img src={facebook} alt="facebook" />
                      </button>
                    </Col>
                    <Col lg={4}>
                      <button className='w-100 border-orange py-2  rounded-2 hoverButton'>
                        <img src={google} alt="google" />
                      </button>
                    </Col>
                    <Col lg={4} >
                      <button className='w-100 border-orange py-2  rounded-2 hoverButton '>
                        <img src={apple} alt="appple" />
                      </button>
                    </Col>

                  </Row>
                </>
              ) :


                Forget === "reset" ? (<>
                  <div className='fa_fromTo-input w-100 my-4 '>
                    <div className='d-flex flex-row w-100'>
                      <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3 me-2  w-100'>
                        <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                          Enter Code
                        </label>
                        <input type={!visiblePassword ? 'text' : 'password'} className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100' placeholder='WXGS457' />
                        <span onClick={handleVisiblePassword}> {visiblePassword ? <BiSolidHide className='fs-4' /> : <BiSolidShow className='fs-4' />}</span>
                      </div>

                    </div>
                  </div>

                  <div className='forgetLine my-4 '>Didn’t receive a code? <span className='forgetPass'>Resend</span></div>
                  <button type="button" className="btn btn-block btn-orange w-100 py-3" onClick={handleVerify}>Verify</button>


                </>) : (
                  <form onSubmit={handleSubmit}>
                    <div className='d-flex flex-row w-100 my-4'>  <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3  w-100'>
                      <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Create Password
                      </label>
                      <input type={!visiblePassword ? 'text' : 'password'}
                        className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} placeholder='******************' />
                      <span onClick={handleVisiblePassword}> {visiblePassword ? <BiSolidHide className='fs-4' /> : <BiSolidShow className='fs-4' />}</span>

                    </div></div>
                    <div className='d-flex flex-row w-100 my-4'>  <div className='position-relative d-flex border border-secondary rounded-2 px-2 py-3  w-100'>
                      <label className='bg-white position-absolute top-0 translate-middle-y px-2'>
                        Re-enter Password
                      </label>
                      <input type={!visiblePassword ? 'text' : 'password'}
                        className='input_searchForm fa_outline-none border-0 flex-grow-1 w-100'
                        placeholder='******************'
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)} />
                      <span onClick={handleVisiblePassword}> {visiblePassword ? <BiSolidHide className='fs-4' /> : <BiSolidShow className='fs-4' />}</span>

                    </div></div>
                    <button type="button" className="btn btn-block btn-orange w-100 py-3" onClick={handleSubmit}> Set password</button>



                  </form>



                )}




            </form>
          </div>
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
        </div>

      </div>
    </section>
  )
}

export default ForgetPass