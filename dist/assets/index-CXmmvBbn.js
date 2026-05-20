(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const k={products:[{id:"mesa-madera",name:"Mesa de madera",demandPerHour:18,targetProduction:150,billOfMaterials:[{materialId:"madera",quantityPerUnit:4},{materialId:"tornillos",quantityPerUnit:20},{materialId:"barniz",quantityPerUnit:1.2}],route:[{resourceId:"corte",processTimeMinutes:5},{resourceId:"ensamblado",processTimeMinutes:11},{resourceId:"pintura",processTimeMinutes:7},{resourceId:"calidad",processTimeMinutes:3}]},{id:"silla-madera",name:"Silla de madera",demandPerHour:32,targetProduction:260,billOfMaterials:[{materialId:"madera",quantityPerUnit:2},{materialId:"tornillos",quantityPerUnit:12},{materialId:"barniz",quantityPerUnit:.7}],route:[{resourceId:"corte",processTimeMinutes:3},{resourceId:"ensamblado",processTimeMinutes:8},{resourceId:"pintura",processTimeMinutes:5},{resourceId:"calidad",processTimeMinutes:2}]}],materials:[{id:"madera",name:"Madera",unit:"tablas",initialStock:780,currentStock:780,reorderPoint:260},{id:"tornillos",name:"Tornillos",unit:"unidades",initialStock:4600,currentStock:4600,reorderPoint:1400},{id:"barniz",name:"Barniz",unit:"litros",initialStock:32,currentStock:32,reorderPoint:24}],resources:[{id:"corte",name:"Corte",capacityPerHour:52,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:80},{id:"ensamblado",name:"Ensamblado",capacityPerHour:34,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:60},{id:"pintura",name:"Pintura",capacityPerHour:28,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:46},{id:"calidad",name:"Control de calidad",capacityPerHour:60,maxUtilization:100,currentUtilization:0,queue:0,maxQueue:70}]},F=()=>({totalCompletedUnits:0,completedUnitsByProduct:{},demandFulfillmentPercentage:0,averageResourceUtilization:0,bottleneckResourceId:null,materialsConsumed:{},materialsRemaining:{},activeAlerts:0,estimatedLostProduction:0}),N=e=>e.length===0?null:e.reduce((t,r)=>{const n=t.currentUtilization+t.queue/Math.max(t.maxQueue,1)*100;return r.currentUtilization+r.queue/Math.max(r.maxQueue,1)*100>n?r:t}),R=(e,t)=>{const r=Object.values(e.completedUnitsByProduct).reduce((o,c)=>o+c,0),n=Math.max(e.simulatedMinutes/60,1/60),a=e.products.reduce((o,c)=>o+c.demandPerHour*n,0),i=e.resources.length?e.resources.reduce((o,c)=>o+c.currentUtilization,0)/e.resources.length:0,s=N(e.resources),m=e.products.reduce((o,c)=>{const u=c.route.reduce((h,v)=>{const P=e.resources.find(x=>x.id===v.resourceId);if(!P)return h;const U=60/Math.max(v.processTimeMinutes,.1);return Math.min(h,P.capacityPerHour,U)},Number.POSITIVE_INFINITY);return o+(Number.isFinite(u)?u:0)},0),p=e.products.reduce((o,c)=>o+c.demandPerHour,0);return{totalCompletedUnits:r,completedUnitsByProduct:{...e.completedUnitsByProduct},demandFulfillmentPercentage:a>0?Math.min(100,r/a*100):100,averageResourceUtilization:i,bottleneckResourceId:(s==null?void 0:s.id)??null,materialsConsumed:{...t},materialsRemaining:Object.fromEntries(e.materials.map(o=>[o.id,o.currentStock])),activeAlerts:e.alerts.length,estimatedLostProduction:Math.max(0,p-m)*n}},B=(e,t)=>`${e}-${t}-${Math.random().toString(36).slice(2,8)}`,f=(e,t,r,n,a)=>{e.some(s=>s.message===r&&n-s.timestamp<=12)||e.unshift({id:B(a,n),type:t,message:r,timestamp:n})},Q=(e,t)=>{const r=e.products.find(n=>n.id===t);return!r||r.route.length===0?0:r.route.reduce((n,a)=>{const i=e.resources.find(m=>m.id===a.resourceId);if(!i)return n;const s=60/Math.max(a.processTimeMinutes,.1);return Math.min(n,i.capacityPerHour,s)},Number.POSITIVE_INFINITY)},z=e=>e.queue/Math.max(e.maxQueue,1),D=e=>{const t=[...e.alerts],r=e.simulatedMinutes;e.resources.forEach(a=>{a.currentUtilization>=95?f(t,"critical",`${a.name} opera al ${a.currentUtilization.toFixed(0)}% de utilización.`,r,"utilizacion-critica"):a.currentUtilization>=85&&f(t,"warning",`${a.name} supera el 85% de utilización.`,r,"utilizacion-alta"),z(a)>=.8&&f(t,"warning",`La cola de ${a.name} supera el 80% de su capacidad.`,r,"cola-alta")}),e.materials.forEach(a=>{a.currentStock<=0?f(t,"critical",`${a.name} está agotado.`,r,"stockout"):a.currentStock<=a.reorderPoint&&f(t,"warning",`${a.name} está por debajo del punto de reposición.`,r,"inventario-bajo")}),e.products.forEach(a=>{const i=Q(e,a.id);a.demandPerHour>i&&i>0&&f(t,"warning",`La demanda de ${a.name} supera la capacidad disponible estimada.`,r,"demanda-alta")});const n=N(e.resources);return n&&(n.currentUtilization>=80||z(n)>=.55)&&f(t,"info",`${n.name} es el principal cuello de botella activo.`,r,"cuello-botella"),t.slice(0,40)},V=e=>`${e}-${crypto.randomUUID()}`;let M={};const J=e=>({products:structuredClone(e.products),materials:structuredClone(e.materials),resources:structuredClone(e.resources)}),L=(e=k)=>{const t=J(e);M={};const r={isRunning:!1,simulatedMinutes:0,speed:1,products:t.products,materials:t.materials,resources:t.resources,completedUnitsByProduct:Object.fromEntries(t.products.map(n=>[n.id,0])),alerts:[{id:V("info"),type:"info",message:"Escenario listo para simular.",timestamp:0}],metrics:F()};return{...r,metrics:R(r,M)}},C=(e,t)=>{const r=e.completedUnitsByProduct[t.id]??0,n=Math.max(t.targetProduction-r,0);return t.demandPerHour/60+n/Math.max(t.targetProduction,1)},Y=(e,t)=>t.billOfMaterials.length===0?Number.POSITIVE_INFINITY:t.billOfMaterials.reduce((r,n)=>{const a=e.materials.find(i=>i.id===n.materialId);return a?Math.min(r,Math.floor(a.currentStock/Math.max(n.quantityPerUnit,.001))):0},Number.POSITIVE_INFINITY),_=(e,t)=>t.route.length===0?0:t.route.reduce((r,n)=>{const a=e.resources.find(s=>s.id===n.resourceId);if(!a)return 0;const i=60/Math.max(n.processTimeMinutes,.1);return Math.min(r,a.capacityPerHour,i)},Number.POSITIVE_INFINITY)/60,K=(e,t,r)=>{t.billOfMaterials.forEach(n=>{const a=e.materials.find(s=>s.id===n.materialId);if(!a)return;const i=n.quantityPerUnit*r;a.currentStock=Math.max(0,a.currentStock-i),M[a.id]=(M[a.id]??0)+i})},G=(e,t,r,n)=>{t.route.forEach(a=>{const i=e.resources.find(o=>o.id===a.resourceId);if(!i)return;const s=Math.min(i.capacityPerHour,60/Math.max(a.processTimeMinutes,.1)),m=n*60,p=Math.max(0,n-r);i.currentUtilization=Math.min(i.maxUtilization,i.currentUtilization+m/Math.max(s,.1)*100),i.queue=Math.min(i.maxQueue,i.queue+p*a.processTimeMinutes/Math.max(a.processTimeMinutes,1))})},W=e=>{e.resources.forEach(t=>{t.currentUtilization=Math.max(0,Math.min(t.maxUtilization,t.currentUtilization*.68));const r=t.capacityPerHour/60;t.queue=Math.max(0,t.queue-r)})},X=(e,t,r)=>{e.completedUnitsByProduct[t.id]=(e.completedUnitsByProduct[t.id]??0)+r},Z=(e,t)=>{const r=e.completedUnitsByProduct[t.id]??0;if(r>=t.targetProduction)return;const n=Math.min(t.demandPerHour/60,t.targetProduction-r),a=Y(e,t),i=_(e,t),s=Math.max(0,Math.min(n,a,i));s>0&&(K(e,t,s),X(e,t,s)),G(e,t,s,n)},ee=e=>{const t={...e,simulatedMinutes:e.simulatedMinutes+1,products:structuredClone(e.products),materials:structuredClone(e.materials),resources:structuredClone(e.resources),completedUnitsByProduct:{...e.completedUnitsByProduct},alerts:[...e.alerts],metrics:{...e.metrics}};return W(t),[...t.products].sort((r,n)=>C(t,n)-C(t,r)).forEach(r=>Z(t,r)),t.alerts=D(t),t.metrics=R(t,M),t},te=e=>L({products:e.products,materials:e.materials.map(t=>({...t,currentStock:t.initialStock})),resources:e.resources.map(t=>({...t,currentUtilization:0,queue:0}))}),$=e=>L(e),O="production-chain-simulator:scenario",re="production-chain-simulator:last-results",ae=e=>{const t={products:e.products,materials:e.materials.map(r=>({...r,currentStock:r.initialStock})),resources:e.resources.map(r=>({...r,currentUtilization:0,queue:0}))};localStorage.setItem(O,JSON.stringify(t))},ne=()=>{const e=localStorage.getItem(O);if(!e)return null;try{return JSON.parse(e)}catch{return null}},ie=e=>{localStorage.setItem(re,JSON.stringify(e.metrics))},se=e=>{const t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),r=URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download=`resultados-simulacion-${Date.now()}.json`,n.click(),URL.revokeObjectURL(r)},oe=e=>{const t=Math.floor(e/60),r=e%60;return`${t}h ${r}m`},ce=e=>e==="critical"?"Crítica":e==="warning"?"Advertencia":"Info",le=e=>`
  <aside class="alerts-panel">
    <div class="panel-header">
      <div>
        <p class="eyebrow">Monitoreo</p>
        <h2>Alertas</h2>
      </div>
      <span class="alert-counter">${e.alerts.length}</span>
    </div>
    <div class="alerts-list">
      ${e.alerts.length?e.alerts.map(t=>`
          <article class="alert-card ${t.type}">
            <div>
              <span>${ce(t.type)}</span>
              <time>${oe(t.timestamp)}</time>
            </div>
            <p>${t.message}</p>
          </article>
        `).join(""):'<p class="empty-state">No hay alertas activas.</p>'}
    </div>
  </aside>
`,y=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e),T=e=>e.map(t=>`<option value="${t.id}">${t.name}</option>`).join(""),de=e=>e.map(t=>`<option value="${t.id}">${t.name}</option>`).join(""),ue=e=>e.map(t=>`<option value="${t.id}">${t.name}</option>`).join(""),me=e=>`
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Demanda/h</th>
          <th>Objetivo</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>`
          <tr>
            <td>${t.name}</td>
            <td>${y(t.demandPerHour)}</td>
            <td>${y(t.targetProduction)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`,pe=e=>`
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Material</th>
          <th>Stock</th>
          <th>Reposición</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>`
          <tr>
            <td>${t.name}</td>
            <td>${y(t.currentStock)} ${t.unit}</td>
            <td>${y(t.reorderPoint)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`,be=e=>`
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Recurso</th>
          <th>Capacidad/h</th>
          <th>Cola max.</th>
        </tr>
      </thead>
      <tbody>
        ${e.map(t=>`
          <tr>
            <td>${t.name}</td>
            <td>${y(t.capacityPerHour)}</td>
            <td>${y(t.maxQueue)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>
`,ge=e=>`
  <aside class="config-panel">
    <div class="panel-header">
      <div>
        <p class="eyebrow">Configuración</p>
        <h2>Escenario productivo</h2>
      </div>
      <span class="status-pill ${e.isRunning?"status-running":"status-paused"}">
        ${e.isRunning?"En marcha":"Pausado"}
      </span>
    </div>

    <div class="control-grid">
      <button id="load-demo" class="button secondary" type="button">Demo</button>
      <button id="save-scenario" class="button secondary" type="button">Guardar</button>
      <button id="load-scenario" class="button secondary" type="button">Cargar</button>
      <button id="export-results" class="button secondary" type="button">Exportar</button>
      <button id="start-simulation" class="button success" type="button">Iniciar</button>
      <button id="pause-simulation" class="button warning" type="button">Pausar</button>
      <button id="reset-simulation" class="button danger" type="button">Reiniciar</button>
      <button id="reset-demo" class="button secondary" type="button">Reset demo</button>
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
      <h3>Agregar producto</h3>
      <form id="product-form" class="form-grid">
        <label class="field">
          <span>Nombre</span>
          <input name="name" required placeholder="Ej. Estantería" />
        </label>
        <label class="field">
          <span>Demanda por hora</span>
          <input name="demandPerHour" type="number" min="0" step="1" required />
        </label>
        <label class="field">
          <span>Objetivo</span>
          <input name="targetProduction" type="number" min="1" step="1" required />
        </label>
        <button class="button primary" type="submit">Agregar producto</button>
      </form>
      ${me(e.products)}
    </section>

    <section class="config-section">
      <h3>Agregar material</h3>
      <form id="material-form" class="form-grid">
        <label class="field">
          <span>Nombre</span>
          <input name="name" required placeholder="Ej. Herrajes" />
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
        <button class="button primary" type="submit">Agregar material</button>
      </form>
      ${pe(e.materials)}
    </section>

    <section class="config-section">
      <h3>Agregar recurso</h3>
      <form id="resource-form" class="form-grid">
        <label class="field">
          <span>Nombre</span>
          <input name="name" required placeholder="Ej. Embalaje" />
        </label>
        <label class="field">
          <span>Capacidad por hora</span>
          <input name="capacityPerHour" type="number" min="1" step="1" required />
        </label>
        <label class="field">
          <span>Cola máxima</span>
          <input name="maxQueue" type="number" min="1" step="1" required />
        </label>
        <button class="button primary" type="submit">Agregar recurso</button>
      </form>
      ${be(e.resources)}
    </section>

    <section class="config-section">
      <h3>Conectar cadena</h3>
      <form id="bom-form" class="form-grid">
        <label class="field">
          <span>Producto</span>
          <select name="productId" required>${T(e.products)}</select>
        </label>
        <label class="field">
          <span>Material</span>
          <select name="materialId" required>${de(e.materials)}</select>
        </label>
        <label class="field">
          <span>Cantidad por unidad</span>
          <input name="quantityPerUnit" type="number" min="0.01" step="0.01" required />
        </label>
        <button class="button primary" type="submit">Agregar material</button>
      </form>

      <form id="route-form" class="form-grid">
        <label class="field">
          <span>Producto</span>
          <select name="productId" required>${T(e.products)}</select>
        </label>
        <label class="field">
          <span>Recurso</span>
          <select name="resourceId" required>${ue(e.resources)}</select>
        </label>
        <label class="field">
          <span>Minutos de proceso</span>
          <input name="processTimeMinutes" type="number" min="0.1" step="0.1" required />
        </label>
        <button class="button primary" type="submit">Agregar etapa</button>
      </form>
    </section>
  </aside>
`,d=e=>new Intl.NumberFormat("es-ES",{maximumFractionDigits:1}).format(e),he=e=>{const t=Math.floor(e/60),r=e%60;return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`},fe=(e,t)=>{var r;return((r=e.find(n=>n.id===t))==null?void 0:r.name)??t},j=(e,t)=>{var r;return((r=e.find(n=>n.id===t))==null?void 0:r.name)??"Sin datos"},ye=e=>e.currentStock<=0?"critical":e.currentStock<=e.reorderPoint?"warning":"success",ve=e=>`
  <section class="metrics-grid">
    <article class="metric-card">
      <span>Tiempo simulado</span>
      <strong>${he(e.simulatedMinutes)}</strong>
    </article>
    <article class="metric-card">
      <span>Producción total</span>
      <strong>${d(e.metrics.totalCompletedUnits)}</strong>
    </article>
    <article class="metric-card">
      <span>Cumplimiento demanda</span>
      <strong>${d(e.metrics.demandFulfillmentPercentage)}%</strong>
    </article>
    <article class="metric-card">
      <span>Cuello de botella</span>
      <strong>${j(e.resources,e.metrics.bottleneckResourceId)}</strong>
    </article>
    <article class="metric-card">
      <span>Utilización promedio</span>
      <strong>${d(e.metrics.averageResourceUtilization)}%</strong>
    </article>
    <article class="metric-card">
      <span>Alertas activas</span>
      <strong>${e.alerts.length}</strong>
    </article>
    <article class="metric-card">
      <span>Pérdida estimada</span>
      <strong>${d(e.metrics.estimatedLostProduction)}</strong>
    </article>
  </section>
`,Pe=e=>`
  <section class="dashboard-section">
    <div class="section-heading">
      <h2>Inventario</h2>
      <span>Materiales restantes y consumidos</span>
    </div>
    <div class="inventory-list">
      ${e.materials.map(t=>{const r=Math.max(t.initialStock,1),n=Math.max(0,Math.min(100,t.currentStock/r*100)),a=e.metrics.materialsConsumed[t.id]??0;return`
          <article class="inventory-item ${ye(t)}">
            <div>
              <strong>${t.name}</strong>
              <span>${d(t.currentStock)} ${t.unit} restantes</span>
            </div>
            <div class="progress-track">
              <span style="width: ${n}%"></span>
            </div>
            <small>Consumido: ${d(a)} ${t.unit}</small>
          </article>
        `}).join("")}
    </div>
  </section>
`,$e=e=>e>=95?"critical":e>=85?"warning":"success",Me=e=>`
  <section class="dashboard-section">
    <div class="section-heading">
      <h2>Recursos</h2>
      <span>Utilización y colas de producción</span>
    </div>
    <div class="resource-list">
      ${e.resources.map(t=>{const r=Math.max(0,Math.min(100,t.currentUtilization)),n=Math.max(0,Math.min(100,t.queue/Math.max(t.maxQueue,1)*100));return`
          <article class="resource-row">
            <div class="resource-label">
              <strong>${t.name}</strong>
              <span>${d(t.queue)} / ${d(t.maxQueue)} en cola</span>
            </div>
            <div class="utilization-block">
              <div class="progress-track ${$e(r)}">
                <span style="width: ${r}%"></span>
              </div>
              <b>${d(r)}%</b>
            </div>
            <div class="queue-track">
              <span style="width: ${n}%"></span>
            </div>
          </article>
        `}).join("")}
    </div>
  </section>
`,Se=e=>`
  <section class="dashboard-section">
    <div class="section-heading">
      <h2>Producción completada</h2>
      <span>Unidades terminadas por producto</span>
    </div>
    <div class="product-output-grid">
      ${Object.entries(e.completedUnitsByProduct).map(([t,r])=>`
        <article class="output-card">
          <span>${fe(e.products,t)}</span>
          <strong>${d(r)}</strong>
        </article>
      `).join("")}
    </div>
  </section>
`,Ie=e=>`
  <section class="dashboard-section flow-section">
    <div class="section-heading">
      <h2>Flujo de producción</h2>
      <span>Ruta horizontal de cada producto</span>
    </div>
    <div class="flow-list">
      ${e.products.map(t=>`
        <article class="flow-row">
          <strong>${t.name}</strong>
          <div class="flow-line">
            ${t.route.length?t.route.map((r,n)=>`
                <span class="flow-node ${e.metrics.bottleneckResourceId===r.resourceId?"bottleneck":""}">
                  ${j(e.resources,r.resourceId)}
                  <small>${d(r.processTimeMinutes)} min</small>
                </span>
                ${n<t.route.length-1?"<i></i>":""}
              `).join(""):'<span class="flow-node empty">Sin ruta</span>'}
          </div>
        </article>
      `).join("")}
    </div>
  </section>
`,Ue=e=>`
  <main class="dashboard">
    ${ve(e)}
    <div class="dashboard-grid">
      ${Pe(e)}
      ${Me(e)}
    </div>
    ${Se(e)}
    ${Ie(e)}
  </main>
`,E=e=>`${e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"item"}-${Math.random().toString(36).slice(2,7)}`,l=(e,t)=>{const r=new FormData(e).get(t);return typeof r=="string"?r.trim():""},g=(e,t)=>Number(l(e,t)),b=(e,t,r)=>({...e,alerts:[{id:E("alerta"),type:t,message:r,timestamp:e.simulatedMinutes},...e.alerts].slice(0,40)}),S=e=>({products:e.products,materials:e.materials,resources:e.resources}),I=(e,t)=>({...$(t),speed:e.speed}),xe=(e,t)=>{const r={id:E(l(t,"name")),name:l(t,"name"),demandPerHour:g(t,"demandPerHour"),targetProduction:g(t,"targetProduction"),billOfMaterials:[],route:[]};return b(I(e,{...S(e),products:[...e.products,r]}),"info",`${r.name} agregado al escenario.`)},qe=(e,t)=>{const r=g(t,"initialStock"),n={id:E(l(t,"name")),name:l(t,"name"),unit:l(t,"unit"),initialStock:r,currentStock:r,reorderPoint:g(t,"reorderPoint")};return b(I(e,{...S(e),materials:[...e.materials,n]}),"info",`${n.name} agregado al inventario.`)},ke=(e,t)=>{const r={id:E(l(t,"name")),name:l(t,"name"),capacityPerHour:g(t,"capacityPerHour"),maxUtilization:100,currentUtilization:0,queue:0,maxQueue:g(t,"maxQueue")};return b(I(e,{...S(e),resources:[...e.resources,r]}),"info",`${r.name} agregado como recurso productivo.`)},Ee=(e,t)=>{const r=l(t,"productId"),n=l(t,"materialId"),a=g(t,"quantityPerUnit"),i=e.products.map(s=>{if(s.id!==r)return s;const m=s.billOfMaterials.filter(p=>p.materialId!==n);return{...s,billOfMaterials:[...m,{materialId:n,quantityPerUnit:a}]}});return b(I(e,{...S(e),products:i}),"info","Material conectado al producto.")},we=(e,t)=>{const r=l(t,"productId"),n=l(t,"resourceId"),a=g(t,"processTimeMinutes"),i=e.products.map(s=>s.id===r?{...s,route:[...s.route,{resourceId:n,processTimeMinutes:a}]}:s);return b(I(e,{...S(e),products:i}),"info","Etapa agregada a la ruta del producto.")},ze=e=>{let t=$(k),r=null;const n=()=>{r!==null&&(window.clearInterval(r),r=null)},a=()=>{n(),t.isRunning&&(r=window.setInterval(()=>{t=ee(t),ie(t),p(),a()},Math.max(40,1e3/t.speed)))},i=o=>{t=o,p(),a()},s=(o,c)=>{const u=e.querySelector(`#${o}`);u==null||u.addEventListener("submit",h=>{h.preventDefault(),i(c(t,u))})},m=()=>{var o,c,u,h,v,P,U,x,w;(o=e.querySelector("#load-demo"))==null||o.addEventListener("click",()=>{i({...$(k),speed:t.speed})}),(c=e.querySelector("#reset-demo"))==null||c.addEventListener("click",()=>{i({...$(k),speed:t.speed})}),(u=e.querySelector("#start-simulation"))==null||u.addEventListener("click",()=>{i({...t,isRunning:!0})}),(h=e.querySelector("#pause-simulation"))==null||h.addEventListener("click",()=>{i({...t,isRunning:!1})}),(v=e.querySelector("#reset-simulation"))==null||v.addEventListener("click",()=>{i({...te(t),speed:t.speed})}),(P=e.querySelector("#save-scenario"))==null||P.addEventListener("click",()=>{ae(t),i(b(t,"info","Escenario guardado en el navegador."))}),(U=e.querySelector("#load-scenario"))==null||U.addEventListener("click",()=>{const q=ne();i(q?b({...$(q),speed:t.speed},"info","Escenario cargado desde el navegador."):b(t,"warning","No hay un escenario guardado."))}),(x=e.querySelector("#export-results"))==null||x.addEventListener("click",()=>{se(t),i(b(t,"info","Resultados exportados como JSON."))}),(w=e.querySelector("#speed-selector"))==null||w.addEventListener("change",q=>{const A=Number(q.currentTarget.value);i({...t,speed:A})}),s("product-form",xe),s("material-form",qe),s("resource-form",ke),s("bom-form",Ee),s("route-form",we)};function p(){e.innerHTML=`
      <div class="app-shell">
        <header class="app-header">
          <div>
            <p class="eyebrow">Simulador industrial</p>
            <h1>Cadena de Producción</h1>
          </div>
          <div class="header-summary">
            <span>${t.products.length} productos</span>
            <span>${t.materials.length} materiales</span>
            <span>${t.resources.length} recursos</span>
          </div>
        </header>
        <div class="workspace">
          ${ge(t)}
          ${Ue(t)}
          ${le(t)}
        </div>
      </div>
    `,m()}p()},H=document.querySelector("#app");if(!H)throw new Error("No se encontró el contenedor principal de la aplicación.");ze(H);
