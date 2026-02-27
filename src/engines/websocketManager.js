export class WSManager{
  constructor(token){ this.token=token; this.ws=null; this.onTrade=null; this.onNews=null; }
  connect(){ this.ws=new WebSocket(`wss://ws.finnhub.io?token=${this.token}`); this.ws.onmessage=({data})=>{const m=JSON.parse(data); if(m.type==="trade") this.onTrade?.(m.data); if(m.type==="news") this.onNews?.(m.data);}; }
  sub(symbol){ this.ws?.send(JSON.stringify({type:"subscribe",symbol})); }
  subNews(){ this.ws?.send(JSON.stringify({type:"subscribe",symbol:"news"})); }
}ß