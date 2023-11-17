import { useState } from 'react'
import './RangInput.css'

function RangInput({ max, min, time }) {

    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const gap = (time) ? 180 : 300;

    let minTime = {
        hours : (minVal <= 60)? 12: Math.floor(((minVal >= 780)? minVal - 720 : minVal) / 60),
        minuts : Math.floor(((minVal >= 780)? minVal - 720 : minVal) % 60),
        time : ((minVal >= 720) ? ' Am' : ' Pm')
    }
    let maxTime = {
        hours : Math.floor(((maxVal >= 780)? maxVal - 720 : maxVal) / 60),
        minuts : Math.floor(((maxVal >= 780)? maxVal - 720 : maxVal) % 60),
        time : ((maxVal < 720 || maxVal == 1440) ? ' Pm' : ' Am')
    }

    const handleInputMin = (e) => {
        const newMinVal = parseInt(e.target.value);
        if (newMinVal <= maxVal - gap) {
            setMinVal(newMinVal);
        }
    }
    const handleInputMax = (e) => {
        const newMaxVal = parseInt(e.target.value);
        if (newMaxVal >= minVal + gap) {
            setMaxVal(newMaxVal);
        }
    }

    return (
        <>
            <div className='fa_range bg-black my-4 position-relative'>
                <input
                    type="range"
                    max={max}
                    min={min}
                    value={minVal}
                    className='w-100 position-absolute top-0 translate-middle-y'
                    onInput={(e) => { handleInputMin(e) }} />
                <input
                    type="range"
                    max={max}
                    min={min}
                    value={maxVal}
                    className='w-100 position-absolute top-0 translate-middle-y'
                    onInput={(e) => { handleInputMax(e) }} />
            </div>
            <div className='d-flex justify-content-between'>
                <p className='mb-0'>
                    {
                        (time)
                            ? minTime.hours + ':' + minTime.minuts + minTime.time
                            : minVal + '$'
                    }
                </p>
                <p className='mb-0'>
                    {
                        (time)
                            ? maxTime.hours + ':' + maxTime.minuts + maxTime.time
                            : maxVal + '$'
                    }
                </p>
            </div>
        </>
    )
}

export default RangInput