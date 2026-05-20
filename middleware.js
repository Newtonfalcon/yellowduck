import { NextResponse } from "next/server";

export function middleware(request){
  const isAuthPage = request.nextUrl.pathname.startsWith("/dashboad")

  if (isAuthPage){

    return

  }

  return NextResponse.next()
}