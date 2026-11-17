const STORAGE = {
  content: "donatik_content_v1",
  scores: "donatik_scores_v1",
  player: "donatik_player_v1"
};

const defaultCustomers = [
 {name:"Naya",avatar:"👧",style:"ceria",arrival:"Hai, Penjual! Hari ini aku lagi semangat sekali. Aku mau donat yang manis!",poemIntro:"Aku membawa larik yang membuatku berpikir tentang kasih sayang.",line:"Aku ingin mencintaimu dengan sederhana.",meaning:"Mengungkapkan kasih sayang dengan tulus, wajar, dan tidak berlebihan.",question:"Apa maksud penyair melalui larik tersebut?",options:["Cinta harus ditunjukkan dengan kemewahan.","Kasih sayang dapat diungkapkan dengan tulus tanpa berlebihan.","Cinta hanya bisa diberikan melalui hadiah mahal.","Seseorang tidak boleh menunjukkan perasaan."],answer:1,correct:"Tepat! Larik ini menggambarkan kasih sayang yang tulus dan sederhana.",wrong:"Belum tepat. Kata 'sederhana' menunjukkan sesuatu yang tidak berlebihan, sedangkan cinta disampaikan dengan tulus.",topping:"Stroberi",emoji:"🍓",before:"Menurutmu, apa makna larik ini?",right:"Yeay, kamu memahami puisinya! Aku mau topping stroberi, ya. Tolong buatkan!",after:"Wah, donat stroberinya cocok sekali! Terima kasih!",bye:"Sampai jumpa! Semoga tokomu makin ramai!"},
 {name:"Bima",avatar:"🧑🏻",style:"pemalu",arrival:"Permisi... aku boleh pesan donat? Aku suka sesuatu yang menenangkan.",poemIntro:"Ada larik yang mengingatkanku pada suasana malam.",line:"Bintang berbisik di telinga malam.",meaning:"Suasana malam digambarkan tenang dan seolah-olah bintang dapat berbicara.",question:"Suasana apa yang dibangun melalui larik tersebut?",options:["Suasana malam yang gaduh dan menakutkan.","Suasana malam yang tenang dan penuh imajinasi.","Suasana siang yang sangat panas.","Suasana pasar yang ramai."],answer:1,correct:"Benar! Personifikasi membuat malam terasa hidup dan tenang.",wrong:"Coba perhatikan kata 'berbisik'. Kata itu memberi kesan suasana yang lembut dan tenang.",topping:"Cokelat",emoji:"🍫",before:"Bagaimana suasana yang tergambar dalam larik ini?",right:"Jawabanmu benar. Aku ingin topping cokelat, boleh?",after:"Terima kasih... cokelatnya pas sekali.",bye:"Terima kasih sudah melayani pesananku."},
 {name:"Lala",avatar:"👩🏻",style:"rindu",arrival:"Halo! Aku sedang teringat seseorang. Aku ingin memesan donat sambil bercerita.",poemIntro:"Larik ini seperti perasaan yang sedang kusimpan.",line:"Jarak memisahkan raga, bukan doa.",meaning:"Walaupun berjauhan secara fisik, seseorang tetap dapat menyayangi dan mendoakan orang lain.",question:"Pesan apa yang disampaikan larik tersebut?",options:["Orang yang berjauhan tidak dapat saling peduli.","Jarak membuat semua hubungan berakhir.","Kasih dan doa tetap dapat diberikan meskipun terpisah jarak.","Doa hanya berguna ketika bertemu langsung."],answer:2,correct:"Betul! Jarak fisik tidak menghalangi kasih dan doa.",wrong:"Belum tepat. Larik itu membedakan jarak fisik dengan perasaan dan doa yang tetap terhubung.",topping:"Blueberry",emoji:"🫐",before:"Apa pesan yang ingin disampaikan melalui larik ini?",right:"Iya, benar! Aku pesan topping blueberry, ya.",after:"Blueberry-nya mengingatkanku pada langit senja. Terima kasih!",bye:"Semoga kita bertemu lagi!"},
 {name:"Raka",avatar:"👦🏽",style:"bercanda",arrival:"Waduh, antrean donatnya seramai ini! Aku pesan satu, jangan sampai dimakan penjualnya, ya!",poemIntro:"Aku menemukan larik yang memakai gambaran alam.",line:"Daun-daun menari ditiup angin.",meaning:"Daun bergerak tertiup angin dan digambarkan seolah-olah sedang menari.",question:"Majas apakah yang paling tampak pada larik tersebut?",options:["Hiperbola, karena melebih-lebihkan.","Personifikasi, karena daun digambarkan dapat menari.","Metafora, karena daun disamakan dengan manusia.","Ironi, karena maknanya berlawanan."],answer:1,correct:"Tepat! Daun seolah memiliki kemampuan manusia, yaitu menari.",wrong:"Perhatikan kata 'menari'. Benda alam digambarkan melakukan tindakan manusia, yaitu personifikasi.",topping:"Matcha",emoji:"🍵",before:"Menurutmu, bagaimana daun digambarkan dalam larik ini?",right:"Mantap! Aku mau topping matcha. Biar donatku kelihatan keren!",after:"Wih, matcha! Ini baru donat yang kece!",bye:"Dadah! Jangan lupa sisakan satu buat aku!"},
 {name:"Sita",avatar:"👩🏽",style:"sedih",arrival:"Hai... hari ini aku sedikit murung. Semoga donat bisa membuat hariku lebih baik.",poemIntro:"Larik ini menggambarkan perasaan yang sulit diucapkan.",line:"Hujan menyimpan air mata bumi.",meaning:"Hujan digambarkan sebagai air mata bumi, menciptakan suasana sedih atau sendu.",question:"Kesan yang paling kuat dari larik tersebut adalah...",options:["Kegembiraan saat bermain air.","Kesedihan yang digambarkan melalui hujan.","Kemarahaan seseorang kepada bumi.","Keadaan panas pada musim kemarau."],answer:1,correct:"Benar. Hujan menjadi gambaran suasana sedih atau sendu.",wrong:"Ungkapan 'air mata' biasanya berkaitan dengan kesedihan. Hujan dipakai sebagai gambaran suasana itu.",topping:"Vanila",emoji:"🍦",before:"Kesan apa yang muncul ketika kamu membaca larik ini?",right:"Kamu benar. Aku ingin topping vanila, rasanya lembut seperti yang kubayangkan.",after:"Terima kasih. Donat vanilanya membuatku sedikit lebih ceria.",bye:"Sampai jumpa, semoga harimu menyenangkan."},
 {name:"Dito",avatar:"🧒🏻",style:"penasaran",arrival:"Halo, Kak! Aku punya pertanyaan juga, tapi pesan donat dulu. Aku penasaran dengan puisi!",poemIntro:"Coba pikirkan gambaran alam dalam larik berikut.",line:"Mentari tersenyum menyapa pagi.",meaning:"Matahari pagi digambarkan seolah-olah dapat tersenyum dan menyapa, menimbulkan kesan hangat dan ceria.",question:"Apa makna penggambaran mentari yang tersenyum?",options:["Matahari benar-benar memiliki wajah.","Pagi digambarkan terasa hangat dan menyenangkan.","Matahari sedang merasa sedih.","Hari akan segera menjadi malam."],answer:1,correct:"Betul! Mentari yang tersenyum menggambarkan pagi yang cerah dan menyenangkan.",wrong:"Mentari tidak benar-benar tersenyum. Itu gambaran kiasan untuk suasana pagi yang cerah dan hangat.",topping:"Karamel",emoji:"🍯",before:"Suasana apa yang digambarkan melalui mentari yang tersenyum?",right:"Asyik, benar! Aku mau topping karamel, ya!",after:"Karamelnya lezat! Terima kasih sudah menjawab rasa penasaranku.",bye:"Sampai bertemu lagi, Penjual!"},
 {name:"Mira",avatar:"👩🏼",style:"lembut",arrival:"Selamat sore. Aku ingin sesuatu yang manis, seperti kenangan baik.",poemIntro:"Larik ini berbicara tentang kenangan.",line:"Kenangan tumbuh di sudut ingatan.",meaning:"Pengalaman masa lalu tetap tersimpan dan berkembang dalam ingatan seseorang.",question:"Apa yang dimaksud dengan kenangan yang 'tumbuh'?",options:["Kenangan dapat ditanam seperti bunga.","Ingatan tentang pengalaman terus tersimpan dan berkembang.","Seseorang melupakan seluruh masa lalunya.","Kenangan hanya muncul di kebun."],answer:1,correct:"Tepat! Kata 'tumbuh' merupakan kiasan bahwa kenangan tetap hidup dalam ingatan.",wrong:"Kenangan tidak tumbuh secara nyata. Kata itu menggambarkan ingatan yang tetap tersimpan.",topping:"Stroberi",emoji:"🍓",before:"Apa arti kiasan 'kenangan tumbuh' pada larik ini?",right:"Benar sekali. Aku pesan topping stroberi, ya.",after:"Cantik sekali donatnya. Terima kasih!",bye:"Semoga kenangan baik selalu menyertaimu."},
 {name:"Fajar",avatar:"🧑🏾",style:"semangat",arrival:"Hai! Aku datang membawa semangat pagi. Satu donat untuk menambah energi!",poemIntro:"Bacalah larik tentang perjuangan ini.",line:"Langkah kecil menjemput cita-cita.",meaning:"Keberhasilan dapat diraih melalui usaha kecil yang dilakukan secara bertahap dan konsisten.",question:"Pesan apa yang dapat diambil dari larik tersebut?",options:["Cita-cita tercapai tanpa usaha.","Usaha kecil yang dilakukan terus-menerus dapat mendekatkan kita pada tujuan.","Seseorang harus berjalan jauh setiap hari.","Cita-cita hanya milik orang dewasa."],answer:1,correct:"Benar! Kemajuan dapat dimulai dari langkah kecil yang konsisten.",wrong:"Larik ini menekankan proses. Usaha kecil yang dilakukan terus-menerus membantu mencapai cita-cita.",topping:"Cokelat",emoji:"🍫",before:"Apa pesan tentang usaha yang disampaikan larik ini?",right:"Keren! Aku mau topping cokelat untuk merayakan semangatku!",after:"Mantap! Donat cokelat dan semangat baru!",bye:"Terus semangat, ya!"},
 {name:"Tari",avatar:"👧🏾",style:"imajinatif",arrival:"Permisi! Aku suka hal-hal yang penuh imajinasi. Ada donat dengan topping blueberry?",poemIntro:"Aku membawa larik yang menggambarkan suasana alam.",line:"Ombak berlari mengejar pantai.",meaning:"Ombak bergerak menuju pantai dan digambarkan seolah-olah dapat berlari.",question:"Apa gambaran yang ingin dibangun oleh larik tersebut?",options:["Ombak benar-benar memiliki kaki.","Gerakan ombak menuju pantai yang terasa dinamis.","Pantai sedang berlari menjauh.","Laut tidak memiliki gelombang."],answer:1,correct:"Tepat! Kata 'berlari' membuat gerakan ombak terasa hidup dan dinamis.",wrong:"Ombak tidak benar-benar berlari. Kata itu menggambarkan gerak ombak menuju pantai.",topping:"Blueberry",emoji:"🫐",before:"Bagaimana gerakan ombak digambarkan pada larik ini?",right:"Benar! Kamu teliti sekali. Aku memang ingin topping blueberry!",after:"Blueberry-nya sesuai pesananku. Terima kasih!",bye:"Sampai jumpa di toko donat puisi!"},
 {name:"Aldi",avatar:"🧑🏻‍🦱",style:"unik",arrival:"Salam donat! Aku pelanggan terakhir. Semoga pesanan terakhir ini jadi penutup yang manis!",poemIntro:"Ini larik terakhir dariku. Coba pahami pesannya.",line:"Ilmu adalah pelita dalam gelap.",meaning:"Ilmu menjadi penerang atau pedoman yang membantu manusia menghadapi ketidaktahuan dan kesulitan.",question:"Mengapa ilmu diibaratkan sebagai pelita?",options:["Ilmu dapat digunakan sebagai lampu sungguhan.","Ilmu membantu manusia memahami sesuatu dan menemukan arah.","Ilmu membuat malam menjadi siang.","Pelita tidak membutuhkan cahaya."],answer:1,correct:"Hebat! Ilmu diibaratkan penerang karena membantu manusia memahami dan menentukan arah.",wrong:"Pelita memberi cahaya. Dalam larik ini, ilmu menjadi kiasan untuk pengetahuan yang memberi pemahaman dan pedoman.",topping:"Matcha",emoji:"🍵",before:"Apa hubungan ilmu dengan pelita dalam larik tersebut?",right:"Jawaban tepat! Aku pesan topping matcha sebagai penutup yang segar!",after:"Pesanan terakhir sukses! Matcha-nya mantap!",bye:"Terima kasih! Semoga tokomu sukses selalu!"}
];

function loadContent(){
  try { const saved=JSON.parse(localStorage.getItem(STORAGE.content)); if(Array.isArray(saved)&&saved.length===10)return saved; } catch(e){}
  return defaultCustomers;
}
let customersData=loadContent();
let state=null, timerId=null, arrivalId=null, patienceId=null, activeCustomer=null;
const $=id=>document.getElementById(id);
const pages=[...document.querySelectorAll(".page")];

function showPage(id){
  pages.forEach(p=>p.classList.toggle("active",p.id===id));
  window.scrollTo(0,0);
}
document.addEventListener("click",e=>{
  const target=e.target.closest("[data-page]");
  if(target){e.preventDefault();showPage(target.dataset.page);}
});
$("playerName").value=localStorage.getItem(STORAGE.player)||"";
$("playerName").addEventListener("change",()=>localStorage.setItem(STORAGE.player,$("playerName").value.trim()));
$("soundToggle").addEventListener("change",e=>localStorage.setItem("donatik_sound",e.target.checked?"1":"0"));

function startGame(){
  clearIntervals();
  const name=$("playerName").value.trim()||"Pemain";
  localStorage.setItem(STORAGE.player,name);
  state={time:180,lives:3,score:0,served:0,correct:0,wrong:0,arrived:0,queue:[],finished:false,startedAt:Date.now(),name};
  activeCustomer=null;
  $("gameMessage").textContent="";
  showPage("game");
  renderHUD();renderQueue();renderService();
  addCustomer();
  arrivalId=setInterval(()=>{if(!state.finished&&state.arrived<10)addCustomer();},2000);
  timerId=setInterval(()=>{if(!state||state.finished)return;state.time--;renderHUD();if(state.time<=0)endGame("Waktu 3 menit telah habis.","time");},1000);
  patienceId=setInterval(()=>{if(!state||state.finished)return;
    let expired=state.queue.find(c=>!c.done&&c!==activeCustomer&&c.patience<=1);
    state.queue.forEach(c=>{if(!c.done&&c!==activeCustomer)c.patience=Math.max(0,c.patience-1);});
    renderQueue();
    if(expired||state.queue.some(c=>!c.done&&c!==activeCustomer&&c.patience<=0))endGame("Kesabaran salah satu pelanggan habis.","patience");
  },1000);
}
function clearIntervals(){clearInterval(timerId);clearInterval(arrivalId);clearInterval(patienceId);}
function addCustomer(){
  if(state.finished||state.arrived>=10)return;
  const index=state.arrived++;
  const data=customersData[index];
  state.queue.push({id:index,data,patience:55+(index%3)*8,done:false});
  renderQueue();
  $("queueCount").textContent=state.queue.filter(c=>!c.done).length+" menunggu";
  if(state.arrived===10)clearInterval(arrivalId);
}
function renderHUD(){
  $("timer").textContent=`${String(Math.floor(state.time/60)).padStart(2,"0")}:${String(state.time%60).padStart(2,"0")}`;
  $("lives").textContent="❤️".repeat(state.lives)+"♡".repeat(3-state.lives);
  $("score").textContent=state.score;
  $("served").textContent=state.served+"/10";
}
function renderQueue(){
  const q=$("customerQueue");q.innerHTML="";
  state.queue.filter(c=>!c.done).forEach(c=>{
    const btn=document.createElement("button");btn.className="customer-card"+(activeCustomer===c?" selected":"");
    btn.disabled=!!activeCustomer||state.finished;
    const pct=Math.round(c.patience/71*100);
    btn.innerHTML=`<span class="avatar">${c.data.avatar}</span><span class="customer-info"><b>${escapeHTML(c.data.name)}</b><small>Kesabaran ${c.patience}s</small><span class="patience"><span style="width:${pct}%"></span></span></span>`;
    btn.addEventListener("click",()=>selectCustomer(c));q.appendChild(btn);
  });
  $("queueCount").textContent=state.queue.filter(c=>!c.done).length+" menunggu";
}
function selectCustomer(c){
  if(state.finished||activeCustomer||c.done)return;
  activeCustomer=c;c.step=0;renderQueue();showDialogue();
}
function renderService(){ $("serviceContent").innerHTML='<div class="empty-service">👩‍🍳<h2>Siap menerima pesanan!</h2><p>Pilih salah satu pelanggan di antrean.</p></div>';$("phaseLabel").textContent="Pilih pelanggan"; }
function showDialogue(){
  const d=activeCustomer.data;
  const steps=[d.arrival,d.poemIntro];
  const step=activeCustomer.step;
  if(step<2){
    $("phaseLabel").textContent="Percakapan";
    $("serviceContent").innerHTML=`<div class="customer-face">${d.avatar}</div><div class="speech"><b>${escapeHTML(d.name)}:</b> ${escapeHTML(steps[step])}</div><button class="primary next-btn" id="dialogNext">LANJUTKAN</button>`;
    $("dialogNext").onclick=()=>{activeCustomer.step++;if(activeCustomer.step===2)showPoem();else showDialogue();};
  }else showPoem();
}
function showPoem(){
  const d=activeCustomer.data;$("phaseLabel").textContent="Pahami larik";
  $("serviceContent").innerHTML=`<div class="customer-face">${d.avatar}</div><div class="speech"><b>${escapeHTML(d.name)}:</b> ${escapeHTML(d.before)}</div><div class="poem-card">“${escapeHTML(d.line)}”</div><div class="question">${escapeHTML(d.question)}</div><div class="answer-list">${d.options.map((o,i)=>`<button class="answer-btn" data-answer="${i}">${String.fromCharCode(65+i)}. ${escapeHTML(o)}</button>`).join("")}</div>`;
  document.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>answerQuestion(Number(b.dataset.answer)));
}
function answerQuestion(choice){
  const d=activeCustomer.data;
  document.querySelectorAll("[data-answer]").forEach(b=>b.disabled=true);
  if(choice===Number(d.answer)){
    state.correct++;state.score+=100;renderHUD();
    $("serviceContent").insertAdjacentHTML("beforeend",`<div class="feedback">🌟 <b>${escapeHTML(d.name)}:</b> ${escapeHTML(d.correct)}</div><div class="speech">${escapeHTML(d.right)}</div><button class="primary next-btn" id="toTopping">PILIH TOPPING</button>`);
    $("toTopping").onclick=showToppings;
  }else{
    state.wrong++;state.lives--;renderHUD();
    $("serviceContent").insertAdjacentHTML("beforeend",`<div class="feedback bad">💡 <b>Belajar yuk!</b> ${escapeHTML(d.wrong)}</div><div class="speech">${escapeHTML(d.name)}: Tidak apa-apa, coba lebih teliti pada pelanggan berikutnya, ya.</div><button class="primary next-btn" id="afterWrong">LANJUTKAN</button>`);
    $("afterWrong").onclick=()=>{if(state.lives<=0)endGame("Tiga nyawa penjual telah habis.","lives");else releaseCustomer();};
  }
}
function showToppings(){
  const d=activeCustomer.data;$("phaseLabel").textContent="Pilih topping";
  const toppings=[["Stroberi","🍓"],["Cokelat","🍫"],["Matcha","🍵"],["Vanila","🍦"],["Blueberry","🫐"],["Karamel","🍯"]];
  $("serviceContent").innerHTML=`<div class="customer-face">${d.avatar}</div><div class="speech"><b>${escapeHTML(d.name)}:</b> ${escapeHTML(d.right)}</div><div class="question">Pilih topping sesuai pesanan pelanggan: <b>${escapeHTML(d.topping)}</b></div><div class="topping-list">${toppings.map(t=>`<button class="topping-btn" data-topping="${t[0]}"><span>${t[1]}</span>${t[0]}</button>`).join("")}</div>`;
  document.querySelectorAll("[data-topping]").forEach(b=>b.onclick=()=>chooseTopping(b.dataset.topping));
}
function chooseTopping(topping){
  const d=activeCustomer.data;
  if(topping!==d.topping){
    $("gameMessage").textContent="Belum sesuai pesanan. Perhatikan topping yang disebutkan pelanggan!";
    const btn=document.querySelector(`[data-topping="${CSS.escape(topping)}"]`);if(btn){btn.disabled=true;btn.style.opacity=".4";}
    return;
  }
  state.score+=50;state.served++;renderHUD();
  $("phaseLabel").textContent="Pesanan selesai";
  $("serviceContent").innerHTML=`<div class="customer-face">${d.avatar}</div><div class="poem-card">🍩 Donat ${escapeHTML(topping)} siap!</div><div class="speech"><b>${escapeHTML(d.name)}:</b> ${escapeHTML(d.after)}</div><div class="feedback">✅ Pesanan benar! +50 poin</div><div class="speech">${escapeHTML(d.bye)}</div><button class="primary next-btn" id="finishCustomer">SELESAI & LANJUT</button>`;
  $("finishCustomer").onclick=()=>{
    activeCustomer.done=true;activeCustomer=null;
    $("gameMessage").textContent="Pesanan berhasil diselesaikan!";
    renderQueue();
    if(state.served>=10)endGame("Hebat! Semua 10 pelanggan berhasil dilayani.","win");
    else renderService();
  };
}
function releaseCustomer(){
  activeCustomer=null;renderQueue();renderService();$("gameMessage").textContent="Pelanggan selesai. Pilih pelanggan berikutnya!";
}
function endGame(reason,type){
  if(!state||state.finished)return;
  state.finished=true;clearIntervals();
  const won=type==="win";
  const record={name:state.name,date:new Date().toLocaleString("id-ID"),score:state.score,served:state.served,correct:state.correct,wrong:state.wrong,timeLeft:state.time,status:won?"Menang":type==="time"?"Waktu habis":"Game Over"};
  const records=JSON.parse(localStorage.getItem(STORAGE.scores)||"[]");records.push(record);localStorage.setItem(STORAGE.scores,JSON.stringify(records));
  $("resultIcon").textContent=won?"🏆":type==="time"?"⏰":"💔";
  $("resultTitle").textContent=won?"SELAMAT, TOKO BERHASIL!":type==="time"?"WAKTU HABIS!":"GAME OVER";
  $("resultReason").textContent=reason;
  $("resultStats").innerHTML=`<div class="stat"><b>${state.score}</b><small>Skor</small></div><div class="stat"><b>${state.served}/10</b><small>Pelanggan</small></div><div class="stat"><b>${state.correct}</b><small>Benar</small></div><div class="stat"><b>${state.wrong}</b><small>Salah</small></div>`;
  let evalText=state.correct>=8?"Hebat! Pemahaman makna larik puisimu sangat baik.":state.correct>=5?"Bagus! Terus berlatih memahami pilihan kata dan ungkapan dalam puisi.":"Tetap semangat! Coba baca larik perlahan dan perhatikan kata-kata kiasannya.";
  $("evaluation").textContent=evalText;
  showPage("result");
}
$("startGame").addEventListener("click",startGame);
$("playAgain").addEventListener("click",()=>showPage("prepare"));
function escapeHTML(value){return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
