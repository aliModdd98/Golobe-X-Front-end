import './SectionTitle.css';

function SectionTitle({ title, subTitle, button, stateV, setState }) {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='sectionTitle'>
                <h1 className='mb-3'>{title}</h1>
                <p className='mb-0 opacity-75'>{subTitle}</p>
            </div>
            <button className='orangeBotton bg-transparent' onClick={() => setState(!stateV)}>
                {button}
            </button>
        </div>
    )
}

export default SectionTitle