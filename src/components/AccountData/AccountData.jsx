import DisplayAndChange from '../DisplayAndChange/DisplayAndChange'
import './AccountData.css'

function AccountData({data, setData}) {
  return (
    <div>
      <p className='mb-2 mt-4 fa_tab-title'>Account</p>
      <div className='bg-white px-3 py-1 rounded-3 shadow-sm'>
        {
          data.map(simiData => (
            <DisplayAndChange key={simiData.id} data={simiData} originalData={data} setData={setData} />
          ))
        }
      </div>
    </div>
  )
}

export default AccountData