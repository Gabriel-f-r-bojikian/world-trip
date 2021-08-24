import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


import SwiperCore, {
  Navigation, Pagination
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

export default function Slider() {
    return (
        <>
            <Swiper 
                id="mySwiper" 
                pagination={true} 
                navigation={true} 
                className="mySwiper"
            >
                <SwiperSlide>Europa<br />O continente mais antigo</SwiperSlide>
                <SwiperSlide>America do Norte</SwiperSlide>
                <SwiperSlide>América do Sul</SwiperSlide>
                <SwiperSlide>Ásia</SwiperSlide>
                <SwiperSlide>África</SwiperSlide>
                <SwiperSlide>Oceania</SwiperSlide>
            </Swiper>
        </>
    )
}