'use client'

import Link from "next/link";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import myJson from '@/app/lib/data/not found.json';

function NotFound() {

    const path = document.URL

    return (
        <div className="w-full h-[100svh] flex flex-col justify-center items-center" style={{ direction: 'ltr' }}>
            <div className="w-[50vw] h-[80vh] flex flex-col justify-center items-center gap-3">
                <Player
                    autoplay={true}
                    loop={true}
                    src={myJson}
                    style={{ height: '16rem', width: '16rem' }}
                    speed={1}
                ></Player>
                <h1>{path + ' Not Found !!!'}</h1>
                <Link
                    className="border border-solid border-slate-950 px-4 py-2 rounded-lg hover:text-white hover:bg-slate-700 transition-all duration-300"
                    href={'/'}
                >Home Page</Link>
            </div>
        </div>
    );
}

export default NotFound;