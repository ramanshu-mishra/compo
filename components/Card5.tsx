"use client"

import {motion,  useMotionValue,  useScroll, useSpring } from "motion/react"
import { useRef } from "react";


export default function Page(){
    // const x = useSpring(0);
    const ref = useRef<HTMLDivElement>(null);

    return(
        <div className="w-[80vw] h-[80vh]  cursor-crosshair flex justify-center items-center bg-neutral-900" ref={ref}>
            <motion.div className="w-10 h-10 bg-amber-400 rounded-md"
            drag dragConstraints={ref}
            ></motion.div>
        </div>
    )
}