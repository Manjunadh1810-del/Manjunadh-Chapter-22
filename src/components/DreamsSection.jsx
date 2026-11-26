import {useState} from 'react';import {motion,AnimatePresence} from 'framer-motion';import {Sparkles} from 'lucide-react';import {EVENT} from '../config.js';
export default function DreamsSection(){const [open,setOpen]=useState(null);return(<section className="relative z-10 px-6 py-28 max-w-5xl mx-auto">
  <h2 className="title goldtext text-3xl sm:text-5xl text-center">My Dreams</h2>
  <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {EVENT.dreams.map(([t,d],i)=>(<button key={t} aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)} className="text-left p-6 border border-champagne/25 bg-night/70 hover:border-champagne/70 transition-colors">
      <div className="flex items-center justify-between"><h3 className="title text-lg">{t}</h3><Sparkles size={16} className="text-champagne"/></div>
      <AnimatePresence initial={false}>{open===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="text-silver/70 overflow-hidden mt-3">{d}</motion.p>}</AnimatePresence></button>))}
  </div></section>)}
