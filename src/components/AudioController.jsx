import {useRef,useState,useEffect} from 'react';import {Volume2,VolumeX,Music} from 'lucide-react';import {EVENT} from '../config.js';import {playBirthdayTune} from '../birthdayTune.js';import {startAmbient} from '../ambientMusic.js';
// Starts only after a click. Background = EVENT.music.src if set, else built-in soft music.
// The Happy Birthday tune plays at the reveal (if sound was switched on first); background ducks under it.
export default function AudioController(){
  const [on,setOn]=useState(false),[muted,setMuted]=useState(false),[vol,setVol]=useState(EVENT.music.volume),[err,setErr]=useState(false);
  const el=useRef(),ctx=useRef(),amb=useRef(),master=useRef(),onRef=useRef(false);
  const start=async()=>{try{
    const A=new (window.AudioContext||window.webkitAudioContext)();await A.resume();
    const m=A.createGain();m.gain.value=vol;m.connect(A.destination);ctx.current=A;master.current=m;
    if(EVENT.music.src){el.current.volume=vol;await el.current.play()}else amb.current=startAmbient(A,m);
    onRef.current=true;setOn(true)}catch{setErr(true)}};
  useEffect(()=>{const v=muted?0:vol;if(el.current)el.current.volume=v;if(master.current)master.current.gain.value=v},[vol,muted]);
  useEffect(()=>{const h=()=>{if(!onRef.current||EVENT.birthdayTune===false)return;amb.current?.duck(true);if(el.current)el.current.volume=Math.min(el.current.volume,.3);
    playBirthdayTune(ctx.current,master.current);setTimeout(()=>{amb.current?.duck(false);if(el.current)el.current.volume=muted?0:vol},15500)};
    addEventListener('birthday-tune',h);return()=>removeEventListener('birthday-tune',h)},[muted,vol]);
  return(<div className="fixed top-4 right-4 z-40 flex items-center gap-3 bg-black/50 backdrop-blur px-3 py-2 border border-champagne/30 text-champagne">
    {EVENT.music.src&&<audio ref={el} src={EVENT.music.src} loop preload="none" onError={()=>setErr(true)}/>}
    {!on?<button onClick={start} disabled={err} aria-label="Activate sound" className="flex items-center gap-2 text-[11px] tracking-[.25em] uppercase"><Music size={16}/>{err?'Sound unavailable':'Sound on'}</button>:
    <><button onClick={()=>setMuted(!muted)} aria-label={muted?'Unmute':'Mute'}>{muted?<VolumeX size={18}/>:<Volume2 size={18}/>}</button>
    <input type="range" min="0" max="1" step=".05" value={vol} onChange={e=>setVol(+e.target.value)} aria-label="Volume" className="w-20 accent-[#D4AF70]"/></>}</div>)}
