import { Col, Row } from 'react-bootstrap'
import './LogInToBook.css'
import facebook from './../../assets/facebookLogo.svg'
import google from './../../assets/google.svg'
import apple from './../../assets/apple.svg'
import { GrMail } from 'react-icons/gr'
import { Link } from 'react-router-dom'


function LogInToBook({set}) {
    return (
        <div className='bg-white rounded-4 shadow-sm p-3 mt-5'>
            <h1 className='fa_LogInToBook-header mb-0'>Login or Sign up to book</h1>
            <input type="number" placeholder='Phone Number' className='px-3 py-2 my-3 fa_outline-none rounded-1 border border-secondary w-100' />
            <p className='fa_number_input-text'>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
                <button className='w-100 text-center bg-orange fa_outline-none border-0 rounded-2 py-2' onClick={() => {set(true)}}>Continue</button>
            <div className='d-flex align-items-center my-3 gap-3'>
                <div className='flex-grow-1 border border-secondary-subtle rounded-3'></div>
                <p className='mb-0'>Or</p>
                <div className='flex-grow-1 border border-secondary-subtle rounded-3'></div>
            </div>
            <Row>
                <Col lg={4}>
                    <button className='w-100 border-orange py-2 orangHover rounded-2 bg-transparent'>
                        <img src={facebook} alt="facebook" />
                    </button>
                </Col>
                <Col lg={4}>
                    <button className='w-100 border-orange py-2 orangHover rounded-2 bg-transparent'>
                        <img src={google} alt="google" />
                    </button>
                </Col>
                <Col lg={4}>
                    <button className='w-100 border-orange py-2 orangHover rounded-2 bg-transparent'>
                        <img src={apple} alt="appple" />
                    </button>
                </Col>
                <Col lg={12}>
                    <div className='aj_continue_style' onClick={() => {set(true)}}>
                        <button className='w-100 border-orange py-2 orangHover  rounded-2 mt-3 d-flex justify-content-center align-items-center bg-transparent'>
                            <GrMail className=' me-3' />
                            Continue with email
                        </button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default LogInToBook