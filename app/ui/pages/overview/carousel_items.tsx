'use client'

import Image from "next/image";

interface props {
    image: any
    title: string
    text: string
    direction?: 'rtl' | 'ltr'
}

function Carousel_items({ image, text, title, direction = 'rtl' }: props) {

    return (
        <div className="carousel_item" dir={direction}>
            <div>
                <h1 style={{ fontFamily: direction === 'rtl' ? 'vazirmatn' : 'sans-serif auto' }}>{title}</h1>
                <h2 style={{ fontFamily: direction === 'rtl' ? 'vazirmatn' : 'sans-serif auto' }}>{text}</h2>
            </div>
            <div>
                {/* <Image src={image} alt="carousel_image" /> */}
                <img src={image.src} alt="carousel_image" />
            </div>
        </div>
    );
}

export default Carousel_items;