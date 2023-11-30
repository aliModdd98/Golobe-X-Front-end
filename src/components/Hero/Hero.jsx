import { Container } from 'react-bootstrap'
import './Hero.css'

function Hero({ img, center, className, title, secTitleLine, subTitle, children }) {
    let Styles = {
        '--gradient': (center) ? 'linear-gradient(#00000099, transparent)' : 'linear-gradient(to right,#00234DA1 , transparent)',
        '--img-url': `url(${img})`
    }

    return (
        <div className={`fn-BackgroundImg ${className}`} style={Styles}>
            <div className='h-100 position-relative'>
                {children}
                <Container className={`fa_hero-title d-flex flex-column justify-content-center h-100 ${(center) ? 'text-center' :'max_width-hero'}`}>
                    <h1 className='mb-0  text-white'>{title}</h1>
                    <h1 className='mb-3 text-white'>{secTitleLine}</h1>
                    <p className='mb-0 text-white'>{subTitle}</p>
                </Container>
            </div>
        </div>
    )
}

export default Hero