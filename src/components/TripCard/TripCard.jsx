import './TripCard.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function TripCard({ img, country, services }) {
    return (
        <div data-aos="zoom-in" className='d-flex align-items-center rounded-4 bg-white shadow-sm p-3 mb-4' >
            <img src={img} alt={country} className='width-90px pe-3' />
            <div className='tripCard'>
                <p className='mb-2'>{country}</p>
                <div className='d-flex align-items-center gap-2'>
                    <span>{services[0]}</span>
                    <div className='dot bg-dark'></div>
                    <span>{services[1]}</span>
                    <div className='dot bg-dark'></div>
                    <span>{services[2]}</span>
                </div>
            </div>
        </div>
    )
}

export default TripCard