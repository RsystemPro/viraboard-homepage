import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    //check host
    const host = request.url

    //create cookie
    let lang: language = null
    lang = request.cookies.get('lang')?.value as language || null
    if (!lang) lang = 'Fa';

    //create header
    const newRequestHeaders = new Headers(request.headers)
    newRequestHeaders.set("lang", lang)

    //rewrite request
    const response = NextResponse.next({
        request: {
            headers: newRequestHeaders
        }
    })

    //add cookie to response - don't forget
    response.cookies.set("lang", lang)
    response.cookies.set("host", host)
    return response

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}
