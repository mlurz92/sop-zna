(function(){
'use strict';
var CATS={
'kardio':{name:'Kardiologie',icon:'fa-heart-pulse'},
'pulmo':{name:'Pneumologie',icon:'fa-lungs'},
'gi':{name:'Gastroenterologie',icon:'fa-utensils'},
'neuro':{name:'Neurologie',icon:'fa-brain'},
'nephro':{name:'Nephrologie',icon:'fa-droplet'},
'metab':{name:'Metabolisch',icon:'fa-flask'},
'haem':{name:'H\u00e4matologie',icon:'fa-syringe'},
'infekt':{name:'Infektiologie',icon:'fa-virus'},
'tox':{name:'Toxikologie',icon:'fa-skull-crossbones'},
'leit':{name:'Leitsymptom',icon:'fa-stethoscope'},
'sonst':{name:'Sonstige',icon:'fa-circle-info'}
};
var CNM={};
(function(){var k=Object.keys(CATS);for(var i=0;i<k.length;i++)CNM[CATS[k[i]].name.toLowerCase()]=k[i]})();
var SIC={
'Definition':'fa-book-open','Ursachen':'fa-magnifying-glass','Symptome':'fa-clipboard-list',
'Diagnostik':'fa-vials','Therapie':'fa-pills','Merke':'fa-lightbulb',
'Disposition':'fa-right-from-bracket','Komplikationen':'fa-triangle-exclamation','Quellen':'fa-quote-right'
};
var AO=['Diagnostik','Therapie'];
var FSN=13,FSX=20,FSD=15,PTH=70;
var CC={
'kardio':'#ef4444','pulmo':'#3b82f6','gi':'#f59e0b','neuro':'#8b5cf6',
'nephro':'#06b6d4','metab':'#10b981','haem':'#ec4899','infekt':'#84cc16',
'tox':'#f97316','leit':'#6366f1','sonst':'#64748b'
};
var S={data:[],tab:'home',sopId:null,catD:'all',catB:'all',bQ:'',sQ:'',hQ:'',
theme:'light',fs:FSD,mob:window.innerWidth<1024,allO:false,off:!navigator.onLine,
ts:null,pY0:0,pY:0,pull:false,refr:false,sCatOpen:false,bCatOpen:false};
var E={};
var sObs=null,sSec='';
function cache(){
var ids=['app','mobileHeader','backBtn','mobileTitle','themeToggleMobile','themeToggleMobileIcon',
'sidebar','appLogo','searchInput','searchClear','categoryFilters','navList',
'themeToggle','themeToggleIcon','themeToggleLabel','mainContent','contentHeader',
'breadcrumb','desktopTocBtn','contentScroll','viewHome','viewBrowse','viewSearch','viewSOP',
'heroArea','catGrid','homeInfo','browseSearchInput','browseSearchClear',
'browseCategoryFilters','browseList','searchViewInput','searchViewClear','searchResultsArea',
'fabAction','bottomNav','metaThemeColor','sectionPickerOverlay','sectionPickerBackdrop',
'sectionPickerClose','sectionPickerList','sectionPickerPrint','offlineBanner','offlineTimestamp',
'stickySectionBar','stickySectionIcon','stickySectionTitle','stickySopName',
'fontDecMobile','fontIncMobile','fontIndicatorMobile',
'fontDecDesktop','fontIncDesktop','fontIndicatorDesktop','pullIndicator',
'sidebarCatToggle','browseCatToggle'];
for(var i=0;i<ids.length;i++){E[ids[i]]=document.getElementById(ids[i])}
}
function rc(v){
if(!v)return'sonst';var s=String(v).trim();
if(CATS[s])return s;var l=s.toLowerCase();
if(CNM[l])return CNM[l];
var k=Object.keys(CATS);
for(var i=0;i<k.length;i++){if(l.indexOf(k[i])!==-1||k[i].indexOf(l)!==-1)return k[i]}
return'sonst';
}
function gc(k){return CC[k]||'#64748b'}
function strip(h){var d=document.createElement('div');d.innerHTML=h;return d.textContent||d.innerText||''}
function hl(t,q){
if(!q)return t;
var e=q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
return t.replace(new RegExp('('+e+')','gi'),'<mark>$1</mark>');
}
function normSop(d){
if(!d.name){
if(d.title){d.name=d.title}
else{d.name='Unbenannt'}
}
d.category=rc(d.category);
if(!d.stand){
if(d.date){d.stand=d.date}
else{d.stand=''}
}
if(!d.sources){
if(d.quellen){d.sources=d.quellen}
else if(d.references){d.sources=d.references}
else{d.sources=''}
}
if(!d.sections){
if(d.content&&Array.isArray(d.content)){d.sections=d.content}
else{d.sections=[]}
}
for(var i=0;i<d.sections.length;i++){
var sec=d.sections[i];
if(!sec.title){
if(sec.name){sec.title=sec.name}
else if(sec.heading){sec.title=sec.heading}
else{sec.title='Abschnitt '+(i+1)}
}
if(!sec.html){
if(sec.content){sec.html=sec.content}
else if(sec.body){sec.html=sec.body}
else if(sec.text){sec.html=sec.text}
else{sec.html=''}
}
}
return d;
}
function lTh(){
var v=localStorage.getItem('sop-theme');
if(v==='dark'||v==='light'){S.theme=v}
else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches){S.theme='dark'}
}
function aTh(){
document.documentElement.setAttribute('data-theme',S.theme);
localStorage.setItem('sop-theme',S.theme);
var dk=S.theme==='dark';
if(E.themeToggleIcon){E.themeToggleIcon.className=dk?'fa-solid fa-sun':'fa-solid fa-moon'}
if(E.themeToggleMobileIcon){E.themeToggleMobileIcon.className=dk?'fa-solid fa-sun':'fa-solid fa-moon'}
if(E.themeToggleLabel){E.themeToggleLabel.textContent=dk?'Light Mode':'Dark Mode'}
if(E.metaThemeColor){E.metaThemeColor.setAttribute('content',dk?'#1e293b':'#ffffff')}
}
function lFs(){var v=parseInt(localStorage.getItem('sop-fontsize'));if(v>=FSN&&v<=FSX){S.fs=v}}
function aFs(){
document.documentElement.style.setProperty('--font-base',S.fs+'px');
localStorage.setItem('sop-fontsize',S.fs);
if(E.fontIndicatorDesktop){E.fontIndicatorDesktop.textContent=S.fs}
if(E.fontIndicatorMobile){E.fontIndicatorMobile.textContent=S.fs}
}
function cFs(d){S.fs=Math.max(FSN,Math.min(FSX,S.fs+d));aFs()}
function init(){
cache();lTh();aTh();lFs();aFs();
if(window.SOP_DATA&&window.SOP_DATA.length){
for(var i=0;i<window.SOP_DATA.length;i++){
var d=window.SOP_DATA[i];
if(!d||!d.id){continue}
normSop(d);
S.data.push(d);
}
}
S.data.sort(function(a,b){return(a.name||'').localeCompare(b.name||'','de')});
rSB();rHome();bind();
var h=window.location.hash;
if(h&&h.indexOf('#sop/')===0){
var id=h.substring(5);
var f=false;
for(var i=0;i<S.data.length;i++){if(S.data[i].id===id){f=true;break}}
if(f){S.sopId=id;sTab('sop')}else{sTab('home')}
}else{
sTab('home');
}
uOff();
}
function bind(){
E.themeToggle.addEventListener('click',function(){S.theme=S.theme==='dark'?'light':'dark';aTh()});
E.themeToggleMobile.addEventListener('click',function(){S.theme=S.theme==='dark'?'light':'dark';aTh()});
E.searchInput.addEventListener('input',function(){
S.hQ=this.value;rNav();
E.searchClear.classList.toggle('show',this.value.length>0);
});
E.searchClear.addEventListener('click',function(){
E.searchInput.value='';S.hQ='';rNav();
E.searchClear.classList.remove('show');E.searchInput.focus();
});
E.appLogo.addEventListener('click',function(e){e.preventDefault();S.sopId=null;sTab('home')});
if(E.sidebarCatToggle){
E.sidebarCatToggle.addEventListener('click',function(){
S.sCatOpen=!S.sCatOpen;
E.sidebarCatToggle.classList.toggle('open',S.sCatOpen);
E.categoryFilters.classList.toggle('open',S.sCatOpen);
});
}
E.searchViewInput.addEventListener('input',function(){
S.sQ=this.value;rSearch();
E.searchViewClear.classList.toggle('show',this.value.length>0);
});
E.searchViewClear.addEventListener('click',function(){
E.searchViewInput.value='';S.sQ='';rSearch();
E.searchViewClear.classList.remove('show');E.searchViewInput.focus();
});
E.fontDecDesktop.addEventListener('click',function(){cFs(-1)});
E.fontIncDesktop.addEventListener('click',function(){cFs(1)});
E.fontDecMobile.addEventListener('click',function(){cFs(-1)});
E.fontIncMobile.addEventListener('click',function(){cFs(1)});
E.backBtn.addEventListener('click',function(){
if(S.sopId){S.sopId=null;sTab('home')}
});
E.desktopTocBtn.addEventListener('click',function(){oPk()});
E.fabAction.addEventListener('click',function(){oPk()});
E.sectionPickerBackdrop.addEventListener('click',function(){cPk()});
E.sectionPickerClose.addEventListener('click',function(){cPk()});
E.sectionPickerPrint.addEventListener('click',function(){
cPk();
setTimeout(function(){
S.allO=true;
rSOP();
setTimeout(function(){window.print();S.allO=false;rSOP()},300);
},200);
});
var bns=E.bottomNav.querySelectorAll('.btm-btn');
for(var i=0;i<bns.length;i++){
(function(b){
b.addEventListener('click',function(){
var t=b.getAttribute('data-tab');
if(t){S.sopId=null;sTab(t)}
});
})(bns[i]);
}
E.contentScroll.addEventListener('scroll',function(){uSticky()});
window.addEventListener('online',function(){S.off=false;uOff()});
window.addEventListener('offline',function(){S.off=true;S.ts=new Date();uOff()});
window.addEventListener('resize',function(){
S.mob=window.innerWidth<1024;
});
E.contentScroll.addEventListener('touchstart',function(e){
if(E.contentScroll.scrollTop===0){
S.pY0=e.touches[0].clientY;S.pull=true;
}
},{passive:true});
E.contentScroll.addEventListener('touchmove',function(e){
if(!S.pull)return;
S.pY=e.touches[0].clientY-S.pY0;
if(S.pY>0&&S.pY<PTH){
E.pullIndicator.classList.add('show');
E.pullIndicator.style.transform='translateX(-50%) translateY('+(S.pY-40)+'px)';
}
},{passive:true});
E.contentScroll.addEventListener('touchend',function(){
if(S.pull&&S.pY>PTH/2){
E.pullIndicator.classList.add('spin');
S.refr=true;
setTimeout(function(){
rHome();rNav();
if(S.tab==='browse'){rBrowse()}
if(S.tab==='search'){rSearch()}
if(S.tab==='sop'){rSOP()}
E.pullIndicator.classList.remove('show','spin');
E.pullIndicator.style.transform='';
S.refr=false;
},600);
}else{
E.pullIndicator.classList.remove('show');
E.pullIndicator.style.transform='';
}
S.pull=false;S.pY=0;S.pY0=0;
});
}
function uOff(){
if(E.offlineBanner){
E.offlineBanner.classList.toggle('show',S.off);
if(S.off&&S.ts&&E.offlineTimestamp){
E.offlineTimestamp.textContent='('+S.ts.toLocaleTimeString('de-DE')+')';
}
}
}
function sTab(t){
S.tab=t;
var views=['viewHome','viewBrowse','viewSearch','viewSOP'];
for(var i=0;i<views.length;i++){
if(E[views[i]]){E[views[i]].classList.remove('active')}
}
var bns=E.bottomNav.querySelectorAll('.btm-btn');
for(var i=0;i<bns.length;i++){bns[i].classList.remove('active')}
E.backBtn.classList.remove('show');
E.desktopTocBtn.style.display='none';
E.fabAction.classList.remove('show');
E.stickySectionBar.classList.remove('show');
dSO();
if(t==='home'){
E.viewHome.classList.add('active');
rBC([]);
E.mobileTitle.textContent='Patientenpfade: ZNA';
var hb=E.bottomNav.querySelector('[data-tab="home"]');
if(hb){hb.classList.add('active')}
}else if(t==='browse'){
E.viewBrowse.classList.add('active');
rBrowse();
rBC([{label:'SOPs'}]);
E.mobileTitle.textContent='SOPs';
var bb=E.bottomNav.querySelector('[data-tab="browse"]');
if(bb){bb.classList.add('active')}
}else if(t==='search'){
E.viewSearch.classList.add('active');
rSearch();
rBC([{label:'Suche'}]);
E.mobileTitle.textContent='Suche';
var sb=E.bottomNav.querySelector('[data-tab="search"]');
if(sb){sb.classList.add('active')}
setTimeout(function(){E.searchViewInput.focus()},100);
}else if(t==='sop'){
E.viewSOP.classList.add('active');
rSOP();
E.backBtn.classList.add('show');
E.desktopTocBtn.style.display='';
E.fabAction.classList.add('show');
var d=null;
for(var i=0;i<S.data.length;i++){if(S.data[i].id===S.sopId){d=S.data[i];break}}
if(d){
var cn=CATS[d.category]?CATS[d.category].name:'';
E.mobileTitle.textContent=d.name||'';
rBC([
{label:'SOPs',click:function(){S.sopId=null;sTab('browse')}},
{label:d.name||''}
]);
}
iSO();
}
E.contentScroll.scrollTop=0;
rNav();
}
function rSB(){
var counts={};
var k=Object.keys(CATS);
for(var i=0;i<k.length;i++){counts[k[i]]=0}
for(var i=0;i<S.data.length;i++){
var c=S.data[i].category;
if(counts[c]!==undefined){counts[c]++}
}
var h='<span class="sidebar-cat-chip'+(S.catD==='all'?' active':'')+'" data-cat="all">Alle <span class="cat-count">'+S.data.length+'</span></span>';
for(var i=0;i<k.length;i++){
if(counts[k[i]]>0){
h+='<span class="sidebar-cat-chip'+(S.catD===k[i]?' active':'')+'" data-cat="'+k[i]+'">'
+CATS[k[i]].name+' <span class="cat-count">'+counts[k[i]]+'</span></span>';
}
}
E.categoryFilters.innerHTML=h;
var chips=E.categoryFilters.querySelectorAll('.sidebar-cat-chip');
for(var i=0;i<chips.length;i++){
(function(ch){
ch.addEventListener('click',function(){
S.catD=ch.getAttribute('data-cat');
var all=E.categoryFilters.querySelectorAll('.sidebar-cat-chip');
for(var j=0;j<all.length;j++){all[j].classList.remove('active')}
ch.classList.add('active');
rNav();
});
})(chips[i]);
}
rNav();
}
function rNav(){
var list=S.data;
if(S.catD!=='all'){
list=[];
for(var i=0;i<S.data.length;i++){
if(S.data[i].category===S.catD){list.push(S.data[i])}
}
}
if(S.hQ){
var q=S.hQ.toLowerCase();
var f=[];
for(var i=0;i<list.length;i++){
if((list[i].name||'').toLowerCase().indexOf(q)!==-1){f.push(list[i])}
}
list=f;
}
var h='';
for(var i=0;i<list.length;i++){
var d=list[i];
var cl=gc(d.category);
var isAct=S.sopId===d.id&&S.tab==='sop';
var nm=S.hQ?hl(d.name||'',S.hQ):(d.name||'');
h+='<li><a href="#sop/'+d.id+'" class="'+(isAct?'active':'')+'" data-id="'+d.id+'">'
+'<span class="nav-dot" style="background:'+cl+'"></span>'
+'<span class="nav-label">'+nm+'</span>'
+'</a></li>';
}
E.navList.innerHTML=h;
var links=E.navList.querySelectorAll('a');
for(var i=0;i<links.length;i++){
(function(a){
a.addEventListener('click',function(e){
e.preventDefault();
S.sopId=a.getAttribute('data-id');
sTab('sop');
});
})(links[i]);
}
}
function rHome(){
var now=new Date();
var dd=String(now.getDate()).padStart(2,'0');
var mm=String(now.getMonth()+1).padStart(2,'0');
var yy=now.getFullYear();
var hh=String(now.getHours()).padStart(2,'0');
var mi=String(now.getMinutes()).padStart(2,'0');
E.heroArea.innerHTML='<img class="hero-logo" src="img/Basislogo_farbig.png" alt="Klinikum St. Georg">'
+'<h1 class="hero-title">Patientenpfade</h1>'
+'<p class="hero-subtitle">Zentrale Notaufnahme</p>'
+'<p class="hero-org">AG Klinische Pfade</p>'
+'<div class="hero-search">'
+'<i class="fa-solid fa-magnifying-glass"></i>'
+'<input type="text" id="heroSearchInput" placeholder="SOP schnell finden..." autocomplete="off">'
+'</div>';
var hsi=document.getElementById('heroSearchInput');
if(hsi){
hsi.addEventListener('input',function(){
var v=this.value;
if(v.length>=1){
S.sQ=v;
sTab('search');
E.searchViewInput.value=v;
E.searchViewClear.classList.toggle('show',v.length>0);
rSearch();
}
});
}
var counts={};
var k=Object.keys(CATS);
for(var i=0;i<k.length;i++){counts[k[i]]=0}
for(var i=0;i<S.data.length;i++){
var c=S.data[i].category;
if(counts[c]!==undefined){counts[c]++}
}
var gh='';
for(var i=0;i<k.length;i++){
if(counts[k[i]]>0){
var cl=gc(k[i]);
var ic=CATS[k[i]].icon;
gh+='<div class="cat-card" data-cat="'+k[i]+'" style="--cat-color:'+cl+'">'
+'<i class="fa-solid '+ic+' cat-card-icon" style="color:'+cl+'"></i>'
+'<span class="cat-card-name">'+CATS[k[i]].name+'</span>'
+'<span class="cat-card-count">'+counts[k[i]]+' SOPs</span>'
+'</div>';
}
}
E.catGrid.innerHTML=gh;
var cards=E.catGrid.querySelectorAll('.cat-card');
for(var i=0;i<cards.length;i++){
(function(c){
c.addEventListener('click',function(){
S.catB=c.getAttribute('data-cat');
sTab('browse');
});
})(cards[i]);
}
E.homeInfo.innerHTML='<p class="info-count">'+S.data.length+' Patientenpfade verf\u00fcgbar</p>'
+'<p>Stand: '+dd+'.'+mm+'.'+yy+' '+hh+':'+mi+'</p>';
}
function rBrowse(){
var h='<div class="browse-bar-top">'
+'<div class="browse-search">'
+'<i class="fa-solid fa-magnifying-glass"></i>'
+'<input type="text" id="browseSearchInput" placeholder="SOPs filtern..." autocomplete="off" value="'+(S.bQ||'')+'">'
+'<button class="browse-search-clear'+(S.bQ?' show':'')+'" id="browseSearchClear"><i class="fa-solid fa-xmark"></i></button>'
+'</div>'
+'<button class="browse-cat-toggle'+(S.bCatOpen?' open':'')+'" id="browseCatToggle">'
+'<i class="fa-solid fa-filter"></i> Kategorien'
+(S.catB!=='all'?' <span class="browse-active-cat">'+((CATS[S.catB]&&CATS[S.catB].name)||'')+'</span>':'')
+'<i class="fa-solid fa-chevron-down toggle-icon"></i>'
+'</button>'
+'<div class="browse-cats'+(S.bCatOpen?' open':'')+'" id="browseCategoryFilters"></div>'
+'</div>'
+'<div class="browse-list" id="browseList"></div>';
E.viewBrowse.innerHTML=h;
E.browseSearchInput=document.getElementById('browseSearchInput');
E.browseSearchClear=document.getElementById('browseSearchClear');
E.browseCatToggle=document.getElementById('browseCatToggle');
E.browseCategoryFilters=document.getElementById('browseCategoryFilters');
E.browseList=document.getElementById('browseList');
E.browseSearchInput.addEventListener('input',function(){
S.bQ=this.value;
E.browseSearchClear.classList.toggle('show',this.value.length>0);
rBrowseList();
});
E.browseSearchClear.addEventListener('click',function(){
E.browseSearchInput.value='';S.bQ='';
E.browseSearchClear.classList.remove('show');
E.browseSearchInput.focus();
rBrowseList();
});
E.browseCatToggle.addEventListener('click',function(){
S.bCatOpen=!S.bCatOpen;
E.browseCatToggle.classList.toggle('open',S.bCatOpen);
E.browseCategoryFilters.classList.toggle('open',S.bCatOpen);
});
rBrowseCats();
rBrowseList();
}
function rBrowseCats(){
var counts={};
var k=Object.keys(CATS);
for(var i=0;i<k.length;i++){counts[k[i]]=0}
for(var i=0;i<S.data.length;i++){
var c=S.data[i].category;
if(counts[c]!==undefined){counts[c]++}
}
var h='<span class="browse-cat-chip'+(S.catB==='all'?' active':'')+'" data-cat="all">Alle</span>';
for(var i=0;i<k.length;i++){
if(counts[k[i]]>0){
h+='<span class="browse-cat-chip'+(S.catB===k[i]?' active':'')+'" data-cat="'+k[i]+'">'
+CATS[k[i]].name+' ('+counts[k[i]]+')</span>';
}
}
E.browseCategoryFilters.innerHTML=h;
var chips=E.browseCategoryFilters.querySelectorAll('.browse-cat-chip');
for(var i=0;i<chips.length;i++){
(function(ch){
ch.addEventListener('click',function(){
S.catB=ch.getAttribute('data-cat');
var all=E.browseCategoryFilters.querySelectorAll('.browse-cat-chip');
for(var j=0;j<all.length;j++){all[j].classList.remove('active')}
ch.classList.add('active');
rBrowseList();
var toggleLabel=E.browseCatToggle.querySelector('.browse-active-cat');
if(S.catB!=='all'){
if(!toggleLabel){
var sp=document.createElement('span');
sp.className='browse-active-cat';
sp.textContent=(CATS[S.catB]&&CATS[S.catB].name)||'';
E.browseCatToggle.insertBefore(sp,E.browseCatToggle.querySelector('.toggle-icon'));
}else{
toggleLabel.textContent=(CATS[S.catB]&&CATS[S.catB].name)||'';
}
}else{
if(toggleLabel){toggleLabel.remove()}
}
});
})(chips[i]);
}
}
function rBrowseList(){
var list=S.data;
if(S.catB!=='all'){
list=[];
for(var i=0;i<S.data.length;i++){
if(S.data[i].category===S.catB){list.push(S.data[i])}
}
}
if(S.bQ){
var q=S.bQ.toLowerCase();
var f=[];
for(var i=0;i<list.length;i++){
if((list[i].name||'').toLowerCase().indexOf(q)!==-1){f.push(list[i])}
}
list=f;
}
var h='';
for(var i=0;i<list.length;i++){
var d=list[i];
var cl=gc(d.category);
var cn=CATS[d.category]?CATS[d.category].name:'';
var nm=S.bQ?hl(d.name||'',S.bQ):(d.name||'');
h+='<div class="browse-item" data-id="'+d.id+'">'
+'<span class="bi-dot" style="background:'+cl+'"></span>'
+'<span class="bi-name">'+nm+'</span>'
+'<span class="bi-cat">'+cn+'</span>'
+'<i class="fa-solid fa-chevron-right bi-arrow"></i>'
+'</div>';
}
if(list.length===0){
h='<div class="search-empty"><i class="fa-solid fa-search"></i><p>Keine SOPs gefunden.</p></div>';
}
E.browseList.innerHTML=h;
var items=E.browseList.querySelectorAll('.browse-item');
for(var i=0;i<items.length;i++){
(function(it){
it.addEventListener('click',function(){
S.sopId=it.getAttribute('data-id');
sTab('sop');
});
})(items[i]);
}
}
function rSearch(){
if(!S.sQ){
E.searchResultsArea.innerHTML='<div class="search-empty"><i class="fa-solid fa-magnifying-glass"></i><p>Suchbegriff eingeben, um SOPs zu durchsuchen.</p></div>';
return;
}
var q=S.sQ.toLowerCase();
var results=[];
for(var i=0;i<S.data.length;i++){
var d=S.data[i];
var score=0;
var nameMatch=(d.name||'').toLowerCase().indexOf(q)!==-1;
if(nameMatch){score+=10}
var secMatches=[];
if(d.sections){
for(var j=0;j<d.sections.length;j++){
var sec=d.sections[j];
var secTitle=sec.title||'';
var secHtml=sec.html||'';
var txt=strip(secHtml).toLowerCase();
if(txt.indexOf(q)!==-1||secTitle.toLowerCase().indexOf(q)!==-1){
score+=3;
var idx=txt.indexOf(q);
var start=Math.max(0,idx-60);
var end=Math.min(txt.length,idx+q.length+60);
var snippet=(start>0?'...':'')+strip(secHtml).substring(start,end)+(end<txt.length?'...':'');
secMatches.push({title:secTitle,snippet:snippet});
}
}
}
if(d.sources){
var srcTxt=strip(d.sources).toLowerCase();
if(srcTxt.indexOf(q)!==-1){score+=1}
}
if(score>0){
results.push({sop:d,score:score,nameMatch:nameMatch,secMatches:secMatches});
}
}
results.sort(function(a,b){return b.score-a.score});
if(results.length===0){
E.searchResultsArea.innerHTML='<div class="search-empty"><i class="fa-solid fa-circle-xmark"></i><p>Keine Ergebnisse f\u00fcr \u201e'+hl(S.sQ,'')+'\u201c</p></div>';
return;
}
var h='';
for(var i=0;i<results.length;i++){
var r=results[i];
var d=r.sop;
var cl=gc(d.category);
var cn=CATS[d.category]?CATS[d.category].name:'';
h+='<div class="search-result" data-id="'+d.id+'">'
+'<h4>'+hl(d.name||'',S.sQ)+'</h4>';
if(r.secMatches.length>0){
h+='<p>'+hl(r.secMatches[0].snippet,S.sQ)+'</p>';
}
h+='<span class="sr-cat"><i class="fa-solid fa-circle" style="color:'+cl+';font-size:.5rem"></i> '+cn+'</span>'
+'</div>';
}
E.searchResultsArea.innerHTML=h;
var items=E.searchResultsArea.querySelectorAll('.search-result');
for(var i=0;i<items.length;i++){
(function(it){
it.addEventListener('click',function(){
S.sopId=it.getAttribute('data-id');
sTab('sop');
});
})(items[i]);
}
}
function rSOP(){
var d=null;
for(var i=0;i<S.data.length;i++){if(S.data[i].id===S.sopId){d=S.data[i];break}}
if(!d){E.viewSOP.innerHTML='<div class="search-empty"><p>SOP nicht gefunden.</p></div>';return}
var ck=d.category;
var cl=gc(ck);
var cn=CATS[ck]?CATS[ck].name:'';
var ci=CATS[ck]?CATS[ck].icon:'fa-circle-info';
var secCount=d.sections?d.sections.length:0;
var h='<div class="sop-header">'
+'<div class="sop-header-top">'
+'<span class="sop-cat-badge" style="background:'+cl+'"><i class="fa-solid '+ci+'"></i> '+cn+'</span>'
+(d.stand?'<span class="sop-meta-item"><i class="fa-solid fa-calendar"></i> Stand: '+d.stand+'</span>':'')
+'</div>'
+'<h1 class="sop-title">'+d.name+'</h1>'
+'<div class="sop-meta">'
+'<span class="sop-meta-item"><i class="fa-solid fa-layer-group"></i> '+secCount+' Abschnitte</span>'
+'</div></div>';
if(d.sections){
for(var i=0;i<d.sections.length;i++){
var sec=d.sections[i];
var secTitle=sec.title||'Abschnitt '+(i+1);
var secHtml=sec.html||'';
var ic=SIC[secTitle]||'fa-circle-info';
var isAO=false;
for(var a=0;a<AO.length;a++){if(secTitle===AO[a]){isAO=true}}
var op=S.allO||isAO;
h+='<div class="sop-section" data-sec="'+i+'" style="animation-delay:'+(i*0.05)+'s">'
+'<div class="sop-section-head" data-idx="'+i+'">'
+'<i class="fa-solid '+ic+' sec-icon" style="color:'+cl+'"></i>'
+'<span class="sec-title">'+secTitle+'</span>'
+'<i class="fa-solid fa-chevron-down sec-toggle'+(op?' open':'')+'"></i>'
+'</div>'
+'<div class="sop-section-body'+(op?' open':'')+'">'
+secHtml
+'</div>'
+'</div>';
}
}
if(d.sources){
h+='<div class="sop-section" style="animation-delay:'+(secCount*0.05)+'s">'
+'<div class="sop-section-head" data-idx="sources">'
+'<i class="fa-solid fa-quote-right sec-icon" style="color:'+cl+'"></i>'
+'<span class="sec-title">Quellen</span>'
+'<i class="fa-solid fa-chevron-down sec-toggle"></i>'
+'</div>'
+'<div class="sop-section-body">'
+'<div class="sop-sources">'+d.sources+'</div>'
+'</div>'
+'</div>';
}
E.viewSOP.innerHTML=h;
var heads=E.viewSOP.querySelectorAll('.sop-section-head');
for(var i=0;i<heads.length;i++){
(function(hd){
hd.addEventListener('click',function(){
var bd=hd.nextElementSibling;
var tg=hd.querySelector('.sec-toggle');
var isOpen=bd.classList.contains('open');
if(isOpen){
bd.classList.remove('open');
tg.classList.remove('open');
}else{
bd.classList.add('open');
tg.classList.add('open');
}
});
})(heads[i]);
}
rPk();
rNav();
history.replaceState(null,null,'#sop/'+S.sopId);
}
function rBC(items){
if(!E.breadcrumb){return}
var h='<a href="#" class="bc-home">Start</a>';
for(var i=0;i<items.length;i++){
h+='<span class="sep"><i class="fa-solid fa-chevron-right"></i></span>';
if(items[i].click){
h+='<a href="#" class="bc-link" data-idx="'+i+'">'+items[i].label+'</a>';
}else{
h+='<span>'+items[i].label+'</span>';
}
}
E.breadcrumb.innerHTML=h;
var hm=E.breadcrumb.querySelector('.bc-home');
if(hm){hm.addEventListener('click',function(e){e.preventDefault();S.sopId=null;sTab('home')})}
var lks=E.breadcrumb.querySelectorAll('.bc-link');
for(var i=0;i<lks.length;i++){
(function(l,idx){
l.addEventListener('click',function(e){
e.preventDefault();
if(items[idx]&&items[idx].click){items[idx].click()}
});
})(lks[i],parseInt(lks[i].getAttribute('data-idx')));
}
}
function rPk(){
if(!E.sectionPickerList){return}
var d=null;
for(var i=0;i<S.data.length;i++){if(S.data[i].id===S.sopId){d=S.data[i];break}}
if(!d){return}
var cl=gc(d.category);
var h='';
if(d.sections){
for(var i=0;i<d.sections.length;i++){
var sec=d.sections[i];
var secTitle=sec.title||'Abschnitt '+(i+1);
var ic=SIC[secTitle]||'fa-circle-info';
h+='<li data-idx="'+i+'"><i class="fa-solid '+ic+'" style="color:'+cl+'"></i> '+secTitle+'</li>';
}
}
if(d.sources){
h+='<li data-idx="sources"><i class="fa-solid fa-quote-right" style="color:'+cl+'"></i> Quellen</li>';
}
E.sectionPickerList.innerHTML=h;
var lis=E.sectionPickerList.querySelectorAll('li');
for(var i=0;i<lis.length;i++){
(function(li){
li.addEventListener('click',function(){
var idx=li.getAttribute('data-idx');
cPk();
var sec;
if(idx==='sources'){
var secs=E.viewSOP.querySelectorAll('.sop-section');
sec=secs[secs.length-1];
}else{
sec=E.viewSOP.querySelector('.sop-section[data-sec="'+idx+'"]');
}
if(sec){
var bd=sec.querySelector('.sop-section-body');
var tg=sec.querySelector('.sec-toggle');
if(bd&&!bd.classList.contains('open')){
bd.classList.add('open');
if(tg){tg.classList.add('open')}
}
sec.scrollIntoView({behavior:'smooth',block:'start'});
}
});
})(lis[i]);
}
}
function oPk(){E.sectionPickerOverlay.classList.add('show')}
function cPk(){E.sectionPickerOverlay.classList.remove('show')}
function uSticky(){
if(S.tab!=='sop'){E.stickySectionBar.classList.remove('show');return}
var secs=E.viewSOP.querySelectorAll('.sop-section');
var ct=E.contentScroll.scrollTop+120;
var cur=null;
for(var i=0;i<secs.length;i++){
if(secs[i].offsetTop<=ct){cur=secs[i]}
}
if(cur){
var hd=cur.querySelector('.sop-section-head');
var ti=hd?hd.querySelector('.sec-title'):null;
var ic=hd?hd.querySelector('.sec-icon'):null;
if(ti){
E.stickySectionTitle.textContent=ti.textContent;
if(ic){E.stickySectionIcon.className=ic.className}
var d=null;
for(var i=0;i<S.data.length;i++){if(S.data[i].id===S.sopId){d=S.data[i];break}}
if(d){E.stickySopName.textContent=d.name||''}
E.stickySectionBar.classList.add('show');
}
}else{
E.stickySectionBar.classList.remove('show');
}
}
function dSO(){
if(sObs){sObs.disconnect();sObs=null}
sSec='';
}
function iSO(){
if(!('IntersectionObserver' in window)){return}
dSO();
var secs=E.viewSOP.querySelectorAll('.sop-section');
if(secs.length===0){return}
sObs=new IntersectionObserver(function(entries){
for(var i=0;i<entries.length;i++){
if(entries[i].isIntersecting){
var idx=entries[i].target.getAttribute('data-sec')||'';
if(idx!==sSec){
sSec=idx;
var lis=E.sectionPickerList.querySelectorAll('li');
for(var j=0;j<lis.length;j++){
lis[j].classList.toggle('active',lis[j].getAttribute('data-idx')===idx);
}
}
}
}
},{root:E.contentScroll,threshold:0.2});
for(var i=0;i<secs.length;i++){sObs.observe(secs[i])}
}
window.registerSOP=function(d){
if(!d||!d.id){return}
normSop(d);
S.data.push(d);
};
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init)}else{init()}
})();