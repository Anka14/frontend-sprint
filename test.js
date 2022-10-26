//Write a function that mimics the behaviour of a typewriter.

//Using setInterval display the word prout one character at a time (one letter per second). Once the word is written on the screen clear the interval.

let word = ['p','r','o','u','t'];
const btn = document.createElement ('button');
btn.textContent ='Click to start';
document.body.appendChild (btn)
btn.addEventListener('click', ()=> {
  let index = 0;
const timer = setInterval(function ()  {
index < word.length ? console.log (word[index++]) : clearInterval (timer) 
}, 1000) 
})

//Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. 
//If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.
let number;
let timer =0;
const seconds = 60;
const seconds2= 120;
const seconds3 = 170;
let interval;
function display (){
  timer++
  console.log (timer)
  if (timer === seconds){
    console.log ('minute passed'+ seconds)
  } else if (timer === seconds2){
    console.log ('two minutes passed')
    
   } else  {

  
  
    
}
//interval = setInterval (display, 1000)
}
display()