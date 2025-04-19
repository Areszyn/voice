import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the host (subdomain.domain.me)
  const host = request.headers.get('host') || '';
  
  // Check if the host ends with '.waspros.me' and contains more than two dots (i.e., a deep subdomain)
  const isDeepSubdomain = host.split('.').length > 3;

  // If it's a deep subdomain, redirect to the main website
  if (isDeepSubdomain && host.endsWith('.waspros.me')) {
    return NextResponse.redirect('https://waspros.me');
  }

  return NextResponse.next();
}

export const config = {
  // Apply middleware for all paths
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
