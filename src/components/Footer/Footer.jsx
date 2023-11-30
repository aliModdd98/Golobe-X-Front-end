import React from 'react'
import "./FooterStyle.css"
import logo from './../../assets/logofooter.svg'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <Container>
        <div className="upFooter p-4 rounded-4">
          <div className="inboxEmail">
            <h1>Subscribe Newsletter</h1>
            <div className='descF'><span className='ftitle'>The Travel<br /></span>
              Get inspired! Receive travel discounts, tips and behind the scenes stories.</div>
            <div className="newsLetter">
              <input type="email" className='newsInput' placeholder='Enter Your Email' />
              <button className='newsbtn'></button>
            </div>
          </div>
          <div className="inbox">
            <div className="mainRect">
              <div className="outer"> <div className="inner"></div></div>

              <div className="pinkRect"><div className="whiteBox"></div></div>
              <div className="baseRect"><div className="innerBase"></div></div>
            </div>
          </div>
        </div>
      </Container>

      <div className="downFooter">
        <Container className="footerGrid">
          <Row>
            <Col md={2} className="logo col-md-2">
              <img src={logo} alt="logo" />
              <div className="socialsMedia">
                <span ><BsFacebook className='iconStyle' /></span>
                <span><BsTwitter className='iconStyle' /></span>
                <span><BsYoutube className='iconStyle' /></span>
                <span><AiFillInstagram className='iconStyle' /></span>
              </div>
            </Col>
            <Col className="destinations col-md-2">
              <h3>Our Destinations</h3>
              <div className="destinationStyle">
                <span className='linkfooter'>Canada</span>
                <span className='linkfooter'>Alaksa</span>
                <span className='linkfooter'>France</span>
                <span className='linkfooter'>Iceland</span>

              </div>
            </Col>
            <Col className="activities col-md-2">
              <h3>Our Activities</h3>
              <div className="destinationStyle">
                <span className='linkfooter'>Northern Lights</span>
                <span className='linkfooter'>Cruising & sailing</span>
                <span className='linkfooter'>Multi-activities</span>
                <span className='linkfooter'>Kayaing</span>
              </div>
            </Col>
            <Col className="travelBlogs col-md-2">
              <h3>Travel Blogs</h3>
              <div className='destinationStyle'>
                <span className='linkfooter'>Bali Travel Guide</span>
                <span className='linkfooter'>Sri Lanks Travel Guide</span>
                <span className='linkfooter'>Peru Travel Guide</span>
                <span className='linkfooter'>Bali Travel Guide</span></div>
            </Col>
            <Col className="about col-md-2">
              <h3>About Us</h3>
              <div className="destinationStyle">
                <span className='linkfooter'>Our Story</span>
                <span className='linkfooter'>Work with us</span>
              </div>
            </Col>
            <Col className="contact col-md-2">
              <h3>Contact Us</h3>
              <div className="destinationStyle">
                <span className='linkfooter'>Our Story</span>
                <span className='linkfooter'>Work with us</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer