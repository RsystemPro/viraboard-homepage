'use client'

import Image from "next/image";
import { useRef } from "react";

interface props {
    image: any
    title: string
    text: string
    direction?: 'rtl' | 'ltr'
    btnText?: string
    videoLink?: string
    btnLink?: string
    btnVideoText?: string
    videoCallback?: () => void
}

function Carousel_items({ image, text, title, btnText, btnLink, videoLink, direction = 'rtl', btnVideoText, videoCallback }: props) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const videoClicked = () => {
        if (videoRef.current) {
            videoRef.current.requestFullscreen();
            videoCallback && videoCallback();
        }
    };
    const videoPlayClicked = () => {
        if (videoRef.current) {
            videoCallback && videoCallback();
        }
    };
    const btnClicked = () => {
        window.open(btnLink, '_blank');
    };
    const btnVideoClicked = () => {
        if (videoRef.current) {
            videoRef.current.requestFullscreen();
            videoCallback && videoCallback();
        }
    };

    return (
        <div className="carousel_item" dir={direction}>
            <div>
                <h1 style={{ fontFamily: direction === 'rtl' ? 'vazirmatn' : 'sans-serif auto' }}>{title}</h1>
                <h2 style={{ fontFamily: direction === 'rtl' ? 'vazirmatn' : 'sans-serif auto' }}>{text}</h2>
                {btnText && (<button onClick={btnClicked} className="btnDoc">{btnText}</button>)}
                {btnVideoText && (<button onClick={btnVideoClicked} className="btnDoc">{btnVideoText}</button>)}
            </div>
            <div>
                {videoLink ? <video onClick={videoClicked} onPlay={videoPlayClicked} ref={videoRef} src={videoLink} controls /> : <img src={image.src} alt="carousel_image" />}
            </div>
        </div>
    );
}

export default Carousel_items;