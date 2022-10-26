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

let timer =0;
const seconds = 60;
const seconds2= 120;
const seconds3 = 170;
const button = document.createElement ('button')
button.textContent = 'click to account seconds';
document.body.appendChild(button)
const  output = document.createElement ('div');
document.body.appendChild (output);

button.addEventListener ('click', () =>{
  const interval = setInterval (function () {
    timer++
    //console.log (timer)
    output.innerHTML = timer;
    if (timer === seconds){
      output.innerHTML= '1 minute passed' + seconds
      //console.log ('minute passed '+ seconds);

    } else if (timer === seconds2){
      //console.log ('two minutes passed ' + seconds2)
      output.innerHTML= '2 minute passed' + seconds2
     } else if(timer === seconds3) {
      //console.log ('three minutes passed ' + seconds3)  
      output.innerHTML= '3 minute passed' + seconds3
        clearInterval (interval)
  
  } 

  }, 1000)
})



//* next third task is in seperate folder whac-a-mole