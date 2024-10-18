"use client";

import  { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import  React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Select, SelectContent, SelectGroup, SelectITem, SelectLabel,SelectTrigger } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "0176 73507665"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "hinasamreen541@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Erich-Ziegel-Ring 3, 22309, Hamburg"
    },
  
]

import { motion } from "framer-motion";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ycfey9h','template_slxkmyx',form.current, {publicKey:'Joz-oPh1z5xCcaDCu',})
        .then(() => {
            console.log('SUCCESS!');

        },
    (error) => {
        console.log('FAILED..', error.text);
    })
    }

    return (<motion.section initial={{ opcaity:0 }}
        animate={{ opacity:1, transition: { delay:2.4, duration:0.4, ease:"easeIn"} }} className="py-6">

            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#A48AA8] rounded-xl">
                            <h3 className="text-4xl text-accent"> Kontaktieren Sie mich für ein Interview! </h3>
                            <p className="text-white/60">Interessiert an meinem Profil? Ich freue mich auf ein Gespräch mit Ihnen, um gemeinsam mehr zu entdecken!</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Vorname*" name="user_name" required/>
                                <Input type="lastname" placeholder="Nachname*" name="user_lastname" />
                                <Input type="email" placeholder="Email*" name="user_email" required/>
                                <Input type="phone" placeholder="Mobil"/>
                                
                            </div>
                            <Textarea className="h-[200px]" placeholder="Geben Sie hier Ihre Nachricht ein. *" name="message" required></Textarea>
                            <Button type="submit" size="md" className="max-w-60 center" value="send">Nachricht senden</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (<li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#A48AA8] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                </li>);
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>

    )
}
export default Contact