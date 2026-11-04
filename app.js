(function(){
var d=document,h=d.documentElement,fine=matchMedia('(hover:hover) and (pointer:fine)').matches,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function $(s){return d.querySelector(s)}function $$(s){return [].slice.call(d.querySelectorAll(s))}
var bg=$('.burger'),nv=$('nav');if(bg)bg.addEventListener('click',function(){var o=nv.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
/* stats from config.js */
var S=window.SITE&&SITE.stats,box=$('#stats');
if(S&&box){box.innerHTML=S.map(function(s,i){var t=s.href?'a':'div',ext=/^https?:/.test(s.href||'');return '<'+t+' class="stat"'+(s.href?' href="'+s.href+'"'+(ext?' target="_blank" rel="noopener"':''):'')+'><b data-n="'+s.n+'" data-d="'+(s.d||0)+'" data-x="'+(s.x||'')+'">0</b><span>'+s.label+'</span><small>'+(s.asOf?'as of '+s.asOf:'as previously reported')+'</small></'+t+'>'}).join('')}
function fmt(v,dd){return dd?v.toFixed(dd):Math.round(v).toLocaleString('en-US')}
if('IntersectionObserver' in window){
 var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var t=e.target,N=parseFloat(t.dataset.n),dd=+t.dataset.d,x=t.dataset.x||'';
  if(rm){t.textContent=fmt(N,dd)+x;return}var s=performance.now();(function f(now){var p=Math.min((now-s)/1100,1),q=1-Math.pow(1-p,3);t.textContent=fmt(N*q,dd)+x;if(p<1)requestAnimationFrame(f)})(s)})},{threshold:.4});
 $$('[data-n]').forEach(function(e){co.observe(e)});
 if(h.classList.contains('js-rv')){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target)}})},{threshold:.06});$$('.rv').forEach(function(e){io.observe(e)})}
}else{$$('[data-n]').forEach(function(t){t.textContent=fmt(parseFloat(t.dataset.n),+t.dataset.d)+(t.dataset.x||'')})}
/* long legal pages: collapse on small screens */
if(innerWidth<700)$$('.fold').forEach(function(f,i){if(i)f.removeAttribute('open')});
if(!fine||rm)return;
/* desktop only: page wipe + blob cursor */
var w=$('.wipe'),bl=$('.blob'),sv=null,x=0,y=0,tx=0,ty=0,raf=0;
function save(){try{sessionStorage.setItem('fbxy',JSON.stringify([tx,ty]))}catch(e){}}
addEventListener('pagehide',save);
addEventListener('pageshow',function(e){if(e.persisted&&w)w.className='wipe'});
$$('a[href]').forEach(function(a){var hr=a.getAttribute('href');if(!hr||hr[0]=='#'||a.target=='_blank'||/^(https?:|mailto:)/.test(hr))return;
 a.addEventListener('click',function(e){if(e.metaKey||e.ctrlKey||e.shiftKey)return;e.preventDefault();save();w.className='wipe out';setTimeout(function(){location.href=hr},260)})});
try{sv=JSON.parse(sessionStorage.getItem('fbxy'))}catch(e){}
if(sv){x=tx=sv[0];y=ty=sv[1];bl.style.transform='translate('+(x-26)+'px,'+(y-23)+'px)';bl.classList.add('on')}
function loop(){x+=(tx-x)*.28;y+=(ty-y)*.28;bl.style.transform='translate('+(x-26)+'px,'+(y-23)+'px)';raf=(Math.abs(tx-x)>.3||Math.abs(ty-y)>.3)?requestAnimationFrame(loop):0}
addEventListener('mousemove',function(e){tx=e.clientX;ty=e.clientY;bl.classList.add('on');if(!raf)raf=requestAnimationFrame(loop)},{passive:true});
d.addEventListener('mouseleave',function(){bl.classList.remove('on')});
$$('a,button,summary,.stat,.tile,.ex').forEach(function(e){e.addEventListener('mouseenter',function(){bl.classList.add('big')});e.addEventListener('mouseleave',function(){bl.classList.remove('big')})});
})();
