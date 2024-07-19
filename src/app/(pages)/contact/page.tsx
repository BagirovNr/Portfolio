import Image from 'next/image'
import React from 'react'
import Form from '../../components/form/form'
import Footer from '../../components/footer/footer'

function Contact() {    
    return (
        <section>

        <main className='px-36 pt-28 flex flex-col flex-wrap gap-10 max-sm:px-10  '>
            <h1 className='text-gold text-8xl max-sm:text-3xl'>DON’T BE SHY, <br />JUST <i>SAY HI!</i></h1>


            <div className='flex justify-around gap-10 max-sm:flex-col flex-wrap  '>
                <div>
        <Image src={'/3x4.jpg'} width={500} height={600} alt='Error' quality={100} className='rounded-3xl'/>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h2 className='text-gold text-5xl max-sm:text-center max-sm:text-4xl'>Get in Touch</h2>
                    <p className='text-3xl pb-2 max-sm:text-center max-sm:text-xl'>Feel free to email me at any time. I will respond within 24 hours.</p>
                <Form/>
                </div>
            </div>
            
        </main>
        <Footer/>

        </section>

    )
}

export default Contact