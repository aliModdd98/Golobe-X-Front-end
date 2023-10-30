import SectionTitle from '../SectionTitle/SectionTitle'
import { Container } from 'react-bootstrap'
import ReviewCard from '../ReviewCard/ReviewCard'
import './Reviews.css'
import card1 from './../../assets/card1.png'
import card2 from './../../assets/card2.png'
import card3 from './../../assets/card3.png'
import { useRef, useState } from 'react'

function Reviews() {
    const [clicked, setClicked] = useState(false);

    const cards = [
        {
            id: 1,
            img: card1,
            title: '“A real sense of community, nurtured”',
            review: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
            rate: 5,
            userName: 'Olga',
            country: 'Weave Studios – Kai Tak'
        },
        {
            id: 2,
            img: card2,
            title: '“The facilities are superb. Clean, slick, bright.”',
            review: '“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle',
            rate: 4,
            userName: 'Thomas',
            country: 'Weave Studios – Olympic'
        },
        {
            id: 3,
            img: card3,
            title: '“A real sense of community, nurtured”',
            review: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.',
            rate: 5,
            userName: 'Eliot',
            country: 'Weave Studios – Kai Tak'
        },
        {
            id: 4,
            img: card1,
            title: '“The facilities are superb. Clean, slick, bright.”',
            review: '“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle',
            rate: 5,
            userName: 'Fadi',
            country: 'Syria – Homs'
        },
        {
            id: 5,
            img: card2,
            title: '“The facilities are superb. Clean, slick, bright.”',
            review: '“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle',
            rate: 5,
            userName: 'Ali',
            country: 'USA -LA'
        },
        {
            id: 6,
            img: card3,
            title: '“The facilities are superb. Clean, slick, bright.”',
            review: '“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle',
            rate: 5,
            userName: 'Raghad',
            country: 'Lebanon – Beruit'
        },
        {
            id: 7,
            img: card1,
            title: '“The facilities are superb. Clean, slick, bright.”',
            review: '“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle',
            rate: 5,
            userName: 'Hasan',
            country: 'Syria – Damas'
        },
    ];
    const sliderR = useRef(null);
    let isDown = false;
    let startX, scrollLeftV;
    function HandleMouseDown(event) {
        isDown = true;
        startX = event.pageX - sliderR.current.offsetLeft;
        scrollLeftV = sliderR.current.scrollLeft;
    }
    function HandleMouseLeave() {
        isDown = false;
    }
    function HandMouseUp() {
        isDown = false;
    }
    function HandleMouseMove(event) {
        if (!isDown) return;
        event.preventDefault();
        const X = event.pageX - sliderR.current.offsetLeft;
        const walk = X - startX;
        sliderR.current.scrollLeft = scrollLeftV - walk;
    }

    return (
        <section className='my-5 overflow-hidden '>
            <Container>
                <SectionTitle title='Reviews'
                    subTitle='What people says about Golobe facilities'
                    button={(clicked)? 'See Less' : 'see All'}
                    stateV={clicked}
                    setState = {setClicked} />
            </Container>
            <div className='overflow-x-scroll py-5' id='slider' ref={sliderR}
                onMouseDown={(event) => HandleMouseDown(event)}
                onMouseMove={(e) => HandleMouseMove(e)}
                onMouseUp={HandMouseUp}
                onMouseLeave={HandleMouseLeave}>
                <Container>
                    <div className='d-flex'>
                        {
                            (clicked)?
                            cards.slice().map((card) => {
                                return (
                                    <ReviewCard
                                        img={card.img}
                                        title={card.title}
                                        review={card.review}
                                        rate={card.rate}
                                        userName={card.userName}
                                        country={card.country}
                                        key={card.id} />
                                )
                            }):
                            cards.slice(0,4).map((card) => {
                                return (
                                    <ReviewCard
                                        img={card.img}
                                        title={card.title}
                                        review={card.review}
                                        rate={card.rate}
                                        userName={card.userName}
                                        country={card.country}
                                        key={card.id} />
                                )
                            })
                        }
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Reviews