// Happy Birthday melody (public-domain tune), played as a soft music-box sound. Notes only, no lyrics.
const N={G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99};
const S=[['G4',.75],['G4',.25],['A4',1],['G4',1],['C5',1],['B4',2],['G4',.75],['G4',.25],['A4',1],['G4',1],['D5',1],['C5',2],
['G4',.75],['G4',.25],['G5',1],['E5',1],['C5',1],['B4',1],['A4',2],['F5',.75],['F5',.25],['E5',1],['C5',1],['D5',1],['C5',2]];
export function playBirthdayTune(ctx,out,beat=.55){
  let t=ctx.currentTime+.1;
  S.forEach(([n,b])=>{const d=b*beat;[[1,.5,'triangle'],[2,.18,'sine']].forEach(([m,v,type])=>{
    const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=N[n]*m;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.02);g.gain.exponentialRampToValueAtTime(.001,t+d*1.6);
    o.connect(g);g.connect(out);o.start(t);o.stop(t+d*1.7)});t+=d});
}
