// Real calendar difference (months, days, h, m, s) between two instants, in Asia/Kolkata.
// IST is a fixed UTC+05:30 (no DST), so shifting by that offset and using UTC getters is exact.
const IST=19800e3,dim=(y,m)=>new Date(Date.UTC(y,m+1,0)).getUTCDate();
function addMonths(d,n){const y=d.getUTCFullYear(),m=d.getUTCMonth()+n,Y=y+Math.floor(m/12),M=((m%12)+12)%12;
  return Date.UTC(Y,M,Math.min(d.getUTCDate(),dim(Y,M)),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds())}
export function calendarDiff(nowMs,targetMs){
  if(nowMs>=targetMs)return{months:0,days:0,hours:0,minutes:0,seconds:0};
  const a=new Date(nowMs+IST),b=new Date(targetMs+IST);
  let months=(b.getUTCFullYear()-a.getUTCFullYear())*12+b.getUTCMonth()-a.getUTCMonth();
  let anchor=addMonths(a,months);if(anchor>b.getTime()){months--;anchor=addMonths(a,months)}
  const s=Math.floor((b.getTime()-anchor)/1000);
  return{months,days:Math.floor(s/86400),hours:Math.floor(s/3600)%24,minutes:Math.floor(s/60)%60,seconds:s%60};
}
