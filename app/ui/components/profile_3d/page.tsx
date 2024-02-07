'use client'

import { useEffect, useRef, useState } from 'react';
import './style.css'
import Image from 'next/image';
import facebook from './data/facebook.svg';
import github from './data/github.svg';
import instagram from './data/instagram.svg';
import linkedin from './data/linkedin.svg';
import plus from './data/plus.svg';
import telegram from './data/telegram.svg';
import whatsapp from './data/whatsapp.svg';
import minus from './data/minus.png';

interface props {
    cover_color?: string
    inside_color?: string
    style?: React.CSSProperties
    hoverStyles?: React.CSSProperties
    className?: string
    picture?: any
    title?: string
    text?: string

    level_q?: string
    level?: string
    experience_q?: string
    experience?: string
    projects_q?: string
    projects?: string

    back_text1?: string
    back_text2?: string
}

function Profile_3d(props: props) {

    const { title, text, cover_color, inside_color, style, className, picture, hoverStyles, level_q, level, experience_q, experience, projects_q, projects, back_text1, back_text2 } = props;

    const container = useRef<HTMLDivElement>(null)
    const [hhoverStyles, setHhoverStyles] = useState<React.CSSProperties>()
    const [wait, setWait] = useState<boolean>(false)

    useEffect(() => {
        // if (className) (container.current as HTMLDivElement).classList.add(className)
    }, [])

    function Click(x: React.MouseEvent) {
        // const item = container.current as HTMLDivElement
        // item.style.transition = 'transform 2s'
        // item.style.transform = 'rotateY(360deg)'
        // setTimeout(() => {
        //     item.style.transition = 'transform .5s'
        // }, 2200);
    }
    function Hover(x: React.MouseEvent) {
        setHhoverStyles(hoverStyles)
        setWait(true)
        setTimeout(() => {
            setWait(false)
        }, 200);
        const item = container.current as HTMLDivElement
        item.style.transform = 'rotateY(180deg)'
    }
    function Leave(x: React.MouseEvent) {
        if (wait) return
        setHhoverStyles({})
        const item = container.current as HTMLDivElement
        item.style.transform = 'rotateY(0deg)'
    }

    function Icons_Click(x: React.MouseEvent) {
        x.stopPropagation()
        const alt = (x.target as HTMLImageElement).alt
        console.log(alt);
    }

    return (
        <div
            ref={container}
            onClick={Click}
            className={className + ' profile_3d'}
            style={{ backgroundColor: cover_color, ...hhoverStyles, ...style }}
            onMouseEnter={Hover}

        >
            {/* Front */}
            <div className='profile_3d_image'>
                <Image src={picture} alt='pic' />
                <div>
                    <h1>{title}</h1>
                    <h2>{text}</h2>
                    <Image src={plus} alt='pic' />
                </div>
            </div>
            <div className='profile_3d_description'>
                <div>
                    <h3>{level_q}</h3>
                    <h4>{level}</h4>
                </div>
                <div>
                    <h3>{projects_q}</h3>
                    <h4>{projects}</h4>
                </div>
                <div>
                    <h3>{experience_q}</h3>
                    <h4>{experience}</h4>
                </div>
            </div>

            <span style={{ backgroundColor: inside_color }}></span>
            {/* Back */}
            <span onMouseLeave={Leave} style={{ backgroundColor: cover_color }}>
                <div className='profile_3d_back'>
                    {/* Name */}
                    <div className='profile_3d_header'>
                        <h1>{title}</h1>
                        <h2>{text}</h2>
                    </div>
                    <h6>{back_text1}</h6>
                    {/* Icons */}
                    <div className='profile_3d_icons'>
                        <div onClick={Icons_Click}><Image src={facebook} alt='facebook' /></div>
                        <div onClick={Icons_Click}><Image src={linkedin} alt='linkedin' /></div>
                        <div onClick={Icons_Click}><Image src={github} alt='github' /></div>
                        <div onClick={Icons_Click}><Image src={instagram} alt='instagram' /></div>
                        <div onClick={Icons_Click}><Image src={telegram} alt='telegram' /></div>
                        <div onClick={Icons_Click}><Image src={whatsapp} alt='whatsapp' /></div>
                    </div>
                    <h6>{back_text2}</h6>
                    {/* Descriptions */}
                    <div className='profile_3d_description_back'>
                        {/* <Image src={minus} alt='minus' /> */}
                        <div className='dbd'>
                            <div>
                                <h3>{level_q}</h3>
                                <h4>{level}</h4>
                            </div>
                            <div>
                                <h3>{projects_q}</h3>
                                <h4>{projects}</h4>
                            </div>
                            <div>
                                <h3>{experience_q}</h3>
                                <h4>{experience}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
            <span style={{ backgroundColor: inside_color }}></span>
            <span style={{ backgroundColor: inside_color }}></span>
            <span style={{ backgroundColor: inside_color }}></span>
            <span style={{ backgroundColor: inside_color }}></span>
            <span style={{ backgroundColor: inside_color }}></span>
        </div>
    );
}

export default Profile_3d;