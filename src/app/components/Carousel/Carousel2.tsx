'use client';
import React from "react";
import "./styles2.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import { Lock } from "@phosphor-icons/react/dist/ssr";

const carousel: KeenSliderPlugin = (slider) => {
    const z = 300;
    function rotate() {
        const deg = 360 * slider.track.details.progress;
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length;
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
        });
        rotate();
    });
    slider.on("detailsChanged", rotate);
};

export default function Carousel2() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    );

    return (
        <div className="wrapper">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    <div className="carousel__cell number-slide11 cursor-grab active:cursor-grabbing" data-tooltip-id="slide1-tooltip">
                        <div className="image-container">
                            <Image width={500} height={900}  src="https://picsum.photos/500/900" alt="error" className="image blur-xl grayscale"/>
                            <Lock size={32} className="lock-icon" cursor={'not-allowed'}/>
                        </div>
                    </div>
                    <div className="carousel__cell number-slide22 cursor-grab active:cursor-grabbing" data-tooltip-id="slide2-tooltip">
                        <div className="image-container">
                            <Image width={500} height={900}  src="https://picsum.photos/500/900" alt="error" className="image blur-xl grayscale" />
                            <Lock size={32} className="lock-icon"cursor={'not-allowed'} />
                        </div>
                    </div>
                    <div className="carousel__cell number-slide33 cursor-grab active:cursor-grabbing" data-tooltip-id="slide3-tooltip">
                        <div className="image-container">
                            <Image width={500} height={900}  src="https://picsum.photos/500/900" alt="error" className="image blur-xl grayscale" />
                            <Lock size={32} className="lock-icon" cursor={'not-allowed'} />
                        </div>
                    </div>
                    <div className="carousel__cell number-slide44 cursor-grab active:cursor-grabbing" data-tooltip-id="slide4-tooltip">
                        <div className="image-container">
                            <Image width={500} height={900}  src="https://picsum.photos/500/900" alt="error" className="image blur-xl grayscale" />
                            <Lock size={32} className="lock-icon"cursor={'not-allowed'} />
                        </div>
                    </div>
                    <div className="carousel__cell number-slide55 cursor-grab active:cursor-grabbing" data-tooltip-id="slide5-tooltip">
                        <div className="image-container">
                            <Image width={500} height={900}  src="https://picsum.photos/500/900" alt="error" className="image blur-xl grayscale" />
                            <Lock size={32} className="lock-icon"cursor={'not-allowed'} />
                        </div>
                    </div>
                    <div className="carousel__cell number-slide66 cursor-grab active:cursor-grabbing" data-tooltip-id="slide6-tooltip">
                        <div className="image-container">
                            <Image width={500} height={900}  src="https://picsum.photos/500/900" alt="error" className="image blur-xl grayscale" />
                            <Lock size={32} className="lock-icon" cursor={'not-allowed'}/>
                        </div>
                    </div>
                </div>
                <Tooltip id="slide1-tooltip" content="projects will be added soon"  style={{ backgroundColor: '#e6a56f' }} />
                <Tooltip id="slide2-tooltip" content="projects will be added soon" style={{backgroundColor:'#e6a56f'}}/>
                <Tooltip id="slide3-tooltip" content="projects will be added soon" style={{backgroundColor:'#e6a56f'}}/>
                <Tooltip id="slide4-tooltip" content="projects will be added soon" style={{backgroundColor:'#e6a56f'}}/>
                <Tooltip id="slide5-tooltip" content="projects will be added soon" style={{backgroundColor:'#e6a56f'}}/>
                <Tooltip id="slide6-tooltip" content="projects will be added soon" style={{backgroundColor:'#e6a56f'}}/>
            </div>
        </div>
    );
}
