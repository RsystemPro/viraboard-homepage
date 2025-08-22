'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import myImage from './icon/pic.jpg'
import { ReactNode, useEffect, useRef } from 'react';

interface props {
    direction?: 'rtl' | 'ltr'
    children: ReactNode[]
}

function TW_Carousel({ direction = 'ltr', autoplay = true, children }: any) {

    const swiperRef = useRef(null);

    useEffect(() => {
        console.log('swiper autoplay: ', autoplay);
        if (autoplay) {
            (swiperRef.current as any).swiper.autoplay.start();
        } else {
            (swiperRef.current as any).swiper.autoplay.stop();
        }
    }, [autoplay]);

    return (
        <>
            <Swiper
                ref={swiperRef}
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
                    children && children.map((x: any, y: number) => <SwiperSlide key={y} >{x}</SwiperSlide>)
                }
            </Swiper>
        </>
    );
}

export default TW_Carousel;