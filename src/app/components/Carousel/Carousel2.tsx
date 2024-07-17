import React from "react"
import "./styles2.css"
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const carousel: KeenSliderPlugin = (slider) => {
    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}


export default function Carousel2() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )

    return (
        <div className="wrapper">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    <div className="carousel__cell number-slide11 cursor-grab active:cursor-grabbing">
                    <img src="https://picsum.photos/500/900" alt="error" />
                    </div>
                    <div className="carousel__cell number-slide22 cursor-grab active:cursor-grabbing">
                    <img src="https://picsum.photos/500/900" alt="error" />
                    </div>
                    <div className="carousel__cell number-slide33 cursor-grab active:cursor-grabbing">
                        <img src="https://picsum.photos/500/900" alt="error" />
                    </div>
                    <div className="carousel__cell number-slide44 cursor-grab active:cursor-grabbing">
                    <img src="https://picsum.photos/500/900" alt="error" />
                    </div>
                    <div className="carousel__cell number-slide55 cursor-grab active:cursor-grabbing">
                    <img src="https://picsum.photos/500/900" alt="error" />
                    </div>
                    <div className="carousel__cell number-slide66 cursor-grab active:cursor-grabbing">
                        <img src="https://picsum.photos/500/900" alt="error" />
                    </div>
                </div>
            </div>
        </div>
    )
}
