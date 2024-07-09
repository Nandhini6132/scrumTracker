import Header from '@/components/header/Header'
import React from 'react'

const  Layout= ({children}:any) => {
  return (
    <div> <Header/> {children}  </div>
  )
}

export default Layout