import {useEffect,useRef,useState} from 'react';import {motion,AnimatePresence} from 'framer-motion';import MidnightTransition from './MidnightTransition.jsx';import {EVENT} from '../config.js';
function Fireworks({on}){const ref=useRef();useEffect(()=>{if(!on)return;const c=ref.current,x=c.getContext('2d');let ps=[],raf,last=0;const R=Math.random,cols=['#D4AF70','#C9A45C','#D9D9D9','#fff'];
  const size=()=>{c.width=innerWidth;c.height=innerHeight};size();addEventListener('resize',size);
  const burst=()=>{const cx=R()*c.width,cy=R()*c.height*.55+40,n=innerWidth<640?36:60,col=cols[(R()*4)|0];for(let i=0;i<n;i++){const a=R()*6.28,v=R()*4+1.5;ps.push({x:cx,y:cy,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1,c:col})}};
  const loop=t=>{if(t-last>800){burst();last=t}x.clearRect(0,0,c.width,c.height);ps=ps.filter(p=>p.l>0);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.04;p.vx*=.985;p.l-=.011;x.globalAlpha=Math.max(p.l,0);x.fillStyle=p.c;x.fillRect(p.x,p.y,2,2)});raf=requestAnimationFrame(loop)};
  raf=requestAnimationFrame(loop);return()=>{cancelAnimationFrame(raf);removeEventListener('resize',size)}},[on]);
  return <canvas ref={ref} aria-hidden className="fixed inset-0 z-20 pointer-events-none"/>}
// stage: 0 black, 1 star, 2 explosion, 3 "wait is over", 4 title, 5 chapter 22 + continue
export default function BirthdayReveal({onDone}){
  const [stage,setStage]=useState(0);
  useEffect(()=>{if(stage===4)dispatchEvent(new Event('birthday-tune'))},[stage]);
  useEffect(()=>{const t=[[400,1],[2800,2],[4400,3],[7500,4],[11500,5]].map(([d,s])=>setTimeout(()=>setStage(s),d));return()=>t.forEach(clearTimeout)},[]);
  return(<section className="fixed inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
    <MidnightTransition stage={stage}/><Fireworks on={stage>=4}/>
    <AnimatePresence mode="wait">
      {stage===3&&<motion.h2 key="a" className="title goldtext text-3xl sm:text-6xl" initial={{opacity:0,letterSpacing:'.5em'}} animate={{opacity:1,letterSpacing:'.14em'}} exit={{opacity:0}} transition={{duration:2}}>The wait is over.</motion.h2>}
      {stage>=4&&<motion.div key="b" initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:2}}>
        <h1 className="title goldtext font-extrabold text-4xl sm:text-8xl leading-tight">Happy Birthday</h1>
        <h1 className="title text-white font-extrabold text-5xl sm:text-9xl mt-2" style={{textShadow:'0 0 40px rgba(212,175,112,.6)'}}>{EVENT.name}!</h1>
        {stage>=5&&<motion.p className="title text-champagne mt-8 text-sm sm:text-2xl" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>Welcome to Chapter {EVENT.age}.</motion.p>}
        {stage>=5&&<motion.button onClick={onDone} className="mt-10 px-8 py-3 border border-champagne/60 text-champagne tracking-[.3em] text-xs uppercase hover:bg-champagne/10" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5,duration:1.5}}>Begin Chapter {EVENT.age}</motion.button>}
      </motion.div>}
    </AnimatePresence>
    {stage<5&&<button onClick={onDone} className="fixed bottom-5 right-5 z-40 text-[10px] tracking-[.3em] text-silver/40 hover:text-silver uppercase">Skip</button>}
  </section>)}
