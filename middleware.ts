import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const locales = ['en', 'ru', 'kz']

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    const pathnameHasLocale = locales.some(locale => pathname.startsWith(`/${locale}`))

    if (!pathnameHasLocale && pathname === '/') {
        return NextResponse.redirect(new URL('/kz', request.url))
    }

    return NextResponse.next()
}
