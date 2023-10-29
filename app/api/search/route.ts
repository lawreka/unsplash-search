import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=1&per_page=1&client_id=${process.env.UNSPLASH_ACCESS_KEY}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json()
    return NextResponse.json({ data })
}
