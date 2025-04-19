import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const mainDomain = 'waspros.me';

  // Check for subdomain
  if (host.endsWith(mainDomain)) {
    const subdomains = host.replace(`.${mainDomain}`, '').split('.');

    // If more than 0 subdomains and no specific page exists, redirect to root
    if (subdomains.length > 0 && subdomains[0] !== 'www') {
      return NextResponse.rewrite(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}
