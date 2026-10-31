(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var w=document.querySelector('.wipe');w.querySelectorAll('i').forEach(function(e,i){e.style.setProperty('--i',i)});w.classList.add('in');
document.querySelectorAll('a[href]').forEach(function(a){var h=a.getAttribute('href');
 if(!h||h[0]=='#'||a.target=='_blank'||/^(https?:|mailto:)/.test(h))return;
 a.addEventListener('click',function(e){if(e.metaKey||e.ctrlKey||rm)return;e.preventDefault();w.classList.remove('in');void w.offsetWidth;w.classList.add('out');setTimeout(function(){location.href=h},560)})});
addEventListener('pageshow',function(e){if(e.persisted){w.classList.remove('out');w.classList.add('in')}});
var b=document.querySelector('.burger'),n=document.querySelector('nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var S=window.SITE&&SITE.stats,box=document.getElementById('stats');
if(S&&box){box.innerHTML=S.map(function(s,i){var t=s.href?'a':'div',ext=/^https?:/.test(s.href||'');return '<'+t+' class="stat s'+(i%4)+'"'+(s.href?' href="'+s.href+'"'+(ext?' target="_blank" rel="noopener"':''):'')+'><b data-n="'+s.n+'" data-d="'+(s.d||0)+'" data-x="'+(s.x||'')+'">0</b><span>'+s.label+'</span><small>'+(s.asOf?'as of '+s.asOf:'as previously reported')+'</small></'+t+'>'}).join('')}
function fmt(v,d){return d?v.toFixed(d):Math.round(v).toLocaleString('en-US')}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('v');
 e.target.querySelectorAll&&0;io.unobserve(e.target)})},{threshold:.08});
document.querySelectorAll('.rv').forEach(function(e,i){e.style.transitionDelay=(i%3)*90+'ms';io.observe(e)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var t=e.target,N=parseFloat(t.dataset.n),d=+t.dataset.d,x=t.dataset.x||'';
 if(rm){t.textContent=fmt(N,d)+x;return}var s=performance.now();(function f(now){var p=Math.min((now-s)/1400,1),q=1-Math.pow(1-p,3);t.textContent=fmt(N*q,d)+x;if(p<1)requestAnimationFrame(f)})(s)})},{threshold:.4});
document.querySelectorAll('[data-n]').forEach(function(e){co.observe(e)});
var pg=document.querySelector('.prog'),dd=[].slice.call(document.querySelectorAll('.dd'));
function onS(){var h=document.documentElement,sc=h.scrollTop,m=h.scrollHeight-innerHeight;pg.style.setProperty('--p',(m>0?sc/m*100:0)+'%');
 if(!rm)dd.forEach(function(e){var r=e.getBoundingClientRect();e.style.setProperty('--py',((r.top+r.height/2-innerHeight/2)*parseFloat(e.dataset.s||0))+'px')})}
addEventListener('scroll',onS,{passive:true});onS();
var bl=document.querySelector('.blob');
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!rm){
 var sv=null;try{sv=JSON.parse(sessionStorage.getItem('fbxy'))}catch(e){}
 var x=sv?sv[0]:-100,y=sv?sv[1]:-100,tx=x,ty=y,px=x,py=y,fc=0;
 if(sv){bl.classList.add('on');requestAnimationFrame(function(){bl.style.transition='';bl.style.opacity=''})}
 function sav(){try{sessionStorage.setItem('fbxy',JSON.stringify([tx,ty]))}catch(e){}}addEventListener('pagehide',sav);
 addEventListener('mousemove',function(e){tx=e.clientX;ty=e.clientY;bl.classList.add('on')});
 addEventListener('mousedown',function(e){bl.classList.add('down');for(var i=0;i<8;i++){var s=document.createElement('span');s.className='burst';s.textContent='\u2605';s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';var a=Math.random()*6.28,r=40+Math.random()*50;s.style.setProperty('--dx',Math.cos(a)*r+'px');s.style.setProperty('--dy',Math.sin(a)*r+'px');document.body.appendChild(s);setTimeout(function(el){el.remove()},800,s)}});
 addEventListener('mouseup',function(){bl.classList.remove('down')});
 document.addEventListener('mouseleave',function(){bl.classList.remove('on')});
 document.querySelectorAll('a,button,summary,.card,.stat,.chips li').forEach(function(e){e.addEventListener('mouseenter',function(){bl.classList.add('big')});e.addEventListener('mouseleave',function(){bl.classList.remove('big')})});
 (function f(){if(++fc%6==0)sav();x+=(tx-x)*.18;y+=(ty-y)*.18;var vx=x-px,vy=y-py,sp=Math.min(Math.hypot(vx,vy)/30,.45),a=Math.atan2(vy,vx)*180/Math.PI;px=x;py=y;
  bl.style.transform='translate('+(x-27)+'px,'+(y-24)+'px) rotate('+a+'deg) scale('+(1+sp)+','+(1-sp*.6)+') rotate('+(-a)+'deg)';requestAnimationFrame(f)})();
 document.querySelectorAll('.card:not(.legal .card)').forEach(function(c){
  c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;c.style.setProperty('--rx',(-py*5)+'deg');c.style.setProperty('--ry',(px*6)+'deg');c.style.setProperty('--r','0deg')});
  c.addEventListener('mouseleave',function(){c.style.removeProperty('--rx');c.style.removeProperty('--ry');c.style.removeProperty('--r')})})}
})();
