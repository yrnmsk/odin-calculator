const buttons = document.querySelector('#buttons');

const numbers = document.createElement('div');
let i;
let j;
let k = 10;
numbers.id = 'numbers';
for (i = 1; i <= 4; ++i) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (j = 1; j <= 3; ++j) {
    const button = document.createElement('div');
    button.classList.add('button');
    switch (--k) {
      case -2:
        button.textContent = 0;
        break;
      case -1:
        button.textContent = '00';
        break;
      case 0:
        button.textContent = '.';
        break;
      default:
        button.textContent = k;
        break;
    }
    row.appendChild(button);
  }
  row.append(...Array.from(row.childNodes).reverse());
  numbers.appendChild(row);
}
buttons.appendChild(numbers);
