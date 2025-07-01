"use client"
import {motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform} from "motion/react"
import p1 from "../assets/lagan4.jpg"
import p2 from "../assets/me.jpg"
import p3 from "../assets/parents.jpg"
import Image from "next/image"
import React, { useRef,useState } from "react"





function Card({title, description, image,containerRef}:{title:string, description:string,image:React.ReactNode,containerRef:React.RefObject<HTMLDivElement | null>}){
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end","end start"],
        container: containerRef,
        layoutEffect:false
    })
    const translateContent = useTransform(scrollYProgress, [0,1], [200, -200]);
    const blurContent = useTransform(scrollYProgress, [0,0.5,1], [0,1,0]);
    const blurTransform = useTransform(scrollYProgress, [0.5,1], [0,7]);
    const scale= useTransform(scrollYProgress, [0.5, 1], [1, 0.9]);

   useMotionValueEvent(scrollYProgress, "change", (latest) => {
  console.log("scrollYProgress:", latest);
});
    return (
        <div key={title} className={`p-1 w-full h-screen flex justify-center items-center` } ref={ref}>
                    <motion.div className="flex gap-10  " >
                        <motion.div className="flex flex-col gap-2 justify-center " style={{filter: useMotionTemplate `blur(${blurTransform}px)`, scale: scale}}>
                            <div className="text-gray-50 text-4xl">{title}</div>
                            <div className="text-neutral-400 mx-auto text-xl">{description}</div>
                        </motion.div>
                        <motion.div style={{y:translateContent, opacity: blurContent}}>
                            {image}
                        </motion.div>
                    </motion.div>
                </div>
    )
}

export default function Page(){
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({container: ref})
    const backgrounds = ["#000000", "#001a2c", "#32004f"]
   const [bg,setBg] = useState(backgrounds[0]);

    useMotionValueEvent(scrollYProgress, "change", (latest)=>{
        const currbg = backgrounds[Math.floor(latest*backgrounds.length)];
        setBg(currbg);
    })
    return(
       
        <motion.div className="h-screen w-full bg-neutral-950 overflow-y-auto relative" ref={ref} style={{background:bg}}
        animate={{background: bg}} >
            {/* <motion.div className="bg-pink-400 w-full h-3 rounded-sm sticky top-0 z-5 left-0" style={{scaleX: scrollYProgress}} ></motion.div> */}
            
            {contents.map((content,idx)=>{
                return <Card  containerRef={ref} key={idx} title={content.title} description={content.description} image={content.image}></Card>
            })}
           
        </motion.div>
       
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

