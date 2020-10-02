// Собираем ввод данных от пользователя и что-то с ним делаем ))

// используем метод .push() для добавления параметров в массив и
// цикл for для перебирания этого массива и вывода общего значения

const valueInputRef = document.querySelector('.js-value');
const addValueBtn = document.querySelector('.js-add-value');
const calcBtn = document.querySelector('.js-calculate');
const numbers = [];
let total = 0;

addValueBtn.addEventListener('click', function () {
  const value = Number(valueInputRef.value);
  numbers.push(value);

  valueInputRef.value = '';

  console.log(numbers);
});

calcBtn.addEventListener('click', function () {
  for (const number of numbers) {
    console.log(number);
    total += number;
  }

  console.log('Total', total);
});
