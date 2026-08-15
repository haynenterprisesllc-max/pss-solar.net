const panelInput=document.getElementById('panelInput');
const estimatePrice=document.getElementById('estimatePrice');
function calculate(){
  const count=Math.max(1,parseInt(panelInput.value||'1',10));
  const price=count<=25?199:199+(count-25)*10;
  estimatePrice.textContent=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(price);
}
if(panelInput&&estimatePrice){
  document.getElementById('calcButton').addEventListener('click',calculate);
  panelInput.addEventListener('input',calculate);
}

const menuToggle=document.querySelector('.menu-toggle');
if(menuToggle){
  menuToggle.addEventListener('click',e=>{
    const nav=document.querySelector('.main-nav');
    nav.classList.toggle('open');
    e.currentTarget.setAttribute('aria-expanded',nav.classList.contains('open'));
  });
}
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.main-nav').classList.remove('open')));

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();
