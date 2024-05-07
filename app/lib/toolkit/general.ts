import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Change_Link_Entirely, getCookie } from '../_tools/tools';

type lang = 'En' | 'Fa' | null
export type nav = 'introduction' | 'features' | 'overview' | 'prices' | 'team' | 'about'

interface IS {
    server: string
    dashboard_vercel: string
    dashboard_liara: string
    language: lang
    navbar: nav
    loading: boolean
}

const initialState: IS = {
    server: "http://192.168.43.180:3001",
    dashboard_vercel: "https://eboard-dashboard.vercel.app",
    dashboard_liara: "https://eboard-dashboard.liara.run",
    language: null,
    navbar: 'introduction',
    loading: true
}

export const general = createSlice({
    name: 'general',								//effect in type log
    initialState,
    reducers: {
        checkLanguage: (state: IS) => {
            const name = 'lang'
            const cDecoded = decodeURIComponent(document.cookie);
            const cArray = cDecoded.split("; ");
            let result = null;
            cArray.forEach(element => {
                if (element.indexOf(name) == 0) {
                    result = element.substring(name.length + 1)
                }
            })
            state.language = result
        },
        setLanguage: (state: IS, action: PayloadAction<lang>) => {
            state.language = action.payload
        },
        setNavbar: (state: IS, action: PayloadAction<nav>) => {
            state.navbar = action.payload
        },
        setLoading: (state: IS, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        Dashboard_Link(state: IS) {
            const myHost_cookie = getCookie('host')
            const myHost = myHost_cookie.includes('.vercel.app') ? state.dashboard_vercel : state.dashboard_liara;
            Change_Link_Entirely(myHost);
        }
    }
})

export const { setLanguage, checkLanguage, setNavbar, setLoading, Dashboard_Link } = general.actions
export default general.reducer