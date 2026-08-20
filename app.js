
const routines = {
  strength:{
    name:"Fuerza suave", duration:"20 min", level:"Nivel bajo", icon:"🪑",
    desc:"Piernas, glúteos, espalda y core con movimientos controlados.",
    exercises:[
      {name:"Sentadilla en silla", reps:"10–12 repeticiones", cls:"squat", steps:["Colócate frente a una silla estable.","Pies al ancho de las caderas.","Lleva la cadera hacia atrás y baja despacio.","Sube empujando con las piernas."], breath:"Toma aire al bajar y suelta el aire al subir."},
      {name:"Elevación de brazos", reps:"10 por lado", cls:"armraise", steps:["Sujeta una banda o peso ligero.","Mantén el tronco erguido.","Eleva un brazo de forma controlada.","Regresa lentamente y cambia de lado."], breath:"Suelta el aire al elevar; no contengas la respiración."},
      {name:"Puente de glúteos", reps:"10 repeticiones", cls:"bridge", steps:["Acuéstate boca arriba con rodillas flexionadas.","Apoya bien los pies.","Eleva la cadera lentamente.","Baja de forma controlada."], breath:"Exhala al elevar la cadera."},
      {name:"Elevación de talones", reps:"15 repeticiones", cls:"heelraise", steps:["De pie, junto a una silla.","Eleva los talones lentamente.","Mantén un segundo arriba.","Desciende con control."], breath:"Respira de forma continua."},
      {name:"Remo sentada con banda", reps:"10 repeticiones", cls:"row", steps:["Siéntate erguida.","Sujeta la banda con ambas manos.","Lleva los codos hacia atrás sin encoger hombros.","Regresa lentamente."], breath:"Exhala al tirar de la banda."}
    ]
  }
};
let state = {
  route:"home", currentExercise:0, reps:0, paused:false,
  bp: JSON.parse(localStorage.getItem("m50-bp")||"[]"),
  symptoms: JSON.parse(localStorage.getItem("m50-symptoms")||"[]"),
  completed: Number(localStorage.getItem("m50-completed")||0),
  feeling:null
};
const view = document.getElementById("view");
function setRoute(r){state.route=r; render(); document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.route===r)); window.scrollTo(0,0)}
document.querySelectorAll(".nav-btn").forEach(b=>b.onclick=()=>setRoute(b.dataset.route));
document.getElementById("accessBtn").onclick=()=>document.documentElement.classList.toggle("big-text");

function home(){
  const last=state.bp.at(-1);
  return `<div class="card hero">
    <div class="eyebrow">Tu espacio de movimiento</div>
    <h1>¿Cómo te sientes hoy?</h1>
    <p class="muted">Muévete a tu ritmo. La constancia vale más que la perfección.</p>
    <button class="btn btn-primary" onclick="startCheck()">▶ Comenzar Fuerza suave</button>
  </div>
  <div class="grid2">
    <div class="card"><div class="eyebrow">Presión reciente</div><div class="big-number">${last?`${last.sys}/${last.dia}`:"— / —"}</div><span class="muted">mmHg</span></div>
    <div class="card"><div class="eyebrow">Rutinas hechas</div><div class="big-number">${state.completed}</div><span class="muted">esta versión</span></div>
  </div>
  <div class="card"><h2>Rutina recomendada</h2><div class="routine-card"><div class="routine-icon">🪑</div><div><b>Fuerza suave</b><div class="routine-meta"><span class="pill">20 min</span><span class="pill">Nivel bajo</span></div></div></div></div>`;
}
function routinesView(){
 return `<h1>Rutinas</h1>
 ${[
 ["🪑","Fuerza suave","20 min","Disponible","strength"],
 ["⚖️","Equilibrio y estabilidad","12 min","Próxima versión",""],
 ["🌿","Flexibilidad y relajación","18 min","Próxima versión",""],
 ["❤️","Cardio ligero","18 min","Próxima versión",""]
 ].map(x=>`<div class="card routine-card"><div class="routine-icon">${x[0]}</div><div style="flex:1"><h3>${x[1]}</h3><div class="muted">${x[2]} · ${x[3]}</div>${x[4]?`<button class="btn btn-secondary" style="margin-top:12px" onclick="startCheck()">Ver rutina</button>`:""}</div></div>`).join("")}`;
}
function health(){
 const recent=[...state.bp].reverse().slice(0,5);
 return `<h1>Mi salud</h1>
 <div class="card"><h2>Registrar presión</h2>
 <div class="input-row"><div class="field"><label>Sistólica</label><input id="sys" inputmode="numeric" placeholder="120"></div><div class="field"><label>Diastólica</label><input id="dia" inputmode="numeric" placeholder="80"></div></div>
 <button class="btn btn-primary" style="margin-top:14px" onclick="saveBP()">Guardar presión</button><div id="bpMsg"></div></div>
 <div class="card"><h2>¿Cómo te sentiste hoy?</h2>
 <div class="field"><label>Sofocos (0–3)</label><input id="hot" type="number" min="0" max="3" value="0"></div>
 <div class="field" style="margin-top:10px"><label>Sueño (0 malo – 3 bueno)</label><input id="sleep" type="number" min="0" max="3" value="2"></div>
 <div class="field" style="margin-top:10px"><label>Ánimo (0 bajo – 3 bien)</label><input id="mood" type="number" min="0" max="3" value="2"></div>
 <div class="field" style="margin-top:10px"><label>Dolor articular (0–3)</label><input id="joints" type="number" min="0" max="3" value="0"></div>
 <button class="btn btn-secondary" style="margin-top:14px" onclick="saveSymptoms()">Guardar síntomas</button></div>
 <div class="card"><h2>Últimos registros</h2>${recent.length?recent.map(r=>`<p><b>${r.sys}/${r.dia}</b> mmHg <span class="muted">· ${new Date(r.t).toLocaleDateString()}</span></p>`).join(""):"<p class='muted'>Aún no hay registros.</p>"}</div>`;
}
function progress(){
 const n=state.symptoms.length, bpN=state.bp.length;
 return `<h1>Progreso</h1><div class="grid2">
 <div class="stat">Rutinas<b>${state.completed}</b></div><div class="stat">Presiones<b>${bpN}</b></div></div>
 <div class="card" style="margin-top:14px"><h2>Tu constancia cuenta</h2><p>Completar incluso una sesión suave es progreso. Aumenta la dificultad solo cuando el esfuerzo se sienta cómodo y puedas mantener una respiración continua.</p></div>
 <div class="card"><h2>Síntomas registrados</h2><div class="big-number">${n}</div><p class="muted">Con más registros podremos mostrar tendencias semanales.</p></div>`;
}
function startCheck(){
 state.route="check"; render(); window.scrollTo(0,0);
}
function checkView(){
 return `<div class="card hero"><div class="eyebrow">Antes de empezar</div><h1>Chequeo rápido</h1><p>Elige cómo te sientes. Si tienes mareo, dolor de pecho o falta de aire, no inicies la rutina.</p></div>
 <div class="card"><h2>¿Cómo te sientes?</h2><div class="choice-grid">
 ${["😊 Bien","😐 Cansada","🥵 Sofocos","😵 Mareada"].map(x=>`<button class="choice" onclick="selectFeeling(this,'${x}')">${x}</button>`).join("")}
 </div></div>
 <div class="card"><h2>Presión arterial <span class="muted" style="font-size:.8rem">(opcional)</span></h2>
 <div class="input-row"><div class="field"><label>Sistólica</label><input id="preSys" inputmode="numeric" placeholder="120"></div><div class="field"><label>Diastólica</label><input id="preDia" inputmode="numeric" placeholder="80"></div></div>
 <div id="checkMsg"></div><button class="btn btn-primary" style="margin-top:14px" onclick="beginRoutine()">Continuar</button></div>`;
}
function selectFeeling(el,val){state.feeling=val;document.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected"));el.classList.add("selected")}
function beginRoutine(){
 if(state.feeling?.includes("Mareada")){document.getElementById("checkMsg").innerHTML=`<div class="notice notice-warn"><b>Hoy conviene no iniciar.</b><br>Descansa y busca orientación profesional si el mareo persiste o aparece con otros síntomas.</div>`;return}
 const s=Number(document.getElementById("preSys").value||0),d=Number(document.getElementById("preDia").value||0);
 if((s>180)||(d>120)){document.getElementById("checkMsg").innerHTML=`<div class="notice notice-danger"><b>La lectura es muy alta.</b><br>No inicies la rutina. Descansa al menos 1 minuto y repite la medición. Si sigue por encima de 180/120, contacta de inmediato a un profesional de salud; si además tienes dolor de pecho, falta de aire, debilidad, cambios en visión o dificultad para hablar, busca atención de emergencia.</div>`;return}
 if(s&&d){state.bp.push({sys:s,dia:d,t:new Date().toISOString(),moment:"pre"});localStorage.setItem("m50-bp",JSON.stringify(state.bp))}
 state.currentExercise=0;state.reps=0;state.route="exercise";render();
}
function avatar(cls){return `<div class="avatar-stage ${cls}"><div class="avatar"><div class="head"></div><div class="torso"></div><div class="arm arm-l"></div><div class="arm arm-r"></div><div class="leg leg-l"></div><div class="leg leg-r"></div></div><div class="floor"></div></div>`}
function exerciseView(){
 const r=routines.strength,e=r.exercises[state.currentExercise],pct=(state.currentExercise/r.exercises.length)*100;
 return `<div class="exercise-head"><div><div class="eyebrow">Fuerza suave</div><h2>${e.name}</h2></div><b>${state.currentExercise+1}/${r.exercises.length}</b></div>
 <div class="progress-track"><div class="progress-bar" style="width:${pct}%"></div></div>
 ${avatar(e.cls)}
 <div class="card"><div class="eyebrow">Objetivo</div><div class="counter">${e.reps}</div>
 <h3>Cómo hacerlo</h3><ol class="exercise-list">${e.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
 <div class="notice notice-ok"><b>Respira</b><br>${e.breath}</div>
 <div class="notice notice-warn">Detente si aparece mareo, dolor en el pecho o falta de aire inusual.</div>
 <div class="grid2"><button class="btn btn-light" onclick="prevExercise()">← Anterior</button><button class="btn btn-primary" onclick="nextExercise()">${state.currentExercise===r.exercises.length-1?"Terminar ✓":"Siguiente →"}</button></div></div>`;
}
function prevExercise(){if(state.currentExercise>0){state.currentExercise--;render()}}
function nextExercise(){if(state.currentExercise<routines.strength.exercises.length-1){state.currentExercise++;render();window.scrollTo(0,0)}else{state.route="finish";render();window.scrollTo(0,0)}}
function finishView(){
 return `<div class="card hero"><div class="eyebrow">Rutina completada</div><h1>¡Muy bien! 🌷</h1><p>Has terminado Fuerza suave. Antes de irte, cuéntame cómo se sintió.</p></div>
 <div class="card"><h2>¿Cómo te resultó?</h2><div class="choice-grid">${["😍 Muy fácil","🙂 Bien","😓 Difícil","🛑 No pude terminar"].map(x=>`<button class="choice" onclick="finish('${x}')">${x}</button>`).join("")}</div></div>`;
}
function finish(feedback){state.completed++;localStorage.setItem("m50-completed",state.completed);localStorage.setItem("m50-last-feedback",feedback);setRoute("home")}
function saveBP(){
 const s=Number(document.getElementById("sys").value),d=Number(document.getElementById("dia").value),msg=document.getElementById("bpMsg");
 if(!s||!d){msg.innerHTML=`<div class="notice notice-warn">Escribe ambos valores.</div>`;return}
 state.bp.push({sys:s,dia:d,t:new Date().toISOString(),moment:"manual"});localStorage.setItem("m50-bp",JSON.stringify(state.bp));
 if(s>180||d>120)msg.innerHTML=`<div class="notice notice-danger"><b>Lectura muy alta.</b> Descansa al menos 1 minuto y repite la medición. Si continúa por encima de 180/120, contacta de inmediato a tu profesional de salud; con síntomas de alarma, busca atención de emergencia.</div>`;
 else msg.innerHTML=`<div class="notice notice-ok">Registro guardado.</div>`;
}
function saveSymptoms(){
 const data={hot:+hot.value,sleep:+sleep.value,mood:+mood.value,joints:+joints.value,t:new Date().toISOString()};
 state.symptoms.push(data);localStorage.setItem("m50-symptoms",JSON.stringify(state.symptoms));alert("Síntomas guardados");
}
function render(){
 let html= state.route==="home"?home():state.route==="routines"?routinesView():state.route==="health"?health():state.route==="progress"?progress():state.route==="check"?checkView():state.route==="exercise"?exerciseView():finishView();
 view.innerHTML=html;
}
render();
