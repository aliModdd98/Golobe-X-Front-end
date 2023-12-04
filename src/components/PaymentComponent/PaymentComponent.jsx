import './PaymentComponent.css'
import { useState } from 'react';

const PaymentComponent = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className='ha-big'>
            <div
                className={`ha-first ${selectedOption === 'payInFull' ? 'selected' : 'notSelected'}`}
                onClick={() => handleOptionClick('payInFull')}
            >
                <h1>Pay in full</h1>
                <div className='ha-btn'>
                    <div className='frame-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="white" />
                            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <p className='ha-para'>Pay the total and you are all set</p>
            </div>
            <div
                className={`ha-circle container ha-first ${selectedOption === 'payPartLater' ? 'selected' : 'notSelected'}`}
                onClick={() => handleOptionClick('payPartLater')}
            >
                <h1>Pay part now, part later</h1>
                <p className='ha-parag'>
                    Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same</p>
                <p className='ha-paragragh'>  payment method on Nov 14, 2022. No extra fees.</p>
                <div className='more-info'>
                    <p>More info</p>
                    <div className='frame-btn ha-pos'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="white" />
                            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentComponent;