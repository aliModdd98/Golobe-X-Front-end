import "./PhotosContainerStyle.css"
import PhotoCard from '../PhotoCard/PhotoCard'
import image1 from './../../assets/flights.png'
import image2 from './../../assets/hotels.png'
import { Container, Row } from "react-bootstrap"
function PhotosContainer() {

    const data = [
        {
            id: 1,
            img: image1,
            title: 'Flights',
            description: 'Search Flights & Places Hire to our most popular destinations',
            button_text: 'Show Flights',
            hotels: false,
        },
        {
            id: 2,
            img: image2,
            title: 'Hotels',
            description: 'Search Hotels & Places Hire to our most popular destinations',
            button_text: 'Show Hotels',
            hotels: true,
        }
    ]

    return (
                <section>
                    <Container>
                        <Row className="gap-3">
                            {
                                data.map((e) => {
                                    return (
                                        <PhotoCard
                                            key={e.id}
                                            hotels={e.hotels}
                                            img={e.img}
                                            title={e.title}
                                            description={e.description}
                                            button_text={e.button_text}
                                        />
                                    );
                                })
                            }
                        </Row>
                    </Container>
                </section>
    )
}

export default PhotosContainer;