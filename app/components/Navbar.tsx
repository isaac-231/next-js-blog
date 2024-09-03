import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

export default function Navbar() {
  return (
    <nav className='w-full relative flex items-center max-w-4xl mx-auto justify-between px-4 py-5'>
        <Link className='font-bold text-3xl' href={'/'}>Just<span className='text-primary'>Blog</span></Link>
        <ul className='flex gap-4'>
            <Link href={'/'}>Home</Link>
       
            <Link href={'/blog'}>Blog</Link>
       
            <Link href={'/about'}>About</Link>
        <ModeToggle/>
        </ul>
    </nav>
  )
}
