import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type lang = 'En' | 'Fa' | null
export type nav = 'introduction' | 'features' | 'overview' | 'prices' | 'team' | 'about'

interface IS {
    server: string
    dashboard: string
    language: lang
    navbar: nav
    loading: boolean
}

const initialState: IS = {
    server: "http://192.168.43.180:3001",
    // dashboard: "https://eboard-dashboard.vercel.app",
    dashboard: "https://eboard-dashboard.liara.run",
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
    }
})

export const { setLanguage, checkLanguage, setNavbar, setLoading } = general.actions
export default general.reducer