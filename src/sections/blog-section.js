/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import ProyectEcommerce from 'assets/blog/ecommerce.png'
import ProyectCrypto from 'assets/blog/React-Crypto.png'
import ProycetWeather from 'assets/blog/Weather.png'
import ProyectGiphys from 'assets/blog/Giphys.png'
import ProyectPokedex from 'assets/blog/pokedex.png'

const data = [
    {
        id: 1,
        imgSrc: ProyectEcommerce,
        altText: 'ecommerce',
        postLink: 'https://github.com/Tomas36M/Dev.f/tree/master/Proyectos/Proyectos%20React/Proyecto%20Final/e-commerce',
        title: 'Ecommerce using React and Material-UI',
        authorName: 'Tomas Munevar',
        date: '',
    },
    {
        id: 2,
        imgSrc: ProyectCrypto,
        altText: 'crypto-currency',
        postLink: 'https://github.com/Tomas36M/Dev.f/tree/master/Proyectos/Proyectos%20React/react-crypto',
        title: 'Crypto Coin using CoinGecko API and React',
        authorName: 'Tomas Munevar',
        date: '',
    },
    {
        id: 3,
        imgSrc: ProycetWeather,
        altText: 'Weather-app',
        postLink: 'https://github.com/Tomas36M/Dev.f/tree/master/Proyectos/Proyectos%20React/react-weather',
        title: 'Weather Widget using OpenWeather Api and React',
        authorName: 'Tomas Munevar',
        date: '',
    },
    {
        id: 4,
        imgSrc: ProyectGiphys,
        altText: 'giphy',
        postLink: 'https://github.com/Tomas36M/Dev.f/tree/master/Proyectos/Proyectos%20React/react-giphy',
        title: 'Search for Giphys using Giphy Api',
        authorName: 'Tomas Munevar',
        date: '',
    },
    {
        id: 5,
        imgSrc: ProyectPokedex,
        altText: 'pokedex',
        postLink: 'https://github.com/Tomas36M/Dev.f/tree/master/Proyectos/Proyectos%20React/react-giphy',
        title: 'Pokedex using Pokeapi, HTML, CSS and javaScript',
        authorName: 'Tomas Munevar',
        date: '',
    }
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1310 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1310, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

export default function BlogSection() {
    return (
        <section id='proyects' sx={{ variant: 'section.news' }}>
            <Container>
                <SectionHeader
                    slogan="Proyects"
                    title="Explore some of my personal proyects"
                />
                <Box sx={styles.carouselWrapper}>
                    <Carousel
                        additionalTransfrom={0}
                        arrows={false}
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="carousel-container"
                        customButtonGroup={<ButtonGroup />}
                        dotListClass="test"
                        draggable={true}
                        focusOnSelect={false}
                        infinite={true}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside
                        renderDotsOutside={false}
                        responsive={responsive}
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                    >
                        {data.map((item) => (
                            <PostCard
                                key={item.id}
                                src={item.imgSrc}
                                alt={item.altText}
                                postLink={item.postLink}
                                title={item.title}
                                authorName={item.authorName}
                                date={item.date}
                            />
                        ))}
                    </Carousel>
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    carouselWrapper: {
        '.carousel-container': {
            mx: -3,
            pt: '20px'
        },
    },
};
