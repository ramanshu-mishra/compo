"use client"
import {motion} from "motion/react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import logo from "../assets/logo.png"
import { Icon123, Icon12Hours, Icon360View, IconPlus, IconSearch, IconX} from "@tabler/icons-react"
import { useState } from "react"

export default  function Card(){
    const [open,setOpen] = useState(false);
    function handleOpen(){
        setOpen(e=>!e);
    }
    return(
        <motion.div className={cn("w-70 h-[28rem] rounded-2xl shadow-cardShadow ",
            "grid grid-rows-[30%_70%] p-4 px-6"
        )}  
        style={{userSelect:"none"}}
        initial={{
            opacity:0,
            filter:"blur(10px)",
            scale:0.95
        }}
        animate={{
            opacity:1,
            filter: "blur(0px)",
            scale: 1
        }}
        transition={{duration:0.3}}>
            <div className=" h-full">
                <div className="text-[13px] mt-1  font-bold">Organization UI Components</div>
                <div className="text-neutral-500 text-[12px] mt-1 ">Clerk&apos;s UI components add turn-key simplicity to complex Organization management tasks.</div>
            </div>
            <div className=" h-full flex flex-col items-center">
                
                <button className="rounded-md shadow-cardShadow w-fit px-2 text-neutral-600 flex p-1 scale-80 active:scale-75 -translate-y-2 " onClick={handleOpen}>
                    <Image width={25} height={10} alt="logo" src={logo} className="mx-1 "></Image>
                    Aceternity
                    <IconX className="h-4 w-4 mt-1 "></IconX>
                    </button>   
                <motion.div className={`w-[87%] flex-1 scale-[1.05]  mt-1 shadow-cardShadow bg-gray-100 border border-solid border-neutral-300 rounded-lg relative ${open?"opacity-0":"opacity-100"} transition-opacity duration-300 `}>
                    <motion.div className={"w-full rounded-[inherit] h-full absolute inset-x-0 divide-y-1 divide-neutral-300 flex flex-col gap-2"} 
                    initial={{
                        opacity:0,
                        scale: 0.95,
                        filter: "blur(15px)"
                    }}
                    whileHover={{
                        opacity:1,
                        scale: 1,
                        filter: "blur(0px)"
                    }}
                    transition={{duration: 0.3,
                        ease: "easeInOut"
                    }}>
                            <div className="flex items-center mt-2 px-2 pb-2">
                                <Icon12Hours className="h-4 w-4 text-neutral-700"></Icon12Hours>
                                <div className="flex flex-col w-full pl-4"> 
                                    <div className="text-[10px] text-neutral-600">Aceternity UI Components</div>
                                    <div className="text-[9px] text-neutral-500"> A collection of UI components</div>
                                </div>
                            </div>
                             <div className="flex items-center mt-2 px-2 pb-2">
                                <Icon123 className="h-4 w-4 text-neutral-700"></Icon123>
                                <div className="flex flex-col w-full pl-4"> 
                                    <div className="text-[10px] text-neutral-600">Aceternity UI Components</div>
                                    <div className="text-[9px] text-neutral-500"> A collection of UI components</div>
                                </div>
                            </div>
                             <div className="flex items-center mt-2 px-2 pb-2">
                                <Icon360View className="h-4 w-4 text-neutral-700"></Icon360View>
                                <div className="flex flex-col w-full pl-4"> 
                                    <div className="text-[10px] text-neutral-600">Aceternity UI Components</div>
                                    <div className="text-[9px] text-neutral-500"> A collection of UI components</div>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 px-2 pb-2">
                                <IconSearch className="h-4 w-4 text-neutral-700"></IconSearch>
                                <div className="flex flex-col w-full pl-4"> 
                                    <div className="text-[10px] text-neutral-600">Aceternity UI Components</div>
                                    <div className="text-[9px] text-neutral-500"> A collection of UI components</div>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 px-2 pb-2 justify-center">
                                <div className="flex items-center justify-center">
                                <IconPlus className="h-3 w-3 text-neutral-500"></IconPlus>
                                <div className="text-neutral-500 text-[10px]">Create Project</div>
                                </div>
                                
                            </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}