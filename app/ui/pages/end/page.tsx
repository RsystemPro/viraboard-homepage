'use client'

import { setNavbar } from "@/app/lib/toolkit/general"
import { useAppDispatch } from "@/app/lib/toolkit/tsHook"
import { useMotionValueEvent, motion, useScroll } from "framer-motion"
import { useRef, useState } from "react"
import En from '@/app/lib/dictionaries/en'
import Fa from '@/app/lib/dictionaries/fa'
import './style.css';
import Image from "next/image"
import bottom_wave from './data/bottom waves.png'
import git from './data/github.svg'
import link from './data/linkedin.svg'
import tel from './data/telegram.svg'
import whatsapp from './data/whatsapp.svg'

interface props {
    language: language
}

function End({ language: lang }: props) {

    const container = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const [opacity, setOpacity] = useState(0)
    const language = lang === "En" ? En : Fa

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["0 1", "1 0"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const value = scrollYProgress.get()
        if (value > .4 && value < 0.6) {
            dispatch(setNavbar('about'))
        }
        let opacity = value * 2
        if (opacity > 1.2) opacity = 2 - opacity
        setOpacity(opacity)
    })

    return (
        <div ref={container} className="end_container">
            <Image src={bottom_wave} alt='bottom_wave' />
            <div className="end_social">
                <h1>{language.end.contact_us_social}</h1>
                <div>
                    <Image src={git} alt="git" />
                    <Image src={link} alt="link" />
                    <Image src={tel} alt="tel" />
                    <Image src={whatsapp} alt="whatsapp" />
                </div>
            </div>
            <div className="end_quick">
                <h1>{language.end.quick_access}</h1>
                <h2>{language.links.introduction}</h2>
                <h2>{language.links.futures}</h2>
                <h2>{language.links.overview}</h2>
                <h2>{language.links.prices}</h2>
                <h2>{language.links.team}</h2>
                <h2>{language.links.about}</h2>
            </div>
            <div className="end_explain">
                <h1>{language.end.exolain_title}</h1>
                <h2>{language.end.exolain_text}</h2>
            </div>

        </div>
    );
}

export default End;