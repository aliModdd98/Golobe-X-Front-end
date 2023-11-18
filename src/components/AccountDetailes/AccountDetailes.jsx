import { useState } from 'react'
import Tabs from '../Tabs/Tabs'
import './AccountDetailes.css'
import AccountData from '../AccountData/AccountData';
import AccountTickets from '../AccountTickets/AccountTickets';
import AccountPaymentMethods from '../AccountPaymentMethods/AccountPaymentMethods';
import { Container } from 'react-bootstrap';

function AccountDetailes({data, setData}) {

    const [selected, setSelected] = useState(0);

    const handleSelect = (id) => {
        setSelected(id)
    }

    const tabsValues = [
        {
            id : 0,
            category : 'Account',
            priceRange : null,
            timeRange : null
        },
        {
            id : 1,
            category : 'History',
            priceRange : null,
            timeRange : null
        },
        {
            id : 2,
            category : 'Payment methods',
            priceRange : null,
            timeRange : null
        }
    ]

    const tabsBody = [<AccountData data={data} setData={setData} />, <AccountTickets />, <AccountPaymentMethods />]

    return (
        <Container className='fa_margin-top'>
            <Tabs filters={tabsValues} state={selected} setState={handleSelect} />
            {
                tabsBody[selected]
            }
        </Container>
    )
}

export default AccountDetailes