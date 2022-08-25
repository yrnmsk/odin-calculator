const Display = document.querySelector('#display');
const Result = document.querySelector('#result');

const clearBtns = document.querySelector('#clear-btns');
const genBtns = document.querySelector('#gen-btns');

Array
  .from(clearBtns.children)
  .forEach(button => button.addEventListener('click', () => {
    switch (button.id) {
      case 'clearAll-btn':
        // Display.textContent = '0';
        // Result.textContent = '= 0.00000';
        console.log('clear all');
        break;
      case 'clear-btn':
        console.log('clear');
        break;
      case 'erase-btn':
        console.log('erase');
        break;
    }
  }));