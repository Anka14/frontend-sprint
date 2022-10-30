//Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. 
//When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.

const button = document.querySelector('.btn');
const input = document.querySelector('input');
let value = input.value;

//GET
/*fetch ('https://jsonplaceholder.typicode.com/users')
.then(res => {
  if (res.ok) {
    console.log('get request successful')
  }else {
    console.log ('get request unsuccesful')
  } return res
})
.then (resp => resp.json())
.then (data => console.log(data))
.catch(error => console.log (error))*/

//POST

button.addEventListener ('click', function(){

fetch('https://jsonplaceholder.typicode.com/users',{
  method:'POST',
  headers:{
    'Content-type':'application/json'
  },
  body: JSON.stringify({
    'name': input.value
  }
    
  )
})
.then(res => {
  if (res.ok) {
    console.log('post request successful')
  }else {
    console.log ('post request unsuccesful')
  } return res
})
.then(res => res.json())
.then (data => display(data))
.catch(error => console.log (error))

})

function display(data){
  const output = document.createElement ('div');
  document.body.append(output);
  output.innerHTML = input.value;

}

//Also add a <select> field with a few countries in it, to narrow down the search to a specific country. You'll have to look in agify documentation to know more about that.
