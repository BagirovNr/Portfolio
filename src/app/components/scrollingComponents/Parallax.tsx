'use client'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { useWindowSize } from "@darkroom.engineering/hamo";

type Props = {
    children: React.ReactNode;
    speed?: number;
    classname?: string;
    id?: string;
    width?: number;
}

type WindowSize = {
    width: number;
    height: number;
};

const Parallax = ({ classname, children, speed = 1, id = 'parallax' }: Props) => {
    const trigger = useRef<HTMLDivElement>(null);
    const target = useRef<HTMLDivElement>(null);
    const timeLine = useRef<gsap.core.Timeline | null>(null);

    const { width: windowWidth } = useWindowSize() as WindowSize;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const y = windowWidth * speed * 0.1;
        const setY = gsap.quickSetter(target.current, "y", "px");

        timeLine.current = gsap.timeline({
            scrollTrigger: {
                id: id,
                trigger: trigger.current,
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (self) => {
                    setY(y * self.progress);
                }
            }
        });

        return () => {
            timeLine.current?.kill();
            ScrollTrigger.getById(id)?.kill();
        }
    }, [id, speed, windowWidth]);

    return (
        <div className={classname} ref={trigger}>
            <div ref={target}>
                {children}
            </div>
        </div>
    )
}

export default Parallax;
