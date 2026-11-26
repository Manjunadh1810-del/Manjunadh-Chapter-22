import {EVENT} from '../config.js';
import {motion} from 'framer-motion';import StarParticles from './StarParticles.jsx';
export default function CinematicBackground({burst,photo}){return(
  <div aria-hidden className="fixed inset-0 -z-0 bg-ink overflow-hidden">
    <motion.div className="absolute inset-[-10%]" animate={{scale:[1,1.06,1],x:[0,-12,0]}} transition={{duration:30,repeat:Infinity}}
      style={{background:'radial-gradient(60% 50% at 50% 0%,rgba(212,175,112,.18),transparent 70%),radial-gradient(40% 40% at 20% 80%,rgba(217,217,217,.06),transparent 70%)'}}/>
    {photo&&EVENT.backgroundImage&&<motion.div className="absolute inset-0 md:left-auto md:w-[62%]" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:4}}
      style={{WebkitMaskImage:'linear-gradient(to left,#000 45%,transparent)',maskImage:'linear-gradient(to left,#000 45%,transparent)'}}>
      <motion.img src={EVENT.backgroundImage} alt="" decoding="async" onError={e=>{e.currentTarget.style.display='none'}} className="w-full h-full object-cover opacity-[.32]" style={{objectPosition:'70% 15%',filter:'sepia(.35) saturate(.9) brightness(.9)'}} animate={{scale:[1,1.07,1]}} transition={{duration:40,repeat:Infinity}}/>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60"/></motion.div>}
    <motion.div className="absolute -top-20 left-1/2 w-[140%] h-[70%] -translate-x-1/2 opacity-20" animate={{rotate:[-3,3,-3]}} transition={{duration:18,repeat:Infinity}}
      style={{background:'conic-gradient(from 180deg at 50% 0%,transparent 40%,#D4AF70 48%,transparent 52%,#fff 56%,transparent 60%)',filter:'blur(30px)'}}/>
    <motion.div className="absolute bottom-0 w-full h-1/3 opacity-30" animate={{opacity:[.15,.35,.15]}} transition={{duration:12,repeat:Infinity}} style={{background:'linear-gradient(to top,rgba(201,164,92,.25),transparent)',filter:'blur(40px)'}}/>
    <StarParticles burst={burst}/>
  </div>)}
