const panelInput=document.getElementById('panelInput');
const estimatePrice=document.getElementById('estimatePrice');
function calculate(){
  const count=Math.max(1,parseInt(panelInput.value||'1',10));
  const price=count<=25?249:249+(count-25)*10;
  estimatePrice.textContent=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(price);
}
document.getElementById('calcButton').addEventListener('click',calculate);
panelInput.addEventListener('input',calculate);

document.querySelector('.menu-toggle').addEventListener('click',e=>{
  const nav=document.querySelector('.main-nav');
  nav.classList.toggle('open');
  e.currentTarget.setAttribute('aria-expanded',nav.classList.contains('open'));
});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.main-nav').classList.remove('open')));

const modal=document.getElementById('quoteModal');
function openModal(){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.querySelectorAll('.quote-open').forEach(b=>b.addEventListener('click',openModal));
document.querySelectorAll('.quote-close').forEach(b=>b.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

document.getElementById('quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const subject=encodeURIComponent('Solar Panel Cleaning Quote Request');
  const body=encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nNumber of panels: ${data.get('panels')}\nService address: ${data.get('address')}\n\nDetails:\n${data.get('details')||'None provided'}`);
  window.location.href=`mailto:info@patriotsolutions.com?subject=${subject}&body=${body}`;
});

document.getElementById('year').textContent=new Date().getFullYear();
