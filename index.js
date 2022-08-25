const Buttons = document.getElementById('buttons');

const [ clearBtns, genBtns ] = [ Buttons.querySelector('#clear-btns'), Buttons.querySelector('#gen-btns') ];

const clearBtnsData = [
  { 'id': 'clearAll-btn', 'icon': 'X', 'text': 'Clear All' },
  { 'id': 'clear-btn', 'icon': 'X', 'text': 'Clear' },
  { 'id': 'erase-btn', 'icon': '⬅', 'text': 'Erase' }
];
const generateClearBtns = (id, icon, text) => {
  const btn = document.createElement('div', );
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
  [ '(', ')' ],
  [ '×', '÷' ],
  [ '+', '-' ],
  [ 'Ans', '=' ]
];
operatorBtnsData.forEach(data => OperatorBtns.appendChild(generateGenBtns(data)));