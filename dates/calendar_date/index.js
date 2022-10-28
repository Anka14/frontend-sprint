//Using HTML, CSS (and javascript, of course) reproduce the following picture. This should be centered both horizontaly and vertically in your page.

 
const calendar_date = document.querySelector ('.calendar_date')
const dayTitle = document.querySelector('.day_week')
const date = document.querySelector('.date')
const month = document.querySelector('.month')
const year = document.querySelector('.year')

const p_text_day = document.createElement('p')
dayTitle.appendChild(p_text_day);

const p_text_date = document.createElement('p')
date.appendChild(p_text_date);

const p_month_text = document.createElement('p')
month.appendChild(p_month_text);

const p_year_text = document.createElement('p');
year.appendChild(p_year_text);

const hour_p = document.querySelector('.hour_p ');
const minut_p = document.querySelector('.minut_p');
const sec_p = document.querySelector ('.sec_p')



const d = new Date ();

function formatDate (d){
  
const day = d.getDay();
const day_week = ['sun','mon','tues','wed','thus','frid','saturd']
p_text_day.textContent = day_week[day];

const date = d.getDate().toString().padStart(2,'0');
p_text_date.textContent = date;

const monthTitle = ['jan', 'fabr', 'mar','april','may','jun','jul', 'aug', 'sept','oct','nov','dec']
const month = d.getMonth();
p_month_text.textContent = monthTitle[month]

const year = d.getFullYear();
p_year_text.textContent = year;

}

formatDate(d)


let is24Hour = true;
  //let session = 'AM';
  let hour12;


  
setInterval (function (){

  
const clock = new Date();
const h = clock.getHours().toString().padStart(2,'0');
hour_p.textContent = h + ':';

const min = clock.getMinutes().toString().padStart(2,'0');
minut_p.textContent = min + ':';

const sec = clock.getSeconds().toString().padStart(2,'0');
sec_p.textContent = sec;

if(is24Hour) {
  hour_p.textContent = h + ':';
  minut_p.textContent = min + ':';
  sec_p.textContent = sec;


} else {
  let suffix = h >= 12 ? "PM" : "AM",
           hours12 = h % 12

           hour_p.textContent = hours12 + ':';
  minut_p.textContent = min + ':';
  sec_p.textContent = sec + '' + suffix;

}



}, 1000)

let changeFormat = function() {
  is24Hour = !is24Hour;
};
changeFormat()


const timer = document.querySelector('.time');
timer.addEventListener('click', changeFormat);









  

