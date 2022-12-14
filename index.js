// ! --- Begin Section: Dynamic Render ---

const Buttons = document.getElementById('buttons');

const [ clearBtns, genBtns ] = [ Buttons.querySelector('#clear-btns'), Buttons.querySelector('#gen-btns') ];

const clearBtnsData = [
  { 'id': 'clearAll-btn', 'icon': 'X', 'text': 'Clear All' },
  { 'id': 'clear-btn', 'icon': 'X', 'text': 'Clear' },
  { 'id': 'erase-btn', 'icon': '⬅', 'text': 'Erase' }
];
const generateClearBtns = (id, icon, text) => {
  const btn = document.createElement('div');
  btn.id = id;
  btn.className = 'button';

  const ico = document.createElement('div');
  ico.className = 'btn-icon';
  ico.textContent = icon;

  const txt = document.createElement('div');
  txt.className = 'btn-text';
  txt.textContent = text;

  btn.append(ico, txt);
  return btn;
}
clearBtnsData.forEach(data => clearBtns.appendChild(generateClearBtns(data.id, data.icon, data.text)));

const [ NumberBtns, OperatorBtns ] = [ genBtns.querySelector('#number-btns'), genBtns.querySelector('#operator-btns') ];

const generateGenBtns = array => {
  const row = document.createElement('div');
  row.className = 'row';
  array.forEach(value => {
    const btn = document.createElement('div');
    btn.classList.add('button', 'icon');
    btn.textContent = value;
    row.appendChild(btn);
  });
  return row;
};

const numberBtnsData = [
  [ 7, 8, 9 ],
  [ 4, 5, 6 ],
  [ 1, 2, 3 ],
  [ '.', 0, '00' ]
];
numberBtnsData.forEach(data => NumberBtns.appendChild(generateGenBtns(data)));

const operatorBtnsData = [
  [ '+', '-' ],
  [ '×', '÷' ],
  [ 'Ans', '=' ]
];
operatorBtnsData.forEach(data => OperatorBtns.appendChild(generateGenBtns(data)));

// ! --- End Section: Dynamic Render ---

// ! --- Begin Section: Change Display upon Click Events ---

const Screen = document.getElementById('screen');
const [ Display, Result ] = [ Screen.querySelector('#display'), Screen.querySelector('#result') ];

const allClearBtns = Array.from(clearBtns.querySelectorAll('.button'));
const limitClearButtons = event => {
  switch (event.target.id) {
    case 'clearAll-btn':
      // console.log('clear all');
      // Result.textContent = '0.00000';
      // break;
    case 'clear-btn':
      // console.log('clear');
      Display.textContent = 0;
      break;
    case 'erase-btn':
      if (Display.textContent.endsWith('Ans ')) Display.textContent = Display.textContent.replace(/([\s]?Ans\s)$/, '');
      if (Display.textContent.length <= 1) Display.textContent = 0;
      else if (Display.textContent.endsWith(' ')) Display.textContent = Display.textContent.replace(/(\s(.)\s)$/, '');
      else Display.textContent = Display.textContent.replace(/.$/, '');
      break;
  }
};
allClearBtns.forEach(button => button.addEventListener('click', limitClearButtons));

const allNumberBtns = Array.from(NumberBtns.querySelectorAll('.button'));
const limitNumberBtns = event => {
  switch (event.target.textContent) {
    case '00' || '0':
      if (Display.textContent.length != 1 || Display.textContent != 0) Display.textContent += event.target.textContent;
      break;
    case '.':
      if (!Display.textContent.includes('.')) Display.textContent += event.target.textContent;
      break;
    default:
      if (Display.textContent.length == 1) {
        if (Display.textContent == 0) Display.textContent = event.target.textContent;
        else Display.textContent += event.target.textContent;
      } else Display.textContent += event.target.textContent;
      break;
  }
};
allNumberBtns.forEach(button => button.addEventListener('click', limitNumberBtns));

const allOperatorBtns = Array.from(OperatorBtns.querySelectorAll('.button'));
const limitOperatorBtns = event => {
  switch (event.target.textContent) {
    case '=':
      // operate()
      break;
    case 'Ans':
      if (Display.textContent.endsWith('Ans ')) break;
      if (Display.textContent == '0') Display.textContent = 'Ans ';
      else if (Display.textContent.endsWith(' ')) Display.textContent += 'Ans ';
      break;
    default:
      if (Display.textContent.endsWith('Ans ')) Display.textContent += `${event.target.textContent} `;
      else if (Display.textContent.endsWith(' ')) Display.textContent = Display.textContent.replace(/\s[\W\S\D]\s$/, ` ${event.target.textContent} `);
      else Display.textContent += ` ${event.target.textContent} `;
      break;
  }
};
allOperatorBtns.forEach(button => button.addEventListener('click', limitOperatorBtns));

// ! --- End Section: Change Display upon Click Events ---
