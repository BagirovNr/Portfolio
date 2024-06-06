'use client'

import { useState, useEffect } from 'react';
export * from 'lenis/react'
import { ReactLenis } from 'lenis/react'

function SmootScroll({ children }: { children: React.ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // if (!isLoaded) {
    // return "asddassaddsaasds";
    // }/

    return (
        <ReactLenis root options={{
            lerp: 0.08,
            duration: 0.5,
        }} >{children}</ReactLenis>
    )
}

export default SmootScroll;