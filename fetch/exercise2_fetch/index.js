//Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. 
//When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.

const button = document.querySelector('.btn');
const input = document.querySelector('input');
//const button2 = document.createElement('button')
////button2.textContent = 'CITY'
//button.after(button2);
const select = document.createElement ('select');
button.after(select);
const option1 = document.createElement ('option');
option1.setAttribute('value','South Christy');
option1.textContent = 'South Christy'
select.append(option1)
const option2 = document.createElement('option');
option2.setAttribute('value','Lebsackbury');
option2.textContent = 'Lebsackbury'
select.append(option2);



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
  let url = 'https://jsonplaceholder.typicode.com/users';
  let newObj = {
    title: 'new name',
    username: input.value,
  };

fetch(url,{
  method:'POST',
  body: JSON.stringify(newObj),
  headers:{
    'Content-type':'application/json'
  },
  
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
  console.log(data)
  const output = document.createElement ('div');
  document.body.append(output);
  output.innerHTML = input.value;

}

select.addEventListener('change', function (event){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => {
    if (resp.ok) {
      console.log ('GET IS SUCCESSFUL')
    } else {
      console.log ('GET is not successful')
    }
    return resp
  })

  .then(resp => resp.json())
  .then (json => {

//console.log (cities)
if(option1){
  if (event.target.value === 'South Christy'){
    json.forEach(element => {
    if(element.address.city  === 'South Christy') {
    
    const output1 = document.createElement('div')
    output1.textContent = element.address.city;
    
    select.after(output1);

/*console.log ('yes')*/
  }
  
  
});
  }
}




  })
})

