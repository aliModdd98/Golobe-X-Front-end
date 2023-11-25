

function FlightCardDetails({firstTrip}) {
    return (
        <div className='d-flex gap-2 align-items-start mb-3'>
            <input type="checkbox" className='mt-1 fa_result_card-checkbox' />
            <div className='d-flex align-items-start gap-4'>
                <div>
                    <p className='mb-0 fa_result_card-timing'>{firstTrip.leaving} - {firstTrip.landing}</p>
                    <p className='mb-0 fa_result_card-company'>{firstTrip.leavingContry}</p>
                </div>
                <p className='mb-0 fa_result_card-trip_status'>{firstTrip.flightStatus}</p>
                <div>
                    <p className='mb-0 fa_result_card-timing opacity-78'>{firstTrip.flightDuration}</p>
                    <p className='mb-0 fa_result_card-company'>{firstTrip.landingCountry}</p>
                </div>
            </div>
        </div>
    )
}

export default FlightCardDetails