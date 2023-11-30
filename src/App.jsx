import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import FlightDetails from './pages/FlightDetails';
import FlightsListing from './pages/FlightsListing';
import FlightsSearch from './pages/FlightsSearch';
import FlightTicket from './pages/FlightTicket';
import HotelListing from './pages/HotelListing'
import HotelListingDetailes from './pages/HotelListingDetailes';
import HotelSearch from './pages/HotelSearch';
import Login from './pages/Login'
import BookingDetailsWithLoging from './pages/BookingDetailsWithLoging';
import Account from './pages/Account';
import Favorites from './pages/Favorites';
import ForgetPassWord from './pages/ForgetPassWord';


import FlightTicket from './pages/FlightTicket';
import HotelSearch from './pages/HotelSearch';
import Favorites from './pages/Favorites';
import AddPay from './components/AddPayment/AddPay';
import Footer from './components/Footer/Footer';
import FlightsListing from './pages/FlightsListing'

function App() {

  return (

    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/BookingDetails' element={<BookingDetails />} />
        <Route path='/BookingDetailsWithLoging' element={<BookingDetailsWithLoging />} />
        <Route path='/FlightDetails' element={<FlightDetails />} />
        <Route path='/FlightsListing' element={<FlightsListing />} />
        <Route path='/FlightsSearch' element={<FlightsSearch />} />
        <Route path='/FlightTicket' element={<FlightTicket />} />
        <Route path='/ForgetPassWord' element={<ForgetPassWord />} />
        <Route path='/HotelListing' element={<HotelListing />} />
        <Route path='/HotelListingDetailes' element={<HotelListingDetailes />} />
        <Route path='/HotelSearch' element={<HotelSearch />} />
        <Route path='/LandingPage' element={<LandingPage />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
