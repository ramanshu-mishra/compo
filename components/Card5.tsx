"use client"
import {motion, scale} from "motion/react"
import Image from "next/image"
import p1 from "../assets/lagan4.jpg"
import p2 from "../assets/me.jpg"
import p3 from "../assets/parents.jpg"
import React, {  useRef, useEffect, useState } from "react"



export function Card(content: {title:string, description:string,image:React.ReactNode,curr:number, setCurr: React.Dispatch<React.SetStateAction<number|null>>}){
    return (
        <motion.div className="shadow-cardShadow flex gap-4 rounded-2xl p-2 hover:scale-[1.01] cursor-pointer bg-white"
                    transition={{duration: 0.3}} onClick={()=>{content.setCurr(content.curr)}} 
                    layoutId={`card-${content.curr}`}>
                        <motion.div layoutId={`car-image-${content.curr}`}>{content.image}</motion.div>
                        <div className="flex justify-between w-full" >
                        <div className="flex flex-col mt-2 gap-2" >
                            <motion.div className="text-neutral-800 tracking-tight font-bold mt-1" layoutId={`card-title-${content.curr}`}> {content.title}</motion.div>
                            <motion.div className="text-neutral-500 tracking-tight text-sm" layoutId={`card-description-${content.curr}`}>{content.description}</motion.div>
                        </div>
                        <div className="flex items-center p-2">
                            <motion.div className="shadow-cardShadow flex justify-center items-center px-3 py-1 rounded-xl bg-green-400 text-gray-200 hover:scale-[1.05] active:scale-[0.95] transition-all duration-100"
                            >Play</motion.div>
                        </div>
                        
                        </div>
                        
                    </motion.div>
    )
}

export default function Page(){
    
    const [curr, setCurr]= useState<number|null>(null);
    
    useEffect(()=>{
        console.log(curr);
    },[curr])

    const containerRef = useRef<HTMLDivElement|null>(null);
   useEffect(()=>{

    function handleClick(e:MouseEvent){
         if(!containerRef.current?.contains(e.target as Node)){
            setCurr(null);
        }
    }

     document.addEventListener("click", handleClick);
    return ()=>{
        document.removeEventListener("click", handleClick);
    }
   },[]) 

    return (
        <div className= {`min-h-full w-full bg-gray-100 flex justify-center py-10 overflow-y-auto relative  `}>
            {curr !== null && (
  <div className="fixed inset-0 z-[90] backdrop-blur-lg bg-black/50"></div>
)}
        <motion.div className="flex justify-center " 
            style={{userSelect: "none"}}  ref={containerRef}
        >
            
                    {curr!=null &&  <motion.div className={`rounded-lg flex flex-col items-center absolute mx-auto mt-10 z-[100] min-h-[600px] w-100 bg-gray-50 shadow-cardShadow border-neutral-100 border-dashed border-2 `}  
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    layoutId={`card-${curr}`}>
                        <div className="mt-2 flex flex-col items-center mb-4" >
                        <motion.div className="" layoutId={`card-image-${curr}`}>
                        {curr!=null && <Image width={300} alt={"image"} src={contents[curr].photo} className={ "shadow-cardShadow rounded-xl scale-[1.1] m-5"}></Image>}
                    </motion.div>
                    <div className="px-5 ">
                        <div className="flex justify-between h-full">
                            <div>
                                <motion.div className="font-bold mx-2" layoutId={`card-title-${curr}`}>{contents[curr].title}</motion.div>
                                 <motion.div className="tracking-tight mx-2" layoutId={`card-description-${curr}`}>{contents[curr].description}</motion.div>
                            </div>
                            <div className="shadow-cardShadow flex justify-center items-center px-3 py-1 rounded-xl bg-green-400 text-gray-200 hover:scale-[1.05] active:scale-[0.95] transition-all duration-100 h-fit"
                            >Play</div>
                            
                        </div>
                        
                        <motion.div className="tracking-tight border-neutral-300 border-solid border-1 text-neutral-500 bg-neutral-200 p-2 pb-15 rounded-2xl shadow-cardShadow overflow-y-auto h-[260px] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]
"
                        initial={{filter:"blur(10px)", opacity:0}}
                        animate={{opacity:1, filter:"blur(0px)"}}
                        transition={{delay:0.3}}
                        >{contents[curr].details}</motion.div>
                    </div>
                        </div>
                    
                </motion.div>}
                
            
            
            
            <div className="flex flex-col shadow-cardShadow gap-10 m-2 p-5 bg-gray-50 rounded-lg" >
             {contents.map((content, idx)=>{
                return (
                    <Card key={idx} title={content.title} description={content.description} image={content.image}
                    curr={idx} setCurr={setCurr} ></Card>
                )
             })}   
            </div>
        </motion.div>
        </div>
    )
}


const imageclass= "rounded-xl"

const contents = [
    {
        title: "Rust Bootcamp",
        description:"Dive into the world of complex backend development",
        image: <Image  width={150} alt={"image"} src={p2} className={imageclass}></Image>,
        photo: p2,
        details:"mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing"
    },
    {
        title: "Teen Guna Lagan Lega",
        description: "Gand tod ke le lega",
        image: <Image width={150} src={p1} alt="me" className={imageclass}></Image>,
        photo: p1,
         details:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
    },
     {
        title: "Forever together",
        description: "Hope to see you till my last breath",
        image: <Image width={150} src={p3} alt="me" className={imageclass}></Image>,
        photo: p3,
         details:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    }
]