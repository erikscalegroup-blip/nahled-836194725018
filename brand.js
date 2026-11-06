(function(){
  var FONT="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap";
  var CSS=":root{--font-sans:\"Barlow\",system-ui,sans-serif;--font-display:\"Barlow Condensed\",system-ui,sans-serif;--default-font-family:\"Barlow\",system-ui,sans-serif}"
    +"html,body{font-family:\"Barlow\",system-ui,sans-serif!important}"
    +"h1,h2,h3,h4,.t-hero,.t-nadpis,.t-sluzba,.t-popis,.stitok,.btn,.uvod-veta,.t-cislo,.font-display{font-family:\"Barlow Condensed\",system-ui,sans-serif!important}"
    +".t-hero,.uvod-znacka,.t-cislo{font-weight:800!important}"
    +".t-nadpis,.t-sluzba{font-weight:700!important}"
    +"a.logotyp svg{display:block;width:auto;height:1.7rem}"
    +"footer a.logotyp svg{height:2.15rem}"
    +".uvod-znacka svg{display:block;width:auto;height:12.5rem}"
    +"h2.logotyp svg{display:block;width:auto;height:9rem}"
    +"a.mteq-telefon{border-color:rgba(246,248,250,.55);color:#F6F8FA}"
    +"a.mteq-telefon:hover{border-color:#fff;color:#fff;background:transparent}"
    +"a.fixed[href='tel:+421902639923']{flex-wrap:nowrap!important;white-space:nowrap!important;width:max-content;max-width:calc(100vw - 2rem)}"
    +".mteq-adresa,.mteq-adresa-firma{color:inherit}"
    +"@media (width<=1023px){.uvod-znacka svg{height:9.5rem}h2.logotyp svg{height:7.5rem}}"
    +"@media (width<=639px){.uvod-znacka svg{height:7.5rem}h2.logotyp svg{height:6.25rem}a.logotyp svg,footer a.logotyp svg{height:1.45rem}}"
    +".mteq-mapa-ram{overflow:hidden;border-radius:24px;background:#fff;border:1px solid #cbd8e2}"
    +".mteq-mapa-ram iframe{display:block;width:100%;height:280px;border:0}"
    +"@media (width>=640px){.mteq-mapa-ram iframe{height:440px}}";
  var WORD="<svg class=\"mteq-logo mteq-word\" viewBox=\"309.76 345.00 222.43 48.75\" aria-hidden=\"true\" fill=\"none\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M309.76 390.70 L309.76 345.00 L319.66 345.00 L332.61 360.23 L345.56 345.00 L355.47 345.00 L355.47 390.70 L344.04 390.70 L344.04 364.04 L332.61 375.47 L321.19 364.04 L321.19 390.70 L309.76 390.70 Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M363.08 364.04 L381.36 364.04 L381.36 373.18 L363.08 373.18 L363.08 364.04 Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M388.98 345.00 L431.64 345.00 L431.64 355.66 L416.40 355.66 L416.40 390.70 L404.22 390.70 L404.22 355.66 L388.98 355.66 L388.98 345.00 Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M439.26 345.00 L478.87 345.00 L478.87 355.66 L451.45 355.66 L451.45 362.52 L475.06 362.52 L475.06 373.18 L451.45 373.18 L451.45 380.04 L478.87 380.04 L478.87 390.70 L439.26 390.70 L439.26 345.00 Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M491.06 345.00 L523.05 345.00 L530.67 352.62 L530.67 377.75 L518.48 377.75 L518.48 356.43 L497.15 356.43 L497.15 379.28 L515.43 379.28 L515.43 390.70 L491.06 390.70 L484.96 384.61 L484.96 351.86 L491.06 345.00 Z\"/><path fill=\"#0B6BB5\" fill-rule=\"evenodd\" d=\"M520.00 381.56 L532.19 381.56 L532.19 393.75 L520.00 393.75 L520.00 381.56 Z\"/></svg>";
  var STACK="<svg class=\"mteq-logo mteq-stack\" viewBox=\"309.76 206.25 222.43 187.50\" aria-hidden=\"true\" fill=\"none\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M363.00 206.25 L458.33 206.25 L479.25 227.18 L479.25 289.95 L459.49 289.95 L459.49 235.31 L449.03 226.01 L382.76 226.01 L382.76 302.74 L392.06 302.74 L392.06 244.61 L404.85 244.61 L421.13 260.89 L437.40 244.61 L450.19 244.61 L450.19 308.55 L431.59 308.55 L431.59 274.84 L421.13 286.46 L410.66 274.84 L410.66 322.50 L382.76 322.50 L363.00 302.74 L363.00 206.25 Z\"/><path fill=\"#0B6BB5\" fill-rule=\"evenodd\" d=\"M435.08 307.39 L459.49 307.39 L459.49 295.76 L479.25 295.76 L479.25 322.50 L435.08 322.50 L435.08 307.39 Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M309.76 390.70 L309.76 345.00 L319.66 345.00 L332.61 360.23 L345.56 345.00 L355.47 345.00 L355.47 390.70 L344.04 390.70 L344.04 364.04 L332.61 375.47 L321.19 364.04 L321.19 390.70 L309.76 390.70 Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M363.08 364.04 L381.36 364.04 L381.36 373.18 L363.08 373.18 L363.08 364.04 Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M388.98 345.00 L431.64 345.00 L431.64 355.66 L416.40 355.66 L416.40 390.70 L404.22 390.70 L404.22 355.66 L388.98 355.66 L388.98 345.00 Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M439.26 345.00 L478.87 345.00 L478.87 355.66 L451.45 355.66 L451.45 362.52 L475.06 362.52 L475.06 373.18 L451.45 373.18 L451.45 380.04 L478.87 380.04 L478.87 390.70 L439.26 390.70 L439.26 345.00 Z\"/><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M491.06 345.00 L523.05 345.00 L530.67 352.62 L530.67 377.75 L518.48 377.75 L518.48 356.43 L497.15 356.43 L497.15 379.28 L515.43 379.28 L515.43 390.70 L491.06 390.70 L484.96 384.61 L484.96 351.86 L491.06 345.00 Z\"/><path fill=\"#0B6BB5\" fill-rule=\"evenodd\" d=\"M520.00 381.56 L532.19 381.56 L532.19 393.75 L520.00 393.75 L520.00 381.56 Z\"/></svg>";
  var ADRESA="Moyzesova 4, 902 01 Pezinok";
  var CISLO="+421 902 639 923";
  function head(){
    if(!document.getElementById("mteq-fonts")){
      var l=document.createElement("link");
      l.id="mteq-fonts"; l.rel="stylesheet"; l.href=FONT;
      document.head.appendChild(l);
    }
    if(!document.getElementById("mteq-brand")){
      var s=document.createElement("style");
      s.id="mteq-brand"; s.textContent=CSS;
      document.head.appendChild(s);
    }
  }
  function swap(el, html){
    if(!el || el.querySelector("svg.mteq-logo")) return;
    el.innerHTML=html;
  }
  function phone(){
    var hero=document.querySelector("section.uvod-domov");
    if(hero && !hero.querySelector("a.mteq-telefon")){
      var row=hero.querySelector(".mt-7");
      if(row){
        var a=document.createElement("a");
        a.className="btn btn-obrys mteq-telefon";
        a.href="tel:+421902639923";
        a.textContent=CISLO;
        row.appendChild(a);
      }
    }
    var fixed=document.querySelector("a.fixed[href='tel:+421902639923']");
    if(fixed && fixed.textContent.indexOf("902")<0 && !fixed.querySelector(".mteq-cislo")){
      var s=document.createElement("span");
      s.className="mteq-cislo";
      s.textContent=" "+CISLO;
      fixed.appendChild(s);
    }
  }
  function address(){
    var foot=document.querySelector("footer");
    if(!foot) return;
    var col=foot.querySelector(".space-y-1");
    if(col){
      var ps=col.querySelectorAll("p");
      for(var i=0;i<ps.length;i++){
        if(ps[i].textContent.indexOf("\u0160enkvice")>=0) ps[i].textContent=ADRESA;
      }
    }
    var seats=document.querySelectorAll("p.t-sluzba");
    for(var s=0;s<seats.length;s++){
      if(seats[s].textContent.indexOf("\u0160enkvice")>=0) seats[s].textContent=ADRESA;
    }
    var metas=document.querySelectorAll("meta[name='description'],meta[property='og:description']");
    for(var m=0;m<metas.length;m++){
      var c=metas[m].getAttribute("content")||"";
      if(c.indexOf("\u0160enkvice")>=0) metas[m].setAttribute("content", c.split("\u0160enkvice").join(ADRESA));
    }
    var lds=document.querySelectorAll("script[type='application/ld+json']");
    for(var n=0;n<lds.length;n++){
      var raw=lds[n].textContent;
      if(raw.indexOf("\u0160enkvice")<0) continue;
      var next=raw.split("\u0160enkvice").join("Pezinok");
      if(next.indexOf("streetAddress")<0){
        next=next.split('"addressLocality":"Pezinok"').join('"streetAddress":"Moyzesova 4","postalCode":"902 01","addressLocality":"Pezinok"');
      }
      lds[n].textContent=next;
    }
    var bottom=foot.querySelector(".obal.mt-12 .border-t") || foot.querySelector(".obal.mt-12");
    if(bottom && !bottom.querySelector(".mteq-adresa")){
      var p=document.createElement("p");
      p.className="mt-3 mteq-adresa";
      p.textContent=ADRESA;
      bottom.appendChild(p);
    }
  }
  function mapa(){
    if(location.pathname.replace(/\/$/,"")!=="/kontakt") return;
    if(document.getElementById("mteq-mapa")) return;
    var grids=document.querySelectorAll("main .obal > .grid");
    if(!grids.length) return;
    var grid=grids[grids.length-1];
    var box=document.createElement("section");
    box.id="mteq-mapa";
    box.className="mt-10";
    var src="https://maps.google.com/maps?q=Moyzesova+4,+902+01+Pezinok&ll=48.284158,17.2705815&z=17&hl=sk&output=embed";
    box.innerHTML='<div><span class="stitok">Kde n\u00e1s n\u00e1jdete</span><h2 class="t-nadpis mt-3">'+ADRESA+'</h2></div><div class="mteq-mapa-ram mt-6"><iframe title="Mapa s\u00eddla M-TEQ, Moyzesova 4, Pezinok" src="'+src+'" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>';
    grid.parentNode.insertBefore(box, grid.nextSibling);
  }
  function paint(){
    head();
    document.querySelectorAll("a.logotyp").forEach(function(el){ swap(el, WORD); });
    document.querySelectorAll("h1.uvod-znacka, h2.logotyp").forEach(function(el){ swap(el, STACK); });
    phone();
    address();
    mapa();
  }
  var busy=false;
  var obs=new MutationObserver(function(){
    if(busy) return;
    busy=true;
    paint();
    busy=false;
  });
  function start(){
    paint();
    obs.observe(document.documentElement, {childList:true, subtree:true});
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
