import  { useState } from 'react'
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
                        const [name, setName] = useState('');
                        const [comment, setComment] = useState('');
                      
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

  const [showReviewForm, setShowReviewForm] = useState(false);
const [newComment, setNewComment] = useState('');
const handleReviewButtonClick = () => {
  setShowReviewForm(!showReviewForm);
  
};
const handleAddComment = () => {
 
  setShowReviewForm(!showReviewForm);
  alert("Your comment will send to Admin")
 
  setName('');
  setComment('');

  
  setNewComment('');
};
const onCloseClick=()=>{
  setShowReviewForm(!showReviewForm)

}
    return (
    <div className='container '>
        <div className="mapTitle"><span className='mapF'>Reviews</span><button className='mapbtn' onClick={handleReviewButtonClick}>Give your review</button></div>


        {showReviewForm ? (

<div className="overlay">
<div className="card-overlay-rev" >
<svg className='closeIcon' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" onClick={onCloseClick} >
            <path fillRule="evenodd" clipRule="evenodd" d="M14.7299 1.57214C14.8155 1.48672 14.8833 1.38531 14.9296 1.27367C14.976 1.16203 14.9998 1.04237 14.9999 0.921502C15 0.800637 14.9763 0.680941 14.9301 0.569248C14.8839 0.457555 14.8162 0.356052 14.7308 0.270536C14.6453 0.185019 14.5439 0.117163 14.4323 0.0708412C14.3206 0.0245197 14.201 0.000640007 14.0801 0.00056572C13.9593 0.000491433 13.8396 0.024224 13.7279 0.0704082C13.6162 0.116593 13.5147 0.184324 13.4291 0.269736L7.87875 5.82014L2.32995 0.269736C2.15724 0.0970267 1.923 -1.81979e-09 1.67875 0C1.4345 1.81978e-09 1.20026 0.0970267 1.02755 0.269736C0.854839 0.442445 0.757813 0.676688 0.757812 0.920936C0.757812 1.16518 0.854839 1.39943 1.02755 1.57214L6.57795 7.12094L1.02755 12.6697C0.942031 12.7553 0.874196 12.8568 0.827914 12.9685C0.781633 13.0802 0.757812 13.2 0.757812 13.3209C0.757812 13.4419 0.781633 13.5616 0.827914 13.6734C0.874196 13.7851 0.942031 13.8866 1.02755 13.9721C1.20026 14.1448 1.4345 14.2419 1.67875 14.2419C1.79969 14.2419 1.91944 14.2181 2.03118 14.1718C2.14291 14.1255 2.24443 14.0577 2.32995 13.9721L7.87875 8.42174L13.4291 13.9721C13.6019 14.1446 13.836 14.2415 14.0801 14.2413C14.3242 14.2412 14.5583 14.144 14.7308 13.9713C14.9032 13.7986 15.0001 13.5645 14.9999 13.3204C14.9998 13.0763 14.9027 12.8422 14.7299 12.6697L9.17955 7.12094L14.7299 1.57214Z" fill="black" />
          </svg>
  {/* <h3 className='titleReview'> Write Your comment here :</h3>
  <div className='d-flex flex-row w-100 '>
                 
                  <input type="text" className='commentOfReview' placeholder='input your comment'/>
             
           
               
               </div>
     <button className='commentReview' onClick={handleCommentSubmit}>Comment</button> */}
      <h2>Add a Comment</h2>
      <input
        type="text"
        className='commentOfReview'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <textarea
      className='commentOfReview'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment"
      />
      <button className='commentReview'  onClick={handleAddComment}>Add Comment</button>
</div>
</div>
) : " "}
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