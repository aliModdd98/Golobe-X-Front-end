import './NavBar.css'
import { FaPlane } from 'react-icons/fa'
import { IoBed } from 'react-icons/io5'
import logo from './../../assets/NavLogoTrans.svg'
import logoB from './../../assets/NavLogo.svg'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import background from './../../assets/user.jpg'
import { SlArrowDown } from "react-icons/sl";
import { useState } from 'react'
import { FaHeart, FaUser, FaCreditCard } from "react-icons/fa6";
import { IoChevronForwardOutline, IoSettings, IoLogOutSharp } from "react-icons/io5";
import { MdOutlineSupport } from "react-icons/md";

function NavBar({ transpartent, logedIn }) {
 
const [activeButton,setActiveButton]=useState(true)
    const [open, setOpen] = useState(false);
    let classes = (transpartent)
        ? 'position-absolute top-0 w-100 text-white fa_nav-height px-4'
        : 'fixed-top bg-white text-black shadow-sm';
    return (
        <div className={classes}>
            <Container
                fluid={transpartent}
                className='h-100 d-flex align-items-center justify-content-between'>
               

<ul className='d-flex ps-0 mb-0'>
  <li
    className={`me-4 fa_nav-height d-flex align-items-center fa_nav-font ${
      activeButton === 'flights' ? 'activeLi' : ''
    }`}
  >
    <FaPlane className='me-1' />
    <Link to="../FlightsSearch" onClick={() => setActiveButton('flights')}>
      Find Flight
    </Link>
  </li>
  <li
    className={`fa_nav-height d-flex align-items-center fa_nav-font ${
      activeButton === 'hotels' ? 'activeLi' : ''
    }`}
  >
    <IoBed className='me-1' />
    <Link to="../HotelSearch" onClick={() => setActiveButton('hotels')}>
      Find Stays
    </Link>
  </li>
</ul>


                <img src={transpartent ? logo : logoB} alt="golobe logo" />
                {
                    logedIn
                        ? <div className='d-flex align-items-center'>
                       <ul className='d-flex ps-0 mb-0'>  
                           <li
    className={`fa_nav-height d-flex align-items-center fa_nav-font ${
      activeButton === 'favorites' ? 'activeLi' : ''
    }`}
  >
                            <Link to='/Favorites' className='fa_nav-font me-3' onClick={() => setActiveButton('favorites')} >
                                <FaHeart className='fs-5 me-2' />
                                Favorites
                                
                            </Link></li></ul>  
                            <div className='fa_devided-line bg-black'></div>
                            <div className='fa_background-user rounded-pill position-relative' style={{ '--img-url': `url(${background})` }}
                                onClick={() => setOpen(!open)}>
                                <p className='fa_user_drop-icon position-absolute start-100 top-100 rounded-pill d-flex justify-content-center align-items-center'>
                                    <SlArrowDown className='' />
                                </p>
                                <div className={`position-absolute p-4 bg-white shadow-sm rounded-3 fa_pop_up-tab ${!open && 'd-none'}`}>
                                    <div className='d-flex align-items-center gap-3'>
                                        <div className='fa_user_img-pop_up rounded-circle' style={{ '--img-url': `url(${background})` }}></div>
                                        <div>
                                            <p className='mb-2 fa_user_name-pop_up'>Fadi Noumih</p>
                                            <p className='mb-0 opacity-75 fa_online'>Online</p>
                                        </div>
                                    </div>
                                    <div className='border border-secondary-subtle w-100 my-4 opacity-50'></div>
                                    <div>
                                        <Link to='/Account' className='mb-3 d-flex justify-content-between align-items-center'>
                                            <p className='mb-0 d-flex align-items-center gap-2 fa_pop_up-item'>
                                                <FaUser className='fs-5' />
                                                My Account
                                            </p>
                                            <IoChevronForwardOutline className='fs-5' />
                                        </Link>
                                        <Link to='/Account' className='mb-3 d-flex justify-content-between align-items-center'>
                                            <p className='mb-0 d-flex align-items-center gap-2 fa_pop_up-item'>
                                                <FaCreditCard className='fs-5' />
                                                Payments
                                            </p>
                                            <IoChevronForwardOutline className='fs-5' />
                                        </Link>
                                        <Link to='/Account' className='d-flex justify-content-between align-items-center'>
                                            <p className='mb-0 d-flex align-items-center gap-2 fa_pop_up-item'>
                                                <IoSettings className='fs-5' />
                                                Settings
                                            </p>
                                            <IoChevronForwardOutline className='fs-5' />
                                        </Link>
                                    </div>
                                    <div className='border border-secondary-subtle w-100 my-4 opacity-50'></div>
                                    <div>
                                        <Link to='/Account' className='mb-3 d-flex justify-content-between align-items-center'>
                                            <p className='mb-0 d-flex align-items-center gap-2 fa_pop_up-item'>
                                                <MdOutlineSupport className='fs-5' />
                                                Support
                                            </p>
                                            <IoChevronForwardOutline className='fs-5' />
                                        </Link>
                                        <Link to='/Golobe-X-Front-end'>
                                            <p className='mb-0 d-flex align-items-center gap-2 fa_pop_up-item'>
                                                <IoLogOutSharp className='fs-5' />
                                                Logout
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <p className='mb-0 ms-2 fa_nav-font'>Fadi N</p>
                        </div>
                        : <div>
                            <Link to="../Login" className={`text-decoration-none fa_nav-font ${transpartent ? 'text-white' : 'text-black'}`}>Login</Link>
                            <Link to="../Login" className={` ${(transpartent) ? 'text-black' : 'text-white'}`}>
                                <button className={`ms-4 fa_signup-button rounded-2 fa_nav-font ${(transpartent) ? 'bg-white text-black ' : 'bg-black text-white'}`}>
                                    Sign up
                                </button>
                            </Link>
                        </div>
                }
            </Container>
        </div>
    )
}

export default NavBar