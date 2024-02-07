'use client'

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import myAnim from './icons/class_anim.json'
import { MotionValue, useMotionValueEvent, motion } from 'framer-motion';
import { useState } from 'react';

interface props {
    lang: language
    scroll: MotionValue<number>
}

function AnimJSON({lang, scroll}: props) {

    const [scale, setScale] = useState<number>()

    useMotionValueEvent(scroll, "change", (latest) => {
        const value = scroll.get()

        let calcc3 = value * 2
        
        if(calcc3 > 1) calcc3 = 1-(calcc3-1)
        if(value > .5 && value < 0.6) calcc3 = 1
        setScale(calcc3)
    })

    return ( 
        <motion.div
            className="anim_json"
            style={{
                scale
            }}
        >
            <Player
                autoplay={true}
                loop={true}
                src={myAnim}
                style={{ height: '100%', width: '100%' }}
                speed={1}
            ></Player>
        </motion.div>
     );
}

export default AnimJSON;