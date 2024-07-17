import * as React from "react"
import "./styles.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const animation = { duration: 12000, easing: (t: number) => t }

export default function Carousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  return (
    <section className="z-50">
      <h1 className="text-5xl text-center tracking-[0.5rem] mb-3 max-sm:text-2xl text-[#fac08f] " >My Skills</h1>
      <div ref={sliderRef} className="keen-slider">
{/* 
        <div className="keen-slider__slide number-slide1">Language: HTML, CSS, JavaScript, Tailwind, SCSS, TypeScript, </div>
        <div className="keen-slider__slide number-slide2">React, Next.js,</div>
        <div className="keen-slider__slide number-slide3">Adaptability, cross - browser compatibility</div>
        <div className="keen-slider__slide number-slide4">Git</div> */}
        <div className="keen-slider__slide number-slide5 ">Say Hello! </div>
        <div className="keen-slider__slide number-slide5 ">Say Hello! </div>
        <div className="keen-slider__slide number-slide5 ">Say Hello! </div>
      </div>
    </section>
  )
}




