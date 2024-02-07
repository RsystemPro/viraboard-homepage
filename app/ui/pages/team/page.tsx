'use client'

import { setNavbar } from "@/app/lib/toolkit/general"
import { useAppDispatch } from "@/app/lib/toolkit/tsHook"
import { useMotionValueEvent, motion, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import './style.css';
import En from '@/app/lib/dictionaries/en'
import Fa from '@/app/lib/dictionaries/fa'
import Profile_3d from "../../components/profile_3d/page"
import myPix from './data/42kb.jpg';
import female from './data/femal.jpg';
import male from './data/male.jpg';
import boss from './data/boss.jpg';
import { Device_Detection } from "@/app/lib/_tools/tools"


interface props {
    language: language
}

function Team({ language: lang }: props) {

    const container = useRef<HTMLDivElement>(null)
    const dispatch = useAppDispatch()
    const [opacity, setOpacity] = useState(0)
    const [device, setDevice] = useState<any>()
    const language = lang === "En" ? En : Fa

    useEffect(() => {
        setDevice(Device_Detection())
    }, [])

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["0 1", "1 0"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const value = scrollYProgress.get()
        if (value > .4 && value < 0.6) {
            dispatch(setNavbar('team'))
        }
        let opacity = value * 2
        if (opacity > 1.2) opacity = 2 - opacity
        setOpacity(opacity)
    })

    return (
        <motion.div ref={container} className="team_container" style={{ opacity }}>
            <div className="card_container">
                <Profile_3d
                    picture={myPix}
                    title={language.team.reza_name}
                    text={language.team.reza_career}
                    cover_color="#f9f1f1"
                    inside_color="lightgray"
                    level_q={language.team.level}
                    level={language.team.reza_level}
                    experience_q={language.team.experience}
                    experience={'10'}
                    projects_q={language.team.projects}
                    projects={'50'}
                    back_text1={language.team.work}
                    back_text2={language.team.follow}
                />
            </div>
            <div className="card_container">
                <Profile_3d
                    picture={female}
                    title={language.team.mitra_name}
                    text={language.team.mitra_career}
                    cover_color="#f9f1f1"
                    inside_color="lightgray"
                    level_q={language.team.level}
                    level={language.team.mitra_level}
                    experience_q={language.team.experience}
                    experience={'5'}
                    projects_q={language.team.projects}
                    projects={'20'}
                    back_text1={language.team.work}
                    back_text2={language.team.follow}
                />
            </div>
            <div className="card_container">
                <Profile_3d
                    picture={male}
                    title={language.team.farhad_name}
                    text={language.team.farhad_career}
                    cover_color="#f9f1f1"
                    inside_color="lightgray"
                    level_q={language.team.level}
                    level={language.team.farhad_level}
                    experience_q={language.team.experience}
                    experience={'1'}
                    projects_q={language.team.projects}
                    projects={'5'}
                    back_text1={language.team.work}
                    back_text2={language.team.follow}
                />
            </div>
            {device === 'Mobile' && <div className="card_container">
                <Profile_3d
                    picture={boss}
                    title={language.team.boss_name}
                    text={language.team.boss_career}
                    cover_color="#f9f1f1"
                    inside_color="lightgray"
                    level_q={language.team.level}
                    level={language.team.boss_level}
                    experience_q={language.team.experience}
                    experience={'20'}
                    projects_q={language.team.projects}
                    projects={'5'}
                    back_text1={language.team.work}
                    back_text2={language.team.follow}
                />
            </div>}
        </motion.div>
    );
}

export default Team;