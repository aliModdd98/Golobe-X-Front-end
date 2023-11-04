import { Container } from "react-bootstrap"
import { FaPlane } from 'react-icons/fa'
import { IoBed } from 'react-icons/io5'
import { BsFillSendFill } from './../../../node_modules/react-icons/bs'
import './SearchForm.css'
import FlightFilter from "../FlightFilter/FlightFilter"
import HotelFilter from "../HotelFilter/HotelFilter"
import { useState } from "react"

function SearchForm({both}) {
    const [Flight , setflight] = useState(true);

    const handleclick = (value) => {
        (Flight == value)? setflight(!Flight): null;
        console.log(Flight); 
    }
    return (
        <Container>
            <div className="bg-white rounded-4 shadow-sm px-3 pb-4 fa_serch-buttons translate-20">
                <div className="d-flex align-items-center">
                    {
                        both
                            ? <>
                                <button className={`bg-transparent fa_border fa_border-none py-4 me-3 ${(Flight)?'fa_active_serch-button':''}`} onClick={() => {handleclick(false)}}>
                                    <FaPlane className='me-2 fs-4' />
                                    Flights
                                </button>
                                <div className="line bg-dark opacity-25"></div>
                                <button className={`bg-transparent fa_border fa_border-none py-4 ms-3 ${(!Flight)?'fa_active_serch-button':''}`} onClick={() => {handleclick(true)}}>
                                    <IoBed className='me-2 fs-4' />
                                    Stays
                                </button>
                            </>
                            : <p className="py-4 fa_search-title">Where are you flying?</p>
                    }
                </div>
                <div className="my-5 d-flex">
                    {
                        (Flight)
                        ? <FlightFilter />
                        : <HotelFilter />
                    }
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <a href="#" className="text-decoration-none text-dark me-4">
                        + Add Promo Code
                    </a>
                    <button className=" text-black bg-orange border-0 p-3 rounded-2">
                        <BsFillSendFill className="me-2" />
                        Show Flights
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default SearchForm