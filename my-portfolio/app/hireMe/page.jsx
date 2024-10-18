import React from 'react'

import { MdOutlineContactMail } from "react-icons/md";

const HireME = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none l:w-[2300px] ">
                        <h1 className="h3 mb-6 text-accent flex justify-center mt-4 l:mt-0">Warum Ich? </h1>
                        <div className="flex flex-col gap-6 p-10 bg-[#A48AA8] rounded-xl">
                            <ul>
                                <li><span className='h4 font-bold text-accent'>Lernbereitschaft:</span> Ich bin stets bereit, neue Technologien und Ansätze zu erlernen, um mein Wissen und meine Fähigkeiten kontinuierlich zu erweitern.</li>
                                <li><span className='h4 font-bold text-accent'>Enthusiasmus:</span> Mit großer Begeisterung und Leidenschaft gehe ich an Projekte heran, was mich motiviert, immer mein Bestes zu geben.</li>
                                <li><span className='h4 font-bold text-accent'>Neugier:</span> Ich bin neugierig und hinterfrage gerne, um tiefere Einblicke in komplexe Probleme zu bekommen und innovative Lösungen zu finden.</li>
                                <li><span className='h4 font-bold text-accent'>
                                    Team- und Einzelarbeit:</span> Sowohl im Team als auch eigenständig arbeite ich gerne und effektiv, wobei ich in jeder Umgebung einen Mehrwert biete.</li>
                                <li><span className='h4 font-bold text-accent'>Agile Arbeitsweise:</span> Ich bin mit agilen Methoden vertraut und schätze iterative Prozesse, regelmäßige Feedbackschleifen und die dynamische Anpassung an neue Anforderungen.</li>
                            </ul>
                        </div>
                        
                    
                    </div>
                    <div className="lex flex-col xl:flex-row items-center gap-8 ms-4 mt-4 order-2 l:order-none">
                        <h1 className="h3 mb-6 text-accent flex justify-end mt-4  ">Interessiert an meinem Profil? Ich freue mich auf ein Gespräch mit Ihnen, um gemeinsam mehr zu entdecken! </h1> 
                        <a href="/contact" className="uppercase flex items-center gap-2 border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary p-4 inline-flex items-center justify-center 
                                                      whitespace-npwrap rounded-full text-base font-sembold ring-offset-white transition-colors" >
                            Mich Kontaktieren 
                            <MdOutlineContactMail className='text-xl' /> 
                        </a> 
                    </div>
                    
            </div>
       </div>
    </section>
  )
}

export default HireME