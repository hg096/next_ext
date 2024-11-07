import { NextResponse } from 'next/server';

export default function handleAdmAuth(request) {
    // const cookies = request.cookies.get('_USER_LOGIN');

    // console.log(cookies);

    // if (!cookies) {
    //     return NextResponse.redirect(new URL('/_adm/login', request.url));
    // }

    return NextResponse.next();
}
