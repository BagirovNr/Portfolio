import Image from 'next/image'
import React from 'react'

function Skills() {
    return (
        <div className='w-full flex justify-center items-center h-screen flex-col gap-20 '>
            <div className='flex justify-between w-full'>
                 <div>
                    <Image src={'/HTML5.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                </div>
                <div className='flex gap-5'>
                    <Image src={'/Css.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                    <Image src={'/Sass.webp'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                </div>
                <div>
                    <Image src={'/Js.webp'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                </div>
            </div>

            <div className='flex justify-between w-full'>
                <div>
                    <Image src={'/Ts.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
                </div>

            <div className='text-3xl text-gold text-center max-sm:text-xl max-sm:w-screen'>
            <h1 className='text-8xl text-gold text-center animate-pulse max-sm:text-5xl'>Skills</h1>
                <p> I have experience with: </p>
                <p>HTML5, CSS3, JavaScript, React, Redux, Next.js, TypeScript, Sass, Tailwind CSS, and GitHub. </p>
            </div>
            <div>
                <Image src={'/React.webp'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
            </div>
            </div>
        <div className='flex justify-between w-full'>
<div>
    <Image src={'/Github3.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
</div>
<div className='flex gap-5'>
    <Image src={'/Next_JS.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
    <Image src={'/Tailwind.png'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />

</div>
<div>
    <Image src={'/Redux.webp'} width={100} height={100} alt='Error' quality={100} className='rounded-3xl' />
</div>

        </div>
        </div>
    )
}

export default Skills
