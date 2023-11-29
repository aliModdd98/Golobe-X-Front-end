import { Container } from 'react-bootstrap'
import './AccountProfilePgoto.css'
import cover from './../../assets/cover.jfif'
import profile from './../../assets/user.jpg'
import { MdEdit } from "react-icons/md";
import { IoIosCloudUpload } from "react-icons/io";
import { useRef, useState } from 'react';

function AccountProfilePgoto({name, email}) {
    const [image, setImage] = useState(null)

    const imageUpload = useRef();

    const getImage = () => {
        imageUpload.current.click();
    }

    const geturl = () => {
        setImage(URL.createObjectURL(imageUpload.current.files[0]))
    }

    return (
        <Container className='mt-5 pt-5'>
            <div className='fa_profile-cover_photo fa_background-img-Account d-flex justify-content-end align-items-end mt-4 rounded-3' style={{ '--img-url': `url(${cover})` }}>
                <button className='border-0 bg-orange py-2 px-3 mb-4 me-4 rounded-2 fa_change_cover_button'>
                    <IoIosCloudUpload className='me-1' />
                    Upload new cover
                </button>
            </div>
            <div className='fa_profile-detailes'>
                <div className='mx-auto position-relative rounded-circle shadow-sm fa_background-img-Account fa_profile-img' style={{ '--img-url': `url(${image ? image : profile})` }}>
                    <input 
                    type="file" 
                    ref={imageUpload} 
                    className='d-none'
                    onChange={geturl} />
                    <button
                        className='fa_background-pink position-absolute rounded-circle p-2 end-0 bottom-0 border-0 d-flex justify-content-center align-items-center fs-5'
                        onClick={getImage}>
                        <MdEdit />
                    </button>
                </div>
                <p className='mb-0 mt-3 text-center fa_user_name'>{name}</p>
                <p className='mb-0 text-center fa_user_email'>{email}</p>
            </div>
        </Container>
    )
}

export default AccountProfilePgoto