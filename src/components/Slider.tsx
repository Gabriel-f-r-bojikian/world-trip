import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Flex } from '@chakra-ui/react';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, {
  Navigation, Pagination
} from 'swiper/core';

import SliderContent from './SlideContent'

SwiperCore.use([Navigation, Pagination]);

export default function Slider() {
    return (
        <Flex
            h="450px"
            w={{base: "100vw", lg: "100%"}}
            maxWidth="1240px"
            align="center"
            justify="center"
            marginBottom="40px"
        >
            <Swiper 
                id="mySwiper" 
                pagination={true} 
                navigation={true} 
                className="swiper-container"
            >
                <SwiperSlide className="swiper-slide"><SliderContent name="Europa" description="O continente mais antigo" image="/DestinationPictures/London.jpg" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><SliderContent name="América do Norte" description="O centro econômico do mundo" image="/DestinationPictures/NewYork.jpg" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><SliderContent name="América do Sul" description="Lar de cidades pulsantes" image="/DestinationPictures/SaoPaulo.jpg" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><SliderContent name="Ásia" description="Berço de culturas exóticas e milenares" image="/DestinationPictures/Tokyo.jpg" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><SliderContent name="África" description="Natureza desgarrada e povos destemidos" image="/DestinationPictures/Cairo.jpg" /></SwiperSlide>
                <SwiperSlide className="swiper-slide"><SliderContent name="Oceania" description="Modernidade no meio do pacífico" image="/DestinationPictures/SydneyOperaHouse.jpg" /></SwiperSlide>
            </Swiper>
        </Flex>
    )
}