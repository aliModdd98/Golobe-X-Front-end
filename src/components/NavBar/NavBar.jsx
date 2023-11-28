import './NavBar.css'
import { FaPlane } from 'react-icons/fa'
import { IoBed } from 'react-icons/io5'
import logo from './../../assets/NavLogoTrans.svg'
import logoB from './../../assets/NavLogo.svg'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FlightsSearch from '../../pages/FlightsSearch'
import Login from '../../pages/Login'
import HotelSearch from '../../pages/HotelSearch'

function NavBar({ transpartent }) {
    let classes = (transpartent)
        ? 'position-absolute top-0 w-100 text-white fa_nav-height px-4'
        : 'fixed-top bg-white text-black shadow-sm';
    return (
        <div className={classes}>
            <Container
                fluid={transpartent}
                className='h-100 d-flex align-items-center justify-content-between'>
                <ul className='d-flex ps-0 mb-0'>
                    <li className='me-4 fa_nav-height d-flex align-items-center fa_nav-font'>
                        <FaPlane className='me-1 serv' />
                        <Link to="../FlightsSearch"> Find Flight</Link>
                    </li>
                    <li className='fa_nav-height d-flex align-items-center fa_nav-font'>
                        <IoBed className='me-1 serv' />
                        <Link to="../HotelSearch">Find Stays</Link>
                    </li>
                </ul>
                <img src={transpartent ? logo : logoB} alt="golobe logo" />
                <div>
                    <Link to="../Login" className={`text-decoration-none fa_nav-font ${transpartent ? 'text-white' : 'text-black'}`}>Login</Link>
                    <Link to="../Login" className={` ${(transpartent) ? 'text-black' : 'text-white'}`}>

                        <button className={`ms-4 fa_signup-button rounded-2 fa_nav-font ${(transpartent) ? 'bg-white text-black ' : 'bg-black text-white'}`}>
                            Sign up
                        </button>



                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default NavBar