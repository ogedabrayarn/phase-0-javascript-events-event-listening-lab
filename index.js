// const input = document.getElementById('button');
// input.addEventListener('click', () => alert('I was clicked!'));
//When we want to reuse the callback function, it is good practice to create a separate function
// const input = document.getElementById('button');
// 
// function clickAlert(){
//   alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert);

// let input = document.querySelector('#button');
// input.addEventListener('click', () => alert('clicked'));

let input = document.getElementById('button');

function addingEventListener() {
  alert('I was clicked!')
  input.addEventListener('click', addingEventListener);
}