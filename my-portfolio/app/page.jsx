import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Link from "next/link"
import Stats from "@/components/Stats";

const Home = () => {
 


  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Masterstudentin, Front-end-Enthusiastin, Full Stack Entwicklerin(Freelancer) </span>
            <h1 className="h2 mb-6">
              Hallo Ich bin <br/><span className="text-accent h1">Hina Samreen</span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white">
            Ich mache seit 2021 meinen Master in Informatik an der Universität Hamburg in Deutschland, nachdem ich 3 Jahre lang als Software-Tester in Indien gearbeitet habe. Als Masterstudentin habe ich ein Praktikum absolviert und in Teilzeit gearbeitet, um praktische Erfahrungen im Bereich Data Engineering und Front-End-Entwicklung zu sammeln.
            </p>
          
          <div className="flex flex-col xl:flex-row items-center gap-8">
          <Link size="lg" className="uppercase flex items-center gap-2 border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary p-4 inline-flex items-center justify-center whotespace-npwrap rounded-full text-base font-sembold ring-offset-white transition-colors" href={'/assets/Resume/Lebenslauf.pdf'} target="_blank" rel="noopener noreferrer" locale={false} download="Lebenslauf_HinaSamreen.pdf">
          CV herunterladen
              <FiDownload className="text-xl"></FiDownload>
            </Link>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary
                                        hover:transition-all duration-500"/>
            </div>
          </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo/></div>

        </div>
      </div>

    </section>
    
  );
};

export default Home;
