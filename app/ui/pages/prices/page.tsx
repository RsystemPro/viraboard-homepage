'use client'

import { setNavbar } from "@/app/lib/toolkit/general"
import { useAppDispatch } from "@/app/lib/toolkit/tsHook"
import { useMotionValueEvent, motion, useScroll, useTransform, useMotionValue } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Card_3d from "../../components/card_3d/page"
import './style.css';
import { Device_Detection } from "@/app/lib/_tools/tools"
import En from '@/app/lib/dictionaries/en'
import Fa from '@/app/lib/dictionaries/fa'

const heart_svg = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
const board_svg = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V14C23 15.6569 21.6569 17 20 17H13.562L18.6402 21.2318C19.0645 21.5853 19.1218 22.2159 18.7682 22.6402C18.4147 23.0645 17.7841 23.1218 17.3598 22.7682L13 19.135V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V19.135L6.64018 22.7682C6.21591 23.1218 5.58534 23.0645 5.23178 22.6402C4.87821 22.2159 4.93554 21.5853 5.35982 21.2318L10.438 17H4C2.34315 17 1 15.6569 1 14V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H20Z" fill="none" stroke="#0F0F0F" strokeWidth="1"></path> </g></svg>
const board_advance_svg = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.8944 5.44721C18.1414 4.95324 17.9412 4.35256 17.4472 4.10557C16.9532 3.85858 16.3526 4.05881 16.1056 4.55279L13.6414 9.48107L11.0435 7.53264C10.3319 6.99895 9.31491 7.19817 8.85727 7.96089L6.14251 12.4855C5.85836 12.9591 6.01192 13.5733 6.4855 13.8575C6.95908 14.1416 7.57334 13.9881 7.85749 13.5145L10.287 9.46527L12.9207 11.4405C13.6694 12.0021 14.7438 11.7484 15.1624 10.9114L17.8944 5.44721Z" fill="#0F0F0F"></path> <path fillRule="evenodd" clipRule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V14C1 15.6569 2.34315 17 4 17H10.438L5.35982 21.2318C4.93554 21.5853 4.87821 22.2159 5.23178 22.6402C5.58534 23.0645 6.21591 23.1218 6.64018 22.7682L11 19.135V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V19.135L17.3598 22.7682C17.7841 23.1218 18.4147 23.0645 18.7682 22.6402C19.1218 22.2159 19.0645 21.5853 18.6402 21.2318L13.562 17H20C21.6569 17 23 15.6569 23 14V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V14C3 14.5523 3.44772 15 4 15H20C20.5523 15 21 14.5523 21 14V4Z" fill="none" stroke="#0F0F0F" strokeWidth="1"></path> </g></svg>

interface props {
    language: language
}

function Prices({ language: lang }: any) {

    const container = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const [trY, setTrY] = useState(0)
    const [device, setDevice] = useState<any>()
    const [h3Opacity, seth3Opacity] = useState<number>(0)
    const language = lang === "En" ? En : Fa

    useEffect(() => {
        setDevice(Device_Detection())
    }, [])

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["0 1", "1 0"]
    })

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 180]
    )

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const value = scrollYProgress.get()
        seth3Opacity(value * 2)
        if (value > .4 && value < 0.6) {
            dispatch(setNavbar('prices'))
        }
        let calc = Math.ceil(+value * 180 / 1) * 2
        setTrY(-1 * (180 - calc))
    })

    return (
        <motion.div ref={container} className="prices_container">
            <motion.h1 className="font-bold text-[2rem]" style={{ opacity: h3Opacity }}>{language.links.prices}</motion.h1>
            <div className="prices_container_sub">
                <div className="card_container">
                    <Card_3d
                        className="cards_transformY"
                        style={{ transform: `rotateY(${trY}deg) rotateX(15deg)` }}
                        cover_color="#e5d0ff"
                        inside_color="#f4ecff"
                        picture={heart_svg}
                        type={language.prices.type_free}
                        price={language.prices.type_free}
                        options={[language.prices.option1 + ' : ' + language.prices.yes,
                        language.prices.option2 + ' : ' + language.prices.no,
                        language.prices.option3 + ' : 50mb',
                        language.prices.option4 + ' : 20',
                        ]
                        }
                        buttonText={language.prices.free_btn}
                    />
                </div>
                <div className="card_container">
                    <Card_3d
                        className="cards_transformY"
                        style={{ transform: `rotateY(${trY}deg)  rotateX(15deg)` }}
                        hoverStyles={{ transform: 'rotateX(15deg)' }}
                        cover_color="#71c7ec"
                        inside_color="#c6e8f7"
                        picture={board_svg}
                        type={language.prices.type_basic}
                        price={'5000 ' + language.prices.price}
                        options={[language.prices.option1 + ' : ' + language.prices.yes,
                        language.prices.option2 + ' : ' + language.prices.yes,
                        language.prices.option3 + ' : 500mb',
                        language.prices.option4 + ' : 100',
                        ]
                        }
                        buttonText={language.prices.buy_btn}
                    />
                </div>
                <div className="card_container">
                    <Card_3d
                        className="button_anim_glowing cards_transformY"
                        style={{ transform: `rotateY(${trY}deg) rotateX(15deg)` }}
                        hoverStyles={{ transform: 'rotateY(-15deg) rotateX(15deg)' }}
                        cover_color="#ffdc73"
                        inside_color="#fff3b2"
                        picture={board_advance_svg}
                        type={language.prices.type_premium}
                        price={'20000 ' + language.prices.price}
                        options={[language.prices.option1 + ' : ' + language.prices.yes,
                        language.prices.option2 + ' : ' + language.prices.yes,
                        language.prices.option3 + ' : ' + language.prices.unlimit,
                        language.prices.option4 + ' : 200',
                        ]
                        }
                        buttonText={language.prices.buy_btn}
                    />
                </div>
                {device !== '' && <div className="card_container">
                    <Card_3d
                        className="cards_transformY"
                        style={{ transform: `rotateY(${trY}deg) rotateX(15deg)` }}
                        hoverStyles={{ transform: 'rotateY(-15deg) rotateX(15deg)' }}
                        cover_color="#ffdc73"
                        inside_color="#fff3b2"
                        picture={board_advance_svg}
                        type={language.prices.type_premium}
                        price={'25000 ' + language.prices.price}
                        options={[language.prices.option1 + ' : ' + language.prices.yes,
                        language.prices.option2 + ' : ' + language.prices.yes,
                        language.prices.option3 + ' : ' + language.prices.unlimit,
                        language.prices.option4 + ' : ' + language.prices.unlimit,
                        ]
                        }
                        buttonText={language.prices.buy_btn}
                    />
                </div>}
            </div>
        </motion.div>
    );
}

export default Prices;