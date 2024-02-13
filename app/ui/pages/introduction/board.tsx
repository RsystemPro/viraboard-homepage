'use client'

import Image from 'next/image';
import pic from './icons/board.png'
import { SetStateAction, useEffect, useRef, useState } from 'react';
import useLanguage from '@/app/lib/dictionaries/lang';
import { document } from 'postcss';
import { MotionValue, ScrollMotionValues, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { preLoadImage } from '@/app/lib/_tools/tools';

interface props {
    lang: language
    scroll: MotionValue<number>
    setImageLoaded: React.Dispatch<SetStateAction<boolean>>
}

function Board({ scroll, lang, setImageLoaded }: props) {

    const [imageL, setImageL] = useState<boolean>(false)
    const container = useRef<HTMLDivElement>(null)
    const picture_container = useRef<HTMLDivElement>(null)
    const [rotatXx, setRotateXx] = useState<string>()
    const [rotatYy, setRotateYy] = useState<string>()
    const [scale, setScale] = useState<number>()

    useMotionValueEvent(scroll, "change", (latest) => {
        if (!imageL) return
        const value = scroll.get()

        const calcY = Math.ceil(+value * 90 / 1)
        let editCalcY = lang === 'En' ? (calcY - 100) * 2 : (100 - calcY) * 2
        if (editCalcY < -90) editCalcY = -90
        if (editCalcY > 90) editCalcY = 90
        setRotateYy(editCalcY + 'deg')

        let calcX = Math.ceil(+value * 20 / 1) * 2
        if (calcX > 20) calcX = 20
        setRotateXx(calcX + 'deg')

        setScale(value)
    })

    useEffect(() => {
        preLoadImage(pic.src).then(x => {
            setImageLoaded(true)
            const containerr = container.current as HTMLDivElement
            containerr.style.transform = `perspective(700px) rotateY(${lang === 'En' ? '-20deg' : '20deg'}) rotateX(20deg)`
            setTimeout(() => {
                containerr.style.transition = `all .2s`
            }, 2200);
        })
    }, [imageL])

    function MouseOver(x: React.MouseEvent) {

        const item = x.currentTarget as HTMLDivElement
        const left = x.clientX - item.offsetLeft
        const top = x.clientY - item.offsetTop
        const height = item.clientHeight
        const width = item.clientWidth

        const q1 = top < height / 2 && left < width / 2
        const q2 = top < height / 2 && left > width / 2
        const q3 = top > height / 2 && left > width / 2
        const q4 = top > height / 2 && left < width / 2

        const containerr = container.current as HTMLDivElement
        containerr.style.transition = `all 2s`

        if (q1) {
            containerr.style.transform = `perspective(700px) rotateY(-30deg) rotateX(30deg)`
        }
        if (q2) {
            containerr.style.transform = `perspective(700px) rotateY(30deg) rotateX(30deg)`
        }
        if (q3) {
            containerr.style.transform = `perspective(700px) rotateY(30deg) rotateX(-30deg)`
        }
        if (q4) {
            containerr.style.transform = `perspective(700px) rotateY(-30deg) rotateX(-30deg)`
            // containerr.style.transform = `perspective(700px) rotateY(90deg) rotateX(30deg)`
        }

    }

    function MouseLeave(x: React.MouseEvent) {
        const containerr = container.current as HTMLDivElement
        containerr.style.transition = `all .2s`
        containerr.style.transform = `perspective(700px) rotateY(${lang === 'En' ? '-20deg' : '20deg'}) rotateX(20deg)`
    }

    return (

        <motion.div className='picture_container'
            ref={picture_container}
        >

            {<motion.div
                ref={container}
                onMouseMove={MouseOver}
                onMouseLeave={MouseLeave}
                style={{
                    transform: `perspective(700px) rotateY(${rotatYy}) rotateX(${rotatXx}) scale(${scale})`,
                    // opacity: scroll,
                }}
                className='board_container'
            >
                <div className='board_image_container'>
                    <motion.img src={pic.src} alt="pic" onLoad={() => setImageL(true)} />
                    {/* {<Image
                        onLoad={() => setImageL(true)}
                        src={pic}
                        alt='pic'
                    />} */}
                </div>

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                <span></span>
                <span></span>
                {/* <span></span> */}
                {/* <span></span> */}

            </motion.div>}
        </motion.div>
    );
}

export default Board;