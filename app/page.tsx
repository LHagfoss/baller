"use client"

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, easeInOut, useInView } from "framer-motion"
import Lenis from "lenis";

import Navbar from "@/components/Navbar";
import bugreport from "@/assets/bugreport.jpg"
import adrian from "@/assets/adrien.jpg"
import asks from "@/assets/balls.png"
import johnpork from "@/assets/johnpork.png"

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  if (isInView && !hasBeenSeen) {
    setHasBeenSeen(true);
  }

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

  const animationVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (
    <>
      <Navbar />
      <motion.div
            initial={{ y: 200, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ delay: 0.4, duration: 1, ease: easeInOut }}
        >
          <div className="mt-[100px] w-full h-[100vw] flex flex-col items-center">
            <div className="flex flex-col my-10">
              <h1 className="text-white text-[50px]">Hi, my name is ↴</h1>
              <h1 className="text-white text-[100px]">Lucas Hagfoss</h1>
            </div>
            <h1 className="text-white text-[100px]">Balasdls Blalasdls</h1>
            <div className="flex w-[70%] justify-around h-[20%]">
              <div className="w-[15%] h-[100%] bg-white"></div>
              <div className="w-[15%] h-[100%] bg-white"></div>
              <div className="w-[15%] h-[100%] bg-white"></div>
            </div>
            <div className="flex w-[50%] justify-around h-[20%] mx-10">
              <div className="w-[25%] h-[100%] bg-white"></div>
              <div className="w-[25%] h-[100%] bg-white"></div>
            </div>
            <h1 className="text-white text-[100px]">Balls Blasdalls</h1>
          </div>
        </motion.div>
        
        <div ref={ref}>
          <motion.div
            initial="hidden"
            animate={hasBeenSeen ? "visible" : "hidden"}
            transition={{ delay: 0.5, }}
            variants={animationVariants}
          >
            <div className="w-full flex justify-center items-center">
              <div className="w-[65vw] h-[65vw] grid grid-rows-5 grid-cols-10 gap-5">
                <div className="col-span-6 row-span-2 bg-gradient-to-t from-[#3f4b67] to-[#2b3246] rounded-[2vw] p-5 flex">
                  <div className="flex-1 px-5 py-20 flex flex-col">
                    <div className="h-[100%] flex flex-col justify-center">
                      <div className="text-white">John Pork</div>
                      <div className="text-[#99bcfe] text-[20px] font-medium">John Pork is a 20-something year old guy who loves to eat pork.</div>
                    </div>
                  </div>
                  <div className="flex-[1.5] flex justify-center items-center"><Image src={johnpork} alt="" className="shadow-2xl rounded-[1vw] w-full h-full"></Image></div>
                </div>
                <div className="col-span-4 row-span-2 bg-gradient-to-t from-[#17181a] to-[#1d1e22] rounded-[2vw]"></div>
                <div className="col-span-5 row-span-2 bg-gradient-to-t from-[#17181a] to-[#1d1e22] rounded-[2vw] flex justify-around flex-col p-10">
                  <div className="flex-[1.5] flex justify-center items-center"><Image src={adrian} alt="" className="shadow-2xl rounded-[1vw] w-full border border-[#444444] object-cover"></Image></div>
                  <div className="flex-1">
                    <div className="text-[#99bcfe]">Automation Triggers</div>
                    <div className="text-white text-[20px] font-medium">Turn any message into an Ask simply by using an emoji.</div>
                  </div>
                </div>
                <div className="col-span-5 row-span-2 bg-gradient-to-t from-[#17181a] to-[#1d1e22] rounded-[2vw] flex justify-around flex-col p-10">
                  <div className="flex-[1.5] flex justify-center items-center"><Image src={asks} alt="" className="drop-shadow-2xl rounded-[1vw] w-full object-cover"></Image></div>
                  <div className="flex-1">
                    <div className="text-[#99bcfe]">Instant Updates</div>
                    <div className="text-white text-[20px] font-medium">Get notified about comments and status updates directly in Slack.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="w-[65vw] h-[65vw] grid grid-rows-5 grid-cols-10 gap-5">
            <div className="col-span-4 row-span-2 bg-gradient-to-t from-[#3f4b67] to-[#2b3246] rounded-[2vw] p-5 flex">

            </div>
            <div className="col-span-6 row-span-2 bg-gradient-to-t from-[#17181a] to-[#1d1e22] rounded-[2vw]"></div>
            <div className="col-span-5 row-span-2 bg-gradient-to-t from-[#17181a] to-[#1d1e22] rounded-[2vw] flex justify-around flex-col p-10">

            </div>
            <div className="col-span-5 row-span-2 bg-gradient-to-t from-[#17181a] to-[#1d1e22] rounded-[2vw] flex justify-around flex-col p-10">
              
            </div>
          </div>
        </div>
    </>
  )
}