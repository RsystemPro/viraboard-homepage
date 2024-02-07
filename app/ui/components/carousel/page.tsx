'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import myImage from './icon/pic.jpg'
import { ReactNode } from 'react';

interface props {
    direction?: 'rtl' | 'ltr'
    children: ReactNode[]
}

function TW_Carousel({ direction = 'ltr', children }: props) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-full h-full"
                dir={direction}
            >
                {
                    children && children.map((x, y) => <SwiperSlide key={y} >{x}</SwiperSlide>)
                }
            </Swiper>
        </>
    );
}

export default TW_Carousel;