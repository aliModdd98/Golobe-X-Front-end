import { useRef, useState } from 'react'
import './DisplayAndChange.css'
import edit from './../../assets/edit.svg'
import { IoAddCircle } from "react-icons/io5";

function DisplayAndChange({ data, setData, originalData }) {
    const [disable, setDisable] = useState(true)
    const [inputvalue, setInputValue] = useState(data.value)

    const inputRef = useRef();

    const handleChange = () => {
        setDisable(false);
        setTimeout(() => inputRef.current.focus(), 100)
    }
    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            setDisable(true);
            let newData = [...originalData]
            newData[data.id].value= inputvalue;
            setData(newData)
        }
    }


    return (
        <div className='d-flex align-items-center my-4'>
            <div className='flex-grow-1 opacity-75 fa_changeinput'>
                <p className='mb-0'>{data.lable}</p>
                <input
                    ref={inputRef}
                    type={data.inputType}
                    value={inputvalue}
                    disabled={disable}
                    className='w-100 border-0 bg-white text-black fa_outline-none'
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e)} />
            </div>
            <div className='d-flex gap-3'>
                {
                    data.add && <button className='border-orange bg-transparent px-3 py-2 fa_changeinput-button' onClick={handleChange}>
                        <IoAddCircle className='me-2' />
                        Add another email
                    </button>
                }
                <div>
                    <button className='border-orange bg-transparent px-3 py-2 fa_changeinput-button' onClick={handleChange}>
                        <img src={edit} alt="edit" className='me-2' />
                        Change
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DisplayAndChange