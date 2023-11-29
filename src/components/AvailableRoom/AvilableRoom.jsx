import React from 'react'
import './AvilableRoomStyle.css'
import room1 from './../../assets/room1.png'
import room2 from './../../assets/room2.png'
import room3 from './../../assets/room3.png'
import room4 from './../../assets/room4.png'
import { Link } from 'react-router-dom'
import BookingDetails from "../../pages/BookingDetails"
function AvilableRoom() {
  const rooms = [{
    id: 0,
    img: room1,
    desc: "Superior room - 1 double bed or 2 twin beds",
    price: "$ 240",
    night: "/night",
    btn: "Book Now"
  },
  {
    id: 1,
    img: room2,
    desc: "Superior room - City view  - 1 double bed or 2 twin beds",
    price: "$ 280",
    night: "/night",
    btn: "Book Now"
  },
  {
    id: 2,
    img: room3,
    desc: "Superior room - City view - 1 double bed or 2 twin beds",
    price: "$ 350",
    night: "/night",
    btn: "Book Now"
  },
  {
    id: 3,
    img: room4,
    desc: "Superior room - City view - 1 double bed or 2 twin beds",
    price: "$ 360",
    night: "/night",
    btn: "Book Now"
  },]

  return (
    <div className='container'>
      <h2>Available Rooms</h2>
      <div className="row roomGrid" >
        {rooms.map((room) => (

          <>
            <div key={room.id} className="allDesc">
              <div className="roomImg"><img className='roomimg' src={room.img} />
                {room.desc}
              </div> <div className="rightRoom"><span className='priceRoom'>{room.price}</span>{room.night}
                <Link to="../BookingDetails">
                  <button className='btnRoom'>{room.btn}</button>
                </Link> </div>

            </div>
            <div className="lineRoom"></div></>
        )

        )
        }
      </div>
    </div>
  )
}

export default AvilableRoom