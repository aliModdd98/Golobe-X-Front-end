import React from 'react'
import Footer from '../components/Footer/Footer'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
import TripCard from '../components/TripCard/TripCard'
import grid1 from './../assets/grid-1.png'
import grid2 from './../assets/grid-2.png'
import grid3 from './../assets/grid-3.png'
import grid4 from './../assets/grid-4.png'
import grid5 from './../assets/grid-5.png'
import grid6 from './../assets/grid-6.png'
import grid7 from './../assets/grid-7.png'
import grid8 from './../assets/grid-8.png'
import grid9 from './../assets/grid-9.png'
import ReviewCard from '../components/ReviewCard/ReviewCard'
import card1 from './../assets/card1.png'
import card2 from './../assets/card2.png'
import card3 from './../assets/card3.png'

function LandingPage() {
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
      img: card1,
      title: '“The facilities are superb. Clean, slick, bright.”',
      review: '“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle',
      rate: 5,
      userName: 'Fadi',
      country: 'Syria – Homs'
    },
  ];
  const grids = [
    {
      id: 1,
      img: grid1,
      country: 'Istanbul, Turkey',
      services: ['Flights', 'Hotels', 'Resorts']
    },
    {
      id: 2,
      img: grid2,
      country: 'Sydney, Australia',
      services: ['Flights', 'Hotels', 'Resorts']
    },
    {
      id: 3,
      img: grid3,
      country: 'Baku, Azerbaijan',
      services: ['Flights', 'Hotels', 'Resorts']
    },
    {
      id: 4,
      img: grid4,
      country: 'Malé, Maldives',
      services: ['Flights', 'Hotels', 'Resorts']
    },
    {
      id: 5,
      img: grid5,
      country: 'Paris, France',
      services: ['Flights', 'Hotels', 'Resorts']
    },
    {
      id: 6,
      img: grid6,
      country: 'New York, US',
      services: ['Flights', 'Hotels', 'Resorts']
    },
    {
      id: 7,
      img: grid7,
      country: 'London, UK',
      services: ['Flights', 'Hotels', 'Resorts']
    },
    {
      id: 8,
      img: grid8,
      country: 'Tokyo, Japan',
      services: ['Flights', 'Hotels', 'Resorts']
    },
    {
      id: 9,
      img: grid9,
      country: 'Dubai, UAE',
      services: ['Flights', 'Hotels', 'Resorts']
    },
  ]
  return (
    <>
      <section className='my-5'>
        <Container>
          <SectionTitle title='Plan your perfect trip'
            subTitle='Search Flights & Places Hire to our most popular destinations'
            button='see more places' />
          <Row className='mt-5'>
            {
              grids.map((grid) => {
                return (
                  <Col key={grid.id} lg={4}>
                    <TripCard img={grid.img}
                      country={grid.country}
                      services={grid.services} />
                  </Col>
                );
              })
            }
          </Row>
        </Container>
      </section>
      <section className='my-5 overflow-hidden '>
        <Container>
          <SectionTitle title='Reviews'
            subTitle='What people says about Golobe facilities'
            button='See All' />
        </Container>
        <div className='overflow-scroll mt-5 pb-5'>
          <Container>
            <div className='d-flex'>
              {
                cards.map((card) => {
                  return (
                    <ReviewCard img={card.img}
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
      <Footer />
    </>
  )
}

export default LandingPage