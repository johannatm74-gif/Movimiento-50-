const ROUTINES={"strength": {"name": "Fuerza suave", "meta": "20 min · Nivel bajo", "icon": "🪑", "items": [["Sentadilla en silla", "10–12 repeticiones", 45, "squat", "Colócate frente a una silla estable. Lleva la cadera hacia atrás, baja despacio y vuelve a subir.", "Toma aire al bajar y suelta el aire al subir."], ["Elevación de brazos", "10 por lado", 45, "armraise", "Sujeta una banda o peso ligero. Eleva un brazo de forma controlada y cambia de lado.", "Suelta el aire al elevar."], ["Puente de glúteos", "10 repeticiones", 45, "bridge", "Acuéstate boca arriba con las rodillas flexionadas. Eleva la cadera y baja lentamente.", "Exhala al elevar."], ["Elevación de talones", "15 repeticiones", 40, "heels", "De pie junto a una silla, eleva ambos talones y desciende con control.", "Respira de forma continua."], ["Remo sentada con banda", "10 repeticiones", 45, "row", "Sentada erguida, lleva los codos hacia atrás sin encoger los hombros.", "Exhala al tirar."]]}, "balance": {"name": "Equilibrio y estabilidad", "meta": "12 min · Nivel bajo-medio", "icon": "⚖️", "items": [["Apoyo en un pie", "20–30 s por lado", 55, "oneleg", "Junto a una silla, eleva un pie y mantén una postura cómoda.", "Respira normalmente."], ["Caminata talón-punta", "10 pasos", 45, "tandem", "Camina en línea colocando el talón delante de la punta del otro pie.", "Mira al frente."], ["Círculos de tobillo y cadera", "10 por lado", 50, "circles", "Haz círculos lentos con apoyo cercano, sin forzar.", "Movimiento suave."], ["Flamenco modificado", "15–20 s por lado", 45, "flamingo", "Apoya una mano en la silla y flexiona una pierna cómodamente.", "Respira continuamente."]]}, "yoga": {"name": "Flexibilidad y relajación", "meta": "18 min · Nivel bajo", "icon": "🌿", "items": [["Cuello y hombros", "30 s por lado", 65, "neck", "Inclina la cabeza suavemente hacia un lado y relaja los hombros.", "Respiración lenta."], ["Gato-vaca", "8–10 repeticiones", 60, "catcow", "En cuatro apoyos, alterna suavemente entre redondear y extender la espalda.", "Coordina el movimiento con la respiración."], ["Postura del niño", "30–60 s", 50, "child", "Lleva la cadera hacia los talones de forma cómoda, sin bajar la cabeza bruscamente.", "Respira lento."], ["Torsión suave sentada", "20 s por lado", 45, "twist", "Sentada, gira el tronco suavemente sujetando la silla.", "No fuerces el giro."], ["Respiración diafragmática", "5–8 repeticiones", 60, "breath", "Coloca una mano sobre el abdomen y deja que se eleve al inhalar.", "Exhala lentamente."]]}, "cardio": {"name": "Cardio ligero", "meta": "18 min · Nivel bajo-medio", "icon": "♥", "items": [["Caminata en el sitio", "3–5 min", 180, "march", "Marcha a un ritmo cómodo elevando alternadamente los pies.", "Debes poder hablar."], ["Step lateral", "3–5 min", 180, "sidestep", "Da pasos laterales controlados hacia ambos lados.", "Mantén un ritmo cómodo."], ["Bicicleta estática", "5–8 min", 300, "bike", "Pedalea con resistencia ligera y postura cómoda.", "No contengas la respiración."], ["Baile suave", "3–5 min", 180, "dance", "Muévete con pasos sencillos y controlados.", "Mantén una intensidad ligera."]]}};
const AVATAR=`
<svg viewBox="0 0 225 285" aria-label="Mujer 3D demostrando el ejercicio">
<defs>
 <radialGradient id="skin" cx="35%" cy="25%"><stop offset="0" stop-color="#f3c7ad"/><stop offset=".65" stop-color="#d59a7e"/><stop offset="1" stop-color="#af705c"/></radialGradient>
 <linearGradient id="top" x1="0" x2="1"><stop stop-color="#ab89b8"/><stop offset=".5" stop-color="#7d5a89"/><stop offset="1" stop-color="#5f416b"/></linearGradient>
 <linearGradient id="pants" x1="0" x2="1"><stop stop-color="#504a58"/><stop offset=".55" stop-color="#302d35"/><stop offset="1" stop-color="#17161b"/></linearGradient>
 <linearGradient id="shoe" x1="0" x2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#cbc9d0"/></linearGradient>
 <filter id="soft"><feDropShadow dx="3" dy="5" stdDeviation="4" flood-opacity=".18"/></filter>
</defs>
<g filter="url(#soft)">
 <g class="headg">
  <ellipse cx="112" cy="37" rx="25" ry="29" fill="url(#skin)"/>
  <path d="M87 37c1-25 12-34 28-34 18 0 29 12 28 36-7-10-14-14-26-16-13-2-20 2-30 14z" fill="#4a3734"/>
  <path d="M132 18c12 8 16 23 9 37 11-8 14-25 5-36-5-6-10-9-18-11z" fill="#33292a"/>
  <ellipse cx="104" cy="38" rx="2.2" ry="1.7" fill="#342628"/><ellipse cx="121" cy="38" rx="2.2" ry="1.7" fill="#342628"/>
  <path d="M106 51q7 5 14 0" fill="none" stroke="#9e5f63" stroke-width="2" stroke-linecap="round"/>
 </g>
 <g class="torso">
  <path d="M82 71q30-18 60 0l9 72q-38 16-78 0z" fill="url(#top)"/>
  <path d="M91 70q20 12 42 0" fill="none" stroke="#c8acd0" stroke-width="3" opacity=".45"/>
 </g>
 <g class="armL">
  <rect x="63" y="75" width="18" height="78" rx="9" fill="url(#skin)" transform="rotate(8 72 79)"/>
  <ellipse cx="69" cy="153" rx="9" ry="11" fill="url(#skin)"/>
 </g>
 <g class="armR">
  <rect x="145" y="75" width="18" height="78" rx="9" fill="url(#skin)" transform="rotate(-8 154 79)"/>
  <ellipse cx="157" cy="153" rx="9" ry="11" fill="url(#skin)"/>
 </g>
 <g class="legL">
  <path d="M89 141q16-4 23 5l-7 104H78z" fill="url(#pants)"/>
  <path d="M77 246h30l6 13q-22 9-42 0z" fill="url(#shoe)"/>
 </g>
 <g class="legR">
  <path d="M113 146q8-9 23-5l11 105h-29z" fill="url(#pants)"/>
  <path d="M117 246h31l7 13q-23 9-43 0z" fill="url(#shoe)"/>
 </g>
</g>
</svg>
`;

let S={route:"routines",cat:null,i:0,left:0,paused:false,transition:false,transLeft:5,timer:null,done:+localStorage.getItem("m50done")||0,bp:JSON.parse(localStorage.getItem("m50bp")||"[]")};
const V=document.getElementById("view");

let voiceOn = localStorage.getItem("m50voice") !== "off";
function speak(text){
  if(!voiceOn || !("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang="es-GT"; u.rate=.92; u.pitch=1; u.volume=1;
  speechSynthesis.speak(u);
}
function toggleVoice(){
  voiceOn=!voiceOn;
  localStorage.setItem("m50voice",voiceOn?"on":"off");
  if(!voiceOn && "speechSynthesis" in window) speechSynthesis.cancel();
  render();
  if(voiceOn && S.route==="exercise") announceExercise();
}
function announceExercise(){
  if(S.route!=="exercise"||!S.cat) return;
  const e=ROUTINES[S.cat].items[S.i];
  speak(`${e[0]}. Objetivo: ${e[1]}. ${e[4]} ${e[5]}`);
}

aa.onclick=()=>document.documentElement.classList.toggle("big");
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>go(b.dataset.r));
function clearTimer(){if(S.timer){clearInterval(S.timer);S.timer=null}}
function go(r){clearTimer();S.route=r;S.cat=null;S.transition=false;render();scrollTo(0,0)}
function routines(){return `<h1>Rutinas</h1>`+Object.entries(ROUTINES).map(([k,r])=>`<div class="card routine"><div class="ico">${r.icon}</div><div class="body"><h2>${r.name}</h2><div class="muted">${r.meta}</div><button class="btn secondary" style="margin-top:12px" onclick="start('${k}')">Comenzar</button></div></div>`).join("")}
function start(k){clearTimer();S.cat=k;S.i=0;S.left=ROUTINES[k].items[0][2];S.route="exercise";S.paused=false;S.transition=false;render();startExerciseTimer();announceExercise();scrollTo(0,0)}
function format(sec){let m=Math.floor(sec/60),s=sec%60;return `${m}:${String(s).padStart(2,"0")}`}
function exercise(){
 let r=ROUTINES[S.cat],e=r.items[S.i];
 return `<div class="eyebrow">${r.name.toUpperCase()}</div><div style="display:flex;justify-content:space-between;align-items:center"><h1 style="margin-bottom:8px">${e[0]}</h1><b>${S.i+1}/${r.items.length}</b></div>
 <div class="progress"><i style="width:${(S.i+1)/r.items.length*100}%"></i></div>
 <div class="avatar-stage ${e[3]}"><div class="human3d">${AVATAR}</div></div>
 <div class="timer" id="timerText">${format(S.left)}</div><button class="voiceBtn" onclick="toggleVoice()">${voiceOn?"🔊 Voz activa":"🔇 Voz desactivada"}</button>
 <div class="card" style="margin-top:14px"><div class="eyebrow">OBJETIVO</div><h1>${e[1]}</h1><h2>Cómo hacerlo</h2><p>${e[4]}</p>
 <div class="notice"><b>Respira</b><br>${e[5]}</div><div class="notice warning">Detente si aparece mareo, dolor en el pecho o falta de aire inusual.</div>
 <div class="controls"><button class="btn secondary" onclick="togglePause()" id="pauseBtn">${S.paused?"▶ Continuar":"Ⅱ Pausar"}</button><button class="btn" onclick="finishExercise()">Siguiente →</button></div>
 <p class="muted" style="text-align:center"><b>Flujo automático activado:</b> al terminar el tiempo, la app continuará sola.</p></div>`
}
function startExerciseTimer(){
 clearTimer();
 S.timer=setInterval(()=>{
   if(S.paused||S.transition)return;
   S.left--;
   const t=document.getElementById("timerText"); if(t)t.textContent=format(Math.max(0,S.left));
   if(S.left<=0)finishExercise();
 },1000)
}
function togglePause(){S.paused=!S.paused;let b=document.getElementById("pauseBtn");if(b)b.textContent=S.paused?"▶ Continuar":"Ⅱ Pausar"}
function finishExercise(){
 clearTimer();
 let r=ROUTINES[S.cat];
 if(S.i>=r.items.length-1){S.done++;localStorage.setItem("m50done",S.done);S.route="finish";render();return}
 S.transition=true;S.transLeft=5;speak(`Ejercicio terminado. Prepárate para ${r.items[S.i+1][0]}`);renderTransition();
 S.timer=setInterval(()=>{S.transLeft--;if(S.transLeft<=0){clearTimer();S.i++;S.left=r.items[S.i][2];S.transition=false;S.paused=false;render();startExerciseTimer();announceExercise();scrollTo(0,0)}else renderTransition()},1000)
}
function renderTransition(){
 let r=ROUTINES[S.cat],n=r.items[S.i+1];
 V.innerHTML=`<div class="transition"><div class="eyebrow">SIGUIENTE EJERCICIO EN</div><div class="count">${S.transLeft}</div><h1>Prepárate…</h1><div class="next-card"><div class="muted">PRÓXIMO</div><h2>${n[0]}</h2><b>${n[1]}</b></div><button class="btn secondary" onclick="skipTransition()">Omitir espera</button></div>`
}
function skipTransition(){clearTimer();let r=ROUTINES[S.cat];S.i++;S.left=r.items[S.i][2];S.transition=false;render();startExerciseTimer();announceExercise();scrollTo(0,0)}
function home(){return `<div class="card hero"><div class="eyebrow">TU MOVIMIENTO DE HOY</div><h1>Solo entrena.<br>La app se encarga del resto.</h1><p>Elige una rutina y los ejercicios avanzarán automáticamente.</p><button class="btn" onclick="go('routines')">Ver las 4 rutinas</button></div><div class="card"><h2>Rutinas completadas</h2><h1>${S.done}</h1></div>`}
function health(){let last=S.bp.at(-1);return `<h1>Mi salud</h1><div class="card"><h2>Registrar presión arterial</h2><div class="field"><input id="sys" inputmode="numeric" placeholder="Sistólica"><input id="dia" inputmode="numeric" placeholder="Diastólica"></div><button class="btn" style="margin-top:13px" onclick="saveBP()">Guardar</button><div id="msg"></div></div><div class="card"><h2>Última lectura</h2><h1>${last?last.s+"/"+last.d:"— / —"}</h1><span class="muted">mmHg</span></div>`}
function saveBP(){let s=+sys.value,d=+dia.value;if(!s||!d)return;S.bp.push({s,d,t:Date.now()});localStorage.setItem("m50bp",JSON.stringify(S.bp));msg.innerHTML=(s>180||d>120)?`<div class="notice danger"><b>Lectura muy alta.</b><br>No inicies ejercicio. Descansa al menos 1 minuto y repite la medición. Si continúa por encima de 180/120, contacta de inmediato a un profesional de salud. Con síntomas de alarma, busca atención de emergencia.</div>`:`<div class="notice">Registro guardado.</div>`}
function progress(){return `<h1>Progreso</h1><div class="card"><h2>Rutinas completadas</h2><h1>${S.done}</h1><p class="muted">La constancia importa más que la velocidad.</p></div>`}
function finish(){return `<div class="card hero"><div class="eyebrow">RUTINA COMPLETADA</div><h1>¡Excelente trabajo! 🌷</h1><p>La rutina terminó automáticamente.</p><button class="btn" onclick="go('routines')">Elegir otra rutina</button></div>`}
function render(){V.innerHTML=S.route==="routines"?routines():S.route==="exercise"?exercise():S.route==="health"?health():S.route==="progress"?progress():S.route==="finish"?finish():home()}
render();
