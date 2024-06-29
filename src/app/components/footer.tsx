import Link from 'next/link'
import React from 'react'
import {InstagramLogo,GithubLogo,LinkedinLogo} from "@phosphor-icons/react";

function Footer() {
  return (
    <section className='text-center w-full border-t-[1px] border-[#f8d0a8] h-96' >


        <h2 className='text-8xl text-[#f8d0a8] pt-10'>
            GET IN TOUCH
        </h2>
        <div className='flex justify-evenly gap-10 pt-10'>
        <div className='text-3xl flex flex-col gap-6'>
                <p>Email at</p>
                <Link href="https://mail.google.com/mail/u/1/?pli=1#inbox?compose=CllgCJfrtHZJNQCJxxRvmqlJTRrBBNjCmvXklQjFsgKVrjwxjmwfGFfGSdtdCBdCQSjnBfhrqJV" target="_blank" className='text-[#fac08f] hover:text-[#f8d0a8] duration-500'>nbagirovdev@gmail.com</Link>
            </div>
            <div className='text-3xl flex flex-col gap-6'>
                <p>Call at </p>
                <Link href="tel: +994556680619" target="_blank" className='text-[#fac08f] hover:text-[#f8d0a8] duration-500'>+994556680619</Link>
            </div>
            <div className='text-3xl flex flex-col gap-6'>
                <p>Follow Me </p>
                <div className='flex justify-center gap-10 '>
                <Link href="https://www.instagram.com/bagirov.nr" target="_blank" className='text-[#fac08f] hover:text-[#f8d0a8] duration-500'><InstagramLogo size={32} /></Link>
                <Link href="https://github.com/BagirovNr" target="_blank" className='text-[#fac08f] hover:text-[#f8d0a8] duration-500'><GithubLogo size={32} /></Link>
                <Link href="https://www.linkedin.com/in/nadir-bagirov-b50b04269/" target="_blank" className='text-[#fac08f] hover:text-[#f8d0a8] duration-500'><LinkedinLogo size={32} /></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer