import { Col, Row } from 'react-bootstrap'
import './LogInToBook.css'
import facebook from './../../assets/facebookLogo.svg'
import google from './../../assets/google.svg'
import apple from './../../assets/apple.svg'
import {GrMail} from 'react-icons/gr'

function LogInToBook() {
    return (
        <div className='bg-white rounded-4 shadow-sm p-3 mb-5'>
            <h1 className='fa_LogInToBook-header mb-0'>Login or Sign up to book</h1>
            <input type="number" placeholder='Phone Number' className='px-3 py-2 my-3 fa_outline-none rounded-1 border border-secondary w-100' />
            <p className='fa_number_input-text'>We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
            <button className='w-100 text-center bg-orange fa_outline-none border-0 rounded-2 py-2'>Continue</button>
            <div className='d-flex align-items-center my-3 gap-3'>
                <div className='flex-grow-1 border border-secondary-subtle rounded-3'></div>
                <p className='mb-0'>Or</p>
                <div className='flex-grow-1 border border-secondary-subtle rounded-3'></div>
            </div>
            <Row>
                <Col lg={4}>
                    <button className='w-100 border-orange py-2 bg-transparent rounded-2'>
                        <img src={facebook} alt="facebook" />
                    </button>
                </Col>
                <Col lg={4}>
                    <button className='w-100 border-orange py-2 bg-transparent rounded-2'>
                        <img src={google} alt="google" />
                    </button>
                </Col>
                <Col lg={4}>
                    <button className='w-100 border-orange py-2 bg-transparent rounded-2'>
                        <img src={apple} alt="appple" />
                    </button>
                </Col>
                <Col lg={12}>
                    <button className='w-100 border-orange py-2 bg-transparent rounded-2 mt-3 d-flex justify-content-center align-items-center'>
                        <GrMail className='fs-4 me-3' />
                        Continue with email
                    </button>
                </Col>
            </Row>
        </div>
    )
}

export default LogInToBook