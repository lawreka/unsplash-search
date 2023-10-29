import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    const page = searchParams.get('page')
    const perPage = searchParams.get('perPage')
    const orderBy = searchParams.get('orderBy')
    const color = searchParams.get('color')
    const fetchUrl = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&order_by=${orderBy}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    const fetchUrlError = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=asdf`
    const res = await fetch(fetchUrl, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json()
    return NextResponse.json({ data })
}
