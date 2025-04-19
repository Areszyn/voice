import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  // If it's a deep subdomain like a.b.c.waspros.me
  if (host.endsWith('.waspros.me') && host.split('.').length > 3) {
    return NextResponse.redirect('https://waspros.me');
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
