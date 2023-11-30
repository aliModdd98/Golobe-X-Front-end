import SyrianAirlines from '../../assets/SyrianAirlines.png';
import ShamWings from '../../assets/ShamWings.png';
import Qatar from '../../assets/Qatar.png';
import Etihad from '../../assets/Etihad.png';

import hotel1 from './../../assets/hotel-1.jfif';
import hotel2 from './../../assets/hotelHeaderCover.jfif';
import hotel3 from './../../assets/img4.jpg';
import hotel4 from './../../assets/hotel-3.jfif';

export const hotelRes = [
    {
        id : 0,
        img : hotel1,
        title :'CVK Park Bosphorus Hotel Istanbul',
        price : 240,
        location : 'Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437',
        rate : 5,
        reviewsNumber : 371,
        aminites : 20, 
        favorite : false
    },
    {
        id : 1,
        img : hotel2,
        title :'Eresin Hotels Sultanahmet - Boutique Class',
        price : 104,
        location : 'Kucukayasofya No. 40 Sultanahmet, Istanbul 34022',
        rate : 4,
        reviewsNumber : 63,
        aminites : 18,
        favorite : false
    },
    {
        id : 2,
        img : hotel3,
        title :'Eresin Hotels Sultanahmet - Boutique Class',
        price : 190,
        location : 'Kucukayasofya No. 40 Sultanahmet, Istanbul 34022',
        rate : 2,
        reviewsNumber : 45,
        aminites : 9,
        favorite : false
    },
    {
        id : 3,
        img : hotel4,
        title :'Eresin Hotels Sultanahmet - Boutique Class',
        price : 580,
        location : 'Kucukayasofya No. 40 Sultanahmet, Istanbul 34022',
        rate : 5,
        reviewsNumber : 1900,
        aminites : 35,
        favorite : true
    },
    {
        id : 4,
        img : hotel1,
        title :'CVK Park Bosphorus Hotel Istanbul',
        price : 240,
        location : 'Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437',
        rate : 5,
        reviewsNumber : 371,
        aminites : 20, 
        favorite : false
    },
    {
        id : 5,
        img : hotel2,
        title :'Eresin Hotels Sultanahmet - Boutique Class',
        price : 104,
        location : 'Kucukayasofya No. 40 Sultanahmet, Istanbul 34022',
        rate : 4,
        reviewsNumber : 63,
        aminites : 18,
        favorite : false
    },
    {
        id : 6,
        img : hotel3,
        title :'Eresin Hotels Sultanahmet - Boutique Class',
        price : 190,
        location : 'Kucukayasofya No. 40 Sultanahmet, Istanbul 34022',
        rate : 2,
        reviewsNumber : 45,
        aminites : 9,
        favorite : true
    },
    {
        id : 7,
        img : hotel4,
        title :'Eresin Hotels Sultanahmet - Boutique Class',
        price : 580,
        location : 'Kucukayasofya No. 40 Sultanahmet, Istanbul 34022',
        rate : 5,
        reviewsNumber : 1900,
        aminites : 35,
        favorite : false
    }
]
export const results = [
    {
        id: 0,
        img: SyrianAirlines,
        favorite : false,
        rate: 4.2,
        reviewsNumber: 54,
        startingPrice: 104,
        firstTrip: {
            leaving: '12:00 pm',
            landing: '1:28 pm',
            leavingContry: 'Emirates',
            landingCountry: 'EWR-BNA',
            flightStatus: 'non stop',
            flightDuration: '2h 28m'
        },
        secondTrip: {
            leaving: '12:00 pm',
            landing: '1:28 pm',
            leavingContry: 'Emirates',
            landingCountry: 'EWR-BNA',
            flightStatus: 'non stop',
            flightDuration: '2h 28m'
        }
    },
    {
        id: 1,
        img: ShamWings,
        favorite : true,
        rate: 3.5,
        reviewsNumber: 16,
        startingPrice: 73,
        firstTrip: {
            leaving: '2:15 pm',
            landing: '5:45 pm',
            leavingContry: 'London',
            landingCountry: 'New York City',
            flightStatus: 'non stop',
            flightDuration: '3h 30m'
        },
        secondTrip: {
            leaving: '12:00 pm',
            landing: '3:30 pm',
            leavingContry: 'Londin',
            landingCountry: 'New York City',
            flightStatus: 'non stop',
            flightDuration: '3h 30m'
        }
    },
    {
        id: 2,
        img: Qatar,
        favorite : false,
        rate: 4.9,
        reviewsNumber: 146,
        startingPrice: 499,
        firstTrip: {
            leaving: '12:00 pm',
            landing: '1:28 pm',
            leavingContry: 'Washinton DC',
            landingCountry: 'Emirates',
            flightStatus: 'non stop',
            flightDuration: '1h 28m'
        },
        secondTrip: {
            leaving: '4:00 pm',
            landing: '5:28 pm',
            leavingContry: 'Washinton DC',
            landingCountry: 'Emirates',
            flightStatus: 'non stop',
            flightDuration: '1h 28m'
        }
    },
    {
        id: 3,
        img: Etihad,
        favorite : false,
        rate: 4.7,
        reviewsNumber: 2009,
        startingPrice: 1099,
        firstTrip: {
            leaving: '12:00 pm',
            landing: '1:28 pm',
            leavingContry: 'Emirates',
            landingCountry: 'EWR-BNA',
            flightStatus: 'non stop',
            flightDuration: '2h 28m'
        },
        secondTrip: {
            leaving: '12:00 pm',
            landing: '1:28 pm',
            leavingContry: 'Emirates',
            landingCountry: 'EWR-BNA',
            flightStatus: 'non stop',
            flightDuration: '2h 28m'
        }
    },
    {
        id: 4,
        img: SyrianAirlines,
        favorite : false,
        rate: 4.2,
        reviewsNumber: 54,
        startingPrice: 104,
        firstTrip: {
            leaving: '12:00 pm',
            landing: '1:28 pm',
            leavingContry: 'Emirates',
            landingCountry: 'EWR-BNA',
            flightStatus: 'non stop',
            flightDuration: '2h 28m'
        },
        secondTrip: {
            leaving: '12:00 pm',
            landing: '1:28 pm',
            leavingContry: 'Emirates',
            landingCountry: 'EWR-BNA',
            flightStatus: 'non stop',
            flightDuration: '2h 28m'
        }
    },
    {
        id: 5,
        img: ShamWings,
        favorite : false,
        rate: 3.5,
        reviewsNumber: 16,
        startingPrice: 73,
        firstTrip: {
            leaving: '2:15 pm',
            landing: '5:45 pm',
            leavingContry: 'London',
            landingCountry: 'New York City',
            flightStatus: 'non stop',
            flightDuration: '3h 30m'
        },
        secondTrip: {
            leaving: '12:00 pm',
            landing: '3:30 pm',
            leavingContry: 'Londin',
            landingCountry: 'New York City',
            flightStatus: 'non stop',
            flightDuration: '3h 30m'
        }
    },
    {
        id: 6,
        img: Qatar,
        favorite : true,
        rate: 4.9,
        reviewsNumber: 146,
        startingPrice: 499,
        firstTrip: {
            leaving: '12:00 pm',
            landing: '1:28 pm',
            leavingContry: 'Washinton DC',
            landingCountry: 'Emirates',
            flightStatus: 'non stop',
            flightDuration: '1h 28m'
        },
        secondTrip: {
            leaving: '4:00 pm',
            landing: '5:28 pm',
            leavingContry: 'Washinton DC',
            landingCountry: 'Emirates',
            flightStatus: 'non stop',
            flightDuration: '1h 28m'
        }
    },
    {
        id: 7,
        img: Etihad,
        favorite : true,
        rate: 4.7,
        reviewsNumber: 2009,
        startingPrice: 1099,
        firstTrip: {
            leaving: '12:00 pm',
            landing: '1:28 pm',
            leavingContry: 'Emirates',
            landingCountry: 'EWR-BNA',
            flightStatus: 'non stop',
            flightDuration: '2h 28m'
        },
        secondTrip: {
            leaving: '12:00 pm',
            landing: '1:28 pm',
            leavingContry: 'Emirates',
            landingCountry: 'EWR-BNA',
            flightStatus: 'non stop',
            flightDuration: '2h 28m'
        }
    }
]
