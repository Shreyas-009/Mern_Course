const color = document.querySelectorAll('.box');
const myName = document.getElementById('name');
const greet = document.getElementById('greet');
const form = document.querySelector('form');
let setName = null;

form.addEventListener('submit',(e) => {
  e.preventDefault()
  greet.innerHTML = setName;
  myName.value = "";
});

myName.addEventListener('change', e => {
  setName = e.target.value;
})

color.forEach(box => {
  let flag = false;
  box.addEventListener('click', (e) => {
    box.style.backgroundColor =  flag? 'white' : e.target.innerHTML;
    box.style.color = flag? 'black' : 'white';
    box.style.textShadow = flag? 'initial' : '0px 0px 3px black';
    flag = !flag;
  });
});