import Image from 'next/image'
import React from 'react'

function Skills() {
    return (
        <div className='w-full flex justify-center items-center h-3/4 flex-col gap-32 pb-10  '>
            <div className='text-3xl text-gold text-center max-sm:text-xl max-sm:w-screen'>
                <h1 className='text-8xl text-gold text-center animate-pulse max-sm:text-5xl'>Skills</h1>
                <p> I have experience with: </p>
                <p>HTML5, CSS3, JavaScript, React, Redux, Next.js, TypeScript, Sass, Tailwind CSS, and GitHub. </p>
            </div>
            <div className='flex flex-col gap-28 w-full animate-pulse '>
                <div className='flex justify-around gap-10 flex-wrap  '>
                    <Image src={'/HTML5.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                    <Image src={'/Css.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                    <Image src={'/Js.webp'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />

                </div>
                <div className='flex justify-between gap-10 flex-wrap   '>
                    <Image src={'/Ts.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                    <Image src={'/Sass.webp'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                    <Image src={'/React.webp'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                    <Image src={'/shadcn.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                    
                </div>
                <div className='flex justify-around  gap-10 flex-wrap'>
                    <Image src={'/Github3.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                    <Image src={'/Next_JS.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                    <Image src={'/Tailwind.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                    <Image src={'/Redux.webp'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                </div>
            </div>
        </div>
    )
}

export default Skills
