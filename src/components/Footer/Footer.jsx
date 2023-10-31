import React from 'react'
import "./FooterStyle.css"
import logo from './../../assets/logofooter.svg'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { Container } from 'react-bootstrap'

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
        <div className="footerGrid">
          <div className="logo"><img src={logo} alt="logo" />
            <div className="socialsMedia">
              <span><BsFacebook className='iconStyle' /></span>
              <span><BsTwitter className='iconStyle' /></span>
              <span><BsYoutube className='iconStyle' /></span>
              <span><AiFillInstagram className='iconStyle' /></span>
            </div>
          </div>
          <div className="destinations">
            <h3>Our Destinations</h3>
            <div className="destinationStyle">
              <span>Canada</span>
              <span>Alaksa</span>
              <span>France</span>
              <span>Iceland</span>

            </div>
          </div>
          <div className="activities">
            <h3>Our Activities</h3>
            <div className="destinationStyle">
              <span>Northern Lights</span>
              <span>Cruising & sailing</span>
              <span>Multi-activities</span>
              <span>Kayaing</span>
            </div>
          </div>
          <div className="travelBlogs">
            <h3>Travel Blogs</h3>
            <div className='destinationStyle'>
              <span>Bali Travel Guide</span>
              <span>Sri Lanks Travel Guide</span>
              <span>Peru Travel Guide</span>
              <span>Bali Travel Guide</span></div>
          </div>
          <div className="about">
            <h3>About Us</h3>
            <div className="destinationStyle">
              <span>Our Story</span>
              <span>Work with us</span>
            </div>
          </div>
          <div className="contact">
            <h3>Contact Us</h3>
            <div className="destinationStyle">
              <span>Our Story</span>
              <span>Work with us</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer