'use client'

import { useEffect, useRef, useState } from "react";
import { Anim_Button, D3_Button } from "../../components/buttons/page";
import En from '@/app/lib/dictionaries/en'
import Fa from '@/app/lib/dictionaries/fa'
import { MotionValue, motion } from "framer-motion"
import { Change_Link } from "@/app/lib/_tools/tools";

interface props {
    lang: language
    scroll: MotionValue<number>
}

function Explains({ scroll, lang }: props) {

    const header = useRef<HTMLHeadingElement>(null)
    const text = useRef<HTMLHeadingElement>(null)
    const container = useRef<HTMLDivElement>(null)
    const language = lang === "En" ? En : Fa

    useEffect(() => {
        const containerr = container.current as HTMLDivElement
        setTimeout(() => {
            containerr.style.opacity = `1`
            containerr.style.scale = `1`
        }, 50);
        setTimeout(() => {
            containerr.style.transition = `all .2s`
        }, 2200);
    }, [])

    function Click(x: React.MouseEvent) {
        Change_Link('dashboard')
    }

    return (
        <motion.div
            ref={container}
            className="explain_container"
            style={{
                opacity: scroll,
                scale: scroll
            }}
        >
            <h1 ref={header}>{language.links.title}</h1>
            <h3 ref={text}>{language.links.text}</h3>
            <Anim_Button callback={Click} className={'w-full'}>{language.links.start_btn}</Anim_Button>
        </motion.div>
    );
}

export default Explains;