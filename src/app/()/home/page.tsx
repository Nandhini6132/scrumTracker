import Header from '@/components/header/Header'
import React from 'react'
import { cookies } from "next/headers";

import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';


interface HomePageProps {
  cookies: ReadonlyRequestCookies;
}
const HomePage:React.FC<HomePageProps> = () => {
  const actualCookies = cookies();
  return (
    // <div><Header cookies={actualCookies}/></div>
    <div></div>
  )
}

export default HomePage