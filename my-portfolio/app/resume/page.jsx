"use client";

import { FaHtml5, FaCss3, FaJs, FaVuejs, FaNextJs, FaBootstrap,  } from "react-icons/fa";

import { SiDjango } from "react-icons/si"

const about = {
    title: "Über mich!",
    description: "Ich mache seit 2021 meinen Master in Informatik an der Universität Hamburg in Deutschland, nachdem ich 3 Jahre lang als Software-Tester in Indien gearbeitet habe. Als Masterstudentin habe ich ein Praktikum absolviert und in Teilzeit gearbeitet, um praktische Erfahrungen im Bereich Data Engineering und Front-End-Entwicklung zu sammeln. Derzeit arbeite ich auch an einer realen Website für meinen Kunden für sein E-Commerce-Geschäft. Die Verarbeitung natürlicher Sprache war ebenfalls ein wichtiger Bereich meines Masterstudiums. Die Masterarbeit, an der ich derzeit arbeite, basiert auf der Stimmungsanalyse von deutschen Texten.",
    info: [ 
        {
        fieldName: "Name",
        fieldValue:"Hina Samreen"
    },
    {
        fieldName: "Telefon",
        fieldValue:"+49 176 73507665"
    },
    {
        fieldName: "BerufsErfahrung",
        fieldValue:"3+ Years"
    },
    {
        fieldName: "Email",
        fieldValue:"hinasamreen541@gmail.com"
    },
    {
        fieldName: "Sprachen",
        fieldValue:"English , German(B2)"
    },

    ]
}

const experience = {
    icon: "/assets/resume/icons/badge.svg",
    title: "Meine Berufserfahrung",
    description: "",
    items: [ 
        {
            company: "Rizq Markt",
            position: "Freelancerin - Full-Stack Entwicklung",
            duration: "Juli 2024 - Aktuell"
        },
        {
            company: "OTTO Group data.works",
            position: "Werkstudentin - Data Engineering und Front-end Entwicklung",
            duration: "Aug 2023 - Feb 2024"
        },
        {
            company: "OTTO Group data.works",
            position: "Pratikantin - Data Engineering und Front-end Entwicklung",
            duration: "Okt 2022 - März 2023"
        },
        {
            company: "Infosys Ltd.",
            position: "Software Test Ingineurin",
            duration: "Dez 2015 - Okt 2018"
        },

    ]
}

const education = {
    icon: "/assets/resume/icons/hat.svg",
    title: "Mein Studium",
    description: "",
    items: [ 
        {
            instituition: "Universität Hamburg",
            degree: "Master of Science - Informatik",
            duration: "Apr 2021 - Aktuell"
        },
        {
            instituition: "Volkshochschule und Tandem (Hamburg)",
            degree: "Deutscher Sprachkurs – C1",
            duration: "März 2019 - Nov 2020"
        },
        {
            instituition: "Infosys Limited. (Mysore, Indien)",
            degree: "Training in Data Warehouse Testing ",
            duration: "Juli 2015 – Dez 2015"
        },
        {
            instituition: "Jawaharlal Nehru Technological University (Kakinada, India)",
            degree: "Bachelors in computer science",
            duration: "Juni 2011 – Apr 2015"
        },

    ]
}

const skills = {
    icon: "/assets/resume/icons/badge.svg",
    title: "Meine Fähigkeiten",
    description: "",
    skillList: [ 
        {
            icon:<FaHtml5 /> ,
            name: "html 5"
        },
        {
            icon: <FaCss3 /> ,
            name: "css 3"
        },
        {
            icon:<FaJs /> ,
            name: "javascript"
        },
        {
            icon:<FaVuejs /> ,
            name: "vue Js"
        },
        {
            icon:<FaBootstrap /> ,
            name: "Bootstrap"
        },
        {
            icon:<SiDjango /> ,
            name: "Django"
        },

    ]
};

import  { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Resume = () => {
    return <motion.div initial={{ opacity:0 }}
                        animate= {{
                                    opacity:1,
                                    transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }} 
                        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 ">
                <div className="container mx-auto">
                    <Tabs defaultValue="experience"
                        className="flex flex-col xl:flex-row gap-[60px]">
                            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                                <TabsTrigger value="experience">Berufserfahrung</TabsTrigger>
                                <TabsTrigger value="education">Studium</TabsTrigger>
                                <TabsTrigger value="skills">Technische Fähigkeiten</TabsTrigger>
                                <TabsTrigger value="about">Über mich</TabsTrigger>
                            </TabsList>

                            <div className="min-h-[70vh] w-full">
                                <TabsContent value="experience" className="w-full">
                                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{ experience.title }</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                            { experience.description }
                                        </p>
                                        <ScrollArea className="h-[400px]">
                                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"> { experience.items.map((item, index) => {
                                                return (
                                                <li key={index} className="bg-[#A48AA8] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent"> { item.duration }</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[90px] text-center lg:text-left"> { item.position } </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span  className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                                );
                                                })}
                                            </ul> 
                                            
                                        </ScrollArea>
                                    </div>
                                </TabsContent>
                                <TabsContent value="education" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{ education.title }</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                            { education.description }
                                        </p>
                                        <ScrollArea className="h-[550px]">
                                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]"> { education.items.map((item, index) => {
                                                return (
                                                <li key={index} className="bg-[#A48AA8] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent"> { item.duration }</span>
                                                    <h3 className="text-xl max-w-[460px] min-h-[70px] text-center lg:text-left"> { item.degree } </h3>
                                                    <div className="flex items-center gap-8">
                                                        <span  className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 max-w-[460px]">{item.instituition}</p>
                                                    </div>
                                                </li>
                                                );
                                                })}
                                            </ul> 
                                            
                                        </ScrollArea>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills" className="w-full">
                                    <div className="flex flex-col gap-[30px]">
                                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                            <h3 className="text-4xl font-bold">{ skills.title } </h3>
                                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{ skills.description }</p>
                                        </div>
                                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">{skills.skillList.map((skill, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#A48AA8] rounded-xl flex justify-center items-center group ">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{ skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="capitalize"><p>{ skill.name } </p></TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider></li>;
                                        })}
                                        </ul>
                                    </div>
                                </TabsContent>
                                <TabsContent value="about" className="w-full">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold">{about.title}</h3>
                                        <p>{about.description}</p>
                                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">{about.info.map((item, index) => {
                                            return (<li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl font-bold">{item.fieldValue}</span>
                                            </li>
                                            ) } ) }</ul>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                </div>
            </motion.div>

    
}
export default Resume