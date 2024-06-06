import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className='pb-36 '>
            <nav>
                <ul className=' w-full bg-black flex fixed  justify-between h-24 text-gray-200 pt-2 z-10 '>
                    <div className='pl-28 pt-6'>
                        <Link href='/' className='text-xl text-[#fac08f]'>Nadir Baghirov</Link>
                    </div>
                    <div className='flex justify-between w-2/6 pr-10 text-2xl pt-6 text-[#c0c0c0]'>
                        <Link className='hover:text-[#fac08f] hover:scale-95 duration-500' href='/'>Home</Link>
                        <Link className='hover:text-[#fac08f] hover:scale-95 duration-500' href='/contact'>Contact</Link>
                        <Link className='hover:text-[#fac08f] hover:scale-95 duration-500' href='/about'>About</Link>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header