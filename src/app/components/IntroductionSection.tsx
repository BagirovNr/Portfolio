import Parallax from "./scrollingComponents/Parallax";
import Link from "next/link";

export default function IntroductionSection() {
    return (
        <Parallax id="parallax" speed={-1} classname="self-center">
            <main className="bg-[#000000]">
                <Parallax speed={0.4} classname="self-center">
                    <div>
                        <h1 className="text-gold text-8xl font-medium text-center w-full max-sm:text-3xl">
                            Nadir Baghirov-<br /> Frontend Developer.
                        </h1>
                    </div>
                </Parallax>
                <div>
                    <div className="flex justify-between mt-40 max-sm:flex-col items-center max-sm:text-2xl max-sm:w-full max-sm:mt-10">
                        <Parallax id="parallax" speed={1} classname="self-start w-1/3 z-10 max-sm:self-auto max-sm:w-4/5">
                            <p className="text-card text-xl w-full font-light ml-2 z-50 ">
                                Welcome to my portfolio. I am a frontend developer specializing in building dynamic and responsive web applications. My experience includes working with various frameworks and technologies to create user-friendly interfaces for websites, mobile apps, and interactive platforms.
                            </p>
                        </Parallax>
                        <Parallax id="parallax" speed={0} classname="self-center w-1/5  mt-80 max-sm:mt-16  max-sm:self-auto max-sm:w-4/5">
                            <img className="w-full h-3/4 rounded-e-[100px] rounded-s-[100px] hover:scale-105 cursor-pointer duration-500 shadow shadow-[#f6c7a1]" src='/3x4.jpg' alt="Profile" />
                            <div className="flex justify-center mt-8 ">
                                <div className="w-44 border-2 border-solid flex justify-center h-16 hover:scale-105 cursor-pointer duration-500 mt-5">
                                    <Link href="/contact" className="text-2xl font-light text-center text-gold pt-4">
                                        Work with me
                                    </Link>
                                </div>
                            </div>
                        </Parallax>
                        <Parallax id="parallax" speed={-3} classname="self-end w-1/3 max-sm:self-auto max-sm:w-4/5 max-sm:mt-7">
                            <p className="text-card w-full h-full mt-96 max-sm:mt-16 text-xl font-light">
                                With over 2 years of experience in frontend development, I create user-friendly websites and apps. Clients love my work because I focus on making things simple and effective.
                            </p>
                        </Parallax>
                    </div>
                </div>
            </main>
        </Parallax>
    );
}
