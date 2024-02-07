'use client'

import { MotionValue, useMotionValueEvent, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import En from '@/app/lib/dictionaries/en'
import Fa from '@/app/lib/dictionaries/fa'

interface props {
    lang: language
    scroll: MotionValue<number>
}

function FeaturesList({ lang, scroll }: props) {

    const [h1Transform, setH1Transform] = useState<string>()
    const [h6Transform, setH6Transform] = useState<string>()
    const [scale, setScale] = useState<number>()
    const language = lang === "En" ? En : Fa
    const h6Container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (lang === 'En') {
            const children = (h6Container.current as HTMLDivElement).children
            for (const i of children) {
                const h6 = i as HTMLHeadingElement
                h6.style.fontFamily = 'sans-serif'
            }
        }

    }, [])

    useMotionValueEvent(scroll, "change", (latest) => {

        const value = scroll.get()

        let calc = Math.ceil(+value * 100 / 1)
        let calc2 = Math.ceil(+value * 100 / 1)

        let calcc = 0
        if (calc > 50) calcc = (50 - (calc - 50))
        else calcc = calc
        let editedCalcH1 = (calcc - 50) * 2
        if (calc > 40 && calc < 60) editedCalcH1 = 0
        if (lang === "Fa") editedCalcH1 = Math.abs(editedCalcH1)
        setH1Transform(editedCalcH1 + 'vw')

        let calcc2 = 0
        if (calc2 > 50) calcc2 = (50 - (calc2 - 50))
        else calcc2 = calc2
        let editedCalcH6 = (calcc2 - 50)
        if (calc2 > 40 && calc2 < 60) editedCalcH6 = 0
        if (lang === "Fa") editedCalcH6 = Math.abs(editedCalcH6)
        setH6Transform(editedCalcH6 + 'vw')

        let calcc3 = value * 2
        if (calcc3 > 100) 100 - (calcc3 - 100)
        setScale(calcc3)

    })

    return (
        <motion.div className="features_list">
            <motion.h1
                style={{
                    transform: `translateX(${h1Transform})`
                }}
            >{language.features.feature_title}</motion.h1>
            <motion.div
                ref={h6Container}
                style={{
                    transform: `translateX(${h6Transform})`
                }}
            >
                <h6>{language.features.features_1}</h6>
                <h6>{language.features.features_2}</h6>
                <h6>{language.features.features_3}</h6>
                <h6>{language.features.features_4}</h6>
                <h6>{language.features.features_5}</h6>
                <h6>{language.features.features_6}</h6>
                <h6>{language.features.features_7}</h6>
            </motion.div>
        </motion.div>
    );
}

export default FeaturesList;