import './AccountTickets.css'
import { FaPlane } from 'react-icons/fa'
import { IoBed } from 'react-icons/io5'
import { useState } from 'react'
import Tabs from '../Tabs/Tabs'
import BookedDetailes from '../BookedDetailes/BookedDetailes'
import img from './../../assets/emiratesLogo.png'


function AccountTickets() {
  const [selected, setSelected] = useState(0)

  const handleSelect = (id) => {
    setSelected(id)
  }

  const tabsValues = [
    {
      id: 0,
      category: <><FaPlane className='me-1 fs-4' /> Flights</>,
      priceRange: null,
      timeRange: null
    },
    {
      id: 1,
      category: <><IoBed className='me-1 fs-4' /> Stays</>,
      priceRange: null,
      timeRange: null
    }
  ]

  const tickets = [
    {
      id : 0,
      img : img,
      from : '12:00 pm',
      to : '6:00 pm',
      date : '12-11-22',
      gate : 'A12',
      Flight_time : 'Newark(EWR)',
      Seat_no : '128'
    },
    {
      id : 1,
      img : img,
      from : '12:00 pm',
      to : '6:00 pm',
      date : '12-11-22',
      gate : 'A12',
      Flight_time : 'Newark(EWR)',
      Seat_no : '128'
    },
    {
      id : 2,
      img : img,
      from : '12:00 pm',
      to : '6:00 pm',
      date : '12-11-22',
      gate : 'A12',
      Flight_time : 'Newark(EWR)',
      Seat_no : '128'
    }
  ]
  const rooms = [
    {
      id : 0,
      img : img,
      from : 'Thur, Dec 8',
      to : 'Fri, Dec 9',
      date : '12:00pm',
      gate : 'On arrival',
      Flight_time : '11:30am'
    },
    {
      id : 1,
      img : img,
      from : 'Thur, Dec 8',
      to : 'Fri, Dec 9',
      date : '12:00pm',
      gate : 'On arrival',
      Flight_time : '11:30am'
    },
    {
      id : 2,
      img : img,
      from : 'Thur, Dec 8',
      to : 'Fri, Dec 9',
      date : '12:00pm',
      gate : 'On arrival',
      Flight_time : '11:30am'
    },
  ]

  return (
    <div>
      <p className='mb-2 mt-4 fa_tab-title'>Tickets/Bookings</p>
      <Tabs filters={tabsValues} state={selected} setState={handleSelect} />
      {
        (selected == 0)
        ? tickets.map(ticket => (<BookedDetailes key={ticket.id} data={ticket} flight={true} />))
        : rooms.map(ticket => (<BookedDetailes key={ticket.id} data={ticket} flight={false} />))
      }
    </div>
  )
}

export default AccountTickets