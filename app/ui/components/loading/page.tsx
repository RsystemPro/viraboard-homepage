'use client'

import Image from 'next/image'
import logo from './data/logo.svg'
import En from '@/app/lib/dictionaries/en'
import Fa from '@/app/lib/dictionaries/fa'
import './style.css'

function Logo_Loading({ language }: { language: 'En' | 'Fa' | null }) {

    const lang = language === "En" ? En : Fa

    return (
        <div className='logo_loading'>
            <div className=''>
                <Image alt='navbar_logo' src={logo} />
                <h1>{lang.links.logo}</h1>
            </div>
        </div>
    );
}

export default Logo_Loading;
