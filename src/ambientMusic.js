// Soft generative background music (C – Am – F – G, gentle arpeggio + bass + swelling pad + echo). No audio file needed.
const CH=[[261.63,329.63,392],[220,261.63,329.63],[174.61,220,261.63],[196,246.94,293.66]],EIGHTH=.43;
export function startAmbient(ctx,out){
  const bus=ctx.createGain();bus.gain.value=1;bus.connect(out);
  const dl=ctx.createDelay(1),fb=ctx.createGain(),lp=ctx.createBiquadFilter(),wet=ctx.createGain();
  dl.delayTime.value=.52;fb.gain.value=.4;lp.type='lowpass';lp.frequency.value=2200;wet.gain.value=.4;
  bus.connect(dl);dl.connect(lp);lp.connect(fb);fb.connect(dl);lp.connect(wet);wet.connect(out);
  const note=(f,t,dur,v,type='triangle')=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=f;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.015);g.gain.exponentialRampToValueAtTime(.0005,t+dur);o.connect(g);g.connect(bus);o.start(t);o.stop(t+dur+.1)};
  const pad=(f,t,dur,v)=>{const o=ctx.createOscillator(),g=ctx.createGain(),fl=ctx.createBiquadFilter();o.type='triangle';o.frequency.value=f;fl.type='lowpass';fl.frequency.value=700;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+dur*.4);g.gain.linearRampToValueAtTime(0,t+dur);o.connect(fl);fl.connect(g);g.connect(bus);o.start(t);o.stop(t+dur+.1)};
  let t=ctx.currentTime+.2,c=0;
  const sched=()=>{while(t<ctx.currentTime+2){const ch=CH[c%4],len=EIGHTH*8,P=[0,1,2,1,2,1,2,1];
    note(ch[0]/2,t,len*1.2,.28,'sine');ch.forEach(f=>pad(f,t,len*1.1,.05));
    P.forEach((k,i)=>note(ch[k]*2,t+i*EIGHTH,EIGHTH*5,i%2?.07:.1));t+=len;c++}};
  sched();const id=setInterval(sched,500);
  return{duck(on){bus.gain.cancelScheduledValues(ctx.currentTime);bus.gain.linearRampToValueAtTime(on?.3:1,ctx.currentTime+1.5)},stop(){clearInterval(id);bus.gain.linearRampToValueAtTime(0,ctx.currentTime+1)}};
}
