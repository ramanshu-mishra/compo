"use client"
import { IconChartBar, IconChevronLeft, IconChevronRight, IconHome, IconSettings, IconUser} from "@tabler/icons-react";
import {motion} from "motion/react"
import React, { useState } from "react"
  


const links: {name:string,link:string,image:React.ReactNode}[] = [
    {name: "home",
    link: "./home",
    image: <IconHome className="text-neutral-600"></IconHome>
    },
    {name: "playground",
    link: "./home",
    image: <IconChartBar className="text-neutral-600"></IconChartBar>
    },
    {name: "messenger",
    link: "./home",
    image: <IconUser className="text-neutral-600"></IconUser>
    },
    {name: "contact us",
    link: "./home",
    image: <IconSettings className="text-neutral-600"></IconSettings>
    }
]


export default function Card(){
    const [open,setOpen] = useState(false);
    function handleOpen(){
        setOpen(e=>!e);
    }
    const sideBarVariants = {
        open: {
            width: "15rem"
        },
        closed: {
            width : "3rem"
        }
    }

    const childVariants={
        open: {
            opacity: 100,
            y:0
        },
        closed:{
            opacity: 0,
            y:-10
        }
    }

    const parentVariants={
        open:{
           transition:{staggerChildren: 0.07, delayChildren: 0.2}
        },
        closed:{ staggerChildren: 0.05, staggerDirection:-1, staggerDelay: 0.1}
    }

    return (
        <motion.div className="shadow-md w-fit border-r border-neutral-100 h-full "
             initial={false}
           animate={open?"open":"closed"}
           transition={{duration:0.3}}
           style={{userSelect: "none"}}
        >
           <motion.div className={`h-full` }
            
            variants={sideBarVariants}
           >
                <nav className="flex items-center justify-between mt-2 border-0 ">
                    {<div className={`mx-2 text-neutral-800 ${!open && "sr-only"}`}>DASHBOARD</div>}
                    <button className="m-2 p-1 hover:scale-[1.1] hover:shadow-md rounded-full active:scale-[0.95]"
                    onClick={handleOpen}>{open?<IconChevronLeft className="text-neutral-600"/>:<IconChevronRight className="text-neutral-600"/>
                    }</button>
                </nav>
                {/* sidebar section */}
                <motion.ul className={` ${open && "divide-y divide-neutral-300"} flex flex-col gap-3 mt-3`}
                variants={parentVariants}
                  initial="closed"
  animate={open ? "open" : "closed"}
                >
                    {
                        links.map((link)=>{
                            return (
                                <motion.li key={link.name} className="flex mx-3 hover:scale-[1.03] active:scale-[0.98]  p-1"
                                variants={childVariants}>
                                    <a href= {link.link} onClick={(e)=>e.preventDefault()} className="flex gap-2">
                                        {link.image}
                                    { <div className={`text-neutral-500`}>
                                            {open && link.name}
                                        </div>}
                                    </a>
                                </motion.li>
                            )
                        })
                    }
                </motion.ul>
           </motion.div>
        </motion.div>
    )
}