'use client'

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import AnimJSON from "./animation";
import FeaturesList from "./features";
import './style.css'
import { useRef, useState } from "react";
import { useAppDispatch } from "@/app/lib/toolkit/tsHook";
import { setNavbar } from "@/app/lib/toolkit/general";

interface props {
    language: language
}

function Features({ language }: props) {
    const container = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const [opacity, setOpacity] = useState<number>(0)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["0 1", "1 0"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const value = scrollYProgress.get()
        if (value > .4 && value < 0.6) {
            dispatch(setNavbar('features'))
        }
        let myOpacity = value * 2
        if (myOpacity > 1) myOpacity = 1 - (myOpacity - 1)
        if (myOpacity < .4) myOpacity = 0
        setOpacity(myOpacity)
    })

    return (
        <motion.div
            ref={container}
            className="features_container"
        >
            <div className="features_container_sub">
                <motion.div style={{ opacity }} className="features_container_sub_color"></motion.div>
                <FeaturesList scroll={scrollYProgress} lang={language} />
                <AnimJSON scroll={scrollYProgress} lang={language} />
            </div>
        </motion.div>
    );
}

export default Features;