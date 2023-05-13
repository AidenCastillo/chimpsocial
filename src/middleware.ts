import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (new RegExp(/^.*(fonts|_next|vk.com|favicon).*$/).test(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  // const response = NextResponse.next();
  // response.cookies.set('username', 'AidenCastillo');
  // console.log(response.cookies);

  try {
    const cookie = request.cookies.get('username');
    console.log(cookie);
  } catch (error) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextReponse.rewrite(url);
  }

  console.log('request', request.nextUrl.pathname);
  return NextResponse.next();

  // const cookie = request.cookies.set('username', "test");
  // console.log(cookie);
 
}

// export const config = {
//   matcher: '/'
// }