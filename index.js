const numbers = document.querySelector('#numbers');

// for (let i = 0; i < 10; ++i) {
//   const number = document.createElement('div');
//   number.classList.add('number');
//   number.textContent = i;
//   numbers.appendChild(number);
// }

let i, j, k = 0;
for (i = 1; i <= 4; ++i) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (j = 1; j <= 3; ++j) {
    const number = document.createElement('div');
    number.classList.add('number');
    number.textContent = ++k != 10 ? k : 0;
    row.appendChild(number);
    if (k == 10) break;
  }
  numbers.appendChild(row);
}
