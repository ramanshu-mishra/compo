"use client"
import { motion, scale, stagger, useAnimate} from "motion/react"
import { useEffect, useState } from "react";
import { workerData } from "worker_threads";

const text = ["Hello I'm Ramanshu Sharan Mishra, Please Hire Me lol" , "I am good developer beleive me"]

export default function Page(){

    const [scope, animate] = useAnimate();
    const [id, setidx] = useState(0);
    const [active,setActive] = useState(false);
    function startAnimating(){
        setActive(true);
        animate( "span", {
            opacity: 1,
            filter: "blur(0px)",
            y:0

        },
        {
           ease: "easeInOut", 
            delay: stagger(0.05)
        }
    )
    }

    function blastingAnimation(){
        
       animate(
        "span", 
        { filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
            scale: [1.5, 2.5, 0.7, 1],
        },
        { ease: "easeInOut", duration:2},
    )
    setidx((id+1)%2)
    }

    return(
       <div className="h-full  w-full bg-neutral-950 flex flex-col gap-4 items-center justify-center  " style={{userSelect: "none"}}>
        <motion.div className="font-bold text-white text-4xl px-4 py-2 rounded-full shadow-cardShadow animated-gradient  cursor-pointer  "
        whileHover={{scale:1.05}}
        whileTap={{scale:0.98}}
        transition={{scale: {duration: 0.3}}}
        onClick={!active?startAnimating:blastingAnimation}
        >
            {/* <div className="animated-gradient px-4 py-2 rounded-full "> */}
                ABOUT ME
        {/* </div> */}
            </motion.div>
        <div  ref={scope} className="flex items-center text-gray-100 justify-center  font-bold text-4xl holla">
            {
                text[id].split(" ").map((word, idx)=>{
                    return (
                        <motion.span key={idx} className={`px-1.5 ${"holla"}`} 
                        initial={{opacity: 0, filter:"blur(10px)", y:10}}>
                            {word}
                        </motion.span>
                    )
                })
            }
        </div>
        </div>
    )
}