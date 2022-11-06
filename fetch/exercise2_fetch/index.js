//Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. 
//When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.
//Also add a <select> field with a few countries in it, to narrow down the search to a specific country. You'll have to look in agify documentation to know more about that.

const button = document.querySelector('.btn');
const input = document.querySelector('input');
const span = document.querySelector('span');
const input2 = document.querySelector('.input2')
const select = document.createElement('select')
const option1 = document.createElement ('option')
option1.innerHTML = 'BE'
const option2 = document.createElement ('option')
option2.innerHTML ='US'
const option3 = document.createElement ('option')
option3.innerHTML = 'UA'


document.body.appendChild(select)
select.appendChild(option1)
select.appendChild(option2)
select.appendChild(option3)


button.addEventListener('click', () =>{
  fetch ('https://api.agify.io/?name='+ input.value)

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

    
  })
  .catch(error => console.log (error))
})



select.addEventListener('click', () =>{
  fetch(`https://api.agify.io/?name=Tymur&country_id= ${select.value}`)
  
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
  })
  
})


