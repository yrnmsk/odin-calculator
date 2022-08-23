const Screen = document.querySelector('#screen');
// const Buttons = document.querySelector('#buttons');
// const clearBtns = Buttons.querySelector('#clear-btns');
// const genBtns = Buttons.querySelector('#gen-btns');

const buttons = document.querySelectorAll('div.button');

buttons.forEach(button => button.addEventListener('click', event => {
  Screen.textContent += event.target.textContent;
}));