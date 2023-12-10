import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FlightDetails from './pages/FlightDetails';
import FlightsListing from './pages/FlightsListing';
import FlightsSearch from './pages/FlightsSearch';
import HotelListing from './pages/HotelListing'
import HotelListingDetailes from './pages/HotelListingDetailes';
import HotelSearch from './pages/HotelSearch';
import Login from './pages/Login'
import BookingDetailsWithLoging from './pages/BookingDetailsWithLoging';
import Account from './pages/Account';
import Favorites from './pages/Favorites';
import ForgetPassWord from './pages/ForgetPassWord';
import BookingDetails from './pages/BookingDetails';

import FlightTicket from './pages/FlightTicket';
import AddPay from './components/AddPayment/AddPay';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  const location = useLocation();

  return (
    <>
      {(location.pathname == '/Golobe-X-Front-end' | location.pathname == '/Login' | location.pathname == '/addPay' | location.pathname == '/ForgetPassWord') ? null : <NavBar logedIn />}

      <Routes>
        <Route path='/Golobe-X-Front-end' element={<LandingPage />} />
        <Route path='/FlightsSearch' element={<FlightsSearch />} />
        <Route path='/FlightsListing' element={<FlightsListing />} />
        <Route path='/FlightDetails' element={<FlightDetails />} />
        <Route path='/BookingDetails' element={<BookingDetails flight />} />
        {/* <Route path='/BookingDetailsWithLoging' element={<BookingDetailsWithLoging flight={true} />} /> */}
        <Route path='/FlightTicket' element={<FlightTicket flight />} />

        <Route path='/HotelSearch' element={<HotelSearch />} />
        <Route path='/HotelListing' element={<HotelListing />} />
        <Route path='/HotelListingDetailes' element={<HotelListingDetailes />} />
        <Route path='/BookingDetailsHotel' element={<BookingDetails />} />
        {/* <Route path='/BookingDetailsWithLogingHotel' element={<BookingDetailsWithLoging flight={false} />} /> */}
        <Route path='/HotelTicket' element={<FlightTicket flight={false} />} />

        <Route path='/Account' element={<Account />} />
        <Route path='/addpay' element={<AddPay />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/ForgetPassWord' element={<ForgetPassWord />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      {(location.pathname == '/Login' | location.pathname == '/addPay' | location.pathname == '/ForgetPassWord') ? null : <Footer />}

    </>
  )
}

export default App
