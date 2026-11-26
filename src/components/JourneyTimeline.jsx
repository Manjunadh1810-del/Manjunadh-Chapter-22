import {motion} from 'framer-motion';import {EVENT} from '../config.js';
export default function JourneyTimeline(){return(<section className="relative z-10 px-6 py-28 max-w-3xl mx-auto">
  <h2 className="title goldtext text-3xl sm:text-5xl text-center leading-snug">22 Years.<br/>Countless Memories.<br/>Infinite Dreams.</h2>
  <ol className="relative mt-20 border-l border-champagne/30 ml-3">
    {EVENT.milestones.map((m,i)=>(<motion.li key={i} className="pl-8 pb-14 relative" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.8}}>
      <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-champagne shadow-[0_0_14px_#D4AF70]"/>
      <p className="text-champagne/70 text-sm tracking-widest">{m.when}</p><h3 className="title text-xl mt-1">{m.title}</h3><p className="text-silver/70 mt-2 leading-relaxed">{m.text}</p></motion.li>))}
  </ol></section>)}
