"use client"
import {motion, useMotionValueEvent, useScroll, useTransform} from "motion/react"
import p1 from "../assets/lagan4.jpg"
import p2 from "../assets/me.jpg"
import p3 from "../assets/parents.jpg"
import Image from "next/image"
import React, { useRef } from "react"





function Card({title, description, image}:{title:string, description:string,image:React.ReactNode}){
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end","end start"]
    })
    const translateContent = useTransform(scrollYProgress, [0,1], [-200, 200]);

   useMotionValueEvent(scrollYProgress, "change", (latest) => {
  console.log("scrollYProgress:", latest);
});
    return (
        <div key={title} className={`p-1 w-full h-full flex justify-center items-center` } ref={ref}>
                    <motion.div className="flex gap-10  " >
                        <div className="flex flex-col gap-2 justify-center ">
                            <div className="text-gray-50 text-4xl">{title}</div>
                            <div className="text-neutral-400 mx-auto text-xl">{description}</div>
                        </div>
                        <motion.div style={{y:translateContent}}>
                            {image}
                        </motion.div>
                    </motion.div>
                </div>
    )
}

export default function Page(){
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({container: ref})
   
    return(
       
        <div className="h-full w-full bg-neutral-950 overflow-y-auto relative" ref={ref} >
            <motion.div className="bg-pink-400 w-full h-3 rounded-sm sticky top-0 z-5 left-0" style={{scaleX: scrollYProgress}} ></motion.div>
            
            {contents.map((content,idx)=>{
                return <Card  key={idx} title={content.title} description={content.description} image={content.image}></Card>
            })}
           
        </div>
       
    )
}

const imageclass = "rounded-xl"
const contents: {title:string,description:string,image:React.ReactNode}[] = [
    {
        title: "Lets see who I am",
        description:"dont ask me , I dont know a bit about myself",
        image: <Image width={500} src={p2} alt="me" className={imageclass}></Image>
    },
    {
        title: "Teen Guna Lagan Lega",
        description: "Gand tod ke le lega",
        image: <Image width={500} src={p1} alt="me" className={imageclass}></Image>
    },
     {
        title: "Forever together",
        description: "Hope to see you till my last breath",
        image: <Image width={500} src={p3} alt="me" className={imageclass}></Image>
    }
]

