import { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import AccountProfilePgoto from '../components/AccountProfilePgoto/AccountProfilePgoto'
import AccountDetailes from '../components/AccountDetailes/AccountDetailes'
import Footer from '../components/Footer/Footer'

function Account() {
    const userData = [
        {
            id: 0,
            lable: 'Name',
            value: 'Fadi Noumih',
            type: 'text',
            add: false
        },
        {
            id: 1,
            lable: 'Email',
            value: 'fadinoumih18@gmail.com',
            type: 'email',
            add: true
        },
        {
            id: 2,
            lable: 'Password',
            value: 'FadiNoumih@2002',
            type: 'password',
            add: false
        },
        {
            id: 3,
            lable: 'Phone number',
            value: '00963935741791',
            type: 'text',
            add: false
        },
        {
            id: 4,
            lable: 'Address',
            value: 'St 32 main downtown, Los Angeles, California, USA',
            type: 'text',
            add: false
        },
        {
            id: 5,
            lable: 'Date of birth',
            value: '18-07-2002',
            type: 'text',
            add: false
        }
    ]
    const [userDataState, setUserDataState] = useState(userData)
    return (
        <>
            <AccountProfilePgoto name={userDataState[0].value} email={userDataState[1].value} />
            <AccountDetailes data={userData} setData={setUserDataState} />
        </>
    )
}

export default Account