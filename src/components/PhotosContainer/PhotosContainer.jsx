

import "./PhotosContainerStyle.css"
// import { BsFillSendFill } from 'react-icons/bs'

import PhotoCard from '../PhotoCard/PhotoCard'
import image1 from './../../assets/flights.png'
import image2 from './../../assets/hotels.png'
function PhotosContainer() {

    const data = [
        {
            id: "1",
            img: image1,
            title: 'Flights',
            description: 'Search Flights & Places Hire to our most popular destinations',
            button_text: 'Show Flights',
        },
        {
            id: "2",
            img: image2,
            title: 'Hotels',
            description: 'Search Flights & Places Hire to our most popular destinations',
            button_text: 'Show Hotels',
        }
    ]


    return (

        <div className="aj_photo_container">
            {
                data.map((e) => {
                    return (
                <PhotoCard   key={e.id}
                            img={e.img}
                            title={e.title}
                            description={e.description}
                            button_text={e.button_text}
                        />

                    );
                })
            }






        </div>
// =======
//         <section>
//             <Container>
//                 <Row>
//                     {
//                         data.map((e, index) => {
//                             return (
//                                 <PhotoCard
//                                     key={index}
//                                     img={e.img}
//                                     title={e.title}
//                                     description={e.description}
//                                     button_text={e.button_text}
//                                 />

//                             );
//                         })
//                     }
//                 </Row>
//             </Container>
//         </section>
// >>>>>>> main

    )
}

export default PhotosContainer;