import{e as h,_ as B}from"./index.9855b136.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               */import{d as E,r as g,b0 as w,C as A,D as v,aI as s,aH as c,aM as p,aN as k,G as C,n as m,aX as x,bb as D,bD as N,bE as P,bC as T,bF as H}from"./arco.cd87ac27.js";import{d as I,c as S,r as _,i as V,j as b,l as M,n as j}from"./serial.472eb3ab.js";import"./chart.19f3a5b6.js";import"./vue.a1682e6c.js";const L={class:"container"},R=["innerHTML"],U={name:"Flash"},z=E({...U,setup(G){const u=h(),t=g({status:"\u70B9\u51FB\u66F4\u65B0\u6309\u94AE\u66F4\u65B0\u56FA\u4EF6\u5230\u8BBE\u5907<br/><br/>",binaryFile:void 0,binaryName:""}),F=()=>{const a=document.createElement("input");a.type="file",a.onchange=async()=>{const r=new Blob([a.files[0]],{type:"application/octet-stream"}),i=new Uint8Array(await r.arrayBuffer());t.binaryFile=i,t.binaryName=a.files[0].name},a.click()},f=async()=>{if(!t.binaryFile){alert("\u8BF7\u9009\u62E9\u6587\u4EF6");return}u.connectPort&&await I(u.connectPort);let a=await S();await _(a,24,1e3);const r=V(t.binaryFile),i=new Uint8Array([48,5,r.length,0,...r]);await b(a,i),await _(a,24);const o=M(t.binaryFile);if(o.length>61439)throw new Error("Last resort boundary check failed. Whoever touched the code is an idiot.");for(let e=0;e<o.length;e+=256){const l=o.slice(e,e+256),d=j(l,e,o.length);try{await b(a,d),await _(a,26)}catch(n){return console.log("Flash command rejected. Aborting."),Promise.reject(n)}t.status=t.status+`\u66F4\u65B0\u8FDB\u5EA6 ${(e/o.length*100).toFixed(1)}%<br/>`,m(()=>{const n=document==null?void 0:document.getElementById("statusArea");n&&(n.scrollTop=n==null?void 0:n.scrollHeight)})}t.status=t.status+"\u66F4\u65B0\u8FDB\u5EA6 100.0%<br/>",t.status=t.status+"\u56FA\u4EF6\u66F4\u65B0\u6210\u529F",m(()=>{const e=document==null?void 0:document.getElementById("statusArea");e&&(e.scrollTop=e==null?void 0:e.scrollHeight)}),u.updateSettings({connectPort:a})};return(a,r)=>{const i=w("Breadcrumb"),o=x,e=D,l=N,d=P,n=T,y=H;return A(),v("div",L,[s(i,{items:["\u5C0F\u5DE5\u5177","\u56FA\u4EF6\u5347\u7EA7"]}),s(y,{gutter:20,align:"stretch"},{default:c(()=>[s(n,{span:24},{default:c(()=>[s(d,{class:"general-card",title:"\u56FA\u4EF6\u5347\u7EA7"},{default:c(()=>[s(e,null,{default:c(()=>[s(o,{onClick:F},{default:c(()=>[p(k(t.binaryFile?t.binaryName:"\u9009\u62E9\u56FA\u4EF6"),1)]),_:1}),s(o,{type:"primary",disabled:!t.binaryFile,onClick:f},{default:c(()=>[p("\u66F4\u65B0")]),_:1},8,["disabled"])]),_:1}),s(l),C("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:t.status},null,8,R)]),_:1})]),_:1})]),_:1})])}}});const Z=B(z,[["__scopeId","data-v-cbafb82f"]]);export{Z as default};
