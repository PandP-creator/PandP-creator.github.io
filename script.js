(function(){
var K='pp_cookie_consent',b=document.getElementById('cookie-banner');
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
function set(v){try{localStorage.setItem(K,v)}catch(e){}}
function show(v){if(b){b.hidden=!v;document.body.classList.toggle('has-banner',v)}}
var GA_ID='G-9D26Z8BB1F',gaOn=false;
function optional(){if(gaOn||GA_ID.indexOf('XXXX')>-1)return;gaOn=true;
var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;document.head.appendChild(s);
window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',GA_ID)}
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="wa.me"]');if(a&&window.gtag)gtag('event','whatsapp_click',{link_text:a.textContent.trim()})});
function clearGA(){window['ga-disable-'+GA_ID]=true;
var host=location.hostname.split('.'),doms=[location.hostname];
for(var i=0;i<host.length-1;i++)doms.push('.'+host.slice(i).join('.'));
document.cookie.split(';').forEach(function(x){var n=x.split('=')[0].trim();
if(n==='_ga'||n.indexOf('_ga_')===0||n==='_gid'||n.indexOf('_gat')===0){
document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
doms.forEach(function(d){document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain='+d})}})}
var c=get();if(!c)show(true);if(c==='accepted')optional();if(c==='declined')clearGA();
var a=document.getElementById('cc-accept'),d=document.getElementById('cc-decline');
if(a)a.onclick=function(){set('accepted');show(false);optional()};
if(d)d.onclick=function(){set('declined');show(false);clearGA()};
document.querySelectorAll('[data-cookie-settings]').forEach(function(x){x.onclick=function(){try{localStorage.removeItem(K)}catch(e){}show(true)}});
var f=document.getElementById('contact-form');
if(f)f.addEventListener('submit',function(e){e.preventDefault();
var m=document.getElementById('form-msg');m.className='msg';m.textContent='Sending...';
fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}}).then(function(r){
if(r.ok){f.reset();m.textContent='Thank you! Your message has been sent. We will reply soon.'}
else{throw 0}}).catch(function(){m.className='msg err';m.textContent='Sorry, something went wrong. Please email us or use WhatsApp.'})});
})();
(function(){document.querySelectorAll('[data-copy]').forEach(function(b){b.onclick=function(){var v=b.getAttribute('data-copy'),o=b.textContent;
function done(){b.textContent='Copied!';setTimeout(function(){b.textContent=o},2000)}
if(navigator.clipboard)navigator.clipboard.writeText(v).then(done,function(){});else done()}})})();