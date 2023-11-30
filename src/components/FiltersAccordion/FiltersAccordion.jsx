import { useState } from 'react'
import './FiltersAccordion.css'
import { BsChevronDown } from 'react-icons/bs'


function FiltersAccordion({ children, title }) {
    const [active, setActive] = useState(true)

    return (
        <div className='border-bottom border-secondary-subtle pt-3 pb-4'>
            <button className='px-0 pb-3 w-100 bg-transparent fa_accordion-item border-0 d-flex justify-content-between align-items-center' onClick={() => { setActive(!active) }}>
                {title}
                <BsChevronDown className={`text-black text-bold fa_transition ${(active) ? 'fa_rotate' : ''} `} />
            </button>
            <div className={`overflow-hidden fa_active_accordion fa_transition ${(active) ? 'openAccordion' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default FiltersAccordion