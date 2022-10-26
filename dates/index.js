//Find the timezones of :

//Anchorage (USA)
//Reykjavik (Iceland)
//Saint-Petersburg (Russia)
//And display the date and time of these cities along with the time and date of Brussels.

/*function getTimezoneOffset(timeZone) {
  const now = new Date();
  //console.log(now)
  const tzString = now.toLocaleString('en-US', { timeZone });
  //console.log(tzString)
  const localString = now.toLocaleString('en-US');
  const diff = (Date.parse(localString) - Date.parse(tzString)) / 3600000;
  const offset = diff + now.getTimezoneOffset() / 60;
  
  return -offset;
}


const offset = getTimezoneOffset('America/Anchorage');
 offset = getTimezoneOffset ('')

console.log(offset); */

function changeTimeZone(date, timeZone) {
  if (typeof date === 'string') {
    return new Date(
      new Date(date).toLocaleString('en-US', {
        timeZone,
      }),
    );
  }

  return new Date(
    date.toLocaleString('en-US', {
      timeZone,
    }),
  );
}

const laDate = changeTimeZone(new Date(), 'America/Anchorage');
const laDate1 = changeTimeZone(new Date(), 'Atlantic/Reykjavik');
console.log(laDate); 
console.log(laDate1);

let timeDateBrussel = new Date()
console.log(timeDateBrussel)

//Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

//Write a function to find how many days have passed since any point in time (after 1970).

const birthDay = new Date ('02/14/1981')
let currentDay = new Date()
 const days = (birthDay, currentDay) => {
  let difference = currentDay.getTime() - birthDay.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
 }
 console.log(days(birthDay,currentDay))

 /*const date1 = new Date('1981/02/14 00:00:00');
const date2 = new Date(); //less than 1
const start = Math.floor(date1.getTime() / (3600 * 24 * 1000)); //days as integer from..
const end = Math.floor(date2.getTime() / (3600 * 24 * 1000)); //days as integer from..
const daysDiff = end - start; // exact dates
console.log(daysDiff);*/

