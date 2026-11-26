import {motion} from 'framer-motion';import {EVENT} from '../config.js';
export default function FinalSurprise(){return(<section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 py-28">
  <motion.p className="title text-xl sm:text-4xl leading-relaxed max-w-3xl" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:2}}>This is not just another birthday.</motion.p>
  <motion.p className="title goldtext text-2xl sm:text-5xl mt-8 leading-relaxed max-w-4xl" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:2,delay:1.6}}>It is the beginning of something greater.</motion.p>
  <motion.p className="title text-champagne mt-20 text-lg sm:text-3xl" style={{textShadow:'0 0 30px #D4AF70'}} initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:2,delay:3.8}}>Chapter {EVENT.age} — Unlocked.</motion.p></section>)}
