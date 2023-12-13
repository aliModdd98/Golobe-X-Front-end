import './PaymentComponent.css'
import { useState } from 'react';

const PaymentComponent = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className='bg-white rounded-4 shadow-sm p-3'>
            <div
                className={`d-flex justify-content-between align-items-center rounded-3 gap-5 p-3 ${(selected == 0) && 'fa_selected bg-orange'}`}
                onClick={() => setSelected(0)}>
                <div>
                    <p className='mb-2 fa_payment-method'>Pay in full</p>
                    <p className='mb-0 fa_payment-method-disc'>Pay the total and you are all set</p>
                </div>
                <div className='fa_selected-method d-flex justify-content-center align-items-center'>
                    <div></div>
                </div>
            </div>
            <div
                className={`d-flex justify-content-between align-items-center rounded-3 p-3 ${(selected == 1) && 'fa_selected bg-orange'}`}
                onClick={() => setSelected(1)}>
                <div className='fa_pay-partly'>
                    <p className='mb-2 fa_payment-method'>Pay part now, part later</p>
                    <p className='mb-3 fa_payment-method-disc'>Pay 207.43 $ now, and the rest (207.43 $) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.</p>
                    <p className='mb-0'>More info</p>
                </div>
                <div className='fa_selected-method d-flex justify-content-center align-items-center'>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default PaymentComponent;