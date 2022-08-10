let welfare = document.getElementById('welfare');
let lf = document.getElementById('lf');
let clarksLogo = document.getElementById('myLogo');
let newLogo = document.getElementById('topLogo');

window.onload = function(){
    welfare.classList.toggle('switch');
    
    setTimeout(() => {  lf.classList.toggle('switch'); }, 2000);
    setTimeout(() => {  lf.classList.toggle('switch');  }, 4000);
    setTimeout(() => {  welfare.classList.toggle('switch'); }, 4000);

    setTimeout(() => {  clarksLogo.classList.toggle('fade'); }, 4500);
    setTimeout(() => {  clarksLogo.classList.toggle('move'); }, 6000);
    setTimeout(() => {  clarksLogo.style.display='none'; newLogo.style.display='block' }, 8000);
    setTimeout(() => {  counter.style.display='block'; }, 8000);
    setTimeout(() => {  counter.style.color='#161138';}, 9000);
    setTimeout(() => {  counter.style.textShadow='4px 4px gray';}, 10000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 8000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 9000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 10000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 11000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 12000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 13000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 14000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 15000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 16000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 17000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 18000);
    setTimeout(() => {  expandArrow.classList.toggle('pull'); }, 19000);
  
    
    
};