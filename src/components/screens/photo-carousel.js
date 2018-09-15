import React from 'react';
import Slider from 'react-slick';
import '../styles/photo-carousel.css';

const sliderSettings = {
    className: 'center',
    centerMode: true,
    centerPadding: '75px',
    infinite: true,
    slidesToShow: 3,
    speed: 333,
    arrows: false,
    dots: false,
    focusOnSelect: true
};

export default class PhotoCarousel extends React.Component {
    render() {
        const titles = this.props.photo_list.map((data, i) => (
            <div key={i} className="Movie">
                <div className="MoviePoster" style={{backgroundImage: `url(${data})`}}></div>
            </div>
        ));
        return(
            <div className="MovieSlider">
                <Slider {...sliderSettings}>{titles}</Slider>
            </div>
        )
    }
}