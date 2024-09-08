"use client"

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, easeInOut, useInView, AnimatePresence } from "framer-motion"
import Lenis from "lenis";
import AnimatedSection from "@/app/components/animatedsection";

import Navbar from "@/app/components/navbar";
import lagos from "@/assets/sårri.jpg"
import lagos2 from "@/assets/lagos2.jpg"
import wideimage from "@assets/wideimage.jpg"
import Name from "@/app/components/name";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [lagos, lagos2];
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

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

      
    </>
  )
}