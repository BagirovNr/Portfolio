'use client';

import { useState, useEffect } from 'react';
import IntroductionSection from './components/IntroductionSection';
import Link from 'next/link';
import Parallax from './components/scrollingComponents/Parallax';
import SmoothScroll from "./components/scrollingComponents/SmootScroll";
import LoadingScreen from './loading';
import Carousel2 from './components/Carousel/Carousel2';
import Carousel from './components/Carousel/Carousel';
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
        return <LoadingScreen />;
    }

    return (
        <div className='pt-40'>

            <SmoothScroll>
                <IntroductionSection />
                <Parallax id="parallax" speed={-1} classname="self-center ">
                    <Carousel />
                </Parallax>
                <section className='flex justify-evenly flex-wrap max-sm:flex-col max-sm:gap-10 max-sm:items-center'>
                    <Parallax speed={-2} classname="self-start max-sm:self-start max-sm:pl-2">
                        <div>
                            <h2 className="text-[#fac08f] text-3xl font-medium pl-20 w-full mt-40 max-sm:pl-0 max-sm:h-20 max-sm:mt-20">Recent Work</h2>
                        </div>
                    </Parallax>
                    <Parallax speed={-1} classname='self-center'>
                        <Carousel2 />
                    </Parallax>
                    <Parallax speed={-1} classname="self-end max-sm:self-center">
                        <div className="w-44 border-2 border-solid flex justify-center h-16 hover:scale-105 cursor-pointer duration-500">
                            <Link href="/allProjects" className="text-2xl font-light text-center text-[#fac08f] pt-4">
                                View More
                            </Link>
                        </div>
                    </Parallax>
                </section>

                <section className='mt-56 px-80 max-sm:px-0 max-sm:mt-10' >
                    <div className=''>
                        <h2 className="text-[#fac08f] text-3xl font-medium pl-20 w-full mt-40 max-sm:mt-10 max-sm:pl-2">Education</h2>
                        <div className='flex flex-col mt-10 text-center'>
                            <p className="text-[#ffffff] text-2xl font-light">Alas Academy</p>
                            <p className="text-[#ffffff] text-2xl font-light">Frontend Developer</p>
                            <p className="text-[#ffffff] text-2xl font-light">2023 may - 2023 november</p>
                        </div>
                    </div>
                </section>

                <section className='mt-56 px-80 h-80 max-sm:px-0 max-sm:mt-10' >
                    <div >
                        <h2 className="text-[#fac08f] text-3xl font-medium pl-20 w-full mt-32 max-sm:pl-2">Experience</h2>
                        <div className='flex justify-evenly mt-10 px-20 max-sm:flex-col max-sm:px-0 gap-6 max-sm:mt-0'>
                        <div className='flex flex-col mt-10 text-center text-2xl '>
                        <h3 className='max-sm:text-xl'>Frontend Developer Intern</h3>
                            <p className="text-[#ffffff] text-2xl font-light max-sm:text-base">Alas dev center</p>
                            <p className="text-[#ffffff] text-2xl font-light max-sm:text-base">2023 - 2024</p>
                        </div>
                        <div className=' flex flex-col mt-10 text-center text-2xl '>
                        <h3 className='max-sm:text-xl'>Frontend Developer (Junior)</h3>
                            <p className="text-[#ffffff] text-2xl font-light max-sm:text-base">Teftish.inc</p>
                            <p className="text-[#ffffff] text-2xl font-light max-sm:text-base">2024 - present</p>
                        </div>
                       
                        </div>

                    </div>
                    
                </section> 

                <Footer />
            </SmoothScroll>
        </div>
    );
}
