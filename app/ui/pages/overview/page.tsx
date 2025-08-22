'use client'

import { setNavbar } from "@/app/lib/toolkit/general"
import { useAppDispatch } from "@/app/lib/toolkit/tsHook"
import { useMotionValueEvent, motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import './style.css';
import TW_Carousel from "../../components/carousel/page"
import En from '@/app/lib/dictionaries/en'
import Fa from '@/app/lib/dictionaries/fa'
import Carousel_items from "./carousel_items"

import cloud from './icons/cloud.png';
import mobile from './icons/mobile.png';
import group from './icons/Work chat-amico.svg';
import laptop from './icons/Picture1.png';

interface props {
    language: language
}

function Overview({ language: lang }: any) {

    const container = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const [trY, setTrY] = useState(0)
    const [autoplay, setAutoplay] = useState(true)
    const [currentHost, setCurrentHost] = useState<string>()
    const [h3Opacity, seth3Opacity] = useState<number>(0)
    const language = lang === "En" ? En : Fa;

    useEffect(() => {
        setCurrentHost(window.location.origin + '/server/data/data/')
    }, [])

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["0 1", "1 0"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const value = scrollYProgress.get()
        seth3Opacity(value * 2)
        if (value > .4 && value < 0.6) {
            dispatch(setNavbar('overview'))
        }
        let calc = Math.ceil(+value * 180 / 1) * 2
        setTrY(-1 * (180 - calc))
    })

    return (
        <div ref={container} className="overview_container">
            <motion.h1 className="font-bold text-[2rem]" style={{ opacity: h3Opacity }}>{language.links.overview}</motion.h1>
            <div className="overview_container_sub">
                <TW_Carousel direction={lang === 'En' ? 'ltr' : 'rtl'} autoplay={autoplay}>
                    <Carousel_items btnVideoText={language.overview.vidBtn} videoLink={currentHost + "vira_introduction.mp4"} direction={lang === 'En' ? 'ltr' : 'rtl'} image={mobile} title={language.overview.mobile_title} text={language.overview.mobile_text} videoCallback={() => setAutoplay(false)} />
                    <Carousel_items btnLink={currentHost + "vira-infrastructure.docx"} btnText={language.overview.docBtn} direction={lang === 'En' ? 'ltr' : 'rtl'} image={laptop} title={language.overview.laptop_title} text={language.overview.laptop_text} />
                    <Carousel_items btnLink={currentHost + "vira-features.docx"} btnText={language.overview.docBtn} direction={lang === 'En' ? 'ltr' : 'rtl'} image={group} title={language.overview.group_title} text={language.overview.group_text} />
                    <Carousel_items btnLink={currentHost + "vira-rtp.docx"} btnText={language.overview.docBtn} direction={lang === 'En' ? 'ltr' : 'rtl'} image={cloud} title={language.overview.cloud_title} text={language.overview.cloud_text} />
                </TW_Carousel>
            </div>
        </div>
    );
}

export default Overview;