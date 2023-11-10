import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const ROUTES = {
  protected: ['/admin'],
  auth: ['/login']
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if(ROUTES.auth.includes(request.nextUrl.pathname)) {

  }
  if(ROUTES.protected.includes(request.nextUrl.pathname)) {
    // return NextResponse.redirect('/login')
  }
  
}


