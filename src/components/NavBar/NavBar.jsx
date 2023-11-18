import './NavBar.css'
import { FaPlane } from 'react-icons/fa'
import { IoBed } from 'react-icons/io5'
import logo from './../../assets/NavLogoTrans.svg'
import logoB from './../../assets/NavLogo.svg'
import { Container } from 'react-bootstrap'

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
                        <FaPlane className='me-1 fs-4' />
                        Find Flight
                    </li>
                    <li className='fa_nav-height d-flex align-items-center fa_nav-font'>
                        <IoBed className='me-1 fs-4' />
                        Find Stays
                    </li>
                </ul>
                <img src={transpartent ? logo : logoB} alt="golobe logo" />
                <div>
                    <a href="#" className={`text-decoration-none fa_nav-font ${transpartent ? 'text-white' : 'text-black'}`}>Login</a>
                    <button className={`ms-4 fa_signup-button rounded-2 fa_nav-font ${(transpartent) ? 'bg-white' : 'bg-black text-white'}`}>
                        Sign up
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default NavBar