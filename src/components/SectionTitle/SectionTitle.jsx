import './SectionTitle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function SectionTitle({ title, subTitle, button, stateV, setState }) {
    return (
        <div className='d-flex justify-content-between align-items-center' data-aos="zoom-in-up">
            <div className='sectionTitle'>
                <h1 className='mb-3'>{title}</h1>
                <p className='mb-0 opacity-75'>{subTitle}</p>
            </div>
            <button className='orangeBotton border-orange bg-transparent' onClick={() => setState(!stateV)}>
                {button}
            </button>
        </div>
    )
}

export default SectionTitle