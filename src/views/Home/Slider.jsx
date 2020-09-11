import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { logo_white, banner1, banner2 } from '../../assets/img';
import SwiperCore, { Autoplay } from 'swiper';
function Slider(props) {
    SwiperCore.use([Autoplay]);
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
        >
            <SwiperSlide><img src={banner1} alt="" srcset="" /></SwiperSlide>
            <SwiperSlide><img src={banner2} alt="" srcset="" /></SwiperSlide>
            <div class="swiper-pagination"></div>
        </Swiper>
    );
}

export default Slider;