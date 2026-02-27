import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
export default function ChartKLine(){ const el=useRef(null);
useEffect(()=>{ const c=createChart(el.current,{height:420}); const s=c.addLineSeries(); s.setData([{time:Math.floor(Date.now()/1000),value:0}]); return ()=>c.remove(); },[]);
return <div ref={el} />; }ß