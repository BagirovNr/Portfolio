import Image from 'next/image'
import React from 'react'

function Skills() {
    return (
        <div className='w-full flex justify-center items-center h-screen relative '>
            <div className='relative flex flex-wrap justify-center items-center w-full h-full max-sm:gap-10 '>
                <div className='absolute top-24 left-52 transform animate-bounce max-sm:top-80 max-sm:left-0'>
                    <Image src={'/Github3.png'} width={100} height={100} alt='GitHub' />
                </div>
                <div className='absolute top-20 left-1/2 transform animate-bounce max-sm:top-56'>
                    <Image src={'/HTML5.png'} width={100} height={100} alt='HTML5' />
                </div>
                <div className='absolute top-96 left-20 transform animate-bounce max-sm:left-0 max-sm:top-[470px]'>
                    <Image src={'/Tailwind.png'} width={100} height={100} alt='Tailwind CSS' />

                </div>
                <div className='absolute bottom-24 left-1/2 transform animate-bounce max-sm:bottom-0'>
                    <Image src={'/Js.webp'} width={100} height={100} alt='JavaScript' />
                </div>
                <div className='absolute top-3/4 left-52 transform animate-bounce max-sm:left-0'>
                    <Image src={'/Next_JS.png'} width={100} height={100} alt='Next.js' />
                </div>
                <div className='absolute top-24 right-52 transform animate-bounce max-sm:top-80 max-sm:right-0'>
                    <Image src={'/React.webp'} width={100} height={100} alt='React' />
                </div>
                <div className='absolute top-20 right-1/2 transform animate-bounce max-sm:top-56'>
                    <Image src={'/Redux.webp'} width={100} height={100} alt='Redux' />
                </div>
                <div className='absolute top-96 right-20 transform animate-bounce max-sm:right-0 max-sm:top-[460px] '>
                    <Image src={'/Sass.webp'} width={100} height={100} alt='Sass' />
                </div>
                <div className='absolute bottom-24 right-1/2 transform animate-bounce max-sm:bottom-0'>
                    <Image src={'/Ts.png'} width={100} height={100} alt='TypeScript' />
                </div>
                <div className='absolute top-3/4 right-52 transform animate-bounce max-sm:right-0'>
                    <Image src={'/Css.png'} width={100} height={100} alt='CSS' />
                </div>
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-sm:top-24 '>
                <h1 className='text-8xl text-gold text-center animate-pulse max-sm:text-5xl'>Skills</h1>
                <div className='text-3xl text-gold text-center max-sm:text-xl max-sm:w-screen'>
                    <p> I have experience with: </p>
                    <p>HTML5, CSS3, JavaScript, React, Redux, Next.js, TypeScript, Sass, Tailwind CSS, and GitHub. </p>
                </div>
            </div>
        </div>
    )
}

export default Skills
