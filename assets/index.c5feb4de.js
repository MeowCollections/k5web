import{e as D,_ as A}from"./index.dba6c1a9.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               */import{i as w,a as k,f as h,g as v}from"./serial.5c2fd0dc.js";import{d as C,r as g,b0 as x,C as T,D as M,aI as o,aH as s,aM as l,G as R,n as _,aX as H,bG as O,bH as P,bb as S,bD as U,bE as L,bC as V,bF as I}from"./arco.238973cf.js";import"./chart.cadf8376.js";import"./vue.505f1d6a.js";const K={class:"container"},z=["innerHTML"],N={name:"Card"},j=C({...N,setup(G){const i=D(),n=g({status:"\u70B9\u51FB\u5907\u4EFD\u6309\u94AE\u5C06\u751F\u6210EEPROM\u5907\u4EFD\u6587\u4EF6<br/><br/>",eepromType:""}),m=async()=>{if(i.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await w()},F=async()=>{if(i.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}let e=8192;switch(n.eepromType){case"1":e=8192;break;case"2":e=131072;break;case"3":e=262144;break;case"4":e=524288;break;default:e=8192}let c=new Uint8Array(e);for(let u=0;u<e;u+=128){const d=await k(i.connectPort,u);c.set(d,u),n.status=n.status+"\u5907\u4EFD\u8FDB\u5EA6\uFF1A"+(u/e*100).toFixed(1)+"%<br/>",_(()=>{const r=document==null?void 0:document.getElementById("statusArea");r&&(r.scrollTop=r==null?void 0:r.scrollHeight)})}n.status=n.status+"\u5907\u4EFD\u8FDB\u5EA6\uFF1A100%<br/>",_(()=>{const u=document==null?void 0:document.getElementById("statusArea");u&&(u.scrollTop=u==null?void 0:u.scrollHeight)}),console.log(c);const p=new Blob([c],{type:"application/octet-stream"}),a=URL.createObjectURL(p),t=document.createElement("a");t.href=a,t.download=new Date+"_backup.bin",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(a)},b=async()=>{if(i.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}const e=document.createElement("input");e.type="file",e.onchange=async()=>{const c=new Blob([e.files[0]],{type:"application/octet-stream"}),p=new Uint8Array(await c.arrayBuffer());for(let a=0;a<e.files[0].size;a+=128)await h(i.connectPort,a,p.slice(a,a+128)),n.status=n.status+"\u6062\u590D\u8FDB\u5EA6\uFF1A"+(a/e.files[0].size*100).toFixed(1)+"%<br/>",_(()=>{const t=document==null?void 0:document.getElementById("statusArea");t&&(t.scrollTop=t==null?void 0:t.scrollHeight)});n.status=n.status+"\u6062\u590D\u8FDB\u5EA6\uFF1A100%<br/>",v(i.connectPort)},e.click()};return(e,c)=>{const p=x("Breadcrumb"),a=H,t=O,u=P,d=S,r=U,f=L,E=V,B=I;return T(),M("div",K,[o(p,{items:["\u5C0F\u5DE5\u5177","\u5907\u4EFD/\u8FD8\u539F"]}),o(B,{gutter:20,align:"stretch"},{default:s(()=>[o(E,{span:24},{default:s(()=>[o(f,{class:"general-card",title:"\u5907\u4EFD/\u8FD8\u539F"},{default:s(()=>[o(d,null,{default:s(()=>[o(a,{type:"primary",onClick:F},{default:s(()=>[l("\u5907\u4EFD")]),_:1}),o(a,{onClick:b},{default:s(()=>[l("\u6062\u590D")]),_:1}),o(u,{modelValue:n.eepromType,"onUpdate:modelValue":c[0]||(c[0]=y=>n.eepromType=y),style:{width:"320px"},placeholder:"\u9009\u62E9EEPROM\u5927\u5C0F"},{default:s(()=>[o(t,{value:"1"},{default:s(()=>[l("8KB\uFF0864Kbit\uFF09")]),_:1}),o(t,{value:"2"},{default:s(()=>[l("128KB\uFF081Mbit\uFF09")]),_:1}),o(t,{value:"3"},{default:s(()=>[l("256KB\uFF082Mbit\uFF09")]),_:1}),o(t,{value:"4"},{default:s(()=>[l("512KB\uFF084Mbit\uFF09")]),_:1})]),_:1},8,["modelValue"]),o(a,{type:"text",onClick:m},{default:s(()=>[l("\u81EA\u52A8\u68C0\u6D4B")]),_:1})]),_:1}),o(r),R("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:n.status},null,8,z)]),_:1})]),_:1})]),_:1})])}}});const ue=A(j,[["__scopeId","data-v-21b4cf79"]]);export{ue as default};
