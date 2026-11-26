import {useEffect,useMemo,useState} from 'react';import {motion} from 'framer-motion';import {EVENT} from './config.js';
import CinematicBackground from './components/CinematicBackground.jsx';import BirthdayLogo from './components/BirthdayLogo.jsx';import CountdownTimer from './components/CountdownTimer.jsx';
import BirthdayReveal from './components/BirthdayReveal.jsx';import JourneyTimeline from './components/JourneyTimeline.jsx';import PersonalMessage from './components/PersonalMessage.jsx';
import DreamsSection from './components/DreamsSection.jsx';import MemoryGallery from './components/MemoryGallery.jsx';import FinalSurprise from './components/FinalSurprise.jsx';import AudioController from './components/AudioController.jsx';
const TARGET=Date.parse(EVENT.birthdayISO);
// DEV-ONLY test mode: http://localhost:5173/?sim=before | now | after. Only shifts the clock; EVENT is never touched. Ignored in production builds.
function simOffset(){if(!import.meta.env.DEV)return 0;const s=new URLSearchParams(location.search).get('sim');
  return s==='before'?TARGET-3600e3-Date.now():s==='now'?TARGET-8e3-Date.now():s==='after'?TARGET+86400e3-Date.now():0}
export default function App(){
  const off=useMemo(simOffset,[]),sim=import.meta.env.DEV&&new URLSearchParams(location.search).get('sim');
  const [now,setNow]=useState(()=>Date.now()+off),[done,setDone]=useState(false);
  useEffect(()=>{const t=setInterval(()=>setNow(Date.now()+off),250);return()=>clearInterval(t)},[off]);
  const born=now>=TARGET,phase=!born?'wait':done?'journey':'reveal';
  return(<main className="min-h-screen relative">
    <CinematicBackground burst={phase==='reveal'} photo={phase==='wait'}/><AudioController/>
    {import.meta.env.DEV&&<div className="fixed bottom-2 left-2 z-50 text-[10px] text-silver/40">TEST: ?sim=before|now|after {sim&&`(active: ${sim})`}</div>}
    {phase==='wait'&&(<section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 gap-8">
      <motion.p className="text-xs sm:text-sm tracking-[.4em] text-silver/70 uppercase" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>A new chapter is about to begin.</motion.p>
      <motion.h1 className="title goldtext font-extrabold text-5xl sm:text-9xl" initial={{opacity:0,scale:1.08}} animate={{opacity:1,scale:1}} transition={{duration:3}}>{EVENT.name}</motion.h1>
      <BirthdayLogo/><p className="title text-xs sm:text-base text-champagne/80">{EVENT.age} years of life. Countless possibilities.</p>
      <div className="mt-6"><p className="text-[10px] sm:text-xs tracking-[.4em] text-silver/50 mb-6 uppercase">Countdown to the moment</p><CountdownTimer now={now} target={TARGET}/></div></section>)}
    {phase==='reveal'&&<BirthdayReveal onDone={()=>setDone(true)}/>}
    {phase==='journey'&&<><JourneyTimeline/><PersonalMessage/><DreamsSection/><MemoryGallery/><FinalSurprise/></>}
  </main>)}
