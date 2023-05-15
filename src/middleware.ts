import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (new RegExp(/^.*(fonts|_next|vk.com|favicon.ico|api).*$/).test(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  const response = NextResponse.next();
  response.cookies.set('username', 'AidenCastillo');
  response.cookies.set('id', "7mjrmj4qrna0bci");
  console.log(response.cookies);
  return response;

  // try {
  //   const cookie = request.cookies.get('username');
  //   console.log("cookie " + cookie);
  // } catch (error) {
  //   const url = request.nextUrl.clone();
  //   url.pathname = '/login';
  //   return NextResponse.rewrite(url);
  // }

  // console.log('request', request.nextUrl.pathname);
  // return NextResponse.next();

  // const cookie = request.cookies.set('username', "test");
  // console.log(cookie);
 
}

// export const config = {
//   matcher: '/'
// }