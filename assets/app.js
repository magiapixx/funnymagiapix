const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const V = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/';
const ARROW = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const LOGO = '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 2l3.2 9.6L29 14l-9.8 2.6L16 30l-3.2-13.4L3 14l9.8-2.4z" fill="#C6FF3D"/><circle cx="26" cy="6" r="2" fill="#8B5CFF"/></svg>';

// Data proyek (fiktif) — dipakai karya.html dan proyek.html
const PROJECTS = [
  {id:'nusa', name:'Nusa Bank Digital', cat:'Web · WebGL', year:2026, client:'PT Nusa Bank Digital Tbk', dur:'10 minggu', team:'7 orang', color:'#C6FF3D',
   video:V+'hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4', video2:V+'hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4',
   tagline:'Bank yang terasa seperti mainan favorit.', kpi:[['1,2 jt','pendaftar bulan pertama'],['4×','lonjakan unduhan'],['98','skor Lighthouse']],
   brief:'Nusa Bank ingin meluncurkan bank digital untuk generasi Z, tetapi pasar sudah dipenuhi aplikasi berwarna biru yang terlihat sama.',
   idea:'Kami menjadikan kartu debit sebagai karakter. Kartu 3D yang bisa diputar, dilempar, dan dikustomisasi langsung di website menjadi pintu masuk pendaftaran.',
   result:'Kampanye peluncuran memecahkan target 6 bulan dalam 31 hari, dan kartu kustom dibagikan lebih dari 380 ribu kali di media sosial.',
   services:['Strategi brand','Web WebGL','Motion 3D','Kampanye peluncuran']},
  {id:'garuda', name:'Garuda Mobility', cat:'Produk · SaaS', year:2026, client:'Garuda Mobility Group', dur:'14 minggu', team:'9 orang', color:'#8B5CFF',
   video:V+'hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4', video2:V+'hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4',
   tagline:'9.000 kendaraan, satu layar yang tenang.', kpi:[['−37%','waktu respons insiden'],['9.000','kendaraan terpantau'],['SOTD','Awwwards']],
   brief:'Operator armada Garuda bekerja dengan 6 sistem berbeda dan spreadsheet. Insiden sering terlambat ditangani.',
   idea:'Kami merancang dashboard "satu layar" dengan peta hidup, peringatan berbasis prioritas, dan design system 240 komponen.',
   result:'Waktu respons insiden turun 37%, dan situs pemasaran produknya meraih Awwwards Site of the Day.',
   services:['UX riset','Design system','Dashboard','Situs pemasaran']},
  {id:'ruanglari', name:'Ruang Lari', cat:'Kampanye · Growth', year:2025, client:'Ruang Lari Indonesia', dur:'6 minggu', team:'5 orang', color:'#FF5FA2',
   video:V+'hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4', video2:V+'hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4',
   tagline:'Jakarta tidak tidur. Jakarta berlari.', kpi:[['48 jt','tayangan organik'],['22.400','peserta lari malam'],['5,1×','ROAS']],
   brief:'Komunitas lari ini ingin menarik pekerja kantoran yang merasa tidak punya waktu untuk olahraga.',
   idea:'Kampanye "Lari Malam Jakarta": rute bercahaya di kota, filter AR, dan video pendek dari pelari sungguhan setelah jam kantor.',
   result:'48 juta tayangan organik dan 22.400 peserta di acara puncak, dengan biaya akuisisi 61% di bawah target.',
   services:['Konsep kampanye','Produksi video','Filter AR','Iklan performa']},
  {id:'sehatin', name:'Sehatin Klinik', cat:'Produk · AI', year:2025, client:'Sehatin Health', dur:'16 minggu', team:'8 orang', color:'#6EB5FF',
   video:V+'hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4', video2:V+'hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4',
   tagline:'Dokter pertama yang selalu bangun.', kpi:[['4,9 ★','rating Play Store'],['310 rb','konsultasi/bulan'],['−52%','antrean klinik']],
   brief:'Klinik Sehatin kewalahan dengan antrean pagi. Banyak pasien datang untuk keluhan ringan yang bisa ditangani dari rumah.',
   idea:'Asisten AI triase yang hangat dan aman, dengan alur percakapan yang dirancang bersama 14 dokter.',
   result:'Antrean klinik turun 52%, dan aplikasinya bertahan dengan rating 4,9 dari 41 ribu ulasan.',
   services:['Product design','AI conversation design','Aplikasi mobile','Brand refresh']},
  {id:'tenun', name:'Tenun Atelier', cat:'Brand · Motion', year:2025, client:'Tenun Atelier', dur:'8 minggu', team:'4 orang', color:'#F4845F',
   video:V+'hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4', video2:V+'hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4',
   tagline:'Benang lama, cerita baru.', kpi:[['+212%','penjualan online'],['14','negara pengiriman'],['Gold','Citra Pariwara']],
   brief:'Rumah tenun keluarga dari Sumba ingin masuk pasar butik Eropa tanpa kehilangan akarnya.',
   idea:'Identitas berbasis pola motif asli yang dianimasikan benang demi benang, plus toko online editorial.',
   result:'Penjualan online naik 212% dalam satu kuartal, dan kini dikirim ke 14 negara.',
   services:['Rebrand','Motion identity','E-commerce','Fotografi arahan']},
  {id:'pulau', name:'Pulau Records', cat:'Web · Musik', year:2024, client:'Pulau Records', dur:'7 minggu', team:'5 orang', color:'#C6FF3D',
   video:V+'hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4', video2:V+'hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4',
   tagline:'Label indie yang terdengar seperti ombak.', kpi:[['3,4 jt','stream rilisan'],['18 mnt','rata-rata sesi'],['FWA','Site of the Day']],
   brief:'Label musik indie dari Lombok butuh rumah digital untuk 22 artisnya.',
   idea:'Website yang bisa "didengar": setiap halaman artis punya visual reaktif terhadap lagu yang diputar.',
   result:'Rata-rata sesi 18 menit dan 3,4 juta stream untuk rilisan yang diluncurkan lewat situs.',
   services:['Web audio-reaktif','Identitas','Motion','Rilis kampanye']}
];

const PAGES = [['index.html','Beranda'],['karya.html','Karya'],['layanan.html','Layanan'],['proses.html','Proses'],['tim.html','Tim'],['harga.html','Harga'],['kontak.html','Kontak']];
const here = (location.pathname.split('/').pop() || 'index.html');

// Nav & footer bersama untuk halaman dalam
const navSlot = document.getElementById('nav-slot');
if (navSlot) navSlot.outerHTML = `<nav aria-label="Utama"><a href="index.html" class="logo">${LOGO}Magiapix</a><div class="links">${PAGES.slice(1,6).map(([h,l])=>`<a href="${h}"${h===here?' aria-current="page"':''}>${l}</a>`).join('')}</div><a href="kontak.html" class="btn btn-lime"><span class="roll"><span>Mulai proyek</span><span>Ayo sulap</span></span><span class="dot">${ARROW}</span></a></nav>`;
const footSlot = document.getElementById('foot-slot');
if (footSlot) footSlot.outerHTML = `<footer><div class="wrap"><div class="fgrid"><div><a href="index.html" class="logo" style="color:var(--ink)">${LOGO}Magiapix</a><p style="max-width:300px;margin-top:14px">PT Magia Piksel Kreatif. Agensi digital independen yang menyulap brand sejak 2019.</p></div><div><h5>Studio Jakarta</h5><ul><li>Jl. Cahaya Bintang No. 7</li><li>Kebayoran Baru, Jakarta Selatan 12160</li><li>Sen–Jum · 09.00–18.00 WIB</li></ul></div><div><h5>Studio Bali</h5><ul><li>Jl. Pantai Berawa No. 88</li><li>Canggu, Badung 80361</li><li>+62 361 555 0199</li></ul></div><div><h5>Jelajah</h5><ul>${PAGES.map(([h,l])=>`<li><a href="${h}">${l}</a></li>`).join('')}</ul></div></div><div class="giant" aria-hidden="true">magiapix</div><div class="legal"><span>© 2026 PT Magia Piksel Kreatif. Semua trik dilindungi.</span><span><a href="#">Privasi</a> · <a href="#">Syarat</a> · <a href="tim.html#karier">Karier (5 posisi dibuka)</a></span></div></div></footer>`;
document.querySelectorAll('nav .links a').forEach(a=>{ if (a.getAttribute('href')===here) a.setAttribute('aria-current','page'); });

// Page transition: tirai lima warna + nama halaman tujuan
const veil = document.createElement('div');
veil.id = 'veil';
veil.innerHTML = '<i></i><i></i><i></i><i></i><i></i><div class="veil-label"><span class="mono">✦ Abrakadabra</span><b class="serif"></b></div>';
document.body.appendChild(veil);
const vLabel = veil.querySelector('b');
vLabel.textContent = document.body.dataset.page || 'Magiapix';
if (!reduce) {
  veil.classList.add('cover');
  setTimeout(()=>{ veil.classList.add('leave'); setTimeout(()=>veil.classList.remove('cover','leave'), 1400); }, 80);
}
document.addEventListener('click', e=>{
  const a = e.target.closest('a[href]');
  if (!a || reduce || e.metaKey || e.ctrlKey || a.target) return;
  const href = a.getAttribute('href');
  if (!/\.html(\?|#|$)/.test(href) || href.startsWith('http')) return;
  e.preventDefault();
  vLabel.textContent = a.dataset.label || (PAGES.find(p=>href.startsWith(p[0]))||[,'Proyek'])[1];
  veil.classList.remove('leave'); veil.classList.add('enter');
  setTimeout(()=>location.href = href, 820);
});
addEventListener('pageshow', e=>{ if (e.persisted) veil.classList.remove('enter','cover'); });

// Jam Jakarta
const ck = document.getElementById('clock');
if (ck) { const tick=()=>ck.textContent='Jakarta '+new Date().toLocaleTimeString('id-ID',{timeZone:'Asia/Jakarta',hour:'2-digit',minute:'2-digit'})+' WIB'; tick(); setInterval(tick,10000); }

// Kata ajaib berganti dengan scramble
const glyph = '✦✧⋆*#@%&$?!';
function scramble(el, to){ let f=0; const n=18; const id=setInterval(()=>{ f++; el.textContent=to.split('').map((c,i)=>i<to.length*f/n?c:glyph[Math.random()*glyph.length|0]).join(''); if(f>=n) clearInterval(id); },40); }
document.querySelectorAll('[data-words]').forEach(el=>{
  const words = el.dataset.words.split('|'); let wi = 0;
  if (!reduce) setTimeout(()=>setInterval(()=>{ wi=(wi+1)%words.length; scramble(el, words[wi]); },2800),1600);
});

// Manifesto: kata menyala saat scroll
const mani = document.getElementById('mani');
if (mani) {
  mani.innerHTML = mani.textContent.split(' ').map(w=>`<span class="w">${w}</span>`).join(' ');
  const ws = [...mani.querySelectorAll('.w')];
  const lightUp = ()=>{ const r=mani.getBoundingClientRect(); const p=Math.min(1,Math.max(0,(innerHeight*.85-r.top)/(r.height+innerHeight*.35))); const k=Math.round(p*ws.length); ws.forEach((w,i)=>w.classList.toggle('on',i<k||reduce)); };
  addEventListener('scroll',lightUp,{passive:true}); lightUp();
}

// Tim (generative avatar)
const TEAM = [
 ['Arka Wiratama','Founder & Creative Director','Pernah memenangkan lomba sulap SD.','#8B5CFF','#C6FF3D'],
 ['Nadia Kusuma','Head of Strategy','Membaca 52 buku setahun.','#FF5FA2','#8B5CFF'],
 ['Dimas Pratama','Lead WebGL Engineer','Shader pertama di usia 16.','#C6FF3D','#13111D'],
 ['Sekar Ayuningtyas','Motion Director','Mengoleksi 300 vinyl.','#6EB5FF','#FF5FA2'],
 ['Yoga Mahendra','Product Designer','Pecinta kucing oranye.','#F4845F','#8B5CFF'],
 ['Intan Permata','Growth Lead','Pelari maraton Borobudur.','#8B5CFF','#6EB5FF'],
 ['Raka Santoso','AI Engineer','Melatih model untuk menulis pantun.','#C6FF3D','#FF5FA2'],
 ['Maya Lestari','Client Partner','Fasih 4 bahasa.','#FF5FA2','#F4845F'],
 ['Bagus Hartono','Senior Developer','Menulis kode sambil mendengar gamelan.','#6EB5FF','#C6FF3D'],
 ['Citra Dewanti','3D Artist','Membuat semua karakter maskot kami.','#C6FF3D','#8B5CFF'],
 ['Fajar Nugroho','Copywriter','Penulis 3 buku puisi.','#F4845F','#13111D'],
 ['Ayu Ratnasari','Studio Manager','Penjaga tanaman kantor (41 pot).','#8B5CFF','#FF5FA2']];
function avatar(n,a,b,i){ const ini=n.split(' ').map(s=>s[0]).join(''); const shapes=[`<circle cx="100" cy="100" r="70" fill="${a}"/>`,`<rect x="40" y="40" width="120" height="120" rx="30" fill="${a}" transform="rotate(${i*12} 100 100)"/>`,`<path d="M100 20l22 58 58 22-58 22-22 58-22-58-58-22 58-22z" fill="${a}"/>`][i%3]; return `<div class="avatar" style="background:${b}"><svg viewBox="0 0 200 200" role="img" aria-label="Avatar ${n}">${shapes}<text x="100" y="116" text-anchor="middle" font-family="Instrument Serif" font-style="italic" font-size="52" fill="#0B0A12">${ini}</text></svg></div>`; }
const teamEl = document.getElementById('team');
if (teamEl) { const max=+(teamEl.dataset.max||TEAM.length); teamEl.innerHTML = TEAM.slice(0,max).map(([n,r,f,a,b],i)=>`<div class="member reveal">${avatar(n,a,b,i)}<div class="info"><h4>${n}</h4><p>${r}</p><div class="fun">${f}</div></div></div>`).join(''); }

// Grid karya dengan filter
const grid = document.getElementById('work-all');
if (grid) {
  const spans=['c1','c2','c3','c4','c2','c1'];
  grid.innerHTML = PROJECTS.map((p,i)=>`<a href="proyek.html?p=${p.id}" data-label="${p.name}" data-cat="${p.cat.split(' · ')[0]}" class="card ${spans[i]} reveal"><div class="media"><video autoplay muted loop playsinline src="${p.video}"></video><span class="chip mono">${p.cat}</span><span class="peek mono">Buka kasus ✦</span></div><div class="meta"><div><h4>${p.name}</h4><p>${p.tagline}</p></div><span class="kpi">${p.kpi[0][0]}<br>${p.kpi[0][1]}</span></div></a>`).join('');
  document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.filters button').forEach(x=>x.setAttribute('aria-pressed',x===b));
    const f=b.dataset.f; grid.querySelectorAll('.card').forEach(c=>c.classList.toggle('hide', f!=='Semua' && c.dataset.cat!==f));
  }));
}

// Halaman detail proyek
const detail = document.getElementById('detail');
if (detail) {
  const id = new URLSearchParams(location.search).get('p') || 'nusa';
  const i = Math.max(0, PROJECTS.findIndex(p=>p.id===id)); const p = PROJECTS[i]; const nx = PROJECTS[(i+1)%PROJECTS.length];
  document.title = p.name + ' — Studi Kasus Magiapix';
  document.body.dataset.page = p.name; vLabel.textContent = p.name;
  document.documentElement.style.setProperty('--accent', p.color);
  detail.innerHTML = `
  <header class="d-hero"><video autoplay muted loop playsinline src="${p.video}" aria-hidden="true"></video>
    <div class="wrap"><a href="karya.html" class="back mono">← Semua karya</a><p class="mono acc">Studi kasus ${String(i+1).padStart(2,'0')} / ${String(PROJECTS.length).padStart(2,'0')} · ${p.cat}</p><h1>${p.name}</h1><p class="d-tag serif">${p.tagline}</p></div></header>
  <section class="d-facts"><div class="wrap facts">${[['Klien',p.client],['Tahun',p.year],['Durasi',p.dur],['Tim',p.team]].map(([k,v])=>`<div><span class="mono">${k}</span><b>${v}</b></div>`).join('')}</div></section>
  <section><div class="wrap d-grid"><div class="eyebrow"><b>01</b><span class="mono">Tantangan</span></div><p class="d-big reveal">${p.brief}</p></div></section>
  <div class="wrap"><div class="d-wide reveal"><video autoplay muted loop playsinline src="${p.video2}"></video></div></div>
  <section><div class="wrap d-grid"><div class="eyebrow"><b>02</b><span class="mono">Trik kami</span></div><div><p class="d-big reveal">${p.idea}</p><div class="tags" style="margin-top:28px">${p.services.map(s=>`<i>${s}</i>`).join('')}</div></div></div></section>
  <section class="d-kpi"><div class="wrap"><div class="eyebrow"><b>03</b><span class="mono">Hasil</span></div><div class="kpis">${p.kpi.map(([v,l])=>`<div class="reveal"><strong>${v}</strong><span>${l}</span></div>`).join('')}</div><p class="d-big reveal" style="margin-top:56px">${p.result}</p></div></section>
  <a href="proyek.html?p=${nx.id}" data-label="${nx.name}" class="next"><video autoplay muted loop playsinline src="${nx.video}" aria-hidden="true"></video><div class="wrap"><span class="mono">Trik berikutnya ✦</span><h2>${nx.name}</h2><span class="serif">${nx.tagline}</span></div></a>`;
}

// Reveal + counter
const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }),{threshold:.12});
document.querySelectorAll('.reveal').forEach(n=>io.observe(n));
const co = new IntersectionObserver(es=>es.forEach(e=>{ if(!e.isIntersecting) return; const n=e.target,t=+n.dataset.count,s=n.dataset.suffix||''; const t0=performance.now(); const run=now=>{ const p=Math.min(1,(now-t0)/1600); n.textContent=Math.round(t*(1-Math.pow(1-p,3)))+s; if(p<1) requestAnimationFrame(run); }; reduce?n.textContent=t+s:requestAnimationFrame(run); co.unobserve(n); }),{threshold:.5});
document.querySelectorAll('[data-count]').forEach(n=>co.observe(n));

// Kalkulator estimasi (harga.html)
const calc = document.getElementById('calc');
if (calc) {
  const out = document.getElementById('calc-out');
  const upd = ()=>{ let t=0; calc.querySelectorAll('input[type=checkbox]:checked').forEach(i=>t+=+i.value); const w=+calc.querySelector('[name=speed]:checked').dataset.mult; out.textContent='Rp '+Math.round(t*w)+' jt'; };
  calc.addEventListener('change',upd); upd();
}

// Form kontak (demo, tidak mengirim ke mana pun)
const form = document.getElementById('brief-form');
if (form) form.addEventListener('submit',e=>{ e.preventDefault(); form.innerHTML='<p class="d-big">Terima kasih ✦ Mantra Anda sudah kami terima. Tim kami akan membalas dalam 1×24 jam kerja.</p>'; });

// Signature: jejak bintang tongkat sihir
if (!reduce && matchMedia('(pointer:fine)').matches) {
  const c=document.getElementById('spark')||document.body.appendChild(Object.assign(document.createElement('canvas'),{id:'spark'})), x=c.getContext('2d'); let P=[];
  const rs=()=>{ c.width=innerWidth*devicePixelRatio; c.height=innerHeight*devicePixelRatio; x.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0); }; rs(); addEventListener('resize',rs);
  const cols=['#C6FF3D','#8B5CFF','#FF5FA2','#F3EFE6'];
  addEventListener('pointermove',e=>{ for(let i=0;i<2;i++) P.push({x:e.clientX,y:e.clientY,vx:(Math.random()-.5)*1.6,vy:(Math.random()-.5)*1.6-.4,l:1,s:Math.random()*3+1.5,c:cols[Math.random()*4|0]}); });
  addEventListener('click',e=>{ for(let i=0;i<36;i++){ const a=Math.PI*2*i/36; P.push({x:e.clientX,y:e.clientY,vx:Math.cos(a)*4,vy:Math.sin(a)*4,l:1,s:3,c:cols[i%4]}); } });
  const star=(px,py,r)=>{ x.beginPath(); for(let i=0;i<8;i++){ const a=i*Math.PI/4,rr=i%2?r*.35:r; x.lineTo(px+Math.cos(a)*rr,py+Math.sin(a)*rr); } x.fill(); };
  (function loop(){ x.clearRect(0,0,innerWidth,innerHeight); P=P.filter(p=>p.l>0); for(const p of P){ p.x+=p.vx; p.y+=p.vy; p.vy+=.03; p.l-=.022; x.globalAlpha=p.l; x.fillStyle=p.c; star(p.x,p.y,p.s*p.l+.5); } requestAnimationFrame(loop); })();
}
