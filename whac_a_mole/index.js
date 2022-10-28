const cursor = document.querySelector('.cursor');
const holes = [...document.querySelectorAll ('.hole')]
const scoreEl = document.querySelector('.score span')
console.log (scoreEl.textContent)
let score =0;

function run (){
  const i = Math.floor(Math.random()*holes.length)
  const hole = holes[i];
  let timer = null;
  const img = document.createElement ('img');
  img.classList.add ('mole')
  img.src = 'img/mole.png'
  
  
  img.addEventListener('click', ()=> {
    score += 10
    scoreEl.textContent = score
    img.src='img/whack.png'
clearTimeout(timer)
hole.appendChild(img)
 timer = setTimeout (() => {
  hole.removeChild(img)
  run()
 }, 500)
  })

  hole.appendChild(img)
 timer = setTimeout (() => {
  hole.removeChild(img)
  run()
 }, 2500)

}
run ()

window.addEventListener('mousemove', e =>{
  cursor.style.top = e.pageY +'px';
  cursor.style.left =e.pageX +'px';

})
window.addEventListener('mousedown', ()=>{
  cursor.classList.add('active')
})

window.addEventListener('mouseup', ()=>{
  cursor.classList.remove('active')
})