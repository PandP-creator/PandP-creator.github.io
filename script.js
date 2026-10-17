(function(){
var K='pp_cookie_consent',b=document.getElementById('cookie-banner');
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
function set(v){try{localStorage.setItem(K,v)}catch(e){}}
function show(v){if(b){b.hidden=!v;document.body.classList.toggle('has-banner',v)}}
function optional(){/* Add analytics or other optional scripts here. They run only after the visitor accepts. */}
var c=get();if(!c)show(true);if(c==='accepted')optional();
var a=document.getElementById('cc-accept'),d=document.getElementById('cc-decline');
if(a)a.onclick=function(){set('accepted');show(false);optional()};
if(d)d.onclick=function(){set('declined');show(false)};
document.querySelectorAll('[data-cookie-settings]').forEach(function(x){x.onclick=function(){try{localStorage.removeItem(K)}catch(e){}show(true)}});
var f=document.getElementById('contact-form');
if(f)f.addEventListener('submit',function(e){e.preventDefault();
var m=document.getElementById('form-msg');m.className='msg';m.textContent='Sending...';
fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}}).then(function(r){
if(r.ok){f.reset();m.textContent='Thank you! Your message has been sent. We will reply soon.'}
else{throw 0}}).catch(function(){m.className='msg err';m.textContent='Sorry, something went wrong. Please email us or use WhatsApp.'})});
})();