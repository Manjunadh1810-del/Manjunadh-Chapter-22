import {motion} from 'framer-motion';
// Stage visuals: fade to black, tiny star, expanding light explosion.
export default function MidnightTransition({stage}){return(<div aria-hidden className="fixed inset-0 z-30 pointer-events-none">
  <motion.div className="absolute inset-0 bg-ink" initial={{opacity:0}} animate={{opacity:stage>=3?0:1}} transition={{duration:stage>=3?2:2.5}}/>
  {stage>=1&&stage<3&&<motion.div className="absolute left-1/2 top-1/2 rounded-full bg-white -translate-x-1/2 -translate-y-1/2" initial={{width:2,height:2,opacity:0}}
    animate={stage===1?{width:6,height:6,opacity:1,boxShadow:'0 0 20px 6px #D4AF70'}:{width:2400,height:2400,opacity:[1,1,0],boxShadow:'0 0 200px 120px #D4AF70'}} transition={{duration:stage===1?2:2.2,ease:'easeIn'}}/>}
</div>)}
