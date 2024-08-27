import React from 'react';
import { motion, useInView, easeInOut, easeIn } from 'framer-motion';


export default function Name() {

  return (
    <div className='flex gap-2'>
        <div className="flex">
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 1.5, ease: easeInOut}} className="text-white text-[5vw]" >L</motion.div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 1.6, ease: easeInOut}} className="text-white text-[5vw]" >u</motion.div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 1.7, ease: easeInOut}} className="text-white text-[5vw]" >c</motion.div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 1.8, ease: easeInOut}} className="text-white text-[5vw]" >a</motion.div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 1.9, ease: easeInOut}} className="text-white text-[5vw]" >s</motion.div>
        </div>
        <div className="flex">
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 2, ease: easeInOut}} className="text-white text-[5vw]" >H</motion.div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 2.1, ease: easeInOut}} className="text-white text-[5vw]" >a</motion.div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 2.2, ease: easeInOut}} className="text-white text-[5vw]" >g</motion.div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 2.3, ease: easeInOut}} className="text-white text-[5vw]" >f</motion.div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 2.4, ease: easeInOut}} className="text-white text-[5vw]" >o</motion.div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 2.5, ease: easeInOut}} className="text-white text-[5vw]" >s</motion.div>
            <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{ delay: 2.6, ease: easeInOut}} className="text-white text-[5vw]" >s</motion.div>
        </div>
    </div>
  );
};
