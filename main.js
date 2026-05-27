// =====================================================
// YOUR SOCIAL MEDIA — update these with your handles
// =====================================================
const SOCIALS = {
  instagram: "YOUR_INSTAGRAM_HANDLE",   // e.g. "captblueizzy"
  tiktok:    "YOUR_TIKTOK_HANDLE",      // e.g. "captblueizzy"
};

// =====================================================
// YOUR PROJECTS
//
// HOW TO GET YOUR VIDEO EMBED URL:
//
//   YOUTUBE:
//   1. Open your video on youtube.com
//   2. Click "Share" below the video -> "Embed"
//   3. In the <iframe> code, find src="..."
//   4. Copy that URL (starts with https://www.youtube.com/embed/)
//   5. Paste it as the "embed" value below
//
//   VIMEO:
//   1. Open your video on vimeo.com
//   2. Click the Share icon -> Embed tab
//   3. Find src="..." in the code
//   4. Copy that URL (starts with https://player.vimeo.com/video/)
//   5. Paste it as the "embed" value below
//
// HOW TO ADD BTS PHOTOS:
//   Upload your photos anywhere (Google Drive public link,
//   Imgur, etc.) then paste each image URL into the bts array.
//   Example: bts: ["https://i.imgur.com/abc123.jpg", "..."]
// =====================================================
const projects = [
  {
    title: "Featured Film",
    category: "short-film",   // short-film | motion-graphics | commercial | music-video | documentary
    year: "2025",
    client: "Festival Submission",      // what it was made for
    role: "Director . DP . Editor",     // what you did
    desc: "Describe your film here. What is it about? What was the concept? What makes it worth watching?",
    bts: [],                            // BTS photo URLs go here
    embed: "",                          // YouTube or Vimeo embed URL
    thumb: "",                          // thumbnail image URL (optional)
  },
  {
    title: "Motion Piece",
    category: "motion-graphics",
    year: "2025",
    client: "Personal Project",
    role: "Motion Designer . Animator",
    desc: "Describe your motion graphics piece here.",
    bts: [],
    embed: "",
    thumb: "",
  },
  {
    title: "Brand Spot",
    category: "commercial",
    year: "2025",
    client: "Client Name / Brand Name",
    role: "Director . DP",
    desc: "Describe the commercial here.",
    bts: [],
    embed: "",
    thumb: "",
  },
  {
    title: "Music Video",
    category: "music-video",
    year: "2024",
    client: "Artist Name",
    role: "Director . Cinematographer",
    desc: "Describe the music video here.",
    bts: [],
    embed: "",
    thumb: "",
  },
  {
    title: "Documentary",
    category: "documentary",
    year: "2024",
    client: "Personal Project",
    role: "Director . Producer . Editor",
    desc: "Describe the documentary here.",
    bts: [],
    embed: "",
    thumb: "",
  },
  {
    title: "Short Film 2",
    category: "short-film",
    year: "2023",
    client: "Film School / Personal",
    role: "Writer . Director . DP",
    desc: "Describe this short film here.",
    bts: [],
    embed: "",
    thumb: "",
  },
];
// =====================================================

const CAT_META = {
  "short-film":      { label:"Short Film",  icon:"🎬", c1:"#4a0a0a", c2:"#2a0505", accent:"#ff6b6b" },
  "motion-graphics": { label:"Motion",       icon:"✨", c1:"#0a0a4a", c2:"#050528", accent:"#6b9fff" },
  "commercial":      { label:"Commercial",   icon:"📺", c1:"#2a1a00", c2:"#180e00", accent:"#ffd700" },
  "music-video":     { label:"Music Video",  icon:"🎵", c1:"#1a0a2a", c2:"#0e0518", accent:"#c87fff" },
  "documentary":     { label:"Documentary",  icon:"🎤", c1:"#001a0a", c2:"#000e05", accent:"#6fff9e" },
};
const CATS = [
  { id:"all",             label:"All",    icon:"🎮" },
  { id:"short-film",      label:"Film",   icon:"🎬" },
  { id:"motion-graphics", label:"Motion", icon:"✨" },
  { id:"commercial",      label:"Ad",     icon:"📺" },
  { id:"music-video",     label:"Music",  icon:"🎵" },
  { id:"documentary",     label:"Doc",    icon:"🎤" },
];

const IG_SVG = `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;
const TT_SVG = `<svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.24 8.24 0 004.82 1.54V6.82a4.85 4.85 0 01-1.05-.13z"/></svg>`;

// =====================================================
// AUDIO ENGINE
// =====================================================
const AudioEngine = (() => {
  let ctx=null, master=null, bgmGain=null, fxGain=null;
  let bgmPlaying=false, bgmTimer=null, _muted=false;
  const BPM=90, BEAT=60/BPM;
  const MELODY=[[440,2],[0,1],[523,1],[587,1],[0,1],[659,2],[784,2],[659,1],[587,1],[440,4]];
  const BASS=[[110,4],[130.81,4],[110,4],[98,4]];
  const PAD=[[220,8],[196,8]];

  function setup() {
    if(ctx) return true;
    try { ctx=new(window.AudioContext||window.webkitAudioContext)(); master=ctx.createGain(); master.gain.value=0.55; master.connect(ctx.destination); bgmGain=ctx.createGain(); bgmGain.gain.value=0; bgmGain.connect(master); fxGain=ctx.createGain(); fxGain.gain.value=0.85; fxGain.connect(master); return true; } catch(e) { return false; }
  }
  function osc(f,t,dur,type,vol,dest) {
    if(!ctx||f===0) return; const o=ctx.createOscillator(), g=ctx.createGain(), d=dest||fxGain;
    o.type=type||"square"; o.frequency.value=f; g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(vol||0.1,t+0.01);
    const e=Math.max(t+dur-0.03,t+0.02); g.gain.setValueAtTime(vol||0.1,e); g.gain.linearRampToValueAtTime(0,t+dur);
    o.connect(g); g.connect(d); o.start(t); o.stop(t+dur+0.05);
  }
  function nz(t,dur,vol,bpf,dest) {
    if(!ctx) return; const len=Math.max(1,Math.floor(ctx.sampleRate*dur)), buf=ctx.createBuffer(1,len,ctx.sampleRate), data=buf.getChannelData(0);
    for(let i=0;i<len;i++) data[i]=(Math.random()*2-1)*(1-i/len*0.5);
    const src=ctx.createBufferSource(); src.buffer=buf; const g=ctx.createGain(); g.gain.setValueAtTime(vol||0.1,t); g.gain.exponentialRampToValueAtTime(0.001,t+dur);
    const d=dest||fxGain; if(bpf){ const f=ctx.createBiquadFilter(); f.type="bandpass"; f.frequency.value=bpf; f.Q.value=1.2; src.connect(f); f.connect(g); } else src.connect(g);
    g.connect(d); src.start(t);
  }
  function scheduleLoop(t) {
    if(!bgmPlaying) return; let cur=t;
    MELODY.forEach(([f,b])=>{ osc(f,cur,b*BEAT*0.82,"square",0.07,bgmGain); cur+=b*BEAT; });
    const len=cur-t; let bt=t; BASS.forEach(([f,b])=>{ osc(f,bt,b*BEAT*0.88,"triangle",0.1,bgmGain); bt+=b*BEAT; });
    let pt=t; PAD.forEach(([f,b])=>{ osc(f,pt,b*BEAT*0.92,"sine",0.045,bgmGain); pt+=b*BEAT; });
    for(let i=0;i<8;i++) nz(t+i*2*BEAT,0.022,0.02,9000,bgmGain);
    bgmTimer=setTimeout(()=>scheduleLoop(t+len),(len-0.1)*1000);
  }
  return {
    init:setup,
    bgmOn(){ if(!setup()||bgmPlaying) return; bgmPlaying=true; bgmGain.gain.cancelScheduledValues(ctx.currentTime); bgmGain.gain.setValueAtTime(0,ctx.currentTime); bgmGain.gain.linearRampToValueAtTime(_muted?0:0.38,ctx.currentTime+2); scheduleLoop(ctx.currentTime+0.1); },
    bgmOff(){ bgmPlaying=false; clearTimeout(bgmTimer); if(bgmGain){ bgmGain.gain.cancelScheduledValues(ctx.currentTime); bgmGain.gain.linearRampToValueAtTime(0,ctx.currentTime+0.8); } },
    bgmDuck(){ if(bgmGain&&!_muted) bgmGain.gain.linearRampToValueAtTime(0.07,ctx.currentTime+0.4); },
    bgmUnduck(){ if(bgmGain&&!_muted&&bgmPlaying) bgmGain.gain.linearRampToValueAtTime(0.38,ctx.currentTime+0.6); },
    mute(m){ _muted=m; if(master) master.gain.linearRampToValueAtTime(m?0:0.55,ctx.currentTime+0.3); },
    powerClick(on){ if(!setup()) return; const t=ctx.currentTime; nz(t,0.006,0.85); const o1=ctx.createOscillator(), g1=ctx.createGain(); o1.type="sine"; o1.frequency.setValueAtTime(130,t+0.003); o1.frequency.exponentialRampToValueAtTime(38,t+0.075); g1.gain.setValueAtTime(0.5,t+0.003); g1.gain.exponentialRampToValueAtTime(0.001,t+0.075); o1.connect(g1); g1.connect(fxGain); o1.start(t+0.003); o1.stop(t+0.09); nz(t+0.055,0.004,0.45); if(on){ const o2=ctx.createOscillator(), g2=ctx.createGain(); o2.type="sine"; o2.frequency.setValueAtTime(180,t+0.12); o2.frequency.exponentialRampToValueAtTime(900,t+0.46); g2.gain.setValueAtTime(0,t+0.12); g2.gain.linearRampToValueAtTime(0.13,t+0.16); g2.gain.linearRampToValueAtTime(0,t+0.52); o2.connect(g2); g2.connect(fxGain); o2.start(t+0.12); o2.stop(t+0.58); } else { const o2=ctx.createOscillator(), g2=ctx.createGain(); o2.type="sine"; o2.frequency.setValueAtTime(480,t+0.07); o2.frequency.exponentialRampToValueAtTime(35,t+0.55); g2.gain.setValueAtTime(0.11,t+0.07); g2.gain.exponentialRampToValueAtTime(0.001,t+0.55); o2.connect(g2); g2.connect(fxGain); o2.start(t+0.07); o2.stop(t+0.6); } },
    hover(){ if(!ctx||_muted) return; const t=ctx.currentTime, o=ctx.createOscillator(), g=ctx.createGain(); o.type="sine"; o.frequency.setValueAtTime(1900,t); o.frequency.exponentialRampToValueAtTime(2500,t+0.045); g.gain.setValueAtTime(0.055,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.055); o.connect(g); g.connect(fxGain); o.start(t); o.stop(t+0.06); },
    select(){ if(!ctx) return; const t=ctx.currentTime; [[880,0],[1320,.065]].forEach(([f,off])=>{ const o=ctx.createOscillator(), g=ctx.createGain(); o.type="square"; o.frequency.value=f; g.gain.setValueAtTime(.08,t+off); g.gain.exponentialRampToValueAtTime(.001,t+off+.1); o.connect(g); g.connect(fxGain); o.start(t+off); o.stop(t+off+.11); }); },
    nav(){ if(!ctx) return; const t=ctx.currentTime, o=ctx.createOscillator(), g=ctx.createGain(); o.type="square"; o.frequency.value=660; g.gain.setValueAtTime(.05,t); g.gain.exponentialRampToValueAtTime(.001,t+.042); o.connect(g); g.connect(fxGain); o.start(t); o.stop(t+.048); },
    disc(){ if(!ctx) return; const t=ctx.currentTime, len=Math.floor(ctx.sampleRate*0.45), buf=ctx.createBuffer(1,len,ctx.sampleRate), data=buf.getChannelData(0); for(let i=0;i<len;i++) data[i]=Math.random()*2-1; const src=ctx.createBufferSource(); src.buffer=buf; const flt=ctx.createBiquadFilter(); flt.type="bandpass"; flt.frequency.setValueAtTime(3200,t); flt.frequency.exponentialRampToValueAtTime(380,t+0.42); flt.Q.value=1.8; const g=ctx.createGain(); g.gain.setValueAtTime(0.17,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.42); src.connect(flt); flt.connect(g); g.connect(fxGain); src.start(t); setTimeout(()=>{ if(!ctx) return; const t2=ctx.currentTime, o=ctx.createOscillator(), g2=ctx.createGain(); o.type="sine"; o.frequency.setValueAtTime(95,t2); o.frequency.exponentialRampToValueAtTime(28,t2+0.08); g2.gain.setValueAtTime(0.35,t2); g2.gain.exponentialRampToValueAtTime(0.001,t2+0.08); o.connect(g2); g2.connect(fxGain); o.start(t2); o.stop(t2+0.1); },350); },
    launch(){ if(!ctx) return; const t=ctx.currentTime; [440,554,659,880].forEach((f,i)=>{ const o=ctx.createOscillator(), g=ctx.createGain(); o.type="square"; o.frequency.value=f; g.gain.setValueAtTime(.09,t+i*.075); g.gain.exponentialRampToValueAtTime(.001,t+i*.075+.13); o.connect(g); g.connect(fxGain); o.start(t+i*.075); o.stop(t+i*.075+.14); }); },
    catSwitch(){ if(!ctx) return; const t=ctx.currentTime; [[660,0],[880,.04]].forEach(([f,off])=>{ const o=ctx.createOscillator(), g=ctx.createGain(); o.type="sine"; o.frequency.value=f; g.gain.setValueAtTime(.07,t+off); g.gain.exponentialRampToValueAtTime(.001,t+off+.08); o.connect(g); g.connect(fxGain); o.start(t+off); o.stop(t+off+.1); }); }
  };
})();

// =====================================================
// STATE
// =====================================================
let appState="boot", activeCat="all", selectedIdx=0, filteredProjects=[...projects];
let audioUnlocked=false, bgmStarted=false;

function setState(s) {
  appState=s; document.body.dataset.state=s;
  const tvL=document.getElementById("tvLed"), conL=document.getElementById("conLed");
  if(s==="boot")    { tvL.className="tv-power-led"; conL.className="con-led"; }
  if(s==="menu")    { tvL.className="tv-power-led on"; conL.className="con-led on"; }
  if(s==="loading") { tvL.className="tv-power-led loading"; conL.className="con-led loading"; }
}

function unlockAudio() {
  if(audioUnlocked) return; audioUnlocked=true; AudioEngine.init();
  document.getElementById("audioHint").classList.add("hidden");
  if(!bgmStarted) { bgmStarted=true; AudioEngine.bgmOn(); }
}
document.addEventListener("click", unlockAudio, { once: true });
document.addEventListener("keydown", unlockAudio, { once: true });

let isMuted=false;
document.getElementById("audioBtn").addEventListener("click",()=>{
  AudioEngine.init(); isMuted=!isMuted; AudioEngine.mute(isMuted);
  const btn=document.getElementById("audioBtn"); btn.classList.toggle("muted",isMuted);
  btn.title=isMuted?"Audio Off":"Audio On";
  if(!bgmStarted&&!isMuted){ bgmStarted=true; AudioEngine.bgmOn(); }
  AudioEngine.select();
});

// =====================================================
// CURSOR
// =====================================================
const cur=document.getElementById("cursor"), ring=document.getElementById("cursorRing");
let mx=0,my=0,rx=0,ry=0;
document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;});
(function tick(){ cur.style.left=mx+"px"; cur.style.top=my+"px"; rx+=(mx-rx)*.12; ry+=(my-ry)*.12; ring.style.left=rx+"px"; ring.style.top=ry+"px"; requestAnimationFrame(tick); })();
function addHover(el,sfx=true) { el.addEventListener("mouseenter",()=>{ document.body.classList.add("c-hover"); if(sfx) AudioEngine.hover(); }); el.addEventListener("mouseleave",()=>document.body.classList.remove("c-hover")); }

// Speaker dots
const sd=document.getElementById("speakerDots"); for(let i=0;i<16;i++){ const s=document.createElement("span"); sd.appendChild(s); }

// =====================================================
// PS2 CANVAS BACKGROUND
// =====================================================
(function(){ const canvas=document.getElementById("ps2Canvas"), ctx2=canvas.getContext("2d"); let W,H,t=0,pts=[]; function resize(){ const r=canvas.parentElement.getBoundingClientRect(); W=canvas.width=r.width; H=canvas.height=r.height; } function mk(){ return { x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4, life:Math.random(), d:Math.random()*.003+.001, r:Math.random()*1.5+.3, hue:200+Math.random()*40 }; } function init(){ resize(); pts=Array.from({length:80},mk); } function draw(){ t+=0.006; ctx2.clearRect(0,0,W,H); const bg=ctx2.createLinearGradient(0,0,W,H); bg.addColorStop(0,"#020818"); bg.addColorStop(.5,"#04101f"); bg.addColorStop(1,"#020c18"); ctx2.fillStyle=bg; ctx2.fillRect(0,0,W,H); for(let w=0;w<3;w++){ ctx2.beginPath(); const off=w*0.8, amp=18+w*8, spd=0.4+w*0.15; ctx2.moveTo(0,H*.4+Math.sin(t*spd+off)*amp); for(let x=0;x<=W;x+=4){ const y=H*(0.35+w*0.1)+Math.sin((x/W)*Math.PI*3+t*spd+off)*amp+Math.sin((x/W)*Math.PI*6+t*(spd*1.3)+off)*amp*.4; ctx2.lineTo(x,y); } ctx2.strokeStyle=`rgba(60,120,220,${0.04-w*0.01})`; ctx2.lineWidth=2-w*0.4; ctx2.stroke(); } pts.forEach((p,i)=>{ p.x+=p.vx; p.y+=p.vy; p.life-=p.d; if(p.life<=0||p.x<0||p.x>W||p.y<0||p.y>H) pts[i]=mk(); const a=Math.min(p.life*2,1)*0.5; ctx2.beginPath(); ctx2.arc(p.x,p.y,p.r,0,Math.PI*2); ctx2.fillStyle=`hsla(${p.hue},70%,70%,${a})`; ctx2.fill(); }); requestAnimationFrame(draw); } init(); draw(); window.addEventListener("resize",init); })();

// =====================================================
// BOOT
// =====================================================
function runBoot(){ setState("boot"); const flash=document.getElementById("screenFlash"); flash.classList.add("flash"); setTimeout(()=>flash.classList.remove("flash"),350); AudioEngine.powerClick(true); setTimeout(()=>document.getElementById("bsq").classList.add("shown"),600); setTimeout(()=>document.getElementById("btr").classList.add("shown"),760); setTimeout(()=>document.getElementById("bcr").classList.add("shown"),920); setTimeout(()=>document.getElementById("bci").classList.add("shown"),1080); setTimeout(()=>document.getElementById("bword").classList.add("shown"),1200); setTimeout(()=>document.getElementById("btagline").classList.add("shown"),1700); setTimeout(()=>{ document.getElementById("bbarwrap").classList.add("shown"); setTimeout(()=>document.getElementById("bbar").classList.add("fill"),50); },1820); setTimeout(()=>toMenu(),3450); }
document.getElementById("bootSkip").addEventListener("click",()=>toMenu());
addHover(document.getElementById("bootSkip"));
function toMenu(){ const flash=document.getElementById("screenFlash"); flash.classList.add("flash"); setTimeout(()=>{ flash.classList.remove("flash"); setState("menu"); document.getElementById("smenu").classList.add("active"); buildXMB(); buildShelf(); buildSocialBar(); if(audioUnlocked&&!bgmStarted){ bgmStarted=true; AudioEngine.bgmOn(); } },200); }

// =====================================================
// XMB
// =====================================================
function buildXMB(){ buildCatIcons(); filterProjects(); buildRow(); }
function buildCatIcons(){ const wrap=document.getElementById("xmbCats"); wrap.innerHTML=""; CATS.forEach(c=>{ const el=document.createElement("div"); el.className="xmb-cat"+(c.id===activeCat?" active":""); el.innerHTML=`<span class="xmb-cat-icon">${c.icon}</span><span class="xmb-cat-label">${c.label}</span>`; el.addEventListener("click",()=>{ activeCat=c.id; selectedIdx=0; AudioEngine.catSwitch(); buildXMB(); }); addHover(el); wrap.appendChild(el); }); }
function filterProjects(){ filteredProjects=activeCat==="all"?[...projects]:projects.filter(p=>p.category===activeCat); if(selectedIdx>=filteredProjects.length) selectedIdx=0; }
function buildRow(){ const row=document.getElementById("xmbRow"); row.innerHTML=""; filteredProjects.forEach((p,i)=>{ const m=CAT_META[p.category]||CAT_META["short-film"], size=i===selectedIdx?56:38, op=Math.max(1-Math.abs(i-selectedIdx)*0.18,0.25); const el=document.createElement("div"); el.className="xmb-icon"+(i===selectedIdx?" current":""); el.style.opacity=op.toString(); el.innerHTML=`<div class="xmb-icon-cover" style="width:${size}px;height:${size}px;background:linear-gradient(135deg,${m.c1},${m.c2});">${p.thumb?`<img src="${p.thumb}" style="width:100%;height:100%;object-fit:cover;">`:`<span style="font-size:${Math.round(size*.4)}px;">${m.icon}</span>`}</div><div class="xmb-icon-label">${p.title}</div>`; el.addEventListener("click",()=>{ selectedIdx=i; buildRow(); updateInfo(); AudioEngine.select(); setTimeout(()=>launchProject(i),220); }); el.addEventListener("mouseenter",()=>{ document.body.classList.add("c-hover"); selectedIdx=i; buildRow(); updateInfo(); }); el.addEventListener("mouseleave",()=>document.body.classList.remove("c-hover")); row.appendChild(el); }); row.style.transform=`translateX(calc(-50% + ${-selectedIdx*50+25}px))`; updateInfo(); }
function updateInfo(){ const p=filteredProjects[selectedIdx]; if(!p) return; const m=CAT_META[p.category]||{label:"—"}; document.getElementById("xmbTitle").textContent=p.title; document.getElementById("xmbMeta").textContent=`${m.label}  .  ${p.year}`; }

// =====================================================
// SHELF
// =====================================================
function buildShelf(){ const shelf=document.getElementById("shelfCases"); shelf.innerHTML=""; projects.forEach((p,i)=>{ const m=CAT_META[p.category]||CAT_META["short-film"]; const el=document.createElement("div"); el.className="game-case"; el.dataset.idx=i; el.innerHTML=`<div class="case-spine"></div><div class="case-body"><div class="case-art"><div class="case-art-bg" style="background:linear-gradient(135deg,${m.c1},${m.c2},${m.c1});"></div>${p.thumb?`<img src="${p.thumb}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.7;">`:`<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:22px;opacity:.55;">${m.icon}</div>`}<div class="case-art-title">${p.title}</div></div><div class="case-bottom"><div class="case-platform" style="color:${m.accent};">IZZY2</div><div class="case-year">${p.year}</div></div></div><div class="case-shadow"></div>`; el.addEventListener("click",(e)=>launchFromCase(i,el,e)); el.addEventListener("mouseenter",()=>{ document.body.classList.add("c-hover"); AudioEngine.hover(); const fi=filteredProjects.indexOf(p); if(fi>=0){ selectedIdx=fi; buildRow(); } }); el.addEventListener("mouseleave",()=>document.body.classList.remove("c-hover")); shelf.appendChild(el); }); }

// =====================================================
// SOCIAL BAR
// =====================================================
function buildSocialBar(){
  const bar=document.getElementById("socialBar"); bar.innerHTML="";
  if(SOCIALS.instagram&&SOCIALS.instagram!=="YOUR_INSTAGRAM_HANDLE"){
    const a=document.createElement("a"); a.href=`https://instagram.com/${SOCIALS.instagram}`; a.target="_blank"; a.className="social-link"; a.innerHTML=`${IG_SVG}<span>@${SOCIALS.instagram}</span>`; addHover(a); bar.appendChild(a);
  }
  if(SOCIALS.tiktok&&SOCIALS.tiktok!=="YOUR_TIKTOK_HANDLE"){
    const a=document.createElement("a"); a.href=`https://tiktok.com/@${SOCIALS.tiktok}`; a.target="_blank"; a.className="social-link"; a.innerHTML=`${TT_SVG}<span>@${SOCIALS.tiktok}</span>`; addHover(a); bar.appendChild(a);
  }
  if(!SOCIALS.instagram||SOCIALS.instagram==="YOUR_INSTAGRAM_HANDLE"){
    const span=document.createElement("span"); span.className="social-link"; span.style.opacity=".35"; span.innerHTML=`${IG_SVG}<span>Instagram</span>`; bar.appendChild(span);
  }
  if(!SOCIALS.tiktok||SOCIALS.tiktok==="YOUR_TIKTOK_HANDLE"){
    const span=document.createElement("span"); span.className="social-link"; span.style.opacity=".35"; span.innerHTML=`${TT_SVG}<span>TikTok</span>`; bar.appendChild(span);
  }
}

// =====================================================
// LAUNCH
// =====================================================
function launchFromCase(idx,caseEl,evt){ if(appState==="loading") return; unlockAudio(); AudioEngine.disc(); const flight=document.getElementById("discFlight"), cr=caseEl.getBoundingClientRect(); flight.style.left=(cr.left+cr.width/2-18)+"px"; flight.style.top=(cr.top+cr.height/2-18)+"px"; flight.classList.add("flying"); document.getElementById("discSlot").classList.add("glowing"); setTimeout(()=>{ flight.classList.remove("flying"); document.getElementById("discSlot").classList.remove("glowing"); },700); const fi=filteredProjects.indexOf(projects[idx]); if(fi>=0) selectedIdx=fi; setTimeout(()=>launchProject(idx,true),420); }
function launchProject(idx,fromShelf=false){ if(appState==="loading") return; const p=fromShelf?projects[idx]:filteredProjects[idx]; AudioEngine.launch(); setState("loading"); document.getElementById("sloading").classList.add("active"); document.getElementById("smenu").classList.remove("active"); setTimeout(()=>{ document.getElementById("sloading").classList.remove("active"); openModal(p); setState("menu"); document.getElementById("smenu").classList.add("active"); },1300); }

// =====================================================
// MODAL
// =====================================================
const modal=document.getElementById("modal");
function openModal(p){
  const m=CAT_META[p.category]||{label:"—"};
  document.getElementById("mCatTag").textContent=m.label;
  document.getElementById("mTitle").textContent=p.title;
  document.getElementById("mYear").textContent=p.year+"  .  "+m.label;
  const descEl=document.getElementById("mDesc");
  descEl.textContent=p.desc||""; descEl.className="info-text"+(p.desc?"":" empty");
  if(!p.desc) descEl.textContent="No description yet - add one to the project data.";
  const roleEl=document.getElementById("mRole");
  roleEl.textContent=p.role||""; roleEl.className="info-text"+(p.role?"":" empty");
  if(!p.role) roleEl.textContent="Add your role in the project data.";
  const clientEl=document.getElementById("mClient");
  clientEl.textContent=p.client||""; clientEl.className="info-text"+(p.client?"":" empty");
  if(!p.client) clientEl.textContent="Add what this was made for.";
  const area=document.getElementById("mVideoArea"); area.querySelector("iframe")?.remove();
  const ph=document.getElementById("mPh");
  if(p.embed){ ph.style.display="none"; const f=document.createElement("iframe"); f.src=p.embed+"?autoplay=1"; f.allow="autoplay; fullscreen; picture-in-picture"; f.allowFullscreen=true; area.appendChild(f); }
  else ph.style.display="flex";
  const btsStrip=document.getElementById("btsStrip"), btsPhotos=document.getElementById("btsPhotos");
  btsPhotos.innerHTML="";
  if(p.bts&&p.bts.length>0){
    btsStrip.classList.remove("hidden");
    p.bts.forEach((url,i)=>{ const img=document.createElement("img"); img.className="bts-img"; img.src=url; img.alt="BTS "+(i+1); img.addEventListener("click",()=>openLightbox(url,"Behind the scenes - "+p.title+" ("+(i+1)+"/"+p.bts.length+")")); addHover(img,false); btsPhotos.appendChild(img); });
  } else {
    btsStrip.classList.remove("hidden");
    const slot=document.createElement("div"); slot.className="bts-add-slot"; slot.innerHTML=`<span>📷</span><p>Add BTS photos to the project data</p>`; btsPhotos.appendChild(slot);
  }
  const socialLinks=document.getElementById("modalSocialLinks"); socialLinks.innerHTML="";
  if(SOCIALS.instagram&&SOCIALS.instagram!=="YOUR_INSTAGRAM_HANDLE"){ const a=document.createElement("a"); a.href=`https://instagram.com/${SOCIALS.instagram}`; a.target="_blank"; a.className="modal-social-link"; a.innerHTML=`${IG_SVG}<span>@${SOCIALS.instagram}</span>`; addHover(a); socialLinks.appendChild(a); }
  if(SOCIALS.tiktok&&SOCIALS.tiktok!=="YOUR_TIKTOK_HANDLE"){ const a=document.createElement("a"); a.href=`https://tiktok.com/@${SOCIALS.tiktok}`; a.target="_blank"; a.className="modal-social-link"; a.innerHTML=`${TT_SVG}<span>@${SOCIALS.tiktok}</span>`; addHover(a); socialLinks.appendChild(a); }
  modal.classList.add("open"); document.body.style.overflow="hidden";
  document.querySelector(".modal-scroll").scrollTop=0;
  AudioEngine.bgmDuck();
}
function closeModal(){ AudioEngine.select(); modal.classList.remove("open"); document.body.style.overflow=""; document.getElementById("mVideoArea").querySelector("iframe")?.remove(); AudioEngine.bgmUnduck(); }
addHover(document.getElementById("modalClose"),false);
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{ if(e.target===modal) closeModal(); });
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ if(document.getElementById("lb").classList.contains("open")) closeLightbox(); else if(modal.classList.contains("open")) closeModal(); } });

// =====================================================
// BTS LIGHTBOX
// =====================================================
function openLightbox(src,caption){ const lb=document.getElementById("lb"); document.getElementById("lbImg").src=src; document.getElementById("lbCaption").textContent=caption||""; lb.classList.add("open"); AudioEngine.select(); }
function closeLightbox(){ document.getElementById("lb").classList.remove("open"); document.getElementById("lbImg").src=""; }
document.getElementById("lbClose").addEventListener("click",closeLightbox);
document.getElementById("lb").addEventListener("click",e=>{ if(e.target===document.getElementById("lb")) closeLightbox(); });
addHover(document.getElementById("lbClose"),false);

// =====================================================
// KEYBOARD NAV
// =====================================================
document.addEventListener("keydown",e=>{ if(appState!=="menu"||modal.classList.contains("open")) return; if(e.key==="ArrowRight"){ selectedIdx=Math.min(selectedIdx+1,filteredProjects.length-1); buildRow(); AudioEngine.nav(); } if(e.key==="ArrowLeft"){ selectedIdx=Math.max(selectedIdx-1,0); buildRow(); AudioEngine.nav(); } if(e.key==="Enter") launchProject(selectedIdx); });

// =====================================================
// POWER BUTTON
// =====================================================
document.getElementById("powerBtn").addEventListener("click",()=>{ unlockAudio(); if(appState==="boot"){ toMenu(); return; } AudioEngine.powerClick(false); AudioEngine.bgmOff(); bgmStarted=false; setState("boot"); document.getElementById("smenu").classList.remove("active"); closeModal(); ["bsq","btr","bcr","bci"].forEach(id=>document.getElementById(id).classList.remove("shown")); ["bword","btagline","bbarwrap"].forEach(id=>document.getElementById(id).classList.remove("shown")); document.getElementById("bbar").classList.remove("fill"); const b=document.getElementById("bbar"); b.style.transition="none"; setTimeout(()=>b.style.transition="",50); setTimeout(()=>{ AudioEngine.powerClick(true); runBoot(); },700); });
addHover(document.getElementById("powerBtn"));

// =====================================================
// START
// =====================================================
setTimeout(()=>runBoot(),400);
