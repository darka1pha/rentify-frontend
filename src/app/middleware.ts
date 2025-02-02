import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('access-token');
  const url = request.nextUrl.pathname;

  if (url.startsWith('/auth') && accessToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (url.startsWith('/profile') && !accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: '*', // Match all paths
};
