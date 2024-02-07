import { useEffect, useState } from "react";

type prop = 'En' | 'Fa' | null

function useLanguage() {
    const [lang, setLang] = useState<prop>(null)

    useEffect(()=>{
        const name = 'lang'
        const cDecoded = decodeURIComponent(document.cookie);
        const cArray = cDecoded.split("; ");
        let result: prop = null;
        cArray.forEach(element => {
            if(element.indexOf(name) == 0){
                result = element.substring(name.length + 1) as prop
            }
        })
        setLang(result)
    },[])

    return lang
}

export default useLanguage;