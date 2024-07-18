import Image from 'next/image'
import React from 'react'
import Form from '../../components/form/form'

function Contact() {
    return (
        <main className='px-36 pt-28 flex flex-col gap-10'>
            <h1 className='text-gold text-8xl'>DON’T BE SHY, <br />JUST <i>SAY HI!</i></h1>


            <div className='flex justify-around gap-10 '>
                <div>
        <Image src={'/3x4.jpg'} width={700} height={800} alt='Error' quality={100} className='rounded-3xl'/>

                </div>

                <div>
                    <h2 className='text-gold text-5xl'>Get in Touch</h2>
                <Form/>
                </div>
            </div>
        </main>


    )
}

export default Contact