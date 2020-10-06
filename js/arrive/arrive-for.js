//  ***********Итерация по массиву
// Переберем массив клиентов и выведем их имена.

const clients = [
  'Mango',
  'Ajax',
  'Poly',
  'Sona',
  'Nika',
  'Kat',
  'Vika',
  'Pola',
];

for (let i = 0; i < clients.length; i += 1) {
  console.log(`Logging clients: ${clients[i]} - ${i + 1}`);
}

// Выыедет в консоль список клиентов с нумерацией по порядку

// Logging clients: Mango - 1
// Logging clients: Ajax - 2
// Logging clients: Poly - 3
// Logging clients: Sona - 4
// Logging clients: Nika - 5
// Logging clients: Kat - 6
// Logging clients: Vika - 7
// Logging clients: Pola - 8

// ${clients[i]} или ${значение элемента} - это имя переменной в массиве - Mango, Ajax....
// ${i + 1} или ${номер элемента} это счетчик(нумерация по списку с еденицы-1) - 1, - 2....

// ************    С помощью цикла массив можно заполнить данными.

const numbers = [];

for (let i = 0; i < 5; i += 1) {
  numbers.push(`label-${i}`); // добавляет новые элементы в массив
}

console.log('numbers: ', numbers);

// Выведет в консоль новый массив
// numbers:  (5) ["label-0", "label-1", "label-2", "label-3", "label-4"]

// *****************   Цикл for...of   ************

// Итерация по массиву

const friends = ['Катя', 'Вася', 'Петя'];

for (const friend of friends) {
  console.log(friend);
}
// выведет в консоль список друзей
// Катя
// Вася
// Петя

//
//
// Итерация по строке

const string = 'лапша';

for (const character of string) {
  console.log(character);
}
// выведет в консоль буквы по порядку
// л
// а
// п
// ш
// а
