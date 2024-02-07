'use client'

import { useEffect, useRef } from 'react'
import './style.css'

// interface props {
//     children: never
//     className?: string
//     callback?: (x: React.MouseEvent) => void
// }
interface props {
    children: React.ReactNode
    className?: string
    callback?: (x: React.MouseEvent) => void
}

function Anim_Button({ children, className, callback }: props) {

    const container = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        className && container.current?.classList.add(className)
    }, [])

    return (
        <button ref={container} onClick={callback} className={'anim_button'}>{children || ''}</button>
    );
}

export default Anim_Button;

// export function D3_Button({ children }: { children: ReactNode }) {
//     return (
//         <button className='d3_button'>
//             <span></span>
//             {children}
//             <span></span>
//             <span></span>
//         </button>
//     );
// }
