
 import { NextRequest, NextResponse } from 'next/server'
import { getSession } from './lib/Auth/auth'

export default async function proxy (request : NextRequest){
  
      const session = await getSession()
       
      const isdashboard = request.nextUrl.pathname.startsWith('/dashboard')


      if( isdashboard && !session?.user) {
             return NextResponse.redirect(new URL('/sign-in', request.url))
       }

      const issignIn = request.nextUrl.pathname.startsWith('/sign-in')
      const isSignUp = request.nextUrl.pathname.startsWith('/sign-up')
      
      if( ( issignIn || isSignUp ) && session?.user) {
             return NextResponse .redirect(new URL('/dashboard', request.url))
       }

       return NextResponse.next()
}