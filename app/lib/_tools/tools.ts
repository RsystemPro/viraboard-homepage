
export function getCookie(name: string): any | null {
    const cDecoded = decodeURIComponent(document.cookie);
    //logger(cDecoded)
    const cArray = cDecoded.split("; ");
    //logger(cArray)
    let result = null;

    cArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

export function setCookie(name:string, value: string, daysToLive:number){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}

export const preLoadImage = (url: string) => {
    return new Promise((resolve, reject) => {
        let img = new Image() as HTMLImageElement;
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
    });
};

export const Device_Detection = (): 'Mobile' | 'Tablet' | 'Desktop' | undefined => {
    const size = window.innerWidth
    let res = undefined as 'Mobile' | 'Tablet' | 'Desktop' | undefined
    if (size <= 576) {
        res = 'Mobile'
    } else if (size > 576 && size <= 768) {
        res = 'Tablet'
    } else if (size > 768) {
        res = 'Desktop'
    }
    return res
}

export function Change_Link(parameter: string) {
    const newLink = new URL('/' + parameter, document.URL)
    const link_el = document.createElement('a')
    link_el.href = newLink.toString()
    link_el.click()
}

export function Change_Link_Entirely(parameter: string) {
    const link_el = document.createElement('a')
    link_el.href = parameter.toString()
    link_el.click()
}