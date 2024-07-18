'use client'
import { List, X } from '@phosphor-icons/react';
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
        if(isOpen) {

        }
        else {
        }
    }
    

    return (
        <header className='pb-3 fixed w-full top-0 z-10 bg-black  '>
            <nav>
                <ul className='z-10 flex justify-between'>
                    <li className={'md:pl-20 pt-6 sm:pl-10' }>
                        <Link href='/' className='text-xl text-gold pl-2.5'>Nadir Baghirov</Link>
                    </li>
                    <li className='hidden md:flex justify-between w-2/6 pr-10 text-2xl pt-6 text-card '>
                        <Link className='hover:text-gold hover:scale-95 duration-500' href='/'>Home</Link>
                        <Link className='hover:text-gold hover:scale-95 duration-500' href='/contact'>Contact</Link>
                        <Link className='hover:text-gold hover:scale-95 duration-500' href='/about'>About</Link>
                    </li>
                     <div className='pt-6 pr-4 md:hidden duration-300 transition-all'>
                                 <button onClick={handleToggle} className='text-2xl text-card'><List size={32} /></button>
                    </div>                    
                </ul>
                {isOpen && (
                <nav className='fixed top-0 left-0 w-full h-full bg-black z-10 pt-3  '>
                    <ul className='flex justify-between px-3 py-3 '>
                    <li><Link href='/' className='text-xl text-gold'>Nadir Baghirov</Link></li>
                    <li><button onClick={handleToggle} className='text-2xl text-card'><X size={32} /></button></li>
                    </ul>
                    
                <ul className='text-3xl flex flex-col  h-screen justify-evenly w-full text-center bg-black'>
                         <li >
                         <Link onClick={handleToggle} className='hover:text-gold hover:scale-100 duration-500 ' href='/'>Home</Link>
                         </li>
                         <li>
                         <Link onClick={handleToggle} className='hover:text-gold hover:scale-95 duration-500' href='/contact'>Contact</Link>
                         </li>
                         <li>
                         <Link onClick={handleToggle} className='hover:text-gold hover:scale-95 duration-500' href='/about'>About</Link>
                         </li>
                </ul>
               
                </nav>
                    )}
            </nav>
        </header>
    )
}

export default Header