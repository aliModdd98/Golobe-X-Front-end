import React from 'react';
import { Container } from 'react-bootstrap';
import './PaymentComponent.css'

const PaymentComponent = () => {
    return (
        <section>
            <Container>
            <div className='ha-big'>
                <div className='ha-first'>
                    <h2>Pay in full</h2>
                    

                    <div className='ha-btn'>
                        <div className='frame-btn'>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="white"/>
  <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="white"/>
</svg>
                        </div>
                    
                    </div>
                        

                    <p className='ha-para'>Pay the total and you are all set</p>
                </div>

                <div className='ha-circle container '>
                    <h2>Pay part now, part later</h2>
                    <svg className='img' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
</svg>
                    <p className='ha-parag'>
                        Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same</p>
                    <p className='ha-paragragh'>  payment method on Nov 14, 2022. No extra fees.</p>
                    <div className='more-info'>
                    <p>More info</p>
                    </div>
                </div>
            </div>
            </Container>
        </section>
    );
};

export default PaymentComponent;