import {useEffect,useRef} from 'react';
export default function StarParticles({burst=false}){
  const ref=useRef();
  useEffect(()=>{
    const c=ref.current,x=c.getContext('2d');let w,h,raf,dpr=Math.min(devicePixelRatio||1,2);
    const small=innerWidth<640;
    const size=()=>{w=c.width=innerWidth*dpr;h=c.height=innerHeight*dpr};size();addEventListener('resize',size);
    const R=Math.random,stars=Array.from({length:small?70:150},()=>({x:R(),y:R(),r:R()*1.4+.3,p:R()*6})),
    dust=Array.from({length:small?25:55},()=>({x:R(),y:R(),r:R()*2+.6,v:R()*.00012+.00004,p:R()*6})),meteors=[];
    let t=0;
    const loop=()=>{t+=.02;x.clearRect(0,0,w,h);
      stars.forEach(s=>{x.globalAlpha=.35+.65*Math.abs(Math.sin(t+s.p));x.fillStyle='#fff';x.beginPath();x.arc(s.x*w,s.y*h,s.r*dpr,0,7);x.fill()});
      dust.forEach(d=>{d.y-=d.v;d.x+=Math.sin(t+d.p)*.00015;if(d.y<-.02)d.y=1.02;x.globalAlpha=.5+.4*Math.sin(t*2+d.p);x.shadowBlur=12*dpr;x.shadowColor='#D4AF70';x.fillStyle='#D4AF70';x.beginPath();x.arc(d.x*w,d.y*h,d.r*dpr,0,7);x.fill();x.shadowBlur=0});
      if(R()<(burst?.03:.006))meteors.push({x:R()*w*1.1,y:-20,l:0});
      for(let i=meteors.length-1;i>=0;i--){const m=meteors[i];m.x-=9*dpr;m.y+=5*dpr;m.l++;const g=x.createLinearGradient(m.x,m.y,m.x+90*dpr,m.y-50*dpr);g.addColorStop(0,'rgba(255,240,210,.9)');g.addColorStop(1,'transparent');x.globalAlpha=1;x.strokeStyle=g;x.lineWidth=1.5*dpr;x.beginPath();x.moveTo(m.x,m.y);x.lineTo(m.x+90*dpr,m.y-50*dpr);x.stroke();if(m.y>h)meteors.splice(i,1)}
      raf=requestAnimationFrame(loop)};
    loop();return()=>{cancelAnimationFrame(raf);removeEventListener('resize',size)};
  },[burst]);
  return <canvas ref={ref} aria-hidden className="fixed inset-0 w-full h-full pointer-events-none"/>;
}
