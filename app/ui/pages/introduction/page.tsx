'use client'

import Explains from './explains';
import Board from './board';
import './style.css';
import PagesLayout from '@/app/ui/layouts/pagesLayout';
import { useMotionValueEvent, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '@/app/lib/toolkit/tsHook';
import { setNavbar } from '@/app/lib/toolkit/general';
import background_wave from './icons/top waves.png'
import Image from 'next/image';
import Logo_Loading from '../../components/loading/page';

interface props {
    language: language
}

function Introductions({ language }: any) {

    const container = useRef<HTMLDivElement>(null)
    const [imageLoaded, setImageLoaded] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!imageLoaded) return
        console.log('image loaded');
    }, [imageLoaded])

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["1 0", "0 0"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const value = scrollYProgress.get()
        if (value > .4 && value < 0.6) {
            dispatch(setNavbar('introduction'))
        }
    })

    return (
        <div ref={container} id='Test2' className='introduction_container'>
            {!imageLoaded && <Logo_Loading language={language} />}
            <Image src={background_wave} alt='back_wave' id='ic_bw' />
            {imageLoaded && <Explains scroll={scrollYProgress} lang={language} />}
            <Board scroll={scrollYProgress} lang={language} setImageLoaded={setImageLoaded} />
        </div>
    );
}

export default Introductions;