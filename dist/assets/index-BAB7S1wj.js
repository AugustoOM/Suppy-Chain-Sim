(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=([e,t,a])=>{const r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(n=>{r.setAttribute(n,String(t[n]))}),a!=null&&a.length&&a.forEach(n=>{const o=Z(n);r.appendChild(o)}),r},te=(e,t={})=>{const a="svg",r={...D,...t};return Z([a,r,e])};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=e=>{const t=ne(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),j=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",F=(e,{nameAttr:t,icons:a,attrs:r})=>{var f;const n=e.getAttribute(t);if(n==null)return;const o=ie(n),i=a[o];if(!i)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const s=oe(e),b=ae(s)?{}:{"aria-hidden":"true"},c={...D,"data-lucide":n,...b,...r,...s},d=j(s),S=j(r),p=re("lucide",`lucide-${n}`,...d,...S);p&&Object.assign(c,{class:p});const l=te(i,c);return(f=e.parentNode)==null?void 0:f.replaceChild(l,e)};/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M12 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=[["path",{d:"M16 5H3"}],["path",{d:"M11 12H3"}],["path",{d:"M16 19H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]];/**
 * @license lucide v1.17.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=({icons:e={},nameAttr:t="data-lucide",attrs:a={},root:r=document,inTemplates:n}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(r.querySelectorAll(`[${t}]`)).forEach(i=>F(i,{nameAttr:t,icons:e,attrs:a})),n&&Array.from(r.querySelectorAll("template")).forEach(s=>_({icons:e,nameAttr:t,attrs:a,root:s.content,inTemplates:n})),t==="data-lucide"){const i=r.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(s=>F(s,{nameAttr:"icon-name",icons:e,attrs:a})))}},ze="/assets/Logo-nutriscone-wEeX_mNn.jpeg",E={products:[{id:"scone-clasico",name:"Scone clásico",demandPerHour:90,targetProduction:720,billOfMaterials:[{materialId:"harina",quantityPerUnit:.075},{materialId:"manteca",quantityPerUnit:.018},{materialId:"leche",quantityPerUnit:.028},{materialId:"huevo",quantityPerUnit:.08},{materialId:"azucar",quantityPerUnit:.012},{materialId:"polvo-hornear",quantityPerUnit:.003}],route:[{resourceId:"pesado",processTimeMinutes:.45},{resourceId:"mezclado",processTimeMinutes:.7},{resourceId:"formado",processTimeMinutes:.55},{resourceId:"horneado",processTimeMinutes:1.25},{resourceId:"enfriado",processTimeMinutes:.5},{resourceId:"empaque",processTimeMinutes:.35}]},{id:"scone-arandanos",name:"Scone con arándanos",demandPerHour:64,targetProduction:480,billOfMaterials:[{materialId:"harina",quantityPerUnit:.072},{materialId:"manteca",quantityPerUnit:.02},{materialId:"leche",quantityPerUnit:.026},{materialId:"huevo",quantityPerUnit:.08},{materialId:"azucar",quantityPerUnit:.015},{materialId:"polvo-hornear",quantityPerUnit:.003},{materialId:"arandanos",quantityPerUnit:.022}],route:[{resourceId:"pesado",processTimeMinutes:.5},{resourceId:"mezclado",processTimeMinutes:.8},{resourceId:"formado",processTimeMinutes:.65},{resourceId:"horneado",processTimeMinutes:1.35},{resourceId:"enfriado",processTimeMinutes:.55},{resourceId:"empaque",processTimeMinutes:.4}]}],materials:[{id:"harina",name:"Harina 0000",unit:"kg",initialStock:95,currentStock:95,reorderPoint:28},{id:"manteca",name:"Manteca fría",unit:"kg",initialStock:24,currentStock:24,reorderPoint:7},{id:"leche",name:"Leche",unit:"litros",initialStock:36,currentStock:36,reorderPoint:10},{id:"huevo",name:"Huevo batido",unit:"unidades",initialStock:130,currentStock:130,reorderPoint:36},{id:"azucar",name:"Azúcar",unit:"kg",initialStock:18,currentStock:18,reorderPoint:5},{id:"polvo-hornear",name:"Polvo de hornear",unit:"kg",initialStock:4.2,currentStock:4.2,reorderPoint:1.2},{id:"arandanos",name:"Arándanos",unit:"kg",initialStock:12,currentStock:12,reorderPoint:4}],resources:[{id:"pesado",name:"Pesado de ingredientes",capacityPerHour:180,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:160},{id:"mezclado",name:"Mezclado de masa",capacityPerHour:118,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:120},{id:"formado",name:"Formado y corte",capacityPerHour:130,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:130},{id:"horneado",name:"Horneado",capacityPerHour:92,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:100},{id:"enfriado",name:"Enfriado",capacityPerHour:150,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:140},{id:"empaque",name:"Empaque",capacityPerHour:170,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:150}]},Ae=()=>({totalCompletedUnits:0,completedUnitsByProduct:{},demandFulfillmentPercentage:0,averageResourceUtilization:0,bottleneckResourceId:null,materialsConsumed:{},materialsRemaining:{},activeAlerts:0,estimatedLostProduction:0}),J=e=>e.length===0?null:e.reduce((t,a)=>{const r=t.currentUtilization+t.queue/Math.max(t.maxQueue,1)*100;return a.currentUtilization+a.queue/Math.max(a.maxQueue,1)*100>r?a:t}),Y=(e,t)=>{const a=Object.values(e.completedUnitsByProduct).reduce((c,d)=>c+d,0),r=Math.max(e.simulatedMinutes/60,1/60),n=e.products.reduce((c,d)=>c+d.demandPerHour*r,0),o=e.resources.length?e.resources.reduce((c,d)=>c+d.currentUtilization,0)/e.resources.length:0,i=J(e.resources),s=e.products.reduce((c,d)=>{const S=d.route.reduce((p,l)=>{const f=e.resources.find(w=>w.id===l.resourceId);if(!f)return p;const y=60/Math.max(l.processTimeMinutes,.1);return Math.min(p,f.capacityPerHour,y)},Number.POSITIVE_INFINITY);return c+(Number.isFinite(S)?S:0)},0),b=e.products.reduce((c,d)=>c+d.demandPerHour,0);return{totalCompletedUnits:a,completedUnitsByProduct:{...e.completedUnitsByProduct},demandFulfillmentPercentage:n>0?Math.min(100,a/n*100):100,averageResourceUtilization:o,bottleneckResourceId:(i==null?void 0:i.id)??null,materialsConsumed:{...t},materialsRemaining:Object.fromEntries(e.materials.map(c=>[c.id,c.currentStock])),activeAlerts:e.alerts.length,estimatedLostProduction:Math.max(0,b-s)*r}},Te=(e,t)=>`${e}-${t}-${Math.random().toString(36).slice(2,8)}`,P=(e,t,a,r,n)=>{e.some(i=>i.message===a&&r-i.timestamp<=12)||e.unshift({id:Te(n,r),type:t,message:a,timestamp:r})},Ne=(e,t)=>{const a=e.products.find(r=>r.id===t);return!a||a.route.length===0?0:a.route.reduce((r,n)=>{const o=e.resources.find(s=>s.id===n.resourceId);if(!o)return r;const i=60/Math.max(n.processTimeMinutes,.1);return Math.min(r,o.capacityPerHour,i)},Number.POSITIVE_INFINITY)},V=e=>e.queue/Math.max(e.maxQueue,1),He=e=>{const t=[...e.alerts],a=e.simulatedMinutes;e.resources.forEach(n=>{n.currentUtilization>=95?P(t,"critical",`${n.name} opera al ${n.currentUtilization.toFixed(0)}% de utilización.`,a,"utilizacion-critica"):n.currentUtilization>=85&&P(t,"warning",`${n.name} supera el 85% de utilización.`,a,"utilizacion-alta"),V(n)>=.8&&P(t,"warning",`La cola de ${n.name} supera el 80% de su capacidad.`,a,"cola-alta")}),e.materials.forEach(n=>{n.currentStock<=0?P(t,"critical",`${n.name} está agotado.`,a,"stockout"):n.currentStock<=n.reorderPoint&&P(t,"warning",`${n.name} está por debajo del punto de reposición.`,a,"inventario-bajo")}),e.products.forEach(n=>{const o=Ne(e,n.id);n.demandPerHour>o&&o>0&&P(t,"warning",`La demanda de ${n.name} supera la capacidad disponible estimada.`,a,"demanda-alta")});const r=J(e.resources);return r&&(r.currentUtilization>=80||V(r)>=.55)&&P(t,"info",`${r.name} es el principal cuello de botella activo.`,a,"cuello-botella"),t.slice(0,40)},Oe=e=>`${e}-${crypto.randomUUID()}`;let U={};const Re=e=>({products:structuredClone(e.products),materials:structuredClone(e.materials),resources:structuredClone(e.resources)}),G=(e=E)=>{const t=Re(e);U={};const a={isRunning:!1,simulatedMinutes:0,speed:1,products:t.products,materials:t.materials,resources:t.resources,completedUnitsByProduct:Object.fromEntries(t.products.map(r=>[r.id,0])),alerts:[{id:Oe("info"),type:"info",message:"Obrador listo para simular la producción de scones.",timestamp:0}],metrics:Ae()};return{...a,metrics:Y(a,U)}},Q=(e,t)=>{const a=e.completedUnitsByProduct[t.id]??0,r=Math.max(t.targetProduction-a,0);return t.demandPerHour/60+r/Math.max(t.targetProduction,1)},je=(e,t)=>t.billOfMaterials.length===0?Number.POSITIVE_INFINITY:t.billOfMaterials.reduce((a,r)=>{const n=e.materials.find(o=>o.id===r.materialId);return n?Math.min(a,Math.floor(n.currentStock/Math.max(r.quantityPerUnit,.001))):0},Number.POSITIVE_INFINITY),Fe=(e,t)=>t.route.length===0?0:t.route.reduce((a,r)=>{const n=e.resources.find(i=>i.id===r.resourceId);if(!n)return 0;const o=60/Math.max(r.processTimeMinutes,.1);return Math.min(a,n.capacityPerHour,o)},Number.POSITIVE_INFINITY)/60,Ve=(e,t,a)=>{t.billOfMaterials.forEach(r=>{const n=e.materials.find(i=>i.id===r.materialId);if(!n)return;const o=r.quantityPerUnit*a;n.currentStock=Math.max(0,n.currentStock-o),U[n.id]=(U[n.id]??0)+o})},Qe=(e,t,a,r)=>{t.route.forEach(n=>{const o=e.resources.find(c=>c.id===n.resourceId);if(!o)return;const i=Math.min(o.capacityPerHour,60/Math.max(n.processTimeMinutes,.1)),s=r*60,b=Math.max(0,r-a);o.currentUtilization=Math.min(o.maxUtilization,o.currentUtilization+s/Math.max(i,.1)*100),o.queue=Math.min(o.maxQueue,o.queue+b*n.processTimeMinutes/Math.max(n.processTimeMinutes,1))})},Be=e=>{e.resources.forEach(t=>{t.currentUtilization=Math.max(0,Math.min(t.maxUtilization,t.currentUtilization*.68));const a=t.capacityPerHour/60;t.queue=Math.max(0,t.queue-a)})},De=(e,t,a)=>{e.completedUnitsByProduct[t.id]=(e.completedUnitsByProduct[t.id]??0)+a},Ze=(e,t)=>{const a=e.completedUnitsByProduct[t.id]??0;if(a>=t.targetProduction)return;const r=Math.min(t.demandPerHour/60,t.targetProduction-a),n=je(e,t),o=Fe(e,t),i=Math.max(0,Math.min(r,n,o));i>0&&(Ve(e,t,i),De(e,t,i)),Qe(e,t,i,r)},_e=e=>{const t={...e,simulatedMinutes:e.simulatedMinutes+1,products:structuredClone(e.products),materials:structuredClone(e.materials),resources:structuredClone(e.resources),completedUnitsByProduct:{...e.completedUnitsByProduct},alerts:[...e.alerts],metrics:{...e.metrics}};return Be(t),[...t.products].sort((a,r)=>Q(t,r)-Q(t,a)).forEach(a=>Ze(t,a)),t.alerts=He(t),t.metrics=Y(t,U),t},Je=e=>G({products:e.products,materials:e.materials.map(t=>({...t,currentStock:t.initialStock})),resources:e.resources.map(t=>({...t,currentUtilization:0,queue:0}))}),I=e=>G(e),W="production-chain-simulator:scenario",Ye="production-chain-simulator:last-results",Ge=e=>{const t={products:e.products,materials:e.materials.map(a=>({...a,currentStock:a.initialStock})),resources:e.resources.map(a=>({...a,currentUtilization:0,queue:0}))};localStorage.setItem(W,JSON.stringify(t))},We=()=>{const e=localStorage.getItem(W);if(!e)return null;try{return JSON.parse(e)}catch{return null}},Ke=e=>{localStorage.setItem(Ye,JSON.stringify(e.metrics))},Xe=e=>{const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=`resultados-simulacion-${Date.now()}.json`,r.click(),URL.revokeObjectURL(a)},et=e=>{const t=Math.floor(e/60),a=e%60;return`${t}h ${a}m`},tt=e=>e==="critical"?"Crítica":e==="warning"?"Advertencia":"Info",at=e=>e==="critical"?"circle-alert":e==="warning"?"triangle-alert":"info",rt=e=>`
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
              <span><i data-lucide="${at(t.type)}"></i>${tt(t.type)}</span>
              <time>${et(t.timestamp)}</time>
            </div>
            <p>${t.message}</p>
          </article>
        `).join(""):'<p class="empty-state">No hay alertas activas.</p>'}
    </div>
  </aside>
`,x=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e),B=e=>e.map(t=>`<option value="${t.id}">${t.name}</option>`).join(""),nt=e=>e.map(t=>`<option value="${t.id}">${t.name}</option>`).join(""),it=e=>e.map(t=>`<option value="${t.id}">${t.name}</option>`).join(""),u=e=>`<i data-lucide="${e}"></i>`,ot=e=>`
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
            <td>${x(t.demandPerHour)}</td>
            <td>${x(t.targetProduction)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`,st=e=>`
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
            <td>${x(t.currentStock)} ${t.unit}</td>
            <td>${x(t.reorderPoint)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`,ct=e=>`
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
            <td>${x(t.capacityPerHour)}</td>
            <td>${x(t.maxQueue)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`,lt=e=>`
  <aside class="config-panel">
    <div class="panel-header">
      <div>
        <p class="eyebrow">Configuración</p>
        <h2>Obrador de scones</h2>
      </div>
    </div>

    <div class="config-actions">
      <button id="load-demo" class="button secondary" type="button">${u("cookie")}Cargar demo</button>
      <button id="save-scenario" class="button secondary" type="button">${u("save")}Guardar</button>
      <button id="load-scenario" class="button secondary" type="button">${u("folder-open")}Cargar</button>
      <button id="reset-demo" class="button secondary" type="button">${u("refresh-cw")}Reset demo</button>
    </div>

    <section class="config-section">
      <h3>${u("chef-hat")}Agregar receta</h3>
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
        <button class="button primary" type="submit">${u("plus")}Agregar receta</button>
      </form>
      ${ot(e.products)}
    </section>

    <section class="config-section">
      <h3>${u("wheat")}Agregar ingrediente</h3>
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
        <button class="button primary" type="submit">${u("plus")}Agregar ingrediente</button>
      </form>
      ${st(e.materials)}
    </section>

    <section class="config-section">
      <h3>${u("factory")}Agregar estación</h3>
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
        <button class="button primary" type="submit">${u("plus")}Agregar estación</button>
      </form>
      ${ct(e.resources)}
    </section>

    <section class="config-section">
      <h3>${u("workflow")}Conectar proceso</h3>
      <form id="bom-form" class="form-grid">
        <label class="field">
          <span>Receta</span>
          <select name="productId" required>${B(e.products)}</select>
        </label>
        <label class="field">
          <span>Ingrediente</span>
          <select name="materialId" required>${nt(e.materials)}</select>
        </label>
        <label class="field">
          <span>Cantidad por unidad</span>
          <input name="quantityPerUnit" type="number" min="0.01" step="0.01" required />
        </label>
        <button class="button primary" type="submit">${u("link")}Agregar ingrediente</button>
      </form>

      <form id="route-form" class="form-grid">
        <label class="field">
          <span>Receta</span>
          <select name="productId" required>${B(e.products)}</select>
        </label>
        <label class="field">
          <span>Estación</span>
          <select name="resourceId" required>${it(e.resources)}</select>
        </label>
        <label class="field">
          <span>Minutos de proceso</span>
          <input name="processTimeMinutes" type="number" min="0.1" step="0.1" required />
        </label>
        <button class="button primary" type="submit">${u("list-plus")}Agregar etapa</button>
      </form>
    </section>
  </aside>
`,g=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e),dt=e=>{const t=Math.floor(e/60),a=e%60;return`${t.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`},ut=(e,t)=>{var a;return((a=e.find(r=>r.id===t))==null?void 0:a.name)??t},K=(e,t)=>{var a;return((a=e.find(r=>r.id===t))==null?void 0:a.name)??"Sin datos"},h=e=>`<i data-lucide="${e}"></i>`,mt=e=>e.currentStock<=0?"critical":e.currentStock<=e.reorderPoint?"warning":"success",pt=e=>`
  <section class="metrics-grid">
    <article class="metric-card">
      <span>${h("timer")}Tiempo simulado</span>
      <strong>${dt(e.simulatedMinutes)}</strong>
    </article>
    <article class="metric-card">
      <span>${h("cookie")}Scones terminados</span>
      <strong>${g(e.metrics.totalCompletedUnits)}</strong>
    </article>
    <article class="metric-card">
      <span>${h("target")}Cumplimiento demanda</span>
      <strong>${g(e.metrics.demandFulfillmentPercentage)}%</strong>
    </article>
    <article class="metric-card">
      <span>${h("flame")}Cuello de botella</span>
      <strong>${K(e.resources,e.metrics.bottleneckResourceId)}</strong>
    </article>
    <article class="metric-card">
      <span>${h("gauge")}Utilización promedio</span>
      <strong>${g(e.metrics.averageResourceUtilization)}%</strong>
    </article>
    <article class="metric-card">
      <span>${h("bell")}Alertas activas</span>
      <strong>${e.alerts.length}</strong>
    </article>
    <article class="metric-card">
      <span>${h("triangle-alert")}Merma estimada</span>
      <strong>${g(e.metrics.estimatedLostProduction)}</strong>
    </article>
  </section>
`,ht=e=>`
  <section class="dashboard-section">
    <div class="section-heading">
      <h2>${h("wheat")}Ingredientes</h2>
      <span>Stock restante y consumo por receta</span>
    </div>
    <div class="inventory-list">
      ${e.materials.map(t=>{const a=Math.max(t.initialStock,1),r=Math.max(0,Math.min(100,t.currentStock/a*100)),n=e.metrics.materialsConsumed[t.id]??0;return`
          <article class="inventory-item ${mt(t)}">
            <div>
              <strong>${t.name}</strong>
              <span>${g(t.currentStock)} ${t.unit} restantes</span>
            </div>
            <div class="progress-track">
              <span style="width: ${r}%"></span>
            </div>
            <small>Consumido: ${g(n)} ${t.unit}</small>
          </article>
        `}).join("")}
    </div>
  </section>
`,gt=e=>e>=95?"critical":e>=85?"warning":"success",ft=e=>`
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
              <span>${g(t.queue)} / ${g(t.maxQueue)} en cola</span>
            </div>
            <div class="utilization-block">
              <div class="progress-track ${gt(a)}">
                <span style="width: ${a}%"></span>
              </div>
              <b>${g(a)}%</b>
            </div>
            <div class="queue-track">
              <span style="width: ${r}%"></span>
            </div>
          </article>
        `}).join("")}
    </div>
  </section>
`,bt=e=>`
  <section class="dashboard-section">
    <div class="section-heading">
      <h2>${h("clipboard-check")}Lotes completados</h2>
      <span>Scones terminados por receta</span>
    </div>
    <div class="product-output-grid">
      ${Object.entries(e.completedUnitsByProduct).map(([t,a])=>`
        <article class="output-card">
          <span>${ut(e.products,t)}</span>
          <strong>${g(a)}</strong>
        </article>
      `).join("")}
    </div>
  </section>
`,yt=e=>`
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
                  ${K(e.resources,a.resourceId)}
                  <small>${g(a.processTimeMinutes)} min</small>
                </span>
                ${r<t.route.length-1?"<i></i>":""}
              `).join(""):'<span class="flow-node empty">Sin proceso</span>'}
          </div>
        </article>
      `).join("")}
    </div>
  </section>
`,vt=e=>`
  <main class="dashboard">
    ${pt(e)}
    <div class="dashboard-grid">
      ${ht(e)}
      ${ft(e)}
    </div>
    ${bt(e)}
    ${yt(e)}
  </main>
`,L=e=>`${e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"item"}-${Math.random().toString(36).slice(2,7)}`,m=(e,t)=>{const a=new FormData(e).get(t);return typeof a=="string"?a.trim():""},M=(e,t)=>Number(m(e,t)),$t={Activity:se,Bell:ce,ChefHat:le,CircleAlert:de,ClipboardCheck:ue,Cookie:me,Download:pe,Factory:he,Flame:ge,FolderOpen:fe,Gauge:be,Info:ye,Link:ve,ListPlus:$e,Pause:Me,Play:Pe,Plus:Se,RefreshCw:we,RotateCcw:xe,Save:Ie,Settings:Ue,Target:ke,Timer:qe,TriangleAlert:Ce,Wheat:Ee,Workflow:Le},$=e=>`<i data-lucide="${e}"></i>`,Mt=()=>{_({icons:$t,attrs:{"aria-hidden":"true","stroke-width":"2.2"}})},v=(e,t,a)=>({...e,alerts:[{id:L("alerta"),type:t,message:a,timestamp:e.simulatedMinutes},...e.alerts].slice(0,40)}),k=e=>({products:e.products,materials:e.materials,resources:e.resources}),q=(e,t)=>({...I(t),speed:e.speed}),Pt=(e,t)=>{const a={id:L(m(t,"name")),name:m(t,"name"),demandPerHour:M(t,"demandPerHour"),targetProduction:M(t,"targetProduction"),billOfMaterials:[],route:[]};return v(q(e,{...k(e),products:[...e.products,a]}),"info",`${a.name} agregado al plan de producción.`)},St=(e,t)=>{const a=M(t,"initialStock"),r={id:L(m(t,"name")),name:m(t,"name"),unit:m(t,"unit"),initialStock:a,currentStock:a,reorderPoint:M(t,"reorderPoint")};return v(q(e,{...k(e),materials:[...e.materials,r]}),"info",`${r.name} agregado al inventario de ingredientes.`)},wt=(e,t)=>{const a={id:L(m(t,"name")),name:m(t,"name"),capacityPerHour:M(t,"capacityPerHour"),maxUtilization:100,currentUtilization:0,queue:0,maxQueue:M(t,"maxQueue")};return v(q(e,{...k(e),resources:[...e.resources,a]}),"info",`${a.name} agregado como estación del obrador.`)},xt=(e,t)=>{const a=m(t,"productId"),r=m(t,"materialId"),n=M(t,"quantityPerUnit"),o=e.products.map(i=>{if(i.id!==a)return i;const s=i.billOfMaterials.filter(b=>b.materialId!==r);return{...i,billOfMaterials:[...s,{materialId:r,quantityPerUnit:n}]}});return v(q(e,{...k(e),products:o}),"info","Ingrediente conectado a la receta.")},It=(e,t)=>{const a=m(t,"productId"),r=m(t,"resourceId"),n=M(t,"processTimeMinutes"),o=e.products.map(i=>i.id===a?{...i,route:[...i.route,{resourceId:r,processTimeMinutes:n}]}:i);return v(q(e,{...k(e),products:o}),"info","Etapa agregada al proceso de la receta.")},Ut=e=>{let t=I(E),a="configuration",r=null;const n=()=>{r!==null&&(window.clearInterval(r),r=null)},o=()=>{n(),t.isRunning&&(r=window.setInterval(()=>{t=_e(t),Ke(t),p(),o()},Math.max(40,1e3/t.speed)))},i=l=>{t=l,p(),o()},s=(l,f)=>{const y=e.querySelector(`#${l}`);y==null||y.addEventListener("submit",w=>{w.preventDefault(),i(f(t,y))})},b=()=>{var l,f,y,w,z,A,T,N,H,O,R;(l=e.querySelector("#view-configuration"))==null||l.addEventListener("click",()=>{a="configuration",p()}),(f=e.querySelector("#view-execution"))==null||f.addEventListener("click",()=>{a="execution",p()}),(y=e.querySelector("#load-demo"))==null||y.addEventListener("click",()=>{i({...I(E),speed:t.speed})}),(w=e.querySelector("#reset-demo"))==null||w.addEventListener("click",()=>{i({...I(E),speed:t.speed})}),(z=e.querySelector("#start-simulation"))==null||z.addEventListener("click",()=>{a="execution",i({...t,isRunning:!0})}),(A=e.querySelector("#pause-simulation"))==null||A.addEventListener("click",()=>{i({...t,isRunning:!1})}),(T=e.querySelector("#reset-simulation"))==null||T.addEventListener("click",()=>{i({...Je(t),speed:t.speed})}),(N=e.querySelector("#save-scenario"))==null||N.addEventListener("click",()=>{Ge(t),i(v(t,"info","Plan del obrador guardado en el navegador."))}),(H=e.querySelector("#load-scenario"))==null||H.addEventListener("click",()=>{const C=We();i(C?v({...I(C),speed:t.speed},"info","Plan del obrador cargado desde el navegador."):v(t,"warning","No hay un plan guardado."))}),(O=e.querySelector("#export-results"))==null||O.addEventListener("click",()=>{Xe(t),i(v(t,"info","Resultados del obrador exportados como JSON."))}),(R=e.querySelector("#speed-selector"))==null||R.addEventListener("change",C=>{const ee=Number(C.currentTarget.value);i({...t,speed:ee})}),s("product-form",Pt),s("material-form",St),s("resource-form",wt),s("bom-form",xt),s("route-form",It)},c=()=>`
    <nav class="view-tabs" aria-label="Secciones del simulador">
      <button
        id="view-configuration"
        class="view-tab ${a==="configuration"?"active":""}"
        type="button"
        aria-current="${a==="configuration"?"page":"false"}"
      >
        ${$("settings")}Configuración
      </button>
      <button
        id="view-execution"
        class="view-tab ${a==="execution"?"active":""}"
        type="button"
        aria-current="${a==="execution"?"page":"false"}"
      >
        ${$("activity")}Ejecución
      </button>
    </nav>
  `,d=()=>`
    <section class="execution-controls">
      <div class="panel-header">
        <div>
          <p class="eyebrow">Ejecución</p>
          <h2>${$("workflow")}Proceso de producción</h2>
        </div>
        <span class="status-pill ${t.isRunning?"status-running":"status-paused"}">
          ${$(t.isRunning?"play":"pause")}${t.isRunning?"En marcha":"Pausado"}
        </span>
      </div>
      <div class="control-grid execution-grid">
        <button id="start-simulation" class="button success" type="button">${$("play")}Iniciar</button>
        <button id="pause-simulation" class="button warning" type="button">${$("pause")}Pausar</button>
        <button id="reset-simulation" class="button danger" type="button">${$("rotate-ccw")}Reiniciar</button>
        <button id="export-results" class="button secondary" type="button">${$("download")}Exportar</button>
      </div>
      <label class="field speed-field">
        <span>Velocidad</span>
        <select id="speed-selector">
          ${[1,5,10,30].map(l=>`
            <option value="${l}" ${t.speed===l?"selected":""}>${l}x</option>
          `).join("")}
        </select>
      </label>
    </section>
  `,S=()=>a==="configuration"?`
        <div class="config-page">
          ${lt(t)}
        </div>
      `:`
      <div class="execution-page">
        <div class="execution-main">
          ${d()}
          ${vt(t)}
        </div>
        ${rt(t)}
      </div>
    `;function p(){e.innerHTML=`
      <div class="app-shell">
        <header class="app-header">
          <div class="brand-lockup">
            <img src="${ze}" alt="Nutriscone" />
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
        ${c()}
        ${S()}
      </div>
    `,b(),Mt()}p()},X=document.querySelector("#app");if(!X)throw new Error("No se encontró el contenedor principal de la aplicación.");Ut(X);
