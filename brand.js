(function(){
  var FONT="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap";
  var CSS=":root{--font-sans:\"Barlow\",system-ui,sans-serif;--font-display:\"Barlow Condensed\",system-ui,sans-serif;--default-font-family:\"Barlow\",system-ui,sans-serif}"
    +"html,body{font-family:\"Barlow\",system-ui,sans-serif!important}"
    +"h1,h2,h3,h4,.t-hero,.t-nadpis,.t-sluzba,.t-popis,.stitok,.btn,.uvod-veta,.t-cislo,.font-display{font-family:\"Barlow Condensed\",system-ui,sans-serif!important}"
    +".t-hero,.uvod-znacka,.t-cislo{font-weight:800!important}"
    +".t-nadpis,.t-sluzba{font-weight:700!important}"
    +"a.logotyp svg{display:block;width:auto;height:2.5rem}"
    +".uvod-znacka svg{display:block;width:auto;height:6.4rem}"
    +"h2.logotyp svg{display:block;width:auto;height:3.1rem}"
    +"a.mteq-telefon{border-color:rgba(246,248,250,.55);color:#F6F8FA}"
    +"a.mteq-telefon:hover{border-color:#fff;color:#fff;background:transparent}"
    +"a.fixed[href='tel:+421902639923']{flex-wrap:nowrap!important;white-space:nowrap!important;width:max-content;max-width:calc(100vw - 2rem)}"
    +".mteq-adresa,.mteq-adresa-firma{color:inherit}"
    +"@media (width<=1023px){.uvod-znacka svg{height:4.8rem}}"
    +"@media (width<=639px){.uvod-znacka svg{height:3.4rem}a.logotyp svg{height:2.15rem}}"
    +".mteq-mapa-ram{overflow:hidden;border-radius:24px;background:#fff;border:1px solid #cbd8e2}"
    +".mteq-mapa-ram iframe{display:block;width:100%;height:280px;border:0}"
    +"@media (width>=640px){.mteq-mapa-ram iframe{height:440px}}";
  var LOCKUP="<svg class=\"mteq-logo mteq-lockup\" viewBox=\"0 0 456.07 112.50\" aria-hidden=\"true\" fill=\"none\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M0.00 0.00 L92.25 0.00 L112.50 20.25 L112.50 81.00 L93.37 81.00 L93.37 28.12 L83.25 19.12 L19.12 19.12 L19.12 93.37 L28.12 93.37 L28.12 37.12 L40.50 37.12 L56.25 52.87 L72.00 37.12 L84.38 37.12 L84.38 99.00 L66.38 99.00 L66.38 66.38 L56.25 77.62 L46.12 66.38 L46.12 112.50 L19.12 112.50 L0.00 93.37 L0.00 0.00 Z M144.00 86.62 L144.00 22.50 L157.89 22.50 L176.06 43.87 L194.23 22.50 L208.12 22.50 L208.12 86.62 L192.09 86.62 L192.09 49.22 L176.06 65.25 L160.03 49.22 L160.03 86.62 L144.00 86.62 Z M218.81 49.22 L244.46 49.22 L244.46 62.04 L218.81 62.04 Z Z M255.15 22.50 L314.99 22.50 L314.99 37.46 L293.62 37.46 L293.62 86.62 L276.52 86.62 L276.52 37.46 L255.15 37.46 L255.15 22.50 Z M325.68 22.50 L381.26 22.50 L381.26 37.46 L342.78 37.46 L342.78 47.08 L375.91 47.08 L375.91 62.04 L342.78 62.04 L342.78 71.66 L381.26 71.66 L381.26 86.62 L325.68 86.62 L325.68 22.50 Z M398.36 22.50 L443.24 22.50 L453.93 33.19 L453.93 68.46 L436.83 68.46 L436.83 38.53 L406.91 38.53 L406.91 70.59 L432.56 70.59 L432.56 86.62 L398.36 86.62 L389.81 78.07 L389.81 32.12 L398.36 22.50 Z\"/><path fill=\"#0B6BB5\" d=\"M69.75 97.87 L93.37 97.87 L93.37 86.62 L112.50 86.62 L112.50 112.50 L69.75 112.50 L69.75 97.87 Z M438.97 73.80 L456.07 73.80 L456.07 90.90 L438.97 90.90 Z Z\"/></svg>";
  var WORD="<svg class=\"mteq-logo mteq-word\" viewBox=\"0 0 312.07 68.40\" aria-hidden=\"true\" fill=\"none\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M0.00 64.12 L0.00 0.00 L13.89 0.00 L32.06 21.37 L50.23 0.00 L64.12 0.00 L64.12 64.12 L48.09 64.12 L48.09 26.72 L32.06 42.75 L16.03 26.72 L16.03 64.12 L0.00 64.12 Z M74.81 26.72 L100.46 26.72 L100.46 39.54 L74.81 39.54 Z Z M111.15 0.00 L171.00 0.00 L171.00 14.96 L149.62 14.96 L149.62 64.12 L132.52 64.12 L132.52 14.96 L111.15 14.96 L111.15 0.00 Z M181.69 0.00 L237.26 0.00 L237.26 14.96 L198.79 14.96 L198.79 24.58 L231.92 24.58 L231.92 39.54 L198.79 39.54 L198.79 49.16 L237.26 49.16 L237.26 64.12 L181.69 64.12 L181.69 0.00 Z M254.36 0.00 L299.25 0.00 L309.93 10.69 L309.93 45.96 L292.84 45.96 L292.84 16.03 L262.91 16.03 L262.91 48.09 L288.56 48.09 L288.56 64.12 L254.36 64.12 L245.81 55.57 L245.81 9.62 L254.36 0.00 Z\"/><path fill=\"#0B6BB5\" d=\"M294.97 51.30 L312.07 51.30 L312.07 68.40 L294.97 68.40 Z Z\"/></svg>";
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
    var link="https://www.google.com/maps/place/Moyzesova+4,+902+01+Pezinok/@48.284158,17.2705815,17z";
    var src="https://maps.google.com/maps?q=Moyzesova+4,+902+01+Pezinok&ll=48.284158,17.2705815&z=17&hl=sk&output=embed";
    box.innerHTML='<div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><span class="stitok">Kde n\u00e1s n\u00e1jdete</span><h2 class="t-nadpis mt-3">'+ADRESA+'</h2></div><a class="btn btn-modra" href="'+link+'" target="_blank" rel="noopener noreferrer">Otvori\u0165 v Google map\u00e1ch</a></div><div class="mteq-mapa-ram mt-6"><iframe title="Mapa s\u00eddla M-TEQ, Moyzesova 4, Pezinok" src="'+src+'" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>';
    grid.parentNode.insertBefore(box, grid.nextSibling);
  }
  function paint(){
    head();
    document.querySelectorAll("a.logotyp").forEach(function(el){ swap(el, LOCKUP); });
    document.querySelectorAll("h1.uvod-znacka, h2.logotyp").forEach(function(el){ swap(el, WORD); });
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
