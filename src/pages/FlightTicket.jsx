import FlightTracker from '../components/FlightTracker/FlightTracker'
import DetailsHeader from '../components/DetailsHeader/DetailsHeader'
import Ticket from '../components/Ticket/Ticket'
import TermsConditions from '../components/TermsConditions/TermsConditions'
import { useState } from 'react';

function FlightTicket({ flight }) {

    const [showAlert, setShowAlert] = useState(true);

    const handleClick = () => {
        if (showAlert) {
            alert("This action is not enabled");
            setShowAlert(false);
        }
    };
    return (
        <>
            <div className="alertMessage" onMouseDown={() => handleClick()}>
                <FlightTracker country='Turkey' city='Istanbul' place='CVK Park Bosphorus Hotel Istanbul' />
                <DetailsHeader
                    company='Emirates A380 Airbus'
                    button='Downlooad'
                    location='Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437'
                    price={204} />
                {
                    flight
                        ? <Ticket
                            from='12:00 pm'
                            to='12:00 pm'
                            timeZone='Newark(EWR)'
                            userName='Fadi Noumih'
                            boredPass='Boarding Pass N’123'
                            classType='Busniess Class'
                            date='Newark(EWR)'
                            FlightTime='12:00'
                            Gate='A12'
                            Seat='128' />
                        : <Ticket
                            from='Thur, Dec 8'
                            to='Fri, Dec 9'
                            userName='Fadi Noumih'
                            classType='Superior room - 1 double bed or 2 twin beds'
                            FlightTime='12:00pm'
                            checkOut='11:30pm'
                            Gate='On arival' />
                }
                <TermsConditions /></div>
        </>
    )
}

export default FlightTicket