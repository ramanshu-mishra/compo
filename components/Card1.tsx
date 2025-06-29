"use client"
import {motion} from "motion/react"

export default function App(){
  return (
    <div className="  flex flex-1 justify-center items-center bg-neutral-900 w-full " 
    style={{
     backgroundImage: "radial-gradient(circle at center, black 1px, transparent 1px )",
     backgroundRepeat: "repeat",
     backgroundSize: "10px 10px"
    }}>
      <motion.div className="group text-neutral-500 px-12 py-5 rounded-lg text-4xl -translate-y-[50%]
       bg-black shadow-[inset_0px_5px_2px_0px_rgba(255,255,255,0.1),inset_0_-5px_2px_0px_rgba(255,255,255,0.1),inset_5px_0_2px_rgba(255,255,255,0.1),inset_-5px_0_2px_rgba(255,255,255,0.1)] z-100 hover:text-cyan-500"
       whileHover={{scale:1.1, rotateX:20 , rotateY: 20, boxShadow: "2px 0px 5px 2px rgb(0, 188, 212)", y:-10}}
       whileTap={{scale:0.95}}
      style={{userSelect: "none"}}

      transition={{
        scale:{duration:0.15}
      }}
       >Madarchod
       <span className="absolute h-[3px] w-3/4 mx-auto inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
       <span className="group-hover:opacity-100 opacity-0 blur-md absolute h-2 w-full mx-auto inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent transition-duration duration-300"></span>
       </motion.div>
    </div>
  )
}