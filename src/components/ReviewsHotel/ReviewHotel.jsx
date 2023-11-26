import React, { useState } from 'react'
import rev1 from './../../assets/rev1.png'
import rev2 from './../../assets/rev2.png'
import rev3 from './../../assets/rev3.png'
import rev4 from './../../assets/rev4.png'
import rev5 from './../../assets/rev5.png'
import { Row } from 'react-bootstrap'
import { FaFlag } from "react-icons/fa6";
import './ReviewsHotelStyle.css'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
function ReviewHotel() {
const reviews=[
    {id:0,
    name:"Omar Siphron",
    rate:"5.0 Amazing",
    img:rev1,
    icon:<FaFlag className='icon'/>,
    comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id:1,
        img:rev2,
        name:"Cristofer Ekstrom Bothman",
        rate:"5.0 Amazing",
        icon:<FaFlag className='icon'/>,
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
         {id:2,
        name:"Kaiya Lubin",
        rate:"5.0 Amazing",
        img:rev3,
        icon:<FaFlag className='icon'/>,
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {id:3,
            name:"Erin Septimus",
            rate:"5.0 Amazing",
            img:rev4,
            icon:<FaFlag className='icon'/>,
            comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
               {id:4,
                name:"Terry George",
                rate:"5.0 Amazing",
                img:rev5,
                icon:<FaFlag className='icon'/>,
                comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
                        ]
                        const [currentPage, setCurrentPage] = useState(1);
                        const totalPages = 10; 
                      
                        const goToNextPage = () => {
                          if (currentPage < totalPages) {
                            setCurrentPage(currentPage + 1);
                          }
                        };
                      
                        const goToLastPage = () => {
                            if (currentPage > 1) {
                              setCurrentPage(currentPage - 1);
                            } else {
                              setCurrentPage(1);
                            }
                          };
    return (
    <div className='container '>
        <div className="mapTitle"><span className='mapF'>Reviews</span><button className='mapbtn'>Give your review</button></div>
{
    currentPage===1 ? 
        reviews.map((rev)=> <>
        <Row className={rev.id}>
                <div className="imgRev col-md-1 my-1"><img src={rev.img} alt="review" /> </div>
               <div className="desc col-md-11">
               <div className='contentRev '>
                    <div className="upContent"><div className="firstdetails"><span className='boldRate'>{rev.rate}</span>{" | "}{rev.name}</div> <div className="Flag">{rev.icon}</div></div>
                </div>
                <div className="comment p-1">{rev.comment}</div>
               </div>
             
              <div className="lineRoom"></div>
            </Row>        
        </>
            
        ) : <Row><div className='emptyPage'> <h1>No reviews </h1></div></Row>}

<div className='btns'>
  <button className='btnNl' onClick={goToLastPage}><GrFormPrevious/></button>
  <span>{currentPage} of {totalPages}</span>
  <button className='btnNl' onClick={goToNextPage}><GrFormNext/></button>
</div>
    </div>
  )
}

export default ReviewHotel