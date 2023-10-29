import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    const perPage = searchParams.get('perPage')
    const orderBy = searchParams.get('orderBy')
    const color = searchParams.get('color')
    const baseUrl = "https://api.unsplash.com/search/photos?"
    var fetchUrl = baseUrl;
    if (color === "none") {
        fetchUrl = `${baseUrl}query=${query}&per_page=${perPage}&order_by=${orderBy}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    } else {
        fetchUrl = `${baseUrl}query=${query}&per_page=${perPage}&order_by=${orderBy}&color=${color}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    }
    // for testing errors
    const fetchUrlError = `${baseUrl}query=${query}&per_page=${perPage}&client_id=asdf`
    const res = await fetch(fetchUrl, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json()
    return NextResponse.json({ data })
}
