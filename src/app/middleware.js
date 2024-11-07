import { NextResponse } from 'next/server';
import handleAdmAuth from './middleware/admAuth';

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    // if (pathname.startsWith('/adm')) {
    //     return handleAdmAuth(request);
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ['/adm/:path*',],
};
