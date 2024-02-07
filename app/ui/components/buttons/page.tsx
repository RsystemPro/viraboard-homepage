'use client'

import { ReactNode } from 'react';
import './style.css'

interface anim {
    children: ReactNode
    className?: any
    callback?: (x: any) => void
}

export function Anim_Button({ children, className, callback }: anim) {

    return (
        <button onClick={callback} className={'anim_button ' + className}>{children}</button>
    );
}

export function D3_Button({ children }: { children: ReactNode }) {
    return (
        <button className='d3_button'>
            <span></span>
            {children}
            <span></span>
            <span></span>
        </button>
    );
}
