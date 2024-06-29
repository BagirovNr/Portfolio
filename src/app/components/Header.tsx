'use client'
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='pb-36 '>
            <nav>
                <ul className=' w-full bg-black flex fixed  justify-between h-24 text-gray-200 pt-2 z-10 '>
                    <div className='pl-28 pt-6'>
                        <Link href='/' className='text-xl text-[#fac08f]'>Nadir Baghirov</Link>
                    </div>
                    
                    <div className='pt-6 pr-10 md:hidden'>
                        <button onClick={handleToggle} className='text-2xl text-[#c0c0c0]'>Menu</button>
                    </div>
                    
                   {isOpen? (
                        <div className='flex justify-between w-2/6 pr-10 text-2xl pt-6 text-[#c0c0c0]  '>
                        <Link className='hover:text-[#fac08f] hover:scale-95 duration-500' href='/'>Home</Link>
                        <Link className='hover:text-[#fac08f] hover:scale-95 duration-500' href='/contact'>Contact</Link>
                        <Link className='hover:text-[#fac08f] hover:scale-95 duration-500' href='/about'>About</Link>
                    </div>
                   ):(
                    <div className='hidden md:flex justify-between w-2/6 pr-10 text-2xl pt-6 text-[#c0c0c0]  '>
                        <Link className='hover:text-[#fac08f] hover:scale-95 duration-500' href='/'>Home</Link>
                        <Link className='hover:text-[#fac08f] hover:scale-95 duration-500' href='/contact'>Contact</Link>
                        <Link className='hover:text-[#fac08f] hover:scale-95 duration-500' href='/about'>About</Link>
                    </div>
                   )}

                    
                </ul>
            </nav>
        </header>
    )
}

export default Header