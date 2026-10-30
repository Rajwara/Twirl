/* =========================================================
   TWIRL° — shared script: layout injection + all animations
   ========================================================= */
(function(){
const page = document.body.dataset.page || 'home';
const ARROW = '<svg width="38" height="14" viewBox="0 0 38 14" fill="none" stroke="#fff" stroke-width="1.6"><path d="M0 7h36M30 1l6 6-6 6"/></svg>';
window.ARROW = ARROW;

/* ---------- shared layout ---------- */
const nav = [['menu.html','Our Menu','menu'],['locations.html','Locations','locations'],['index.html','LOGO','home'],['twirl-to-go.html','Twirl To Go','togo'],['jobs.html','Jobs','jobs']];
const headerHTML = `
<div id="loader"><div class="lg">${'TWIRL°'.split('').map(l=>`<span>${l}</span>`).join('')}</div></div>
<header class="site" id="hdr">
  <button class="burger" id="burger" aria-label="Open menu"><i></i><i></i><i></i></button>
  <nav>${nav.map(([h,t,k])=>t==='LOGO'?`<a href="${h}" class="logo">TWIRL<sup>°</sup></a>`:`<a href="${h}" class="${k===page?'active':''}">${t}</a>`).join('')}</nav>
  <button class="lang-btn" id="langBtn">EN</button>
  <div class="lang-menu" id="langMenu"><a href="#">EN</a><a href="#">UR</a><a href="#">AR</a></div>
</header>
<div class="mobile-nav" id="mnav">${nav.map(([h,t])=>`<a href="${h}">${t==='LOGO'?'Home':t}</a>`).join('')}<a href="about.html">About</a><a href="contact.html">Contact</a></div>
<nav class="cta-bar" id="ctaBar" aria-label="Quick actions"><a href="menu.html">Our Menu</a><a href="locations.html">Book a Table</a><a href="#order">Order Food</a></nav>`;

const footerHTML = `
<footer class="site"><div class="wrap">
  <div class="foot-grid">
    <div><div class="flogo">TWIRL<sup style="font-size:.35em">°</sup></div><div class="say">Say<small>more sauce</small></div></div>
    <div><h4>Eat</h4><ul><li><a href="menu.html">Menu</a></li><li><a href="locations.html">Locations</a></li><li><a href="twirl-to-go.html">Twirl To Go</a></li><li><a href="#">Twirl Truck</a></li><li><a href="#">Catering</a></li></ul></div>
    <div><h4>Community</h4><ul><li><a href="#">The Saucy Club</a></li><li><a href="#">Twirl Kids</a></li><li><a href="#">Twirl Journal</a></li><li><a href="#">Events</a></li><li><a href="#">Merch</a></li></ul></div>
    <div><h4>Twirl Info</h4><ul><li><a href="about.html">About us</a></li><li><a href="jobs.html">Jobs</a></li><li><a href="faq.html">FAQ</a></li><li><a href="contact.html">Contact</a></li></ul></div>
    <div><h4>Follow us</h4>
      <div class="socials">
        <a href="#" aria-label="Instagram"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#fff"/></svg></a>
        <a href="#" aria-label="LinkedIn"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM2 9h4v12H2zM9 9h4v2c.6-1 2-2.2 4-2.2 4 0 5 2.6 5 6V21h-4v-5.5c0-1.5 0-3.3-2-3.3s-2.4 1.6-2.4 3.2V21H9z"/></svg></a>
        <a href="#" aria-label="Facebook"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v7h4v-7h3l1-4h-4V8.6c0-.4.3-.6.6-.6z"/></svg></a>
        <a href="#" aria-label="TikTok"><svg width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M16 3c.4 2.4 2 4 4.5 4.3v3.2c-1.7 0-3.2-.5-4.5-1.4v6.6A5.7 5.7 0 1 1 10.3 10v3.3a2.5 2.5 0 1 0 2.4 2.5V3z"/></svg></a>
      </div>
      <h4 style="margin-top:50px">Language</h4><div class="langs"><a href="#">UR</a><a href="#" class="on">EN</a><a href="#">AR</a></div>
    </div>
  </div>
  <div class="legal"><span>TWIRL° Pasta Co. · hello@twirl.example · © 2026</span>
    <nav><a href="#">Privacy policy</a><a href="#">Terms &amp; Conditions</a><a href="#">Cookie policy</a><a href="#">Disclaimer</a></nav></div>
</div></footer>`;

document.body.insertAdjacentHTML('afterbegin', headerHTML);
document.body.insertAdjacentHTML('beforeend', footerHTML);

/* ---------- loader ---------- */
const loader = document.getElementById('loader');
const seen = (()=>{try{return sessionStorage.getItem('twirl-seen')}catch(e){return null}})();
function finishLoad(){loader.classList.add('done');document.body.classList.add('ready');setTimeout(()=>document.getElementById('ctaBar').classList.add('show'),700);setTimeout(()=>loader.remove(),1300);try{sessionStorage.setItem('twirl-seen','1')}catch(e){}}
window.addEventListener('load',()=>setTimeout(finishLoad, seen?150:1100));
setTimeout(()=>{if(document.getElementById('loader'))finishLoad()},3500);

/* ---------- burger / lang ---------- */
const burger=document.getElementById('burger'),mnav=document.getElementById('mnav');
burger.onclick=()=>{const o=mnav.classList.toggle('open');burger.classList.toggle('x',o);document.body.classList.toggle('locked',o);
  mnav.querySelectorAll('a').forEach((a,i)=>a.style.transitionDelay=o?(.2+i*.06)+'s':'0s')};
const lb=document.getElementById('langBtn'),lm=document.getElementById('langMenu');
lb.onclick=e=>{e.stopPropagation();lm.classList.toggle('open')};
document.addEventListener('click',()=>lm.classList.remove('open'));

/* ---------- helpers ---------- */
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const rnd=n=>(Math.random()*n*2-n).toFixed(1);
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));

/* self-drawn pasta plate (placeholder illustration) */
const SAUCES=[['#B5401F','#E7A64B'],['#E9D9A8','#B5793A'],['#E36A6A','#F3C1A3'],['#A8321E','#7B4A2C'],['#EDE2C4','#5B4B3A'],['#C8302F','#FFFFFF'],['#D8572A','#6E8B3D'],['#F0E3B8','#2E2E2E']];
window.plateSVG=function(i){
  const [s1,s2]=SAUCES[i%SAUCES.length];let st='',tp='';
  for(let k=0;k<46;k++){const a=Math.random()*6.28,r=Math.random()*60,x=150+Math.cos(a)*r,y=150+Math.sin(a)*r;
    st+=`<path d="M${x.toFixed(1)} ${y.toFixed(1)} c${rnd(40)} ${rnd(40)} ${rnd(60)} ${rnd(60)} ${rnd(70)} ${rnd(70)}" stroke="${k%4?'#F2C14E':'#E0A93A'}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`}
  for(let k=0;k<14;k++){const a=Math.random()*6.28,r=Math.random()*55;tp+=`<circle cx="${(150+Math.cos(a)*r).toFixed(1)}" cy="${(150+Math.sin(a)*r).toFixed(1)}" r="${(3+Math.random()*7).toFixed(1)}" fill="${k%2?s1:s2}" opacity=".9"/>`}
  return `<svg viewBox="0 0 300 300"><circle cx="150" cy="150" r="146" fill="#F7F7FA" stroke="#9B5A6A" stroke-width="2"/><circle cx="150" cy="150" r="112" fill="#fff" stroke="#E4E1EA" stroke-width="2"/><circle cx="150" cy="150" r="82" fill="${s1}" opacity=".35"/>${st}${tp}</svg>`;
};
$$('[data-plate]').forEach(el=>el.insertAdjacentHTML('afterbegin',plateSVG(+el.dataset.plate)));

/* fill marquee rows: data-marquee="word1|word2" data-fill="n" */
$$('[data-marquee]').forEach((r,i)=>{
  const words=r.dataset.marquee.split('|'),fillEvery=+r.dataset.fill||0;let h='';
  for(let k=0;k<10;k++){words.forEach(w=>h+=`<span>${w}</span>`);if(fillEvery&&k%fillEvery===i%fillEvery)h+=`<span class="fill">${r.dataset.fillword||'TWIRL°'}</span>`}
  r.innerHTML=h+h;
});

/* split headings into words */
$$('.split').forEach(h=>{h.innerHTML=h.textContent.trim().split(/\s+/).map(w=>`<span class="w"><i>${w}</i></span>`).join(' ')});

/* burst rays */
$$('.rays-svg').forEach(svg=>{
  const g=svg.querySelector('g'),c=+svg.dataset.c||280,n=+svg.dataset.n||34,min=+svg.dataset.min||150;
  for(let i=0;i<n;i++){const a=(i/n)*6.28+Math.random()*.15,r1=min+Math.random()*60,len=20+Math.random()*80;
    const l=document.createElementNS('http://www.w3.org/2000/svg','line');
    l.setAttribute('x1',c+Math.cos(a)*r1);l.setAttribute('y1',c+Math.sin(a)*r1);l.setAttribute('x2',c+Math.cos(a)*(r1+len));l.setAttribute('y2',c+Math.sin(a)*(r1+len));
    l.style.setProperty('--len',len);l.style.transitionDelay=(i*.02)+'s';l.style.opacity=.5+Math.random()*.5;g.appendChild(l)}
});

/* QR-like block */
$$('.qr').forEach(q=>{let h='';for(let i=0;i<49;i++){const corner=[0,1,2,7,9,14,15,16,4,5,6,11,13,18,19,20,28,29,30,35,37,42,43,44].includes(i);h+=`<i class="${corner||Math.random()>.5?'':'o'}"></i>`}q.innerHTML=h});

/* ---------- intersection reveals ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;const t=e.target;
  if(t.classList.contains('split'))$$('.w',t).forEach((w,i)=>setTimeout(()=>w.classList.add('on'),i*70));
  else t.classList.add('on');
  io.unobserve(t);
}),{threshold:.2});
$$('.split,.reveal,.pop,.burst,.stack,.app-left,.split-card,[data-io]').forEach(el=>io.observe(el));
/* stagger children */
$$('[data-stagger]').forEach(p=>[...p.children].forEach((c,i)=>{c.classList.add('reveal');c.style.transitionDelay=(i%4*.1)+'s';io.observe(c)}));

/* ---------- location slider ---------- */
const slides=$$('.locs-slide'),dots=$('.locs-dots');
if(slides.length){
  let cur=0;slides.forEach((s,i)=>dots.insertAdjacentHTML('beforeend',`<button aria-label="Slide ${i+1}"></button>`));
  const db=$$('button',dots);
  const go=i=>{slides[cur].classList.remove('active');db[cur].classList.remove('active');cur=i;slides[cur].classList.add('active');db[cur].classList.add('active')};
  db.forEach((b,i)=>b.onclick=()=>{go(i);clearInterval(timer);timer=setInterval(()=>go((cur+1)%slides.length),5000)});
  go(0);let timer=setInterval(()=>go((cur+1)%slides.length),5000);
}

/* ---------- accordions ---------- */
$$('.acc-q').forEach(q=>q.onclick=()=>q.parentElement.classList.toggle('open'));

/* ---------- menu tabs ---------- */
$$('.tabs button').forEach(b=>b.onclick=()=>{
  $$('.tabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  const f=b.dataset.f;$$('.mcard[data-t]').forEach(c=>{const show=f==='all'||c.dataset.t.includes(f);c.style.display=show?'':'none';if(show){c.classList.remove('on');requestAnimationFrame(()=>requestAnimationFrame(()=>c.classList.add('on')))}});
});

/* ---------- location search ---------- */
const ls=$('#locSearch');if(ls)ls.oninput=()=>{const v=ls.value.toLowerCase();$$('.loc-card').forEach(c=>c.style.display=c.textContent.toLowerCase().includes(v)?'':'none')};

/* ---------- phone tilt with mouse ---------- */
const phone=$('.phone');
if(phone)document.addEventListener('mousemove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;phone.style.transform=`rotate(${12+x*8}deg) translate(${x*20}px,${y*20}px)`});

/* ---------- forms (demo) ---------- */
$$('form[data-demo]').forEach(f=>f.onsubmit=e=>{e.preventDefault();const b=f.querySelector('button');b.innerHTML='Thanks! We got it';b.style.background='#5E8C2E'});

/* ---------- real images: drop files into assets/images/ with these exact names ---------- */
const IMG_DIR='assets/images/';
const IMG_MAP={
  'IMG-01':'hero-portrait.webp','IMG-07':'location-interior.webp','IMG-08':'location-storefront.webp','IMG-09':'location-booth.webp',
  'IMG-10':'location-crowd.webp','IMG-18':'location-open-kitchen.webp','IMG-19':'location-terrace.webp','IMG-20':'delivery-bag.webp',
  'IMG-21':'jobs-crew-portrait.webp','IMG-22':'blog-twirl-kids.webp','IMG-23':'blog-chef-lasagne.webp','IMG-24':'blog-match-night.webp',
  'IMG-25':'newsletter-mailbox.webp','IMG-26':'jobs-hero-crew.webp','IMG-27':'about-founders.webp',
  'VID-01':'story-gold-bowl-1.webp','VID-02':'story-gold-bowl-2.webp',
  'LOC-01':'loc-lahore-gulberg.webp','LOC-02':'loc-lahore-dha.webp','LOC-03':'loc-karachi-clifton.webp','LOC-04':'loc-karachi-dha.webp',
  'LOC-05':'loc-islamabad-f7.webp','LOC-06':'loc-islamabad-centaurus.webp','LOC-07':'loc-dubai-jbr.webp','LOC-08':'loc-doha-westbay.webp','LOC-09':'loc-london-soho.webp'
};
const slug=t=>t.toLowerCase().replace(/\bto go\b/,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
function tryImg(file,ok){const im=new Image();im.onload=()=>ok(IMG_DIR+file);im.src=IMG_DIR+file}
/* photos */
$$('.ph[data-label]').forEach(el=>{const code=el.dataset.label.split(' ')[0],f=IMG_MAP[code];if(f)tryImg(f,u=>{el.style.backgroundImage=`url(${u})`;el.classList.add('has-img')})});
/* dish plates (transparent PNG) */
$$('[data-plate]').forEach(el=>{const n=el.querySelector('.tag')||el.closest('.mcard')?.querySelector('h3');if(!n)return;
  tryImg(`dish-${slug(n.textContent)}.webp`,u=>{el.querySelector('svg').outerHTML=`<img src="${u}" alt="${n.textContent}">`})});
/* Twirl To Go packs */
const PACK_ORDER=['the-twirl','cheesy-does-it','garden-party'];
$$('.roll').forEach((el,i)=>{const h=el.closest('.mcard')?.querySelector('h3');const s=h?slug(h.textContent):PACK_ORDER[[...el.parentElement.children].indexOf(el)];
  if(s)tryImg(`pack-${s}.webp`,u=>{el.classList.add('has-img');el.insertAdjacentHTML('beforeend',`<img src="${u}" alt="">`)})});
/* logo, favicon, app screen, QR */
tryImg('logo.webp',u=>$$('header.site .logo').forEach(l=>l.innerHTML=`<img src="${u}" alt="TWIRL°">`));
tryImg('logo-white.webp',u=>$$('.flogo').forEach(l=>l.innerHTML=`<img src="${u}" alt="TWIRL°">`));
tryImg('favicon.webp',u=>document.head.insertAdjacentHTML('beforeend',`<link rel="icon" type="image/webp" href="${u}">`));
tryImg('app-screen.png',u=>$$('.phone .screen').forEach(s=>{s.style.backgroundImage=`url(${u})`;s.classList.add('has-img')}));
tryImg('qr-code.png',u=>$$('.qr').forEach(q=>{q.style.backgroundImage=`url(${u})`;q.classList.add('has-img')}));

/* ---------- scroll engine ---------- */
const hdr=$('#hdr'),cta=$('#ctaBar'),heroImg=$('.hero-img'),plates=$$('.plate[data-speed]');
const disc=$('.disc-sec'),ring=$('.ring'),tl=$('.timeline');
let last=0,tick=false;
function onScroll(){
  const y=scrollY,vh=innerHeight;
  hdr.classList.toggle('hide',y>last&&y>140);hdr.classList.toggle('shadow',y>10);last=y;

  /* CTA bar flips to white over red sections */
  let onRed=false;$$('[data-red]').forEach(s=>{const r=s.getBoundingClientRect();if(r.top<vh-60&&r.bottom>vh-60)onRed=true});cta.classList.toggle('on-red',onRed);

  if(heroImg&&y<vh&&document.body.classList.contains('ready'))heroImg.style.transform=`scale(${1+y/3000}) translateY(${y*.15}px)`;

  plates.forEach(p=>{if(p.matches(':hover'))return;const s=+p.dataset.speed,r=p.getBoundingClientRect(),d=r.top+r.height/2-vh/2;p.style.transform=`translateY(${(d*s).toFixed(1)}px) rotate(${(d*s*.4).toFixed(1)}deg)`});

  /* pinned golden disc */
  if(disc){
    const r=disc.getBoundingClientRect(),p=clamp(-r.top/(r.height-vh));
    const d=$('.disc',disc),bg=$('.disc-bg',disc),head=$('.disc-head',disc),fin=$('.disc-final',disc);
    const grow=clamp((p-.25)/.45);           // 25%→70%: red background grows over the screen
    const big=Math.hypot(innerWidth,vh)/bg.offsetWidth*1.1;
    bg.style.transform=`scale(${grow*big})`;
    d.style.transform=`rotate(${p*900}deg) scale(${1-clamp((p-.7)/.3)*.35}) translateY(${-clamp((p-.72)/.28)*28}vh)`;
    head.style.opacity=1-clamp(p/.2);
    $('.vcard.l',disc).style.transform=`translateY(${(.3-p)*500}px) rotate(${-6+p*8}deg)`;
    $('.vcard.r',disc).style.transform=`translateY(${(.2-p)*700}px) rotate(${6-p*10}deg)`;
    const vo=1-clamp((p-.6)/.12);$$('.vcard',disc).forEach(v=>v.style.opacity=vo);
    fin.style.opacity=clamp((p-.78)/.12);
  }

  /* rotating circular text tied to scroll */
  if(ring){const r=ring.getBoundingClientRect();ring.style.transform=`rotate(${(r.top-vh)*-.15}deg)`}

  /* about timeline line draw */
  if(tl){const r=tl.getBoundingClientRect();tl.style.setProperty('--p',clamp((vh*.7-r.top)/r.height))}

  /* horizontal strip */
  $$('[data-hscroll]').forEach(s=>{const r=s.parentElement.getBoundingClientRect(),p=(vh-r.top)/(vh+r.height);s.style.transform=`translateX(${(-p*600+200).toFixed(1)}px)`});
  tick=false;
}
addEventListener('scroll',()=>{if(!tick){requestAnimationFrame(onScroll);tick=true}},{passive:true});
addEventListener('resize',onScroll);onScroll();
})();
