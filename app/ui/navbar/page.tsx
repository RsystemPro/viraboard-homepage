'use client'

import './style.css'
import logo from './icons/logo.svg'
import En from '@/app/lib/dictionaries/en'
import Fa from '@/app/lib/dictionaries/fa'
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { Change_Link, getCookie } from '@/app/lib/_tools/tools'
import { useRouter } from 'next/navigation'
import { NextResponse } from 'next/server'
import { useAppDispatch, useAppSelector } from '@/app/lib/toolkit/tsHook'
import { checkLanguage, nav, setNavbar } from '@/app/lib/toolkit/general'
import PagesLayout from '@/app/ui/layouts/pagesLayout'
import menu from './icons/menu.svg'

function Navbar({ language }: any) {

    const router = useRouter()
    const lang = language === "En" ? En : Fa
    const span = useRef<HTMLSpanElement>(null)
    const buttons_container = useRef<HTMLDivElement>(null)
    const nav = useAppSelector(state => state.general.navbar)
    const dispatch = useAppDispatch()
    const [navBlur, setNavBlur] = useState<boolean>(false)
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {

        window.addEventListener("scroll", () => {
            const number = document.documentElement.scrollTop;
            if (number > 0) container.current?.classList.add('navbar_blur')
            if (number === 0) container.current?.classList.remove('navbar_blur')
        })

        const mySpan = span.current as HTMLSpanElement
        const firstButton = document.querySelector('.navbar_links_container button')
        const firstButton_width = firstButton?.getBoundingClientRect().width
        const firstButton_left = firstButton?.clientLeft

        setTimeout(() => {
            mySpan.style.opacity = '1';
        }, 500);

    }, [])

    useEffect(() => {
        const buttons = (buttons_container.current as HTMLDivElement).children
        let selectButton: HTMLButtonElement | undefined = undefined
        for (const i of buttons) {
            if (i.id === nav) selectButton = i as HTMLButtonElement
        }
        if (!selectButton) return
        const target_width = selectButton.getBoundingClientRect().width
        let target_left = selectButton.offsetLeft

        const mySpan = span.current as HTMLSpanElement
        mySpan.style.width = (target_width + 10) + 'px';
        mySpan.style.left = (target_left - 5) + 'px';
    }, [nav])

    function SpanMover(x: React.MouseEvent) {

        const target = x.target as HTMLButtonElement
        const target_width = target?.getBoundingClientRect().width
        const target_left = target?.offsetLeft

        dispatch(setNavbar(target.id as nav))

        const textContent = target.id as nav
        let find_page
        switch (textContent) {
            case 'introduction':
                find_page = document.querySelector('.introduction_container')
                find_page && find_page.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'features':
                find_page = document.querySelector('.features_container')
                find_page && find_page.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'overview':
                find_page = document.querySelector('.overview_container')
                find_page && find_page.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'prices':
                find_page = document.querySelector('.prices_container')
                find_page && find_page.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'team':
                find_page = document.querySelector('.team_container')
                find_page && find_page.scrollIntoView({ behavior: 'smooth' })
                break;
            case 'about':
                find_page = document.querySelector('.about_container')
                find_page && find_page.scrollIntoView({ behavior: 'smooth' })
                break;
            default:
                console.log('error');
                break;
        }
    }

    //Components
    const Mobile_Navbar = useCallback(() => {

        const container = useRef<HTMLDivElement>(null)
        const container_items = useRef<HTMLDivElement>(null)
        const container_logo = useRef<HTMLDivElement>(null)
        const [isOpen, setIsOpen] = useState<boolean>(false)

        function Open() {
            const items = container_items.current as HTMLDivElement
            const containerr = container.current as HTMLDivElement
            const logo = container_logo.current as HTMLDivElement

            const items_height = items.getBoundingClientRect().height
            const container_height = containerr.getBoundingClientRect().height

            if (isOpen) {
                setIsOpen(false)
                containerr.classList.remove('navbar_blur')
                containerr.style.height = '65px'
                logo.style.opacity = '0'
            } else {
                setIsOpen(true)
                containerr.classList.add('navbar_blur')
                containerr.style.height = (items_height + container_height) + 'px'
                logo.style.opacity = '1'
            }

        }

        return (
            <div ref={container} className='navbar_container_mobile'>
                <div className='ncm_logo'>
                    <div ref={container_logo}>
                        <Image alt='navbar_logo' src={logo} />
                        <h3>{lang.links.logo}</h3>
                    </div>
                    <Image id='ncm_menu' onClick={Open} alt='navbar_logo' src={menu} />
                </div>
                <div ref={container_items} onClick={Open} className='ncm_items'>
                    <button id='introduction' onClick={SpanMover}>
                        {lang.links.introduction}
                    </button>
                    <button id='features' onClick={SpanMover}>
                        {lang.links.futures}
                    </button>
                    <button id='overview' onClick={SpanMover}>
                        {lang.links.overview}
                    </button>
                    <button id='prices' onClick={SpanMover}>
                        {lang.links.prices}
                    </button>
                    <button id='team' onClick={SpanMover}>
                        {lang.links.team}
                    </button>
                    <button id='about' onClick={SpanMover}>
                        {lang.links.about}
                    </button>
                    <span ref={span}></span>
                    <div>
                        <button onClick={() => Change_Link('dashboard')} id='login' className='navbar_links_login'>
                            {lang.links.login}
                        </button>
                    </div>
                </div>
            </div>
        )
    }, [])

    return (
        <>
            <Mobile_Navbar />
            {<div ref={container} className={"navbar_container navbar_animation"}>
                <div className='navbar_logo'>
                    <Image alt='navbar_logo' src={logo} />
                    <h3>{lang.links.logo}</h3>
                </div>
                <div ref={buttons_container} className='navbar_links_container'>
                    <button id='introduction' onClick={SpanMover}>
                        {lang.links.introduction}
                    </button>
                    <button id='features' onClick={SpanMover}>
                        {lang.links.futures}
                    </button>
                    <button id='overview' onClick={SpanMover}>
                        {lang.links.overview}
                    </button>
                    <button id='prices' onClick={SpanMover}>
                        {lang.links.prices}
                    </button>
                    <button id='team' onClick={SpanMover}>
                        {lang.links.team}
                    </button>
                    <button id='about' onClick={SpanMover}>
                        {lang.links.about}
                    </button>
                    <span ref={span}></span>
                    <div>
                        <button onClick={() => Change_Link('dashboard')} id='login' className='navbar_links_login'>
                            {lang.links.login}
                        </button>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Navbar;