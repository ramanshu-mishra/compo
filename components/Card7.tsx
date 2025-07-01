"use client"
import {motion, useAnimate} from "motion/react"
import loader from "../assets/loader.svg"
import tick from "../assets/check.svg"
import Image from "next/image"

export default function Page(){
    const [scope,animate] = useAnimate();
   async function handleAnimation(){
       await animate(".text", {display:"none"},{duration: 0.1})
       await animate(".loader", {opacity:1, rotate: 360*4}, {duration: 2, autoplay:true})
       await animate(
            ".payment",
            {
                width: "0rem",
            },
            {
                duration: 0.3,
                ease: "circInOut"
            }
        
        )
        await animate(".spin-container", {opacity:1, scale: [ 0.6, 1.5, 1]}, {duration:0.5})
        await animate(".tick", {opacity:1 , scale: [0.2, 0.7, 1]}, {duration: 0.2})
    }
    return (
        <div ref={scope} className="h-full w-full flex justify-center items-center bg-neutral-950">
            <motion.div className="bg-[linear-gradient(to_right,#8b5cf6,#7c3aed,#4f46e5,#2563eb,#0284c7)] font-bold text-4xl  w-xl flex text-white h-[100px] items-center justify-center rounded-xl cursor-pointer payment"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            transition={{duration: 0.3}}
            onClick={handleAnimation}>
                <span className="text">
                    Bano Chutiya
                    
                    </span>
                    <Image className="opacity-0 loader" alt={loader} src={loader}></Image>
                    <motion.div style={{opacity: 0, scale: 0}} className="spin-container bg-green-400 absolute rounded-full h-25 w-25 flex justify-center items-center">
                         <motion.div>
                        <Image height={80} className="tick opacity-0" alt={"svg"} src={tick}></Image>
                    </motion.div>
                    </motion.div>
                   
                    </motion.div>
            
        </div>
    )
}