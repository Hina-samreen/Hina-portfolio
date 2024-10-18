"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Description } from "@radix-ui/react-dialog";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: "Full-stack",
        title: "Ongoing-project",
        Description:"Eine Website für meinen Kunden, der ein E-Commerce-Geschäft (Lebensmittelladen) betreibt. Bereitgestellt über DigitalOcean und zugänglich auf 'www.rizqonline.de'. ",
        stack: [{name:"Vue js"} , {name:"Html 5"}, {name:"CSS"} , {name:"Javascript"}, {name:"Bootstrap"} , {name:"Django"}],
        image: '/assets/Projects/Project1_resized.png',
        live: "https://www.rizqonline.de",
        github:"private"
    },
    {
        num: '02',
        category: "Front-end",
        title: "Portfolio-project",
        Description:"Ein Portfolio-Projekt, um meine Fähigkeiten in React, Next Js und Tailwind CSS zu üben",
        stack: [{name:"Next js"} , {name:"Html 5"}, {name:"CSS"} , {name:"Javascript"}, {name:"Tailwind CSS"} , {name:"React"} ],
        image: '/assets/Projects/Project2_resized.png',
        live: "https://www.rizqonline.de",
        github:"https://github.com/Hina-samreen/Hina-portfolio"
    }
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }

    return ( <motion.section initial={{ opcaity:0 }}
                                animate={{ opacity:1, transition: { delay:2.4, duration:0.4, ease:"easeIn"} }}
                                className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">

                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                        <div className="w-full xl:w-[50%] xl:h-[450px] flex flex-col xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[30px]">
                                <div className="text-8xl leading-none font-extrabold text-outline">{ project.num }</div>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} projekt</h2>

                            <p className="text-whote/60">{project.Description }</p>

                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return ( <li key={index} className="text-xl text-accent">{item.name}
                                    {index !== project.stack.length -1 && ","}
                                    </li>
                                )})}

                            </ul>
                            
                            <div className="border border-white/50"></div>

                            <div className="flex items-center gap-4">
                                {/* project live */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/20 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/*Github */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/20 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                         </div>
                        
    
                        <div className="w-full xl:w-[50%]">
                            <Swiper spacebetween={30} slidesPerView={1} className="xl:h-[520px]" onSlideChange={handleSlideChange}>
                                {projects.map((project, index)=> {
                                    return( <SwiperSlide key={index} className="w-full">
                                        <div className="h-[300px] md:h-[440px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-fit" alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                               ) })}
                                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"     />
                            </Swiper>
                           
                        </div>

                           
                    </div>
                      
                </div>
             </motion.section>

    )
}
export default Work