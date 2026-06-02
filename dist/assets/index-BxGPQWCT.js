(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=([e,t,a])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(n=>{r.setAttribute(n,String(t[n]))}),a!=null&&a.length&&a.forEach(n=>{const i=R(n);r.appendChild(i)}),r},J=(e,t={})=>{const a="svg",r={...O,...t};return R([a,r,e])};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=e=>{const t=W(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),L=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",A=(e,{nameAttr:t,icons:a,attrs:r})=>{var y;const n=e.getAttribute(t);if(n==null)return;const i=K(n),o=a[i];if(!o)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const l=X(e),p=Y(l)?{}:{"aria-hidden":"true"},s={...O,"data-lucide":n,...p,...r,...l},d=L(l),u=L(r),g=G("lucide",`lucide-${n}`,...d,...u);g&&Object.assign(s,{class:g});const M=J(o,s);return(y=e.parentNode)==null?void 0:y.replaceChild(M,e)};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M12 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M16 5H3"}],["path",{d:"M11 12H3"}],["path",{d:"M16 19H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=({icons:e={},nameAttr:t="data-lucide",attrs:a={},root:r=document,inTemplates:n}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(r.querySelectorAll(`[${t}]`)).forEach(o=>A(o,{nameAttr:t,icons:e,attrs:a})),n&&Array.from(r.querySelectorAll("template")).forEach(l=>j({icons:e,nameAttr:t,attrs:a,root:l.content,inTemplates:n})),t==="data-lucide"){const o=r.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(l=>A(l,{nameAttr:"icon-name",icons:e,attrs:a})))}},Ie="/assets/Logo-nutriscone-wEeX_mNn.jpeg",C={products:[{id:"scone-clasico",name:"Scone clásico",demandPerHour:90,targetProduction:720,billOfMaterials:[{materialId:"harina",quantityPerUnit:.075},{materialId:"manteca",quantityPerUnit:.018},{materialId:"leche",quantityPerUnit:.028},{materialId:"huevo",quantityPerUnit:.08},{materialId:"azucar",quantityPerUnit:.012},{materialId:"polvo-hornear",quantityPerUnit:.003}],route:[{resourceId:"pesado",processTimeMinutes:.45},{resourceId:"mezclado",processTimeMinutes:.7},{resourceId:"formado",processTimeMinutes:.55},{resourceId:"horneado",processTimeMinutes:1.25},{resourceId:"enfriado",processTimeMinutes:.5},{resourceId:"empaque",processTimeMinutes:.35}]},{id:"scone-arandanos",name:"Scone con arándanos",demandPerHour:64,targetProduction:480,billOfMaterials:[{materialId:"harina",quantityPerUnit:.072},{materialId:"manteca",quantityPerUnit:.02},{materialId:"leche",quantityPerUnit:.026},{materialId:"huevo",quantityPerUnit:.08},{materialId:"azucar",quantityPerUnit:.015},{materialId:"polvo-hornear",quantityPerUnit:.003},{materialId:"arandanos",quantityPerUnit:.022}],route:[{resourceId:"pesado",processTimeMinutes:.5},{resourceId:"mezclado",processTimeMinutes:.8},{resourceId:"formado",processTimeMinutes:.65},{resourceId:"horneado",processTimeMinutes:1.35},{resourceId:"enfriado",processTimeMinutes:.55},{resourceId:"empaque",processTimeMinutes:.4}]}],materials:[{id:"harina",name:"Harina 0000",unit:"kg",initialStock:95,currentStock:95,reorderPoint:28},{id:"manteca",name:"Manteca fría",unit:"kg",initialStock:24,currentStock:24,reorderPoint:7},{id:"leche",name:"Leche",unit:"litros",initialStock:36,currentStock:36,reorderPoint:10},{id:"huevo",name:"Huevo batido",unit:"unidades",initialStock:130,currentStock:130,reorderPoint:36},{id:"azucar",name:"Azúcar",unit:"kg",initialStock:18,currentStock:18,reorderPoint:5},{id:"polvo-hornear",name:"Polvo de hornear",unit:"kg",initialStock:4.2,currentStock:4.2,reorderPoint:1.2},{id:"arandanos",name:"Arándanos",unit:"kg",initialStock:12,currentStock:12,reorderPoint:4}],resources:[{id:"pesado",name:"Pesado de ingredientes",capacityPerHour:180,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:160},{id:"mezclado",name:"Mezclado de masa",capacityPerHour:118,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:120},{id:"formado",name:"Formado y corte",capacityPerHour:130,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:130},{id:"horneado",name:"Horneado",capacityPerHour:92,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:100},{id:"enfriado",name:"Enfriado",capacityPerHour:150,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:140},{id:"empaque",name:"Empaque",capacityPerHour:170,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:150}]},we=()=>({totalCompletedUnits:0,completedUnitsByProduct:{},demandFulfillmentPercentage:0,averageResourceUtilization:0,bottleneckResourceId:null,materialsConsumed:{},materialsRemaining:{},activeAlerts:0,estimatedLostProduction:0}),F=e=>e.length===0?null:e.reduce((t,a)=>{const r=t.currentUtilization+t.queue/Math.max(t.maxQueue,1)*100;return a.currentUtilization+a.queue/Math.max(a.maxQueue,1)*100>r?a:t}),Q=(e,t)=>{const a=Object.values(e.completedUnitsByProduct).reduce((s,d)=>s+d,0),r=Math.max(e.simulatedMinutes/60,1/60),n=e.products.reduce((s,d)=>s+d.demandPerHour*r,0),i=e.resources.length?e.resources.reduce((s,d)=>s+d.currentUtilization,0)/e.resources.length:0,o=F(e.resources),l=e.products.reduce((s,d)=>{const u=d.route.reduce((g,M)=>{const y=e.resources.find(k=>k.id===M.resourceId);if(!y)return g;const U=60/Math.max(M.processTimeMinutes,.1);return Math.min(g,y.capacityPerHour,U)},Number.POSITIVE_INFINITY);return s+(Number.isFinite(u)?u:0)},0),p=e.products.reduce((s,d)=>s+d.demandPerHour,0);return{totalCompletedUnits:a,completedUnitsByProduct:{...e.completedUnitsByProduct},demandFulfillmentPercentage:n>0?Math.min(100,a/n*100):100,averageResourceUtilization:i,bottleneckResourceId:(o==null?void 0:o.id)??null,materialsConsumed:{...t},materialsRemaining:Object.fromEntries(e.materials.map(s=>[s.id,s.currentStock])),activeAlerts:e.alerts.length,estimatedLostProduction:Math.max(0,p-l)*r}},xe=(e,t)=>`${e}-${t}-${Math.random().toString(36).slice(2,8)}`,$=(e,t,a,r,n)=>{e.some(o=>o.message===a&&r-o.timestamp<=12)||e.unshift({id:xe(n,r),type:t,message:a,timestamp:r})},Ue=(e,t)=>{const a=e.products.find(r=>r.id===t);return!a||a.route.length===0?0:a.route.reduce((r,n)=>{const i=e.resources.find(l=>l.id===n.resourceId);if(!i)return r;const o=60/Math.max(n.processTimeMinutes,.1);return Math.min(r,i.capacityPerHour,o)},Number.POSITIVE_INFINITY)},T=e=>e.queue/Math.max(e.maxQueue,1),ke=e=>{const t=[...e.alerts],a=e.simulatedMinutes;e.resources.forEach(n=>{n.currentUtilization>=95?$(t,"critical",`${n.name} opera al ${n.currentUtilization.toFixed(0)}% de utilización.`,a,"utilizacion-critica"):n.currentUtilization>=85&&$(t,"warning",`${n.name} supera el 85% de utilización.`,a,"utilizacion-alta"),T(n)>=.8&&$(t,"warning",`La cola de ${n.name} supera el 80% de su capacidad.`,a,"cola-alta")}),e.materials.forEach(n=>{n.currentStock<=0?$(t,"critical",`${n.name} está agotado.`,a,"stockout"):n.currentStock<=n.reorderPoint&&$(t,"warning",`${n.name} está por debajo del punto de reposición.`,a,"inventario-bajo")}),e.products.forEach(n=>{const i=Ue(e,n.id);n.demandPerHour>i&&i>0&&$(t,"warning",`La demanda de ${n.name} supera la capacidad disponible estimada.`,a,"demanda-alta")});const r=F(e.resources);return r&&(r.currentUtilization>=80||T(r)>=.55)&&$(t,"info",`${r.name} es el principal cuello de botella activo.`,a,"cuello-botella"),t.slice(0,40)},qe=e=>`${e}-${crypto.randomUUID()}`;let I={};const Ce=e=>({products:structuredClone(e.products),materials:structuredClone(e.materials),resources:structuredClone(e.resources)}),B=(e=C)=>{const t=Ce(e);I={};const a={isRunning:!1,simulatedMinutes:0,speed:1,products:t.products,materials:t.materials,resources:t.resources,completedUnitsByProduct:Object.fromEntries(t.products.map(r=>[r.id,0])),alerts:[{id:qe("info"),type:"info",message:"Obrador listo para simular la producción de scones.",timestamp:0}],metrics:we()};return{...a,metrics:Q(a,I)}},N=(e,t)=>{const a=e.completedUnitsByProduct[t.id]??0,r=Math.max(t.targetProduction-a,0);return t.demandPerHour/60+r/Math.max(t.targetProduction,1)},Ee=(e,t)=>t.billOfMaterials.length===0?Number.POSITIVE_INFINITY:t.billOfMaterials.reduce((a,r)=>{const n=e.materials.find(i=>i.id===r.materialId);return n?Math.min(a,Math.floor(n.currentStock/Math.max(r.quantityPerUnit,.001))):0},Number.POSITIVE_INFINITY),ze=(e,t)=>t.route.length===0?0:t.route.reduce((a,r)=>{const n=e.resources.find(o=>o.id===r.resourceId);if(!n)return 0;const i=60/Math.max(r.processTimeMinutes,.1);return Math.min(a,n.capacityPerHour,i)},Number.POSITIVE_INFINITY)/60,Le=(e,t,a)=>{t.billOfMaterials.forEach(r=>{const n=e.materials.find(o=>o.id===r.materialId);if(!n)return;const i=r.quantityPerUnit*a;n.currentStock=Math.max(0,n.currentStock-i),I[n.id]=(I[n.id]??0)+i})},Ae=(e,t,a,r)=>{t.route.forEach(n=>{const i=e.resources.find(s=>s.id===n.resourceId);if(!i)return;const o=Math.min(i.capacityPerHour,60/Math.max(n.processTimeMinutes,.1)),l=r*60,p=Math.max(0,r-a);i.currentUtilization=Math.min(i.maxUtilization,i.currentUtilization+l/Math.max(o,.1)*100),i.queue=Math.min(i.maxQueue,i.queue+p*n.processTimeMinutes/Math.max(n.processTimeMinutes,1))})},Te=e=>{e.resources.forEach(t=>{t.currentUtilization=Math.max(0,Math.min(t.maxUtilization,t.currentUtilization*.68));const a=t.capacityPerHour/60;t.queue=Math.max(0,t.queue-a)})},Ne=(e,t,a)=>{e.completedUnitsByProduct[t.id]=(e.completedUnitsByProduct[t.id]??0)+a},He=(e,t)=>{const a=e.completedUnitsByProduct[t.id]??0;if(a>=t.targetProduction)return;const r=Math.min(t.demandPerHour/60,t.targetProduction-a),n=Ee(e,t),i=ze(e,t),o=Math.max(0,Math.min(r,n,i));o>0&&(Le(e,t,o),Ne(e,t,o)),Ae(e,t,o,r)},Oe=e=>{const t={...e,simulatedMinutes:e.simulatedMinutes+1,products:structuredClone(e.products),materials:structuredClone(e.materials),resources:structuredClone(e.resources),completedUnitsByProduct:{...e.completedUnitsByProduct},alerts:[...e.alerts],metrics:{...e.metrics}};return Te(t),[...t.products].sort((a,r)=>N(t,r)-N(t,a)).forEach(a=>He(t,a)),t.alerts=ke(t),t.metrics=Q(t,I),t},Re=e=>B({products:e.products,materials:e.materials.map(t=>({...t,currentStock:t.initialStock})),resources:e.resources.map(t=>({...t,currentUtilization:0,queue:0}))}),S=e=>B(e),V="production-chain-simulator:scenario",je="production-chain-simulator:last-results",Fe=e=>{const t={products:e.products,materials:e.materials.map(a=>({...a,currentStock:a.initialStock})),resources:e.resources.map(a=>({...a,currentUtilization:0,queue:0}))};localStorage.setItem(V,JSON.stringify(t))},Qe=()=>{const e=localStorage.getItem(V);if(!e)return null;try{return JSON.parse(e)}catch{return null}},Be=e=>{localStorage.setItem(je,JSON.stringify(e.metrics))},Ve=e=>{const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=`resultados-simulacion-${Date.now()}.json`,r.click(),URL.revokeObjectURL(a)},De=e=>{const t=Math.floor(e/60),a=e%60;return`${t}h ${a}m`},Ze=e=>e==="critical"?"Crítica":e==="warning"?"Advertencia":"Info",_e=e=>e==="critical"?"circle-alert":e==="warning"?"triangle-alert":"info",Je=e=>`
  <aside class="alerts-panel">
    <div class="panel-header">
      <div>
        <p class="eyebrow">Monitoreo</p>
        <h2><i data-lucide="bell"></i>Alertas</h2>
      </div>
      <span class="alert-counter">${e.alerts.length}</span>
    </div>
    <div class="alerts-list">
      ${e.alerts.length?e.alerts.map(t=>`
          <article class="alert-card ${t.type}">
            <div>
              <span><i data-lucide="${_e(t.type)}"></i>${Ze(t.type)}</span>
              <time>${De(t.timestamp)}</time>
            </div>
            <p>${t.message}</p>
          </article>
        `).join(""):'<p class="empty-state">No hay alertas activas.</p>'}
    </div>
  </aside>
`,P=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e),H=e=>e.map(t=>`<option value="${t.id}">${t.name}</option>`).join(""),Ye=e=>e.map(t=>`<option value="${t.id}">${t.name}</option>`).join(""),Ge=e=>e.map(t=>`<option value="${t.id}">${t.name}</option>`).join(""),c=e=>`<i data-lucide="${e}"></i>`,We=e=>`
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Receta</th>
          <th>Demanda/h</th>
          <th>Objetivo</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>`
          <tr>
            <td>${t.name}</td>
            <td>${P(t.demandPerHour)}</td>
            <td>${P(t.targetProduction)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`,Ke=e=>`
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Ingrediente</th>
          <th>Stock</th>
          <th>Reposición</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>`
          <tr>
            <td>${t.name}</td>
            <td>${P(t.currentStock)} ${t.unit}</td>
            <td>${P(t.reorderPoint)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`,Xe=e=>`
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Estación</th>
          <th>Capacidad/h</th>
          <th>Cola max.</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>`
          <tr>
            <td>${t.name}</td>
            <td>${P(t.capacityPerHour)}</td>
            <td>${P(t.maxQueue)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`,et=e=>`
  <aside class="config-panel">
    <div class="panel-header">
      <div>
        <p class="eyebrow">Configuración</p>
        <h2>Obrador de scones</h2>
      </div>
      <span class="status-pill ${e.isRunning?"status-running":"status-paused"}">
        ${c(e.isRunning?"play":"pause")}${e.isRunning?"En marcha":"Pausado"}
      </span>
    </div>

    <div class="control-grid">
      <button id="load-demo" class="button secondary" type="button">${c("cookie")}Demo</button>
      <button id="save-scenario" class="button secondary" type="button">${c("save")}Guardar</button>
      <button id="load-scenario" class="button secondary" type="button">${c("folder-open")}Cargar</button>
      <button id="export-results" class="button secondary" type="button">${c("download")}Exportar</button>
      <button id="start-simulation" class="button success" type="button">${c("play")}Iniciar</button>
      <button id="pause-simulation" class="button warning" type="button">${c("pause")}Pausar</button>
      <button id="reset-simulation" class="button danger" type="button">${c("rotate-ccw")}Reiniciar</button>
      <button id="reset-demo" class="button secondary" type="button">${c("refresh-cw")}Reset demo</button>
    </div>

    <label class="field full">
      <span>Velocidad</span>
      <select id="speed-selector">
        ${[1,5,10,30].map(t=>`
          <option value="${t}" ${e.speed===t?"selected":""}>${t}x</option>
        `).join("")}
      </select>
    </label>

    <section class="config-section">
      <h3>${c("chef-hat")}Agregar receta</h3>
      <form id="product-form" class="form-grid">
        <label class="field">
          <span>Nombre</span>
          <input name="name" required placeholder="Ej. Scone de queso" />
        </label>
        <label class="field">
          <span>Demanda por hora</span>
          <input name="demandPerHour" type="number" min="0" step="1" required />
        </label>
        <label class="field">
          <span>Objetivo</span>
          <input name="targetProduction" type="number" min="1" step="1" required />
        </label>
        <button class="button primary" type="submit">${c("plus")}Agregar receta</button>
      </form>
      ${We(e.products)}
    </section>

    <section class="config-section">
      <h3>${c("wheat")}Agregar ingrediente</h3>
      <form id="material-form" class="form-grid">
        <label class="field">
          <span>Nombre</span>
          <input name="name" required placeholder="Ej. Queso rallado" />
        </label>
        <label class="field">
          <span>Unidad</span>
          <input name="unit" required placeholder="unidades" />
        </label>
        <label class="field">
          <span>Stock inicial</span>
          <input name="initialStock" type="number" min="0" step="0.1" required />
        </label>
        <label class="field">
          <span>Punto de reposición</span>
          <input name="reorderPoint" type="number" min="0" step="0.1" required />
        </label>
        <button class="button primary" type="submit">${c("plus")}Agregar ingrediente</button>
      </form>
      ${Ke(e.materials)}
    </section>

    <section class="config-section">
      <h3>${c("factory")}Agregar estación</h3>
      <form id="resource-form" class="form-grid">
        <label class="field">
          <span>Nombre</span>
          <input name="name" required placeholder="Ej. Laminado" />
        </label>
        <label class="field">
          <span>Capacidad por hora</span>
          <input name="capacityPerHour" type="number" min="1" step="1" required />
        </label>
        <label class="field">
          <span>Cola máxima</span>
          <input name="maxQueue" type="number" min="1" step="1" required />
        </label>
        <button class="button primary" type="submit">${c("plus")}Agregar estación</button>
      </form>
      ${Xe(e.resources)}
    </section>

    <section class="config-section">
      <h3>${c("workflow")}Conectar proceso</h3>
      <form id="bom-form" class="form-grid">
        <label class="field">
          <span>Receta</span>
          <select name="productId" required>${H(e.products)}</select>
        </label>
        <label class="field">
          <span>Ingrediente</span>
          <select name="materialId" required>${Ye(e.materials)}</select>
        </label>
        <label class="field">
          <span>Cantidad por unidad</span>
          <input name="quantityPerUnit" type="number" min="0.01" step="0.01" required />
        </label>
        <button class="button primary" type="submit">${c("link")}Agregar ingrediente</button>
      </form>

      <form id="route-form" class="form-grid">
        <label class="field">
          <span>Receta</span>
          <select name="productId" required>${H(e.products)}</select>
        </label>
        <label class="field">
          <span>Estación</span>
          <select name="resourceId" required>${Ge(e.resources)}</select>
        </label>
        <label class="field">
          <span>Minutos de proceso</span>
          <input name="processTimeMinutes" type="number" min="0.1" step="0.1" required />
        </label>
        <button class="button primary" type="submit">${c("list-plus")}Agregar etapa</button>
      </form>
    </section>
  </aside>
`,f=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e),tt=e=>{const t=Math.floor(e/60),a=e%60;return`${t.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`},at=(e,t)=>{var a;return((a=e.find(r=>r.id===t))==null?void 0:a.name)??t},D=(e,t)=>{var a;return((a=e.find(r=>r.id===t))==null?void 0:a.name)??"Sin datos"},h=e=>`<i data-lucide="${e}"></i>`,rt=e=>e.currentStock<=0?"critical":e.currentStock<=e.reorderPoint?"warning":"success",nt=e=>`
  <section class="metrics-grid">
    <article class="metric-card">
      <span>${h("timer")}Tiempo simulado</span>
      <strong>${tt(e.simulatedMinutes)}</strong>
    </article>
    <article class="metric-card">
      <span>${h("cookie")}Scones terminados</span>
      <strong>${f(e.metrics.totalCompletedUnits)}</strong>
    </article>
    <article class="metric-card">
      <span>${h("target")}Cumplimiento demanda</span>
      <strong>${f(e.metrics.demandFulfillmentPercentage)}%</strong>
    </article>
    <article class="metric-card">
      <span>${h("flame")}Cuello de botella</span>
      <strong>${D(e.resources,e.metrics.bottleneckResourceId)}</strong>
    </article>
    <article class="metric-card">
      <span>${h("gauge")}Utilización promedio</span>
      <strong>${f(e.metrics.averageResourceUtilization)}%</strong>
    </article>
    <article class="metric-card">
      <span>${h("bell")}Alertas activas</span>
      <strong>${e.alerts.length}</strong>
    </article>
    <article class="metric-card">
      <span>${h("triangle-alert")}Merma estimada</span>
      <strong>${f(e.metrics.estimatedLostProduction)}</strong>
    </article>
  </section>
`,it=e=>`
  <section class="dashboard-section">
    <div class="section-heading">
      <h2>${h("wheat")}Ingredientes</h2>
      <span>Stock restante y consumo por receta</span>
    </div>
    <div class="inventory-list">
      ${e.materials.map(t=>{const a=Math.max(t.initialStock,1),r=Math.max(0,Math.min(100,t.currentStock/a*100)),n=e.metrics.materialsConsumed[t.id]??0;return`
          <article class="inventory-item ${rt(t)}">
            <div>
              <strong>${t.name}</strong>
              <span>${f(t.currentStock)} ${t.unit} restantes</span>
            </div>
            <div class="progress-track">
              <span style="width: ${r}%"></span>
            </div>
            <small>Consumido: ${f(n)} ${t.unit}</small>
          </article>
        `}).join("")}
    </div>
  </section>
`,ot=e=>e>=95?"critical":e>=85?"warning":"success",st=e=>`
  <section class="dashboard-section">
    <div class="section-heading">
      <h2>${h("factory")}Estaciones</h2>
      <span>Utilización y colas del obrador</span>
    </div>
    <div class="resource-list">
      ${e.resources.map(t=>{const a=Math.max(0,Math.min(100,t.currentUtilization)),r=Math.max(0,Math.min(100,t.queue/Math.max(t.maxQueue,1)*100));return`
          <article class="resource-row">
            <div class="resource-label">
              <strong>${t.name}</strong>
              <span>${f(t.queue)} / ${f(t.maxQueue)} en cola</span>
            </div>
            <div class="utilization-block">
              <div class="progress-track ${ot(a)}">
                <span style="width: ${a}%"></span>
              </div>
              <b>${f(a)}%</b>
            </div>
            <div class="queue-track">
              <span style="width: ${r}%"></span>
            </div>
          </article>
        `}).join("")}
    </div>
  </section>
`,ct=e=>`
  <section class="dashboard-section">
    <div class="section-heading">
      <h2>${h("clipboard-check")}Lotes completados</h2>
      <span>Scones terminados por receta</span>
    </div>
    <div class="product-output-grid">
      ${Object.entries(e.completedUnitsByProduct).map(([t,a])=>`
        <article class="output-card">
          <span>${at(e.products,t)}</span>
          <strong>${f(a)}</strong>
        </article>
      `).join("")}
    </div>
  </section>
`,lt=e=>`
  <section class="dashboard-section flow-section">
    <div class="section-heading">
      <h2>${h("workflow")}Flujo de producción</h2>
      <span>Pesado, mezclado, horneado y empaque por receta</span>
    </div>
    <div class="flow-list">
      ${e.products.map(t=>`
        <article class="flow-row">
          <strong>${t.name}</strong>
          <div class="flow-line">
            ${t.route.length?t.route.map((a,r)=>`
                <span class="flow-node ${e.metrics.bottleneckResourceId===a.resourceId?"bottleneck":""}">
                  ${D(e.resources,a.resourceId)}
                  <small>${f(a.processTimeMinutes)} min</small>
                </span>
                ${r<t.route.length-1?"<i></i>":""}
              `).join(""):'<span class="flow-node empty">Sin proceso</span>'}
          </div>
        </article>
      `).join("")}
    </div>
  </section>
`,dt=e=>`
  <main class="dashboard">
    ${nt(e)}
    <div class="dashboard-grid">
      ${it(e)}
      ${st(e)}
    </div>
    ${ct(e)}
    ${lt(e)}
  </main>
`,E=e=>`${e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"item"}-${Math.random().toString(36).slice(2,7)}`,m=(e,t)=>{const a=new FormData(e).get(t);return typeof a=="string"?a.trim():""},v=(e,t)=>Number(m(e,t)),ut={Bell:ee,ChefHat:te,CircleAlert:ae,ClipboardCheck:re,Cookie:ne,Download:ie,Factory:oe,Flame:se,FolderOpen:ce,Gauge:le,Info:de,Link:ue,ListPlus:me,Pause:pe,Play:he,Plus:fe,RefreshCw:ge,RotateCcw:be,Save:ye,Target:ve,Timer:Me,TriangleAlert:$e,Wheat:Pe,Workflow:Se},mt=()=>{j({icons:ut,attrs:{"aria-hidden":"true","stroke-width":"2.2"}})},b=(e,t,a)=>({...e,alerts:[{id:E("alerta"),type:t,message:a,timestamp:e.simulatedMinutes},...e.alerts].slice(0,40)}),w=e=>({products:e.products,materials:e.materials,resources:e.resources}),x=(e,t)=>({...S(t),speed:e.speed}),pt=(e,t)=>{const a={id:E(m(t,"name")),name:m(t,"name"),demandPerHour:v(t,"demandPerHour"),targetProduction:v(t,"targetProduction"),billOfMaterials:[],route:[]};return b(x(e,{...w(e),products:[...e.products,a]}),"info",`${a.name} agregado al plan de producción.`)},ht=(e,t)=>{const a=v(t,"initialStock"),r={id:E(m(t,"name")),name:m(t,"name"),unit:m(t,"unit"),initialStock:a,currentStock:a,reorderPoint:v(t,"reorderPoint")};return b(x(e,{...w(e),materials:[...e.materials,r]}),"info",`${r.name} agregado al inventario de ingredientes.`)},ft=(e,t)=>{const a={id:E(m(t,"name")),name:m(t,"name"),capacityPerHour:v(t,"capacityPerHour"),maxUtilization:100,currentUtilization:0,queue:0,maxQueue:v(t,"maxQueue")};return b(x(e,{...w(e),resources:[...e.resources,a]}),"info",`${a.name} agregado como estación del obrador.`)},gt=(e,t)=>{const a=m(t,"productId"),r=m(t,"materialId"),n=v(t,"quantityPerUnit"),i=e.products.map(o=>{if(o.id!==a)return o;const l=o.billOfMaterials.filter(p=>p.materialId!==r);return{...o,billOfMaterials:[...l,{materialId:r,quantityPerUnit:n}]}});return b(x(e,{...w(e),products:i}),"info","Ingrediente conectado a la receta.")},bt=(e,t)=>{const a=m(t,"productId"),r=m(t,"resourceId"),n=v(t,"processTimeMinutes"),i=e.products.map(o=>o.id===a?{...o,route:[...o.route,{resourceId:r,processTimeMinutes:n}]}:o);return b(x(e,{...w(e),products:i}),"info","Etapa agregada al proceso de la receta.")},yt=e=>{let t=S(C),a=null;const r=()=>{a!==null&&(window.clearInterval(a),a=null)},n=()=>{r(),t.isRunning&&(a=window.setInterval(()=>{t=Oe(t),Be(t),p(),n()},Math.max(40,1e3/t.speed)))},i=s=>{t=s,p(),n()},o=(s,d)=>{const u=e.querySelector(`#${s}`);u==null||u.addEventListener("submit",g=>{g.preventDefault(),i(d(t,u))})},l=()=>{var s,d,u,g,M,y,U,k,z;(s=e.querySelector("#load-demo"))==null||s.addEventListener("click",()=>{i({...S(C),speed:t.speed})}),(d=e.querySelector("#reset-demo"))==null||d.addEventListener("click",()=>{i({...S(C),speed:t.speed})}),(u=e.querySelector("#start-simulation"))==null||u.addEventListener("click",()=>{i({...t,isRunning:!0})}),(g=e.querySelector("#pause-simulation"))==null||g.addEventListener("click",()=>{i({...t,isRunning:!1})}),(M=e.querySelector("#reset-simulation"))==null||M.addEventListener("click",()=>{i({...Re(t),speed:t.speed})}),(y=e.querySelector("#save-scenario"))==null||y.addEventListener("click",()=>{Fe(t),i(b(t,"info","Plan del obrador guardado en el navegador."))}),(U=e.querySelector("#load-scenario"))==null||U.addEventListener("click",()=>{const q=Qe();i(q?b({...S(q),speed:t.speed},"info","Plan del obrador cargado desde el navegador."):b(t,"warning","No hay un plan guardado."))}),(k=e.querySelector("#export-results"))==null||k.addEventListener("click",()=>{Ve(t),i(b(t,"info","Resultados del obrador exportados como JSON."))}),(z=e.querySelector("#speed-selector"))==null||z.addEventListener("change",q=>{const _=Number(q.currentTarget.value);i({...t,speed:_})}),o("product-form",pt),o("material-form",ht),o("resource-form",ft),o("bom-form",gt),o("route-form",bt)};function p(){e.innerHTML=`
      <div class="app-shell">
        <header class="app-header">
          <div class="brand-lockup">
            <img src="${Ie}" alt="Nutriscone" />
            <div>
              <p class="eyebrow">Simulador de producción alimentaria</p>
              <h1>Producción de Scones</h1>
            </div>
          </div>
          <div class="header-summary">
            <span><i data-lucide="chef-hat"></i>${t.products.length} recetas</span>
            <span><i data-lucide="wheat"></i>${t.materials.length} ingredientes</span>
            <span><i data-lucide="factory"></i>${t.resources.length} estaciones</span>
          </div>
        </header>
        <div class="workspace">
          ${et(t)}
          ${dt(t)}
          ${Je(t)}
        </div>
      </div>
    `,l(),mt()}p()},Z=document.querySelector("#app");if(!Z)throw new Error("No se encontró el contenedor principal de la aplicación.");yt(Z);
