'use client';

import { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Carousel2 from '../../components/Carousel/Carousel2';
import Footer from '../../components/footer/footer';
import IntroductionSection from '../../components/IntroductionSection';
import Parallax from '../../components/scrollingComponents/Parallax';
import LoadingScreen from '../../loading';
import SmoothScroll from "../../components/scrollingComponents/SmootScroll";
import Link from 'next/link';
import { Lock } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';
import Skills from '../../components/skills/skills';

export default function HomePage() {
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
                <Parallax id="parallax" speed={-1} classname="self-center mt-5 ">
                    <Carousel />
                </Parallax>
                <section className='flex justify-evenly flex-wrap max-sm:flex-col max-sm:gap-10 max-sm:items-center'>
                    <Parallax speed={-2} classname="self-start max-sm:self-start max-sm:pl-2">
                        <div>
                            <h2 className="text-gold text-3xl font-medium pl-20 w-full mt-40 max-sm:pl-0 max-sm:h-20 max-sm:mt-20">Recent Work</h2>
                        </div>
                    </Parallax>
                    <Parallax speed={-1} classname='self-center'>
                        <Carousel2 />
                    </Parallax>
                    <Parallax speed={-1} classname="self-end max-sm:self-center">
                        <div className="w-44 border-2 border-solid flex justify-center items-center h-16 cursor-pointer duration-500">
                            <p className="text-2xl font-light text-center text-gold blur-sm cursor-not-allowed">
                                View More
                            </p>
                            <Lock size={36} id='aboutlink' color='#e6a56f' />
                        </div>
                        <Tooltip id="aboutlink" content="This feature will be added soon"  anchorSelect="#aboutlink" place="top" style={{ backgroundColor: '#e6a56f' }} />
                    </Parallax>
                </section>
                <section className='mt-56 px-80 max-sm:px-0 max-sm:mt-10'>
                    <div>
                        <h2 className="text-gold text-3xl font-medium pl-20 w-full mt-40 max-sm:mt-10 max-sm:pl-2">Education</h2>
                        <div className='flex flex-col mt-10 text-center'>
                            <p className="text-card text-2xl font-light">Alas Academy</p>
                            <p className="text-card text-2xl font-light">Frontend Developer</p>
                            <p className="text-card text-2xl font-light">2023 may - 2023 november</p>
                        </div>
                    </div>
                </section>
                <section className='mt-56 px-80 h-80 max-sm:px-0 max-sm:mt-10'>
                    <div>
                        <h2 className="text-gold text-3xl font-medium pl-20 w-full mt-32 max-sm:pl-2">Experience</h2>
                        <div className='flex justify-evenly mt-10 px-20 max-sm:flex-col max-sm:px-0 gap-6 max-sm:mt-0'>
                            <div className='flex flex-col mt-10 text-center text-2xl'>
                                <h3 className='max-sm:text-xl text-card'>Frontend Developer Intern</h3>
                                <p className="text-card text-2xl font-light max-sm:text-base">Alas dev center</p>
                                <p className="text-card text-2xl font-light max-sm:text-base">2023 - 2024</p>
                            </div>
                            <div className='flex flex-col mt-10 text-center text-2xl'>
                                <h3 className='max-sm:text-xl text-card'>Frontend Developer (Junior)</h3>
                                <p className="text-card text-2xl font-light max-sm:text-base">Teftish.inc</p>
                                <p className="text-card text-2xl font-light max-sm:text-base">2024 - present</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Skills/>


                <Footer />
            </SmoothScroll>
        </div>
    );
}
