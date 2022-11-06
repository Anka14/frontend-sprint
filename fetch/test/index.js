//const button = document.querySelector('.btn');
const input = document.querySelector('input');

const span = document.querySelector('span');
//const input2 = document.querySelector('.input2')
const select = document.createElement('select')
const option0 = document.createElement('option')
option0.innerHTML ='select item'
const option1 = document.createElement ('option')
option1.innerHTML = 'BE'
const option2 = document.createElement ('option')
option2.innerHTML ='US'
const option3 = document.createElement ('option')
option3.innerHTML = 'UA'


document.body.appendChild(select)
select.appendChild(option0)
select.appendChild(option1)
select.appendChild(option2)
select.appendChild(option3)



 /* fetch ('https://api.agify.io/?name='+ input.value)

  .then(res => {
    if (res.ok) {
      console.log('get request successful')
    }else {
      console.log ('get request unsuccesful')
    } return res
  })

  .then(resp => resp.json())
  .then (data => {
    console.log (data)
    let result = JSON.stringify(data)
    localStorage.setItem(input.value, result)
    let output = document.createElement('div')
    span.appendChild(output)
    output.textContent = result
    input.value =''
requestCity(select.values)
    
  })
  .catch(error => console.log (error))*/



function requestCity(name, country){
select.addEventListener('change', (event) =>{
  fetch(`https://api.agify.io/?name=${input.value}&country_id= ${event.target.value}`)
  
  .then(res => {
    if (res.ok) {
      console.log('get request successful')
    }else {
      console.log ('get request unsuccesful')
    } return res
  })

  .then(resp => resp.json())
  .then (data =>{
console.log (data)
let result = JSON.stringify(data)
    let output = document.createElement('div')
    span.appendChild(output)
    output.textContent = result
    input.value =''
    
localStorage.setItem(input.value, result)
  })
  
})

}

requestCity()



