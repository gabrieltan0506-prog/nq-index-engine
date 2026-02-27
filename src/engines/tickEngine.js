export class TickEngine{
  constructor(tickSize=500){ this.tickSize=tickSize; this.buf={}; this.bars={}; }
  push(sym, price){ (this.buf[sym]??=[]).push(price); if(this.buf[sym].length>=this.tickSize){ const a=this.buf[sym].splice(0,this.tickSize); const o=a[0],h=Math.max(...a),l=Math.min(...a),c=a[a.length-1]; (this.bars[sym]??=[]).push({t:Math.floor(Date.now()/1000),o,h,l,c}); } }
}