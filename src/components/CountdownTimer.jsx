import {AnimatePresence,motion} from 'framer-motion';import {calendarDiff} from '../calendarDiff.js';
const pad=n=>String(n).padStart(2,'0');
function Digit({v}){return <span className="relative inline-block h-[1.1em] overflow-hidden"><AnimatePresence mode="popLayout" initial={false}>
  <motion.span key={v} className="inline-block" initial={{y:'-100%',opacity:0}} animate={{y:0,opacity:1}} exit={{y:'100%',opacity:0}} transition={{duration:.45,ease:'easeOut'}}>{v}</motion.span></AnimatePresence></span>}
export default function CountdownTimer({now,target}){
  const d=calendarDiff(now,target),parts=[['Months',d.months],['Days',d.days],['Hours',d.hours],['Minutes',d.minutes],['Seconds',d.seconds]];
  return(<div role="timer" aria-label={parts.map(([l,v])=>v+' '+l).join(', ')+' remaining'} className="flex items-start justify-center gap-1 sm:gap-5">
    {parts.map(([l,v],i)=>(<div key={l} className="flex items-start gap-1 sm:gap-5">
      <div className="text-center"><div className="title goldtext text-[clamp(1.6rem,8vw,4.5rem)] font-semibold tabular-nums">{pad(v).split('').map((c,k)=><Digit key={l+k} v={c}/>)}</div>
        <div className="mt-2 text-[clamp(.5rem,2.2vw,.75rem)] tracking-[.12em] sm:tracking-[.3em] text-silver/60 uppercase">{l}</div></div>
      {i<4&&<span className="title text-[clamp(1.4rem,6vw,3.5rem)] text-champagne/40 leading-[1.2]">:</span>}</div>))}</div>)}
