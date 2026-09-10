
const stars=document.getElementById('stars');
if(stars){for(let i=0;i<150;i++){let s=document.createElement('i');s.className='star';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.animationDelay=(Math.random()*4)+'s';s.style.opacity=Math.random();stars.appendChild(s)}}
const menu=document.querySelector('.menu'), links=document.querySelector('.links');
menu?.addEventListener('click',()=>links.classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const out=f.querySelector('.form-status');if(out)out.textContent='Your Dream has been captured locally for this demo. Connect Supabase to make submissions permanent.';}));
