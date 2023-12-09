import './PriceDetails.css'
import { useState } from 'react';
import AddingCard from './../AddingCard/AddingCard'
const PriceDetails = ({ flight }) => {

  const [showCard, setShowCard] = useState(false);
  const [selected, setSelected] = useState(0)
  const [cards, setCards] = useState(
    [
    {
      id: 0,
      number: '****4321',
      date: '02/27'
    },
    {
      id: 1,
      number: '****1234',
      date: '07/18'
    }
  ]
  );

  const handleAddCardClick = () => {
    setShowCard(true);
  };
  const handleCardClick = () => {
    if (!showCard) {
      setShowCard(true);
    }
  };
  const handleCloseClick = () => {
    setShowCard(false);
  };
  const handleOverlayClick = () => {
    setShowCard(false);
  };
  return (
    <div>
      <div className='bg-white rounded-4 shadow-sm mt-5 p-3' >
        {
          cards.map((item) => (
            <div
              className={`d-flex justify-content-between align-items-center rounded-3 rounded-3 mb-3 p-3 ${(selected == item.id) && 'fa_selected bg-orange'}`}
              onClick={() => setSelected(item.id)}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <g clipPath="url(#clip0_1_8052)">
                    <path d="M1.28 5.95203C0.573216 5.95203 0 6.52508 0 7.23203V24.768C0 25.4749 0.573504 26.048 1.28 26.048H30.72C31.4268 26.048 32 25.475 32 24.768V7.23203C32 6.52511 31.4265 5.95203 30.72 5.95203H1.28ZM19.112 11.941C19.8908 11.941 20.515 12.1131 20.913 12.273L20.641 13.984L20.461 13.893C20.0902 13.7331 19.614 13.5791 18.957 13.59C18.1706 13.59 17.807 13.9408 17.807 14.2691C17.8024 14.6389 18.2318 14.8828 18.934 15.248C20.0929 15.8115 20.6286 16.4948 20.621 17.393C20.6054 19.032 19.2347 20.091 17.123 20.091C16.2221 20.0811 15.3542 19.8904 14.885 19.67L15.167 17.902L15.426 18.028C16.0858 18.3228 16.513 18.442 17.317 18.442C17.8944 18.442 18.5141 18.2003 18.519 17.671C18.5228 17.3254 18.26 17.079 17.478 16.692C16.716 16.3143 15.7058 15.6816 15.717 14.547C15.7289 13.0123 17.127 11.941 19.112 11.941ZM2.82998 12.192H6.07299C6.5097 12.2085 6.86227 12.3491 6.984 12.823L7.68301 16.431C7.6831 16.4314 7.68288 16.4327 7.68301 16.433L7.89299 17.514L9.86199 12.192H11.992L8.82598 19.982L6.69798 19.984L5.004 13.698C6.01194 14.232 6.87005 14.8498 7.36701 15.7C7.23888 15.431 7.07005 15.1273 6.85402 14.828C6.60243 14.4795 6.0591 14.0295 5.832 13.838C5.04064 13.1709 3.96592 12.6321 2.80499 12.347L2.82998 12.192ZM12.839 12.201H14.922L13.619 19.979H11.536L12.839 12.201ZM24.604 12.201H26.182L27.834 19.979H25.94C25.94 19.979 25.7521 19.0855 25.691 18.813C25.3933 18.813 23.3113 18.81 23.077 18.81C22.9977 19.0206 22.647 19.979 22.647 19.979H20.504L23.535 12.847C23.7496 12.3402 24.1154 12.201 24.604 12.201ZM24.759 14.293C24.6565 14.5823 24.4781 15.0495 24.49 15.029C24.49 15.029 23.8488 16.7391 23.681 17.183L25.366 17.182C25.2095 16.4403 25.0528 15.6987 24.896 14.9571L24.759 14.2931V14.293Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_8052">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className='ms-4 fa_card_number-method'>{item.number}</span>
                <span className='ms-2 fa_card_date-method'>{item.date}</span>
              </div>
              <div className='fa_selected-method d-flex justify-content-center align-items-center'>
                <div></div>
              </div>
            </div>
          ))
        }
        <div className='dash_border' onClick={handleAddCardClick} >
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
            <path d="M56 32.917C56 19.667 45.25 8.91699 32 8.91699C18.75 8.91699 8 19.667 8 32.917C8 46.167 18.75 56.917 32 56.917C45.25 56.917 56 46.167 56 32.917Z" stroke="#FF8500" strokeWidth="2" strokeMiterlimit="10" />
            <path d="M32 22.917V42.917M42 32.917H22" stroke="#FF8500" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <p>Add a new card</p>
        </div>
      </div>
      {showCard ? (
        <div className="overlay">
          <div className="card-overlay" onClick={handleCardClick}>
            <AddingCard data={cards} setData={setCards} onCloseClick={handleCloseClick} />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default PriceDetails