import{e as A,_ as K}from"./index.6fbe019e.js";/* empty css              *//* empty css               *//* empty css               *//* empty css                */import{d as P,r as L,b0 as R,C as v,D as U,aI as u,aH as _,aE as x,aM as C,bR as H,bS as N,aX as O,bb as T,bE as M,bK as V,bC as j,bF as z,bd as G,be as X,G as D}from"./arco.a5a5eeda.js";import{e as q,f as J,g as Q}from"./serial.3518333f.js";import"./chart.afd45e2e.js";import"./vue.bbd9d311.js";const B=b=>(G("data-v-208cc1d9"),b=b(),X(),b),W={class:"container"},Y=B(()=>D("div",{id:"canvasDiv",style:{zoom:"250%"}},null,-1)),Z=B(()=>D("br",null,null,-1)),$={name:"Backup"},tt=P({...$,setup(b){const l=A(),a=L({activeKey:1,binaryFile:void 0,loading:!1}),I=()=>{const o=document.createElement("input");o.type="file",o.onchange=async()=>{const p=new Blob([o.files[0]],{type:"application/octet-stream"}),f=URL.createObjectURL(p),t=document.createElement("canvas");t.width=128,t.height=64;const r=t.cloneNode(),c=document.getElementById("canvasDiv");c.innerHTML="",c==null||c.append(t,r);const n=new Image;n.src=f,n.onload=()=>{const d=t.getContext("2d");d==null||d.drawImage(n,0,0,128,64);const g=d==null?void 0:d.getImageData(0,0,t.width,t.height).data;function y(i,s){const e=(s*128+i)*4;return g[e]+g[e+1]+g[e+2]>128*3?0:1}const h=r.getContext("2d"),m=h.getImageData(0,0,r.width,r.height);for(let i=0;i<64;i++)for(let s=0;s<128;s++){const e=(i*128+s)*4,F=!y(s,i);m.data[e]=F*255,m.data[e+1]=F*255,m.data[e+2]=F*255,m.data[e+3]=255}h.putImageData(m,0,0);const w=new Uint8Array(1024);let S=0;for(let i=0;i<64;i+=8)for(let s=0;s<128;s++){let E=0;for(let e=0;e<8;e++)E|=y(s,i+e)<<e;w[S++]=E}a.binaryFile=w}},o.click()},k=async()=>{var f,t,r,c;if(l.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}if(((f=l.configuration)==null?void 0:f.uart)=="official"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(a.activeKey==2&&((t=l.configuration)==null?void 0:t.charset)!="gb2312"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(a.activeKey==1&&((r=l.configuration)==null?void 0:r.charset)!="losehu"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}a.loading=!0;let o=123728;a.activeKey==2&&(o=8320),await q(l.connectPort);const p=a.binaryFile;for(let n=o;n<p.length+o;n+=128)await J(l.connectPort,n,p.slice(n-o,n-o+128),128,(c=l.configuration)==null?void 0:c.uart);await Q(l.connectPort),a.loading=!1};return(o,p)=>{const f=R("Breadcrumb"),t=H,r=N,c=O,n=T,d=M,g=V,y=j,h=z;return v(),U("div",W,[u(f,{items:["\u5C0F\u5DE5\u5177","\u5F00\u673A\u56FE\u7247"]}),u(h,{gutter:20,align:"stretch"},{default:_(()=>[u(y,{span:24},{default:_(()=>[u(g,{loading:a.loading,tip:"\u5199\u5165\u4E2D...",style:{width:"100%"}},{default:_(()=>[u(d,{class:"general-card",title:"\u5F00\u673A\u56FE\u7247"},{default:_(()=>[u(r,{"active-key":a.activeKey,onChange:p[0]||(p[0]=m=>{a.activeKey=m})},{default:_(()=>[(v(),x(t,{key:1,title:"LOSEHU 117"})),(v(),x(t,{key:2,title:"LOSEHU 118+"}))]),_:1},8,["active-key"]),Y,Z,u(n,null,{default:_(()=>[u(c,{onClick:I},{default:_(()=>[C("\u9009\u62E9\u56FE\u7247")]),_:1}),u(c,{type:"primary",disabled:!a.binaryFile,onClick:k},{default:_(()=>[C("\u5199\u5165")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1})]),_:1})])}}});const lt=K(tt,[["__scopeId","data-v-208cc1d9"]]);export{lt as default};