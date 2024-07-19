'use client'
import Link from 'next/link'
import {InstagramLogo,GithubLogo,LinkedinLogo} from "@phosphor-icons/react";

function Footer() {
  return (
    <section className='text-center w-full border-t-[1px] border-[#f8d0a8] h-96' >


        <h2 className='text-8xl text-[#f8d0a8] pt-10 max-sm:text-3xl'>
            GET IN TOUCH
        </h2>
        <div className='flex justify-evenly gap-10 pt-10 max-sm:flex-col max-sm:flex-wrap'>
        <div className='text-3xl flex flex-col gap-6'>
                <p className='text-gold'>Email at</p>
                <Link href="https://mail.google.com/mail/u/1/?pli=1#inbox?compose=CllgCJfrtHZJNQCJxxRvmqlJTRrBBNjCmvXklQjFsgKVrjwxjmwfGFfGSdtdCBdCQSjnBfhrqJV" target="_blank" className='text-card hover:text-[#f8d0a8] duration-500 max-sm:text-2xl'>nbagirovdev@gmail.com</Link>
            </div>
            <div className='text-3xl flex flex-col gap-6'>
                <p className='text-gold'>Call at </p>
                <Link href="tel: +994556680619" target="_blank" className='text-card hover:text-[#f8d0a8] duration-500 max-sm:text-2xl'>+994556680619</Link>
            </div>
            <div className='text-3xl flex flex-col gap-6'>
                <p className='text-gold'>Follow Me </p>
                <div className='flex justify-center gap-10 '>
                <Link href="https://www.instagram.com/bagirov.nr" target="_blank" className='text-card hover:text-[#FC153F] hover:bg-white hover:rounded-xl duration-500'><InstagramLogo size={32} /></Link>
                <Link href="https://github.com/BagirovNr" target="_blank" className='text-card hover:text-black hover:rounded-xl hover:bg-white duration-500'><GithubLogo size={32} /></Link>
                <Link href="https://www.linkedin.com/in/nadir-bagirov-b50b04269/" target="_blank" className='text-card hover:text-[#0366C3] hover:rounded-xl hover:bg-white duration-500'><LinkedinLogo size={32} /></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer