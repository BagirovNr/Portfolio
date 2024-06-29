'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Parallax from "./components/scrollingComponents/Parallax";
import SmoothScroll from "./components/scrollingComponents/SmootScroll";
import Carousel from './components/Carousel';
import Carousel2 from './components/Carousel2';
import Footer from './components/footer';

export default function Home() {
    
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoaded(true);
            document.documentElement.classList.add('loaded');
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    if (!isLoaded) {
        return (
            <main className="bg-[#000000] h-screen flex items-center justify-center">
                <p className="text-[#ffffff]">Loading...</p>
            </main>
        );
    }

 

    return (
        <div>

            <SmoothScroll >
                <Parallax id="parallax" speed={-1} classname="self-center">

                    <main className="bg-[#000000]">
                        <Parallax speed={0.4} classname="self-center">
                            <div>
                                <h1 className="text-[#ffffff] text-8xl font-medium text-center w-full">
                                    Nadir Baghirov-<br /> Frontend Developer.
                                </h1>
                            </div>
                        </Parallax>
                        <div>
                            <div className="flex justify-between mt-40">
                                <Parallax id="parallax" speed={1} classname="self-start w-1/3 z-10 text-">
                                    <p className="text-[#ffffff] text-xl w-full font-light ml-2 z-50 ">
                                        Welcome to my portfolio. I am a frontend developer specializing in building dynamic and responsive web applications. My experience includes working with various frameworks and technologies to create user-friendly interfaces for websites, mobile apps, and interactive platforms.
                                    </p>
                                </Parallax>
                                <Parallax id="parallax" speed={0} classname="self-center  w-1/5 mt-80 overflow-hidden">
                                    <img className="w-full h-3/4 rounded-e-[100px] rounded-s-[100px] hover:scale-105 cursor-pointer duration-500 shadow shadow-[#f6c7a1] " src='/3x4.jpg' alt="Profile" />
                                    <div className="flex justify-center mt-8 ">
                                        <div className="w-44 border-2 border-solid flex justify-center h-16 hover:scale-105 cursor-pointer duration-500 mt-5">
                                            <Link href="/workWithMe" className="text-2xl font-light text-center text-[#fac08f] pt-4">
                                                Work with me
                                            </Link>
                                        </div>
                                    </div>
                                </Parallax>

                                <Parallax id="parallax" speed={-3} classname="self-end w-1/3">
                                    <p className="text-[#ffffff] w-full h-full mt-96 text-xl font-light">
                                        With over 2 years of experience in frontend development, I create user-friendly websites and apps. Clients love my work because I focus on making things simple and effective.
                                    </p>
                                </Parallax>
                            </div>
                        </div>
                    </main>
                </Parallax>
                <Parallax id="parallax" speed={-1} classname="self-center ">
                    <Carousel />
                </Parallax>
                <section className='flex justify-evenly'>
                    <Parallax speed={-2} classname="self-start">
                        <div >
                            <h2 className="text-[#ffffff] text-3xl font-medium pl-20 w-full mt-40">Recent Work</h2>
                        </div>
                    </Parallax>

                    <Parallax speed={-1} classname='self-center'>
                        <Carousel2 />
                    </Parallax>
                    <Parallax speed={-1} classname="self-end">
                        <div className="w-44 border-2 border-solid flex justify-center h-16 hover:scale-105 cursor-pointer duration-500 ">
                            <Link href="/allProjects" className="text-2xl font-light text-center text-[#fac08f] pt-4">
                                WiewMore
                            </Link>
                        </div>
                    </Parallax>
                </section>
                <section className='mt-56 px-80' >
                    <div className=' '>
                        <h2 className="text-[#ffffff] text-3xl font-medium pl-20 w-full mt-40">Education</h2>
                        <div className='flex   flex-col mt-10 text-center '>
                            <p className="text-[#ffffff] text-2xl font-light">Alas Academy</p>
                            <p className="text-[#ffffff] text-2xl font-light">Frontend Developer</p>
                            <p className="text-[#ffffff] text-2xl font-light">2023 - 2024</p>
                        </div>
                    </div>
                </section>
                <section className='mt-56 px-80 h-80' >
                    <div>
                        <h2 className="text-[#ffffff] text-3xl font-medium pl-20 w-full mt-40">Experience</h2>
                        <div className='flex justify-evenly mt-10 px-20'>

                        <div className='flex flex-col mt-10 text-center text-2xl '>
                        <h3>Frontend Developer Intern</h3>
                            <p className="text-[#ffffff] text-2xl font-light">Alas dev center</p>
                            <p className="text-[#ffffff] text-2xl font-light">2022 - 2023</p>
                        </div>
                        <div className=' flex flex-col mt-10 text-center text-2xl '>
                        <h3>Frontend Developer (Junior)</h3>
                            <p className="text-[#ffffff] text-2xl font-light">Teftish.inc</p>
                            <p className="text-[#ffffff] text-2xl font-light">2023 - present</p>
                        </div>
                       
                        </div>

                    </div>
                    
                </section>

        <Footer />


            </SmoothScroll>

        </div>

    );
}
