(function(){
"use strict";
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]})}

/* ---------- dados derivados ---------- */
CHAPTERS.sort(function(a,b){return a.n-b.n});
var CH={};CHAPTERS.forEach(function(c){CH[c.n]=c});
var TX={};TEXTS.forEach(function(t){TX[t.id]=t});
var PARTOF={};PARTS.forEach(function(p){p.ch.forEach(function(n){PARTOF[n]=p})});
var PROPS=[],PROP={};
CHAPTERS.forEach(function(c){c.groups.forEach(function(g){g.props.forEach(function(p){p.ch=c.n;p.g=g.t;PROPS.push(p);PROP[p.id]=p})})});
function nmap(s){s=String(s||"");var out="",map=[];for(var i=0;i<s.length;i++){var n=s[i].normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();for(var j=0;j<n.length;j++){out+=n[j];map.push(i)}}return {out:out,map:map}}
function norm(s){return nmap(s).out}
function slug(s){return norm(s).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
GLOSSARY.sort(function(a,b){return norm(a[0]).localeCompare(norm(b[0]))});
function propCount(c){var k=0;c.groups.forEach(function(g){k+=g.props.length});return k}
function plural(n,s,p){return n+" "+(n===1?s:p)}

/* ---------- preferências locais ---------- */
var store={get:function(k,d){try{var v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
var saved=(store.get("la.saved",[])||[]).filter(function(id){return PROP[id]});
var theme=store.get("la.theme","auto"),fs=store.get("la.fs",1);
function applyPrefs(){var r=document.documentElement;if(theme==="auto")r.removeAttribute("data-theme");else r.setAttribute("data-theme",theme);r.style.setProperty("--fs",fs)}
applyPrefs();

/* ---------- ícones ---------- */
function ic(p,w){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(w||2)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+p+'</svg>'}
var I={
  home:ic('<path d="M3.5 10.5 12 3.8l8.5 6.7V20a1 1 0 0 1-1 1H15v-6H9v6H4.5a1 1 0 0 1-1-1z"/>'),
  caps:ic('<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19"/><path d="M9 7.5h6M9 11h4"/>'),
  search:ic('<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',2.2),
  mark:ic('<path d="M6.5 3.5h11v17l-5.5-4-5.5 4z"/>'),
  more:ic('<circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/>'),
  back:ic('<path d="M15 5l-7 7 7 7"/>',2.4),
  chev:ic('<path d="m6 9 6 6 6-6"/>',2.2),
  right:ic('<path d="m9 5 7 7-7 7"/>',2.2),
  share:ic('<path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>'),
  x:ic('<path d="M6 6l12 12M18 6 6 18"/>',2.2),
  list:ic('<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01" stroke-width="3"/>'),
  book:ic('<path d="M4 5.5c2.5-1.3 5.5-1.3 8 0v14c-2.5-1.3-5.5-1.3-8 0z"/><path d="M12 5.5c2.5-1.3 5.5-1.3 8 0v14c-2.5-1.3-5.5-1.3-8 0z"/>'),
  time:ic('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  abc:ic('<path d="M4 18 8 6l4 12M5.5 14h5"/><path d="M15 6v12h3.2a3 3 0 0 0 0-6H15m0 0h2.6a3 3 0 0 0 0-6H15"/>'),
  info:ic('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>',2.2),
  phone:ic('<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M11 18.5h2"/>'),
  doc:ic('<path d="M6.5 3h8l4 4v13.5a.5.5 0 0 1-.5.5h-11.5a.5.5 0 0 1-.5-.5V3.5a.5.5 0 0 1 .5-.5z"/><path d="M14.5 3v4h4M9 12h6M9 16h6"/>'),
  loop:ic('<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>'),
  android:ic('<path d="M7 10h10v7.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 17.5z"/><path d="M7 9a5 5 0 0 1 10 0z"/><path d="M9.5 19v2.5M14.5 19v2.5M4.5 11v5M19.5 11v5M9.5 6.5h.01M14.5 6.5h.01"/>'),
  apple:ic('<path d="M16.5 12.8c0-2.2 1.8-3.2 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.6.8-3.3.8s-1.7-.8-2.9-.8c-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.8 2.2 1.1 0 1.6-.7 2.9-.7s1.7.7 2.9.7c1.2 0 2-1.1 2.7-2.2.9-1.3 1.2-2.5 1.2-2.6 0 0-2.4-.9-2.4-3.6zM14.4 6.1c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.6-1.1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z"/>',1.6)
};

/* ---------- busca ---------- */
function tokens(q){return norm(q).split(/[^a-z0-9₂%]+/).filter(Boolean)}
function hl(text,toks){
  text=String(text||"");if(!toks||!toks.length)return esc(text);
  var m=nmap(text),r=[];
  toks.forEach(function(t){if(t.length<2&&toks.length>1)return;var i=m.out.indexOf(t);while(i>-1){r.push([m.map[i],m.map[i+t.length-1]+1]);i=m.out.indexOf(t,i+t.length)}});
  if(!r.length)return esc(text);
  r.sort(function(a,b){return a[0]-b[0]});var mg=[r[0]];
  for(var k=1;k<r.length;k++){var l=mg[mg.length-1];if(r[k][0]<=l[1])l[1]=Math.max(l[1],r[k][1]);else mg.push(r[k])}
  var h="",p=0;mg.forEach(function(x){h+=esc(text.slice(p,x[0]))+"<mark>"+esc(text.slice(x[0],x[1]))+"</mark>";p=x[1]});return h+esc(text.slice(p));
}
function snippet(text,toks,len){
  len=len||150;text=String(text||"");if(text.length<=len)return text;
  var n=norm(text),pos=-1;(toks||[]).forEach(function(t){var i=n.indexOf(t);if(i>-1&&(pos<0||i<pos))pos=i});
  if(pos<0)return text.slice(0,len).replace(/\s\S*$/,"")+"…";
  var st=Math.max(0,pos-45),s=text.slice(st,st+len);if(st>0)s="…"+s.replace(/^\S*\s/,"");if(st+len<text.length)s=s.replace(/\s\S*$/,"")+"…";return s;
}
var INDEX=[];
(function(){
  function add(type,title,body,where,href,w){INDEX.push({type:type,title:title,body:body,where:where,href:href,w:w||0,nt:norm(title),nb:norm(body)})}
  CHAPTERS.forEach(function(c){
    var w="Cap. "+c.r+" · "+c.title;
    add("cap",c.title,(c.sub===c.theme?c.theme:c.theme+". "+c.sub)+". "+c.one,"Capítulo "+c.r+" · "+c.theme,"#/cap/"+c.n,3);
    c.groups.forEach(function(g){g.props.forEach(function(p){add("prop",p.t,[p.d||"",(p.it||[]).join("; "),g.t].join(" "),w,"#/cap/"+c.n+"/propostas/"+p.id,2)})});
    (c.prob||[]).forEach(function(x){add("dado",x[0],(x[1]||"")+" "+(x[2]||[]).join("; "),w+" · O problema","#/cap/"+c.n)});
    (c.ps||[]).concat(c.as||[]).forEach(function(s){add("dado",s[0],s[1],w+" · Números","#/cap/"+c.n)});
    (c.ctx||[]).forEach(function(x){add("ctx",x[1],x[2],w+" · "+x[0],"#/cap/"+c.n+"/contexto")});
    (c.ana||[]).forEach(function(x){add("ctx",x[0],x[1],w+" · Comparação","#/cap/"+c.n+"/contexto")});
  });
  TEXTS.forEach(function(t){t.points.forEach(function(p){add("texto",p[0],p[1],t.label,"#/texto/"+t.id)});t.ctx.forEach(function(x){add("ctx",x[1],x[2],t.label+" · "+x[0],"#/texto/"+t.id)})});
  GLOSSARY.forEach(function(g){add("glos",g[0],g[1],"Glossário","#/glossario/"+slug(g[0]),1)});
})();
var TYPE_LABEL={prop:"Propostas",cap:"Capítulos",dado:"Diagnóstico e números",glos:"Glossário · guia",ctx:"Contexto histórico · guia",texto:"Prefácio, Introdução e Posfácio"};
var TYPE_ORDER=["prop","cap","dado","glos","ctx","texto"];
function search(q){
  var toks=tokens(q);if(!toks.length)return {toks:toks,res:[]};
  var nq=norm(q).trim(),res=[];
  INDEX.forEach(function(d){var s=0;for(var i=0;i<toks.length;i++){var t=toks[i],a=d.nt.indexOf(t)>-1,b=d.nb.indexOf(t)>-1;if(!a&&!b)return;s+=a?6:1}
    if(d.nt.indexOf(nq)>-1)s+=8;else if(d.nb.indexOf(nq)>-1)s+=3;if(d.nt.indexOf(nq)===0)s+=4;res.push({d:d,s:s+d.w})});
  res.sort(function(a,b){return b.s-a.s});return {toks:toks,res:res};
}

/* ---------- gráficos ---------- */
function visWrap(v,inner){return '<figure class="vis"><figcaption class="vis-t">'+esc(v.t)+'</figcaption>'+inner+(v.note?'<p class="vis-n">'+esc(v.note)+'</p>':'')+(v.gnote?'<p class="vis-n g"><span class="gtag">Nota do guia</span>'+esc(v.gnote)+'</p>':'')+(v.src?'<p class="vis-s">'+esc(v.src)+'</p>':'')+'</figure>'}
function visBars(v){
  var vals=v.items.map(function(i){return i[1]}),mn=Math.min.apply(null,[0].concat(vals)),mx=Math.max.apply(null,[v.max||0].concat(vals));
  var lo=mn<0?mn*1.25:0,range=mx-lo,zero=-lo/range*100;
  return visWrap(v,'<div class="bars">'+v.items.map(function(it){
    var val=it[1],w=Math.abs(val)/range*100,left=val>=0?zero:zero-w,cls=it[3]||(val<0?"neg":"pos"),end=left+w,lab=esc(it[2]!=null?it[2]:val),L;
    if(val<0)L='<span class="bar-v" style="left:calc('+zero.toFixed(2)+'% + 7px)">'+lab+'</span>';
    else if(end>58)L='<span class="bar-v in in-'+cls+'" style="right:calc('+(100-end).toFixed(2)+'% + 8px)">'+lab+'</span>';
    else L='<span class="bar-v" style="left:calc('+end.toFixed(2)+'% + 7px)">'+lab+'</span>';
    return '<div class="bar"><span class="bar-l'+(cls==="hi"?" hi":"")+'">'+esc(it[0])+'</span><span class="bar-tr"><span class="bar-f f-'+cls+'" style="left:'+left.toFixed(2)+'%;width:'+Math.max(w,.8).toFixed(2)+'%"></span>'+(mn<0?'<span class="bar-z" style="left:'+zero.toFixed(2)+'%"></span>':'')+L+'</span></div>';
  }).join("")+'</div>');
}
function visLine(v){
  var W=360,H=230,pl=42,pr=18,pt=30,pb=30,n=v.pts.length,mx=v.max;
  function X(i){return pl+i*(W-pl-pr)/(n-1)}function Y(val){return pt+(1-val/mx)*(H-pt-pb)}
  var grid="";for(var g=0;g<=mx;g+=mx/3)grid+='<line class="ax" x1="'+pl+'" x2="'+(W-pr)+'" y1="'+Y(g)+'" y2="'+Y(g)+'"/><text class="yr" x="'+(pl-7)+'" y="'+(Y(g)+4)+'" text-anchor="end">'+Math.round(g).toLocaleString("pt-BR")+'</text>';
  var d=v.pts.map(function(p,i){return (i?"L":"M")+X(i).toFixed(1)+" "+Y(p[1]).toFixed(1)}).join(" ");
  var pts=v.pts.map(function(p,i){var up=true;return '<circle class="dt" cx="'+X(i)+'" cy="'+Y(p[1])+'" r="4.5"/><text x="'+(i===0?X(i)+9:X(i))+'" y="'+(i===0?Y(p[1])+4:(up?Y(p[1])-11:Y(p[1])+20))+'" text-anchor="'+(i===0?"start":"middle")+'">'+p[1].toLocaleString("pt-BR")+'</text><text class="yr" x="'+X(i)+'" y="'+(H-6)+'" text-anchor="middle" transform="rotate(-35 '+X(i)+' '+(H-6)+')">'+esc(p[0])+'</text>'}).join("");
  var desc=v.pts.map(function(p){return p[0]+": "+p[1].toLocaleString("pt-BR")}).join("; ");
  return visWrap(v,'<svg class="line-svg" viewBox="0 0 '+W+' '+(H+12)+'" role="img" aria-label="'+esc(v.t+". "+desc)+'">'+grid+'<path class="ar" d="'+d+' L'+X(n-1)+' '+Y(0)+' L'+X(0)+' '+Y(0)+' Z"/><path class="ln" d="'+d+'"/>'+pts+'</svg>');
}
function visSplit(v){
  return visWrap(v,'<div class="split" aria-hidden="true">'+v.segs.map(function(s){return '<span class="s-'+s[2]+'" style="width:'+s[1]+'%">'+(s[1]>=14&&s[3]?esc(s[3]):"")+'</span>'}).join("")+'</div><ul class="split-lg">'+v.segs.map(function(s){return '<li><i class="s-'+s[2]+'"></i>'+esc(s[0])+(s[3]?'<b>'+esc(s[3])+'</b>':'')+'</li>'}).join("")+'</ul>');
}
function visFlow(v){return visWrap(v,'<ol class="flow">'+v.steps.map(function(s){return '<li><b>'+esc(s[0])+'</b>'+(s[1]?'<span>'+esc(s[1])+'</span>':'<span></span>')+'</li>'}).join("")+'</ol>'+(v.loop?'<p class="flow-loop">'+I.loop+esc(v.loop)+'</p>':''))}
function visCrit(v){return visWrap(v,'<ul class="crit">'+v.items.map(function(s){return '<li><b>'+esc(s[0])+'</b>'+(s[1]?'<span>'+esc(s[1])+'</span>':'')+'</li>'}).join("")+'</ul>')}
function vis(v){return ({bars:visBars,line:visLine,split:visSplit,flow:visFlow,crit:visCrit}[v.type]||function(){return ""})(v)}
function visList(a){return (a||[]).map(vis).join("")}

/* ---------- componentes ---------- */
function saveBtn(id){var on=saved.indexOf(id)>-1;return '<button type="button" class="save" data-save="'+id+'" aria-pressed="'+on+'" aria-label="'+(on?"Remover dos salvos":"Salvar")+': '+esc(PROP[id].t)+'">'+I.mark+'</button>'}
function propHtml(p,open){
  return '<li class="pr" id="'+p.id+'" tabindex="-1"><div class="pr-row"><button type="button" class="pr-h" aria-expanded="'+(open?"true":"false")+'" aria-controls="'+p.id+'-b" data-toggle="'+p.id+'">'+
    (p.k?'<span class="pr-k">'+esc(p.k)+'</span>':'<span class="pr-k dot"></span>')+'<span class="pr-t">'+esc(p.t)+'</span>'+I.chev.replace('<svg','<svg class="chev"')+'</button>'+saveBtn(p.id)+'</div>'+
    '<div class="pr-b" id="'+p.id+'-b"'+(open?'':' hidden')+'>'+(p.d?'<p>'+esc(p.d)+'</p>':'')+(p.it?'<ul class="sq">'+p.it.map(function(x){return '<li>'+esc(x)+'</li>'}).join("")+'</ul>':'')+(p.nd?'<p class="nd">O resumo cita esta medida sem detalhá-la.</p>':'')+
    '<div class="pr-act"><button type="button" class="btn" data-share-prop="'+p.id+'">'+I.share+'Compartilhar</button></div></div></li>';
}
function stats(list,a){return '<div class="stats">'+list.map(function(s){return '<div class="stat'+(a?" a":"")+'"><div class="stat-v">'+esc(s[0])+'</div><div class="stat-l">'+esc(s[1])+'</div></div>'}).join("")+'</div>'}
function ctxList(list){return '<div class="ctx">'+list.map(function(x){return '<div class="cx"><span class="cx-e">'+esc(x[0])+'</span><h3>'+esc(x[1])+'</h3><p>'+esc(x[2])+'</p></div>'}).join("")+'</div>'}
function refLink(x){if(typeof x==="number"){var c=CH[x];return '<a class="ref" href="#/cap/'+x+'">Cap. '+c.r+' · '+esc(c.title)+'</a>'}var t=TX[x];return t?'<a class="ref" href="#/texto/'+x+'">'+esc(t.label)+'</a>':""}
function chRow(c){return '<a class="crow" href="#/cap/'+c.n+'"><span class="n">'+c.r+'</span><span class="t">'+esc(c.title)+'<span class="s">'+esc(c.theme)+' · '+plural(propCount(c),"proposta","propostas")+'</span></span>'+I.right+'</a>'}
function partBlock(p,withWhy){return '<section class="part" aria-label="Parte '+p.r+'"><div class="part-h"><div class="part-n">PARTE '+p.r+'</div><h2 class="part-name">'+esc(p.name)+'</h2><p class="part-d">'+esc(p.desc)+'</p></div>'+
  p.ch.map(function(n){return chRow(CH[n])}).join("")+(withWhy?'<details class="dt g"><summary>Por que “'+esc(p.name)+'”? <span class="tag g">guia</span>'+I.chev+'</summary><p>'+esc(p.ref)+'</p></details>':'')+'</section>'}
function foot(){return '<p class="foot">Guia de leitura do resumo executivo “O Futuro é Glorioso — Resumo executivo do Livro Amarelo” (Partido Missão, 2026). Páginas citadas referem-se a esse resumo. Trechos marcados como “guia”, em cinza, são contexto acrescentado e não fazem parte do livro.</p>'}

/* ---------- instalação ---------- */
function ghInfo(){var h=location.hostname;if(!/\.github\.io$/.test(h))return null;var user=h.split(".")[0],seg=location.pathname.split("/").filter(Boolean),repo=seg.length&&!/\.html?$/.test(seg[0])?seg[0]:h;
  return {user:user,repo:repo,apk:"https://github.com/"+user+"/"+repo+"/releases/latest/download/livro-amarelo.apk"}}
function isInstalled(){var C=window.Capacitor;return !!(C&&C.isNativePlatform&&C.isNativePlatform())||(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone===true}
function canInstall(){return !isInstalled()&&(!!ghInfo()||!!deferredPrompt)}

/* ---------- telas ---------- */
function vHome(){
  var last=store.get("la.last",null),lc=last&&CH[last];
  var h='<section class="hero"><div class="hero-top"><span>Plano de governo</span><span>Missão · 2026</span></div><div class="hero-band"></div><div class="hero-main">'+
    '<p class="hero-k">Livro Amarelo · Guia de bolso</p><h1 class="hero-t" tabindex="-1">O futuro é glorioso</h1>'+
    '<p class="hero-s">Todas as propostas do plano de governo, explicadas e organizadas para consultar em segundos.</p>'+
    '<a class="hero-search" href="#/buscar">'+I.search+'<span>Buscar proposta, sigla ou tema</span></a>'+
    '<div class="hero-meta"><span><b>14</b>capítulos</span><span><b>'+PROPS.length+'</b>propostas</span><span><b>3</b>partes</span></div></div></section>';
  if(lc)h+='<a class="cont" href="#/cap/'+lc.n+'"><span class="n">'+lc.r+'</span><span><small>Continuar lendo</small><strong>'+esc(lc.title)+'</strong></span>'+I.right+'</a>';
  h+='<div class="qgrid"><a class="q q--k" href="#/propostas"><b>'+PROPS.length+'</b><span>Todas as propostas<small>Filtre por tema ou palavra</small></span></a>'+
    '<a class="q q--y" href="#/salvos"><b>'+saved.length+'</b><span>Salvas por você<small>Para rever e compartilhar</small></span></a>'+
    '<a class="q" href="#/glossario">'+I.abc+'<span>Glossário<small>'+GLOSSARY.length+' siglas e termos</small></span></a>'+
    '<a class="q" href="#/linha-do-tempo">'+I.time+'<span>Linha do tempo<small>De 1876 às metas do plano</small></span></a></div>';
  if(canInstall())h+='<a class="cont inst" href="#/instalar"><span class="n">'+I.phone+'</span><span><small>Leve no bolso</small><strong>Instalar no celular</strong></span>'+I.right+'</a>';
  h+='<div class="sec" style="padding-bottom:0"><h2 class="h2">O livro em 3 partes</h2></div>';
  h+=PARTS.map(function(p){return partBlock(p,false)}).join("");
  h+='<div class="legend"><h2>Como ler este guia</h2><div class="lg"><i class="b"></i><span><b>Amarelo e preto:</b> diagnóstico, números e propostas do livro, resumidos com fidelidade.</span></div><div class="lg"><i class="g"></i><span><b>Cinza, marcado “guia”:</b> contexto histórico e comparações acrescentados para explicar as referências.</span></div></div>';
  return h+foot();
}
function vCaps(){
  return '<h1 class="ptitle" tabindex="-1">Capítulos</h1><p class="psub">14 capítulos em 3 partes, mais prefácio, introdução e posfácio.</p>'+
    '<nav class="seg" aria-label="Ver por"><a href="#/capitulos" aria-current="page">Capítulos</a><a href="#/propostas">Todas as propostas</a></nav>'+
    PARTS.map(function(p){return partBlock(p,true)}).join("")+
    '<section class="part"><div class="part-h"><div class="part-n">ABERTURA E FECHAMENTO</div><h2 class="part-name">Textos</h2></div>'+TEXTS.map(function(t){return '<a class="crow" href="#/texto/'+t.id+'"><span class="n">'+I.doc+'</span><span class="t">'+esc(t.label)+'<span class="s">'+esc(t.blurb)+'</span></span>'+I.right+'</a>'}).join("")+'</section>'+foot();
}
var pf={q:"",part:0};
function vProps(){
  return '<h1 class="ptitle" tabindex="-1">Propostas</h1><p class="psub">As '+PROPS.length+' propostas, capítulo por capítulo.</p>'+
    '<nav class="seg" aria-label="Ver por"><a href="#/capitulos">Capítulos</a><a href="#/propostas" aria-current="page">Todas as propostas</a></nav>'+
    '<div class="sbox"><div class="sin">'+I.search+'<label class="sr" for="pf">Filtrar propostas</label><input id="pf" type="search" placeholder="Filtrar: ferrovia, cotas, SUS…" autocomplete="off" enterkeyhint="search" value="'+esc(pf.q)+'"></div>'+
    '<div class="chips scroll" role="group" aria-label="Filtrar por parte" style="margin-top:12px">'+[[0,"Todas"]].concat(PARTS.map(function(p){return [p.n,"Parte "+p.r+" · "+p.name]})).map(function(x){return '<button type="button" class="chip" data-part="'+x[0]+'" aria-pressed="'+(pf.part===x[0])+'">'+esc(x[1])+'</button>'}).join("")+'</div></div>'+
    '<div class="body"><p class="muted" id="pf-n" aria-live="polite"></p><div id="pf-list"></div></div>';
}
function renderProps(){
  var toks=tokens(pf.q),total=0,h="";
  CHAPTERS.forEach(function(c){
    if(pf.part&&c.part!==pf.part)return;
    var items=PROPS.filter(function(p){if(p.ch!==c.n)return false;if(!toks.length)return true;var t=norm(p.t+" "+(p.d||"")+" "+(p.it||[]).join(" ")+" "+p.g);return toks.every(function(k){return t.indexOf(k)>-1})});
    if(!items.length)return;total+=items.length;
    h+='<section class="rg"><h2 class="rg-h"><a href="#/cap/'+c.n+'">'+c.r+' · '+esc(c.title)+'</a></h2>'+items.map(function(p){return '<div class="rw"><a class="res" href="#/cap/'+c.n+'/propostas/'+p.id+'"><span class="res-w">'+esc(p.g)+'</span><span class="res-t">'+hl(p.t,toks)+'</span>'+(p.d&&toks.length?'<span class="res-s">'+hl(snippet(p.d,toks,130),toks)+'</span>':'')+'</a>'+saveBtn(p.id)+'</div>'}).join("")+'</section>';
  });
  $("#pf-list").innerHTML=h||'<div class="empty"><b>Nenhuma proposta encontrada</b>Tente outra palavra ou escolha “Todas”.</div>';
  $("#pf-n").textContent=(toks.length||pf.part)?plural(total,"proposta encontrada","propostas encontradas"):"";
}
function vChapter(n,tab,focus){
  var c=CH[n];if(!c)return null;store.set("la.last",n);
  var p=PARTOF[n],np=propCount(c),prev=CH[n-1],next=CH[n+1];tab=tab||"resumo";
  var h='<header class="chh"><span class="chh-num" aria-hidden="true">'+c.r+'</span><div class="chh-lab"><b>CAPÍTULO '+c.r+'</b><span>'+esc(c.theme)+'</span></div>'+
    '<h1 class="chh-t" tabindex="-1">'+esc(c.title)+'</h1><p class="chh-s">'+esc(c.sub)+'</p><p class="chh-m">Parte '+p.r+' · '+esc(p.name)+' · p. '+c.pages+'</p></header>'+
    '<nav class="ctabs" aria-label="Seções do capítulo">'+[["resumo","Resumo"],["propostas","Propostas <span class=\"cnt\">"+np+"</span>"],["contexto","Contexto"]].map(function(t){return '<a class="ctab" data-ctab href="#/cap/'+n+(t[0]==="resumo"?"":"/"+t[0])+'"'+(tab===t[0]?' aria-current="page"':'')+'>'+t[1]+'</a>'}).join("")+'</nav>';
  if(tab==="resumo"){
    h+='<div class="sec" style="padding-top:18px"><div class="one"><small>Em uma frase</small><p>'+esc(c.one)+'</p></div>'+
      (c.why?'<details class="why'+(c.why.g?' g':'')+'"><summary><span>Por que este título?'+(c.why.g?' <span class="tag g">guia</span>':'')+'</span>'+I.chev+'</summary><div class="why-b">'+esc(c.why.t)+'</div></details>':'')+'</div>';
    h+='<div class="sec"><h2 class="h2">Números</h2><p class="lab" style="margin-top:0">O problema</p>'+stats(c.ps)+(c.statNote?'<p class="snote"><b>Nota do guia</b>'+esc(c.statNote)+'</p>':'')+'<p class="lab">A resposta da Missão</p>'+stats(c.as,1)+'</div>';
    h+='<div class="sec"><h2 class="h2">O problema</h2><div class="pts">'+c.prob.map(function(x){return '<div class="pt"><h3>'+esc(x[0])+'</h3>'+(x[1]?'<p>'+esc(x[1])+'</p>':'')+(x[2]?'<ul class="sq">'+x[2].map(function(i){return '<li>'+esc(i)+'</li>'}).join("")+'</ul>':'')+'</div>'}).join("")+'</div>'+
      (c.quote?'<blockquote class="quote">'+esc(c.quote)+'<cite>Livro Amarelo · Cap. '+c.r+'</cite></blockquote>':'')+visList(c.pvis)+'</div>';
    h+='<div class="sec"><a class="btn y w" href="#/cap/'+n+'/propostas" data-ctab>Ver as '+np+' propostas '+I.right+'</a></div>';
  }else if(tab==="propostas"){
    h+='<div class="sec" style="padding-top:14px"><div class="tools"><span>Toque numa proposta para ler.</span><button type="button" class="lnk" data-openall>Abrir todas</button></div>'+
      c.groups.map(function(g){return '<div class="grp"><h2 class="grp-t">'+esc(g.t)+'</h2>'+(g.d?'<p class="grp-d">'+esc(g.d)+'</p>':'')+'<ul class="prs">'+g.props.map(function(pp){return propHtml(pp,pp.id===focus)}).join("")+'</ul>'+visList(g.vis)+'</div>'}).join("")+
      (c.outro?'<p class="outro">'+esc(c.outro)+'</p>':'')+'</div>';
  }else{
    if(c.cmp&&c.cmp.length)h+='<div class="sec" style="padding-top:18px"><h2 class="h2">O que muda</h2><p class="gnote">“Hoje” resume a regra atual (contexto do guia); “Proposta” segue o livro.</p><div class="cmp">'+
      c.cmp.map(function(r){return '<div class="cc"><div class="cc-h">'+esc(r[0])+'</div><div class="cc-r cc-now"><small>Hoje · guia</small>'+esc(r[1])+'</div><div class="cc-r cc-new"><small>Proposta do livro</small>'+esc(r[2])+'</div></div>'}).join("")+'</div></div>';
    if(c.ctx&&c.ctx.length)h+='<div class="sec"><h2 class="h2 g">Contexto histórico <span class="tag g">guia</span></h2><p class="gnote">Referências que o capítulo cita ou pressupõe, explicadas.</p>'+ctxList(c.ctx)+'</div>';
    if(c.ana&&c.ana.length)h+='<div class="sec"><h2 class="h2 g">Lá fora <span class="tag g">guia</span></h2><div class="ctx">'+c.ana.map(function(a){return '<div class="cx an"><h3 style="margin-top:0">'+esc(a[0])+'</h3><p>'+esc(a[1])+'</p></div>'}).join("")+'</div></div>';
    if(c.conn&&c.conn.length)h+='<div class="sec"><h2 class="h2">Liga com</h2><div class="conn">'+c.conn.map(function(x){var o=CH[x[0]];return '<a class="cn" href="#/cap/'+o.n+'"><b>'+o.r+'</b><strong>'+esc(o.title)+'</strong><span>'+esc(x[1])+'</span></a>'}).join("")+'</div></div>';
  }
  h+='<nav class="pn" aria-label="Outros capítulos">'+(prev?'<a href="#/cap/'+prev.n+'"><small>‹ Cap. '+prev.r+'</small><strong>'+esc(prev.title)+'</strong></a>':'<a href="#/texto/introducao"><small>‹ Antes</small><strong>Introdução</strong></a>')+
    (next?'<a class="nx" href="#/cap/'+next.n+'"><small>Cap. '+next.r+' ›</small><strong>'+esc(next.title)+'</strong></a>':'<a class="nx" href="#/texto/posfacio"><small>Depois ›</small><strong>Posfácio</strong></a>')+'</nav>';
  return h+foot();
}
function vText(id){
  var t=TX[id];if(!t)return null;var i=TEXTS.indexOf(t);
  var h='<header class="chh"><div class="chh-lab"><b>'+esc(t.label.toUpperCase())+'</b></div><h1 class="chh-t" tabindex="-1">'+esc(t.title)+'</h1><p class="chh-s">'+esc(t.sub)+'</p><p class="chh-m">p. '+t.pages+' do resumo</p></header>'+
    '<div class="sec"><h2 class="h2">Pontos principais</h2><div class="pts">'+t.points.map(function(p){return '<div class="pt"><h3>'+esc(p[0])+'</h3><p>'+esc(p[1])+'</p></div>'}).join("")+'</div><blockquote class="quote">'+esc(t.quote)+'<cite>Livro Amarelo · '+esc(t.label)+'</cite></blockquote></div>';
  if(t.ctx.length)h+='<div class="sec"><h2 class="h2 g">Contexto histórico <span class="tag g">guia</span></h2>'+ctxList(t.ctx)+'</div>';
  if(id==="introducao")h+='<div class="sec" style="padding-bottom:0"><h2 class="h2">As três partes</h2></div>'+PARTS.map(function(p){return partBlock(p,true)}).join("");
  var pv=i===0?null:i===1?["#/texto/prefacio","Prefácio"]:["#/cap/14","A Batalha do Brasil"],nx=i===0?["#/texto/introducao","Introdução"]:i===1?["#/cap/1","Um Remédio Amargo"]:null;
  h+='<nav class="pn">'+(pv?'<a href="'+pv[0]+'"><small>‹ Antes</small><strong>'+pv[1]+'</strong></a>':'')+(nx?'<a class="nx" href="'+nx[0]+'"><small>Depois ›</small><strong>'+nx[1]+'</strong></a>':'')+'</nav>';
  return h+foot();
}
function vSearch(q){
  return '<h1 class="sr" tabindex="-1">Buscar</h1><div class="sbox"><form class="sin js-sf" role="search">'+I.search+'<label class="sr" for="q">Buscar no livro</label><input id="q" type="search" placeholder="Proposta, sigla ou tema" autocomplete="off" enterkeyhint="search" value="'+esc(q)+'"><button type="button" class="ib js-clear" aria-label="Limpar busca"'+(q?'':' hidden')+'>'+I.x+'</button></form></div><div class="body" id="res" aria-live="polite"></div>';
}
function renderSearch(q){
  var box=$("#res");if(!box)return;var clr=$(".js-clear");if(clr)clr.hidden=!q;
  if(!q.trim()){box.innerHTML='<p class="lab" style="margin-top:6px">Sugestões</p><div class="chips">'+["Bolsa Família","Estado de Defesa","fila do SUS","terras raras","municípios","Lei Rouanet","cotas","ferrovias","favelas","BRICS","Milei","Vargas"].map(function(s){return '<a class="chip" href="#/buscar?q='+encodeURIComponent(s)+'">'+s+'</a>'}).join("")+'</div><p class="muted" style="margin-top:18px">A busca ignora acentos e encontra propostas, números, siglas e contexto histórico.</p>';return}
  var r=search(q),by={};r.res.forEach(function(x){(by[x.d.type]=by[x.d.type]||[]).push(x)});
  if(!r.res.length){box.innerHTML='<div class="empty" style="margin:18px 0 0"><b>Nada encontrado para “'+esc(q)+'”</b>Tente uma palavra mais curta, uma sigla ou o nome de um capítulo.</div>';return}
  var h='<p class="muted">'+plural(r.res.length,"resultado","resultados")+'</p>';
  TYPE_ORDER.forEach(function(t){var l=by[t];if(!l)return;h+='<section class="rg"><h2 class="rg-h">'+TYPE_LABEL[t]+' <span class="cnt">'+l.length+'</span></h2>'+l.slice(0,30).map(function(x){var d=x.d;return '<a class="res rw" href="'+d.href+'"><span style="flex:1;min-width:0"><span class="res-w">'+esc(d.where)+'</span><span class="res-t">'+hl(d.title,r.toks)+'</span>'+(d.body.trim()?'<span class="res-s">'+hl(snippet(d.body,r.toks),r.toks)+'</span>':'')+'</span></a>'}).join("")+'</section>'});
  box.innerHTML=h;
}
function vSaved(){
  var h='<h1 class="ptitle" tabindex="-1">Salvos</h1><p class="psub">Propostas que você marcou. Ficam guardadas neste aparelho.</p>';
  if(!saved.length)return h+'<div class="empty"><b>Nada salvo ainda</b>Toque no marcador '+I.mark.replace('aria-hidden="true"','aria-hidden="true" class="inl"')+' ao lado de uma proposta para guardá-la aqui.<br><a class="btn y" href="#/propostas">Ver propostas</a></div>';
  var list=saved.map(function(id){return PROP[id]}).sort(function(a,b){return a.ch-b.ch});
  return h+'<div class="body"><button type="button" class="btn k w js-share-saved">'+I.share+'Compartilhar minha lista ('+list.length+')</button><div style="margin-top:10px">'+
    list.map(function(p){var c=CH[p.ch];return '<div class="rw"><a class="res" href="#/cap/'+c.n+'/propostas/'+p.id+'"><span class="res-w">Cap. '+c.r+' · '+esc(c.title)+'</span><span class="res-t">'+esc(p.t)+'</span>'+(p.d?'<span class="res-s">'+esc(snippet(p.d,[],120))+'</span>':'')+'</a>'+saveBtn(p.id)+'</div>'}).join("")+'</div></div>';
}
function vMore(){
  function mi(href,icon,t,s){return '<a class="mi" href="'+href+'"><span class="ic">'+icon+'</span><span>'+t+(s?'<small>'+s+'</small>':'')+'</span>'+I.right+'</a>'}
  return '<h1 class="ptitle" tabindex="-1">Mais</h1><p class="psub">Guia de consulta, textos do livro e ajustes.</p>'+
    '<div class="menu">'+mi("#/glossario",I.abc,"Glossário",GLOSSARY.length+" siglas, leis e conceitos")+mi("#/linha-do-tempo",I.time,"Linha do tempo","Da história às metas do plano")+mi("#/sobre",I.info,"Como ler este guia","Cores, fontes e fidelidade ao livro")+'</div>'+
    '<p class="lab" style="margin:22px 18px 8px">Textos do livro</p><div class="menu">'+TEXTS.map(function(t){return mi("#/texto/"+t.id,I.doc,t.label,t.title)}).join("")+'</div>'+
    '<p class="lab" style="margin:22px 18px 8px">Ajustes</p>'+
    '<div class="set"><h3>Tamanho do texto</h3><div class="seg" role="group" aria-label="Tamanho do texto">'+[[1,"A"],[1.12,"A+"],[1.25,"A++"]].map(function(x){return '<button type="button" data-fs="'+x[0]+'" aria-pressed="'+(fs===x[0])+'" style="font-size:'+(0.85*x[0])+'rem">'+x[1]+'</button>'}).join("")+'</div></div>'+
    '<div class="set"><h3>Tema</h3><div class="seg" role="group" aria-label="Tema">'+[["auto","Automático"],["light","Claro"],["dark","Escuro"]].map(function(x){return '<button type="button" data-theme-set="'+x[0]+'" aria-pressed="'+(theme===x[0])+'">'+x[1]+'</button>'}).join("")+'</div></div>'+
    '<div class="menu" style="margin-top:10px">'+mi("#/instalar",I.phone,"Instalar no celular","Android e iPhone, sem loja de apps")+'</div>'+foot();
}
function vGloss(){
  return '<h1 class="ptitle" tabindex="-1">Glossário</h1><p class="psub">Siglas, leis e conceitos citados no livro. <span class="tag g">guia</span></p>'+
    '<div class="sbox"><div class="sin">'+I.search+'<label class="sr" for="gf">Filtrar glossário</label><input id="gf" type="search" placeholder="Filtrar: FPM, GLO, REURB…" autocomplete="off"></div></div>'+
    '<div class="body"><dl class="gl" id="gl">'+GLOSSARY.map(function(g){return '<div class="gl-i" id="g-'+slug(g[0])+'" tabindex="-1" data-k="'+esc(norm(g[0]+" "+g[1]))+'"><dt>'+esc(g[0])+'</dt><dd>'+esc(g[1])+'<div class="refs">'+g[2].map(refLink).join("")+'</div></dd></div>'}).join("")+'</dl><div id="gl-empty" hidden class="empty" style="margin:18px 0 0"><b>Nenhum termo encontrado</b>Tente a busca geral na aba Buscar.</div></div>';
}
function vTimeline(){
  function it(k){return TIMELINE.filter(function(t){return t[1]===k}).map(function(t){return '<li><span class="tl-y">'+esc(t[0])+'</span><div class="tl-t">'+esc(t[2])+'</div><div class="refs">'+t[3].map(refLink).join("")+'</div></li>'}).join("")}
  return '<h1 class="ptitle" tabindex="-1">Linha do tempo</h1><p class="psub">Os marcos que o livro cita ou pressupõe e, depois, o calendário que ele propõe.</p>'+
    '<div class="sec" style="padding-top:8px"><h2 class="h2">O plano no tempo</h2><p class="gnote">Prazos e metas conforme o livro.</p><ol class="tl goal">'+it("g")+'</ol></div>'+
    '<div class="sec"><h2 class="h2 g">A história por trás <span class="tag g">guia</span></h2><ol class="tl">'+it("h")+'</ol></div>';
}
function vAbout(){
  return '<h1 class="ptitle" tabindex="-1">Como ler este guia</h1><p class="psub">O que é do livro e o que foi acrescentado.</p>'+
    '<div class="legend" style="margin-top:0"><div class="lg"><i class="b"></i><span><b>Amarelo e preto:</b> diagnóstico, números e propostas do livro, resumidos com fidelidade ao texto.</span></div><div class="lg"><i class="g"></i><span><b>Cinza, marcado “guia”:</b> contexto histórico, a coluna “Hoje” dos comparativos, comparações internacionais, glossário e notas.</span></div></div>'+
    '<div class="box"><h2>Fidelidade</h2><p>Onde o próprio livro traz números diferentes para a mesma coisa, o guia mostra as duas versões numa nota. Quando o resumo apenas cita uma medida sem explicá-la, o guia avisa em vez de completar por conta própria.</p><p>Os números de página referem-se ao resumo executivo “O Futuro é Glorioso”, de 51 páginas.</p></div>'+
    '<div class="box"><h2>Navegação</h2><p>Cada capítulo tem três abas: <b>Resumo</b> (a ideia, os números e o problema), <b>Propostas</b> (toque para abrir, salvar e compartilhar) e <b>Contexto</b> (o que muda, a história por trás e ligações com outros capítulos).</p></div>'+foot();
}
function vInstall(){
  var ua=navigator.userAgent||"",ios=/iPhone|iPad|iPod/.test(ua)||(/Macintosh/.test(ua)&&"ontouchend" in document),and=/Android/.test(ua);
  var gh=ghInfo();
  var h='<h1 class="ptitle" tabindex="-1">Instalar</h1><p class="psub">Tenha o guia na tela inicial, funcionando até sem internet.</p>';
  if(isInstalled())h+='<div class="box hl"><h2>'+I.phone+'Você já está no app</h2><p>Este guia já está instalado neste aparelho.</p></div>';
  if(deferredPrompt)h+='<div class="body" style="margin-top:6px"><button type="button" class="btn y w js-install">'+I.phone+'Instalar agora</button></div>';
  var andBox='<div class="box'+(and?" hl":"")+'"><h2>'+I.android+'Android</h2><ol class="steps"><li>Abra o endereço do guia no <b>Chrome</b>.</li><li>Toque em <b>⋮</b> (canto superior direito).</li><li>Escolha <b>Instalar app</b> ou <b>Adicionar à tela inicial</b>.</li></ol>'+(gh?'<p style="margin:14px 0 8px">Ou instale o aplicativo (APK):</p><a class="btn y w" href="'+gh.apk+'">'+I.android+'Baixar o APK</a><p style="margin:10px 0 0;font-size:.85rem">Depois de baixar, toque no arquivo e permita “instalar apps desconhecidos”.</p>':'')+'</div>';
  var iosBox='<div class="box'+(ios?" hl":"")+'"><h2>'+I.apple+'iPhone</h2><ol class="steps"><li>Abra o endereço do guia no <b>Safari</b>.</li><li>Toque em <b>Compartilhar</b> (quadrado com seta para cima).</li><li>Escolha <b>Adicionar à Tela de Início</b> e confirme em <b>Adicionar</b>.</li></ol></div>';
  h+=(ios?iosBox+andBox:andBox+iosBox);
  return h+'<p class="foot">A instalação funciona a partir do endereço público do guia (https). Não é preciso passar pela Play Store nem pela App Store.</p>';
}
function vNotFound(){return '<h1 class="ptitle" tabindex="-1">Não encontrado</h1><p class="psub">Esse endereço não existe no guia.</p><div class="body"><a class="btn y" href="#/">Voltar ao início</a></div>'}

/* ---------- barra superior e abas ---------- */
var TABS=[["home","#/","Início",I.home],["caps","#/capitulos","Capítulos",I.caps],["buscar","#/buscar","Buscar",I.search],["salvos","#/salvos","Salvos",I.mark],["mais","#/mais","Mais",I.more]];
function renderTabbar(active){
  $("#tb").innerHTML='<div class="tb-in">'+TABS.map(function(t){return '<a class="tab" href="'+t[1]+'"'+(t[0]===active?' aria-current="page"':'')+'>'+t[3]+(t[0]==="salvos"?'<span class="badge js-badge">'+(saved.length||"")+'</span>':'')+'<span>'+t[2]+'</span></a>'}).join("")+'</div>';
}
function renderAppbar(o){
  var h;
  if(o.root){h='<a class="ab-brand" href="#/" aria-label="Livro Amarelo — início"><span class="mark" aria-hidden="true"><i></i><i></i><i></i></span><span class="ab-name">Livro Amarelo<small>Guia do plano de governo · Missão</small></span></a>'+(o.key!=="buscar"?'<a class="ib" href="#/buscar" aria-label="Buscar">'+I.search+'</a>':'')}
  else h='<button type="button" class="ib js-back" aria-label="Voltar">'+I.back+'</button><div class="ab-title">'+(o.num?'<b>'+esc(o.num)+'</b>':'')+esc(o.title)+'</div>'+(o.share?'<button type="button" class="ib js-share-ch" aria-label="Compartilhar capítulo">'+I.share+'</button>':'');
  $("#ab").innerHTML=h;
}
function updateBadges(){$$(".js-badge").forEach(function(b){b.textContent=saved.length||""})}

/* ---------- compartilhar ---------- */
var toastT;
function toast(msg){var t=$("#toast");t.textContent=msg;t.classList.add("on");clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove("on")},2200)}
function publicUrl(h){return /^https?:$/.test(location.protocol)&&!/localhost/.test(location.hostname)?location.href.split("#")[0]+h:""}
function copyText(txt){
  function fallback(){try{var ta=document.createElement("textarea");ta.value=txt;ta.setAttribute("readonly","");ta.style.position="fixed";ta.style.opacity="0";document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();toast("Texto copiado")}catch(e){toast("Não foi possível copiar")}}
  try{if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(function(){toast("Texto copiado")},fallback);else fallback()}catch(e){fallback()}
}
function share(title,text,hash){
  var url=publicUrl(hash),full=text+(url?"\n\n"+url:"");
  try{var C=window.Capacitor;if(C&&C.isNativePlatform&&C.isNativePlatform()){var S=(C.Plugins&&C.Plugins.Share)||(C.registerPlugin&&C.registerPlugin("Share"));if(S){S.share({title:title,text:full,dialogTitle:"Compartilhar"}).catch(function(){});return}if(C.nativePromise){C.nativePromise("Share","share",{title:title,text:full,dialogTitle:"Compartilhar"}).catch(function(){});return}}}catch(e){}
  if(navigator.share){navigator.share({title:title,text:text,url:url||undefined}).catch(function(){});return}
  copyText(full);
}
function shareProp(id){var p=PROP[id],c=CH[p.ch];share(p.t,"“"+p.t+"”\n"+(p.d?p.d+"\n":"")+(p.it?p.it.map(function(x){return "• "+x}).join("\n")+"\n":"")+"\nLivro Amarelo · Cap. "+c.r+" — "+c.title,"#/cap/"+c.n+"/propostas/"+p.id)}
function shareChapter(n){var c=CH[n];share(c.title,"Livro Amarelo · Cap. "+c.r+" — "+c.title+"\n"+c.sub+"\n\nEm uma frase: "+c.one,"#/cap/"+n)}
function shareSaved(){var list=saved.map(function(id){return PROP[id]}).sort(function(a,b){return a.ch-b.ch});share("Minhas propostas do Livro Amarelo","Minhas propostas salvas do Livro Amarelo:\n\n"+list.map(function(p){return "• "+p.t+" (Cap. "+CH[p.ch].r+")"}).join("\n"),"#/propostas")}

/* ---------- roteador ---------- */
var current="",stack=[],scrollPos={},isBack=false,replaceNav=false;
function parse(){var h=location.hash.replace(/^#\/?/,""),q="",qi=h.indexOf("?");if(qi>-1){q=new URLSearchParams(h.slice(qi+1)).get("q")||"";h=h.slice(0,qi)}return {seg:h.split("/").filter(Boolean),q:q,full:location.hash||"#/"}}
function route(){
  var r=parse(),s=r.seg,html=null,key="",tab="",bar={root:true},anchor=null,scrollTop=true;
  if(replaceNav){stack[stack.length-1]=r.full;replaceNav=false;isBack=false}else if(stack.length>1&&stack[stack.length-2]===r.full){stack.pop();isBack=true}else if(stack[stack.length-1]!==r.full){stack.push(r.full);isBack=false}else isBack=false
  if(!s.length){html=vHome();key="home";tab="home"}
  else if(s[0]==="capitulos"){html=vCaps();key="capitulos";tab="caps"}
  else if(s[0]==="propostas"){html=vProps();key="propostas";tab="caps"}
  else if(s[0]==="cap"){var n=parseInt(s[1],10),ct=s[2]||"resumo";anchor=s[3]||null;var c=CH[n];
    html=vChapter(n,ct,anchor);key="cap-"+n+"-"+ct;tab="caps";if(c)bar={num:c.r,title:c.title,share:true,parent:"#/capitulos"}}
  else if(s[0]==="texto"){html=vText(s[1]);key="tx-"+s[1];tab="caps";var t=TX[s[1]];if(t)bar={title:t.label,parent:"#/capitulos"}}
  else if(s[0]==="buscar"){key="buscar";tab="buscar";if(current==="buscar"){var qi=$("#q");if(qi&&qi.value!==r.q)qi.value=r.q;renderSearch(r.q);return}html=vSearch(r.q)}
  else if(s[0]==="salvos"){html=vSaved();key="salvos";tab="salvos"}
  else if(s[0]==="mais"){html=vMore();key="mais";tab="mais"}
  else if(s[0]==="glossario"){html=vGloss();key="glossario";tab="mais";anchor=s[1]?"g-"+s[1]:null;bar={title:"Glossário",parent:"#/mais"}}
  else if(s[0]==="linha-do-tempo"){html=vTimeline();key="linha";tab="mais";bar={title:"Linha do tempo",parent:"#/mais"}}
  else if(s[0]==="sobre"){html=vAbout();key="sobre";tab="mais";bar={title:"Como ler",parent:"#/mais"}}
  else if(s[0]==="instalar"){html=vInstall();key="instalar";tab="mais";bar={title:"Instalar",parent:"#/mais"}}
  if(html==null){html=vNotFound();key="404";bar={title:"Livro Amarelo",parent:"#/"}}
  var prevKey=current,sameChapter=prevKey.split("-").slice(0,2).join("-")===key.split("-").slice(0,2).join("-")&&key.indexOf("cap-")===0;
  bar.key=key;renderAppbar(bar);renderTabbar(tab);
  var headEnd=0;if(sameChapter){var chh=$(".chh");if(chh)headEnd=chh.offsetHeight}
  var y=window.scrollY;
  $("#main").innerHTML=html;current=key;
  var ttl={home:"Livro Amarelo — Guia",capitulos:"Capítulos",propostas:"Propostas",buscar:"Buscar",salvos:"Salvos",mais:"Mais",glossario:"Glossário",linha:"Linha do tempo",sobre:"Como ler",instalar:"Instalar"};
  document.title=bar.title?(bar.num?bar.num+". ":"")+bar.title+" · Livro Amarelo":(ttl[key]||"Livro Amarelo");
  if(key==="propostas")renderProps();
  if(key==="buscar"){renderSearch(r.q);if(!r.q&&!isBack){var qq=$("#q");if(qq)setTimeout(function(){qq.focus()},60)}}
  if(anchor){requestAnimationFrame(function(){goAnchor(anchor)});return}
  if(sameChapter){window.scrollTo(0,Math.min(y,headEnd));focusMain(true);return}
  if(isBack&&scrollPos[r.full]!=null){var sp=scrollPos[r.full];requestAnimationFrame(function(){window.scrollTo(0,sp)});return}
  window.scrollTo(0,0);focusMain(key==="buscar");
}
function focusMain(skip){if(skip)return;var h=$("#main h1");if(h)h.focus({preventScroll:true})}
function goAnchor(id){var el=document.getElementById(id);if(!el)return;el.scrollIntoView({block:"start"});el.classList.remove("flash");void el.offsetWidth;el.classList.add("flash");el.focus({preventScroll:true})}
function goBack(){var r=parse();if(stack.length>1)history.back();else{var b=null;if(r.seg[0]==="cap"||r.seg[0]==="texto")b="#/capitulos";else if(["glossario","linha-do-tempo","sobre","instalar"].indexOf(r.seg[0])>-1)b="#/mais";replaceNav=true;location.replace(b||"#/")}}
var st;window.addEventListener("scroll",function(){clearTimeout(st);var k=location.hash||"#/";st=setTimeout(function(){scrollPos[k]=window.scrollY},80)},{passive:true});

/* ---------- eventos ---------- */
function toggleSave(id){
  var i=saved.indexOf(id),on=i<0;if(on)saved.push(id);else saved.splice(i,1);store.set("la.saved",saved);
  $$('[data-save="'+id+'"]').forEach(function(b){b.setAttribute("aria-pressed",on);b.setAttribute("aria-label",(on?"Remover dos salvos":"Salvar")+": "+PROP[id].t)});
  updateBadges();toast(on?"Salva em “Salvos”":"Removida dos salvos");
  if(current==="salvos"&&!on){var b=document.querySelector('[data-save="'+id+'"]'),row=b&&b.closest(".rw");if(row)row.remove();if(!saved.length)route()}
}
function toggleProp(btn,force){var id=btn.getAttribute("data-toggle"),open=force!=null?force:btn.getAttribute("aria-expanded")!=="true";btn.setAttribute("aria-expanded",open);var b=document.getElementById(id+"-b");if(b)b.hidden=!open}
document.addEventListener("click",function(e){
  var t=e.target,x;
  if((x=t.closest("[data-save]"))){e.preventDefault();toggleSave(x.getAttribute("data-save"));return}
  if((x=t.closest("[data-toggle]"))){toggleProp(x);return}
  if((x=t.closest("[data-openall]"))){var all=$$("[data-toggle]"),anyClosed=all.some(function(b){return b.getAttribute("aria-expanded")!=="true"});all.forEach(function(b){toggleProp(b,anyClosed)});x.textContent=anyClosed?"Fechar todas":"Abrir todas";return}
  if((x=t.closest("[data-share-prop]"))){shareProp(x.getAttribute("data-share-prop"));return}
  if(t.closest(".js-share-ch")){var m=parse();shareChapter(parseInt(m.seg[1],10));return}
  if(t.closest(".js-share-saved")){shareSaved();return}
  if(t.closest(".js-back")){goBack();return}
  if(t.closest(".js-clear")){var q=$("#q");q.value="";history.replaceState(null,"","#/buscar");renderSearch("");q.focus();return}
  if(t.closest(".js-install")&&deferredPrompt){deferredPrompt.prompt();deferredPrompt.userChoice.finally(function(){deferredPrompt=null;route()});return}
  if((x=t.closest("[data-part]"))){pf.part=parseInt(x.getAttribute("data-part"),10);$$("[data-part]").forEach(function(b){b.setAttribute("aria-pressed",b===x)});renderProps();return}
  if((x=t.closest("[data-fs]"))){fs=parseFloat(x.getAttribute("data-fs"));store.set("la.fs",fs);applyPrefs();$$("[data-fs]").forEach(function(b){b.setAttribute("aria-pressed",b===x)});return}
  if((x=t.closest("[data-theme-set]"))){theme=x.getAttribute("data-theme-set");store.set("la.theme",theme);applyPrefs();$$("[data-theme-set]").forEach(function(b){b.setAttribute("aria-pressed",b===x)});return}
  if((x=t.closest("a[data-ctab]"))){e.preventDefault();replaceNav=true;location.replace(x.getAttribute("href"));return}
});
document.addEventListener("submit",function(e){if(e.target.matches(".js-sf")){e.preventDefault();var i=$("#q");if(i)i.blur()}});
document.addEventListener("input",function(e){
  var el=e.target;
  if(el.id==="q"){var q=el.value;history.replaceState(null,"","#/buscar"+(q?"?q="+encodeURIComponent(q):""));stack[stack.length-1]=location.hash;renderSearch(q)}
  else if(el.id==="pf"){pf.q=el.value;renderProps()}
  else if(el.id==="gf"){var toks=tokens(el.value),n=0;$$(".gl-i").forEach(function(d){var k=d.getAttribute("data-k"),ok=toks.every(function(t){return k.indexOf(t)>-1});d.hidden=!ok;if(ok)n++});$("#gl-empty").hidden=n>0}
});
var deferredPrompt=null;
window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();deferredPrompt=e;if(current==="instalar")route()});
window.addEventListener("hashchange",route);
if(!location.hash)history.replaceState(null,"","#/");
route();
if(window.__PWA__&&"serviceWorker" in navigator&&location.protocol==="https:"&&!window.Capacitor){window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})})}
})();
