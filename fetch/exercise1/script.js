
/*Create a new directory (= folder), containing 3 files:
index.html
script.js
becode.json
Create a <button>, when clicked becode rules are loaded with a fetch('becode.json'), then dynamically generate a <ul> list containing each rule in a <li>.*/

const btn = document.createElement('button');
btn.textContent = 'download the rules';
document.body.appendChild(btn);



btn.addEventListener ('click', function(){
  
  fetch('./bcode.json')
  .then(response => response.json())
  
  .then(json=>renderList(json))
  
});

function renderList(list){
  console.log(list)
list.forEach(element => {
  const ul = document.createElement('ul');
  document.body.prepend(ul)
  const li1= document.createElement('li');
  li1.innerHTML = element;
  console.log(li1.textContent)
  ul.appendChild(li1);

  const li2= document.createElement('li');
  li2.innerHTML = element;
  li1.appendChild(li2);

  const li3= document.createElement('li');
  li3.innerHTML = element;
  li1.appendChild(li2);
});
}