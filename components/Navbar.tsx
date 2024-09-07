import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { cubicBezier, easeIn, easeInOut, motion, spring, useSpring } from "framer-motion"
import Lenis from "lenis";
import Link from "next/link";

import linearLogo from "@assets/logo-light.png"

export default function Navbar() {

    
    return (
        <motion.div
            initial = {{ y: 200, opacity: 0}}
            animate = {{ y: 0, opacity: 1}}
            transition = {{ duration: 1, ease: easeInOut }}
            className="navbar fixed top-0 w-full h-[100px] flex justify-center items-center"
        >
            <div className="w-[70vw] flex justify-between items-center bg-[#0000004d] border border-[#444444] rounded-[15px] px-5 p-2 backdrop-blur-lg">
                <Link href="/" className="text-[#cecece] hover:text-white font-medium text-[13px] p-2 flex justify-center items-start"><Image src={linearLogo} alt="" className="w-[18px] mr-2"></Image>LHagfoss</Link>
                <Link href="/work" className="text-[#cecece] hover:text-white font-medium text-[13px] p-2 flex justify-center items-start">Projects / Work <span className="p-1 text-[7px]"> ( 8 ) </span></Link>
                <Link href="/" className="text-[#cecece] hover:text-white font-medium text-[13px] p-2 flex justify-center items-start">Contact / Message</Link>
                <Link href="/" className="text-[#cecece] hover:text-white font-medium text-[13px] p-2 flex justify-center items-start">About / Info</Link>
                <Link href="/" className="text-[#cecece] hover:text-white font-medium text-[13px] p-2 flex justify-center items-start">Contact / Message</Link>
                <Link href="/" className="text-[#cecece] hover:text-white font-medium text-[13px] p-2 flex justify-center items-start">Pricing</Link>
                <Link href="/" className="text-[#cecece] hover:text-white font-medium text-[13px] p-2 flex justify-center items-start">Customers <span className="p-1 text-[7px]"> ( +99 ) </span></Link>
                <Link href="/" className="text-[#cecece] hover:text-white font-medium text-[13px] p-2 flex justify-center items-start">Other</Link>
                <div className="flex gap-5">
                    <button type="button" className="text-[#cecece] font-medium hover:text-white text-[13px] flex justify-center items-center gap-2 bg-[#232323] px-2 rounded-[8px] h-[35px]"><span className="pl-2">Log in</span> <span className="bg-[#444444] px-1.5 aspect-square rounded-[4px] flex justify-center items-center text-[10px]">L</span></button>
                    <button type="button" className="text-[#090a0a] font-medium text-[13px] flex justify-center items-center gap-2 bg-white px-2 rounded-[8px] h-[35px]"><span className="px-2">Sign up</span></button>
                </div>
                </div>
        </motion.div>
    )
}