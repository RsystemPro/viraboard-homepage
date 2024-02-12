'use client'

import { useEffect, useRef, useState } from 'react';
import './style.css'

interface props {
    cover_color?: string
    inside_color?: string
    style?: React.CSSProperties
    hoverStyles?: React.CSSProperties
    className?: string
    picture?: any
    type?: string
    price?: string
    options?: string[]
    buttonText?: string
}

function Card_3d(props: any) {

    const { cover_color, inside_color, style, className, picture, type, price, options, buttonText, hoverStyles } = props;

    const container = useRef<HTMLDivElement>(null)
    const [hhoverStyles, setHhoverStyles] = useState<React.CSSProperties>()

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
    }
    function Leave(x: React.MouseEvent) {
        setHhoverStyles({})
    }

    function Button_Click(x: React.MouseEvent) {
        x.stopPropagation()
    }

    return (
        <div
            ref={container}
            onClick={Click}
            className={className + ' card_3d'}
            style={{ backgroundColor: cover_color, ...hhoverStyles, ...style }}
            onMouseOver={Hover}
            onMouseLeave={Leave}
        >
            {picture}
            <h5>{type}</h5>
            <h5>{price}</h5>
            <div>
                {options && options?.length > 0 && options.map((x:any, y:number) => <h6 key={y}>{x}</h6>)}
            </div>
            <button onClick={Button_Click}>{buttonText}</button>

            <span style={{ backgroundColor: inside_color }}></span>
            <span style={{ backgroundColor: cover_color }}></span>
            <span style={{ backgroundColor: inside_color }}></span>
            <span style={{ backgroundColor: inside_color }}></span>
            <span style={{ backgroundColor: inside_color }}></span>
            <span style={{ backgroundColor: inside_color }}></span>
            <span style={{ backgroundColor: inside_color }}></span>
        </div>
    );
}

export default Card_3d;