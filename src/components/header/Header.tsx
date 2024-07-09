'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const router= useRouter()
  return (
     <div className='bg-slate-700 py-3 text-white'>
      <div className="container flex justify-between m-auto">
        <div>LOGO</div>
        <div className='flex gap-3 md:gap-10'>
           <h2 onClick={()=>router.push('/settings')} className='cursor-pointer'>Settings</h2>
           <h2 onClick={()=>router.push('/')} className='cursor-pointer'>Logout</h2>
        </div>
      </div>
     </div>
  )
}

export default Header