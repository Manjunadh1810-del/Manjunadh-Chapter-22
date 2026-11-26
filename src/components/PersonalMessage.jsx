import {motion} from 'framer-motion';import {EVENT} from '../config.js';
export default function PersonalMessage(){return(<section className="relative z-10 px-6 py-36 max-w-2xl mx-auto text-center space-y-12">
  {EVENT.message.map((l,i)=>(<motion.p key={i} className={`font-serif ${i===0?'text-2xl sm:text-3xl text-silver':'text-3xl sm:text-5xl goldtext'} leading-relaxed`} initial={{opacity:0,filter:'blur(12px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} viewport={{once:true,margin:'-100px'}} transition={{duration:1.8,delay:.2}}>{l}</motion.p>))}</section>)}
