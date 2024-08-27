"use client"

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, easeInOut, useInView } from "framer-motion"
import Lenis from "lenis";
import AnimatedSection from "@/components/AnimatedSection";

import Navbar from "@/components/Navbar";
import lagos from "@/assets/sårri.jpg"
import lagos2 from "@/assets/lagos2.jpg"
import wideimage from "@assets/wideimage.jpg"

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [lagos, lagos2];
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
      window.scrollTo(0, 0);
      const lenis = new Lenis()
      lenisRef.current = lenis;
      
      function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      return () => {
          lenis.destroy();
      }
  }, [])

  return (
    <>
      <Navbar />
      
      <motion.div
            initial={{ y: 200, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ delay: 0.4, duration: 1, ease: easeInOut }}
        >
          <div className="w-[100vw] h-[100vh] flex justify-center items-center mb-10">
            <div className="w-[65vw] h-[65vw] flex justify-between items-center">
                <div className="flex flex-col">
                  <h1 className="text-white text-[50px]">Hei, mitt navn er ↴</h1>
                  <h1 className="text-white text-[100px]">Lucas Hagfoss</h1>
                  <h1 className="text-white text-[30px]">Jeg er en UI / UX designer fra Norge</h1>
                </div>
                <Image src={images[currentImageIndex]} alt="" className="w-[30vw] h-[30vw] object-cover rounded-full" />
            </div>
          </div>
        </motion.div>

        <div className="w-full flex justify-center items-center">
          <div className="w-[65vw] h-[1px] bg-white"></div>
        </div>

        <AnimatedSection>
            <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="w-[65vw] h-[30vw] flex justify-center items-center relative">
              <div className="absolute z-10 text-[100px] text-white mix-blend-difference">
                2 ITA Tangen. VGS
              </div>
              <Image src={wideimage} alt="" className="object-cover w-full rounded-[1vw]" />
            </div>
            </div>
          </AnimatedSection>
        
        <AnimatedSection>
            <div className="w-[100vw] h-[100vh] flex justify-center items-center">
              <div className="w-[65vw] h-[65vw] flex flex-col gap-3 text-center">
                <h1 className="text-white p-20 text-[35px] bg-[#222] rounded-[1vw] border-2 border-[#333]">Jeg er en UI / UX designer fra Norge</h1>
                <div className="flex gap-3">
                  <div className="w-full p-20 text-center text-white text-[25px] bg-[#222] border-2 border-[#333] rounded-[1vw]">
                    Om meg som UI/UX-designer
                    Som UI/UX-designer er jeg lidenskapelig opptatt av å skape intuitive og engasjerende 
                    digitale opplevelser. Med min kreative tilnærming og tekniske kompetanse, streber jeg 
                    etter å lage brukergrensesnitt som ikke bare ser estetisk tiltalende ut, men også 
                    fungerer sømløst. Jeg legger stor vekt på brukervennlighet og tilgjengelighet i alle 
                    mine prosjekter, og jobber kontinuerlig med å holde meg oppdatert på de nyeste 
                    trendene og teknologiene innen feltet. Min målsetting er å designe løsninger som 
                    forenkler og beriker menneskers digitale hverdag.
                  </div>
                  <div className="w-full p-20 text-center text-white text-[25px] bg-[#222] border-2 border-[#333] rounded-[1vw]">
                    Om meg som UI/UX-designer
                    Som UI/UX-designer er jeg lidenskapelig opptatt av å skape intuitive og engasjerende 
                    digitale opplevelser. Med min kreative tilnærming og tekniske kompetanse, streber jeg 
                    etter å lage brukergrensesnitt som ikke bare ser estetisk tiltalende ut, men også 
                    fungerer sømløst. Jeg legger stor vekt på brukervennlighet og tilgjengelighet i alle 
                    mine prosjekter, og jobber kontinuerlig med å holde meg oppdatert på de nyeste 
                    trendene og teknologiene innen feltet. Min målsetting er å designe løsninger som 
                    forenkler og beriker menneskers digitale hverdag.
                  </div>
                </div>
                <div className="w-full p-20 text-center text-white text-[25px] bg-[#222] border-2 border-[#333] rounded-[1vw]">
                  Om meg som UI/UX-designer
                  Som UI/UX-designer er jeg lidenskapelig opptatt av å skape intuitive og engasjerende 
                  digitale opplevelser. Med min kreative tilnærming og tekniske kompetanse, streber jeg 
                  etter å lage brukergrensesnitt som ikke bare ser estetisk tiltalende ut, men også 
                  fungerer sømløst. Jeg legger stor vekt på brukervennlighet og tilgjengelighet i alle 
                  mine prosjekter, og jobber kontinuerlig med å holde meg oppdatert på de nyeste 
                  trendene og teknologiene innen feltet. Min målsetting er å designe løsninger som 
                  forenkler og beriker menneskers digitale hverdag.
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="w-[100vw] h-[100vh] flex justify-center items-center">
              <div className="w-[65vw] h-[65vw] flex flex-col gap-3 text-center">
              <h1 className="text-white p-10 text-[35px] bg-[#222] rounded-[1vw] border-2 border-[#333]">Mine Interesser</h1>
              <div className="flex gap-3">
                <div className="w-full p-10 text-white text-[25px] bg-[#222] border-2 border-[#333] rounded-[1vw] flex flex-col items-start">
                  <div className="text-white text-[30px]">Ting jeg liker</div>
                  <ul className="flex flex-col items-start list-disc p-10">
                    <li className="">Gaming</li>
                    <li>Piano</li>
                    <li>Glad i UI / UX</li>
                    <li>Elsker å kode / designe frontend</li>
                    <li>Elsker å lære nye ting ( spesielt nye verktøy )</li>
                    <li>E-Sport innen <span className="underline">VALORANT</span></li>
                  </ul>
                </div>
                <div className="w-full p-10 text-white text-[25px] bg-[#222] border-2 border-[#333] rounded-[1vw] flex flex-col items-start">
                  <div className="text-white text-[30px]">Ting jeg kan innnen UI / UX</div>
                  <ul className="flex flex-col items-start list-disc p-10">
                    <li>React.js</li>
                    <li>Next.js ( Foretrekker dette )</li>
                    <li>TypeScript, TailwindCSS</li>
                    <li>Vanilla HTML, CSS, JavaScript</li>
                    <li>Litt Three.js</li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="w-[100vw] h-[100vh] flex justify-center items-center">
              <div className="w-[65vw] h-[65vw] flex flex-col gap-3 text-center">
                <h1 className="text-white p-20 text-[35px] bg-[#222] rounded-[1vw] border-2 border-[#333]">Jeg er en UI / UX designer fra Norge</h1>
                <div className="flex gap-3">
                  <div className="w-full p-20 text-center text-white text-[25px] bg-[#222] border-2 border-[#333] rounded-[1vw]">
                    Som UI/UX-designer er jeg lidenskapelig opptatt av å skape 
                    intuitive og engasjerende digitale opplevelser. Med min kreative tilnærming 
                    og tekniske kompetanse, streber jeg etter å lage brukergrensesnitt som ikke 
                    bare ser estetisk tiltalende ut, men også fungerer sømløst. Jeg legger stor 
                    vekt på brukervennlighet og tilgjengelighet i alle mine prosjekter, og jobber 
                    kontinuerlig med å holde meg oppdatert på de nyeste trendene og teknologiene 
                    innen feltet. Min målsetting er å designe løsninger som forenkler og beriker 
                    menneskers digitale hverdag.
                  </div>
                  <div className="w-full p-20 text-center text-white text-[25px] bg-[#222] border-2 border-[#333] rounded-[1vw]">
                    Som UI/UX-designer er jeg lidenskapelig opptatt av å skape 
                    intuitive og engasjerende digitale opplevelser. Med min kreative tilnærming 
                    og tekniske kompetanse, streber jeg etter å lage brukergrensesnitt som ikke 
                    bare ser estetisk tiltalende ut, men også fungerer sømløst. Jeg legger stor 
                    vekt på brukervennlighet og tilgjengelighet i alle mine prosjekter, og jobber 
                    kontinuerlig med å holde meg oppdatert på de nyeste trendene og teknologiene 
                    innen feltet. Min målsetting er å designe løsninger som forenkler og beriker 
                    menneskers digitale hverdag.
                  </div>
                </div>
                <div className="w-full p-20 text-center text-white text-[25px] bg-[#222] border-2 border-[#333] rounded-[1vw]">
                  Som UI/UX-designer er jeg lidenskapelig opptatt av å skape 
                  intuitive og engasjerende digitale opplevelser. Med min kreative tilnærming 
                  og tekniske kompetanse, streber jeg etter å lage brukergrensesnitt som ikke 
                  bare ser estetisk tiltalende ut, men også fungerer sømløst. Jeg legger stor 
                  vekt på brukervennlighet og tilgjengelighet i alle mine prosjekter, og jobber 
                  kontinuerlig med å holde meg oppdatert på de nyeste trendene og teknologiene 
                  innen feltet. Min målsetting er å designe løsninger som forenkler og beriker 
                  menneskers digitale hverdag.
                </div>
              </div>
            </div>
          </AnimatedSection>
    </>
  )
}