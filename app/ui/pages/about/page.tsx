'use client'

import { setNavbar } from "@/app/lib/toolkit/general"
import { useAppDispatch } from "@/app/lib/toolkit/tsHook"
import { useMotionValueEvent, motion, useScroll } from "framer-motion"
import { useRef, useState } from "react"
import En from '@/app/lib/dictionaries/en'
import Fa from '@/app/lib/dictionaries/fa'
import './style.css';
import Image from "next/image"
import contactUs_pic from './data/contactUs.svg'

interface props {
    language: language
}

function About({ language: lang }: props) {

    const container = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const [trY, setTrY] = useState(0)
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
        <div ref={container} className="about_container">
            <div>
                <h1>{language.contact.contact_social}</h1>
                <h2>{language.contact.telegram}</h2>
                <a href="tg://resolve?domain=mrsmh96">@mrsmh</a>
                <h2>{language.contact.whatsapp}</h2>
                <a href="https://wa.me/+989216897005">@mrsmh</a>

                <h1>{language.contact.contact_phone}</h1>
                <a href="tel:+989216897005">09216897005</a>
                <a href="tel:+989105088036">09105088036</a>
                <a href="tel:+989015775000">09015775000</a>
            </div>
            <Image src={contactUs_pic} alt='contactUs' />
        </div>
    );
}

export default About;