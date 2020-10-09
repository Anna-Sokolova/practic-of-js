// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients);

// const newClients = [];

// for (const client of clients) {
//   let firstLetter = client[0].toLowerCase() + client.slice(1).toUpperCase();
//   console.log(firstLetter);
//   newClients = clients.slice(firstLetter);
// }

// console.log(newClients);

// практика сплит и джойн
//
// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients);
// const strClients = clients.join(' ').toLowerCase();
// console.log(strClients);
// const arrNew = strClients.split(' ');
// console.log(arrNew);

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const findClient = 'Mango';
// let message = 'Такого клиента мы не нашли';

// for (const client of clients) {
//   //   console.log(client);
//   if (clients.includes(findClient)) {
//     message = 'Клиент есть в базе данных';
//     break;
//   }
// }
// console.log(message);

// Задача

// const userInput = [5, 10, 20];
// let total = 0;
// let message = 'Ваша общая сумма';

// userInput.push(10, 15, 20);
// console.log(userInput);

// for (const input of userInput) {
//   console.log(input);
//   total += input;
// }

// console.log(`${message} составила ${total} баллов`);

//TASK 1 HW

// const getItemsString = function (array) {
//   'use strict';

//   let result = '';

//   for (let i = 0; i < array.length; i += 1) {
//     const itemArray = `${i + 1} - ${array[i]}\n`;
//     result += itemArray;
//   }
//   return result;
// };
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

// function findLongestWord(string = '') {
//   // Write code under this line
//   const arrayString = string.split(' ');
//   console.log(arrayString);

//   for (let i = 1; i < arrayString.length; i += 1) {
//     console.log(arrayString[i]);
//     if (arrayString[0].length > arrayString[i].length) {
//     }
//   }
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// function checkForSpam(message) {
//   'use strict';
//   // Write code under this line
//   const arrayMessage =
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale')
//       ? true
//       : false;
//   return arrayMessage;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// Найти друга среди списка друзей
// Функция принимает массив и возвращает соощение о результате поиска
//
// const friends = ['Jon', 'Anna', 'Rich', 'Jenia', 'Dima'];
// const myFriend = 'REw';
// let message = ' ';

// const findFriend = function (items, name) {
//   for (const item of items) {
//     if (friends.includes(name)) {
//       message = 'Такой есть дружок!';
//       return message;
//     } else {
//       return (message = 'Не нашли такого');
//     }
//   }
// };

// console.log(findFriend(friends, 'Anna'));
// console.log(findFriend(friends, myFriend));

// -------------------------------------ЗАДАЧА -----------------------------------
// Делаем слаг в юрл из названий статей
// есть список статей в виде строк и нужно с помощью функции сделать эти строки массивом,
// чтоб сделать из названий - слаги и потом снова собрать их в массив
//
// Список станей:
//
// Изучение HTML руководства и уроки
// Изучение CSS
// Доставка аудио и видео контента
// Обработка аудио и видео
// Руководство разработчика событий

// const slugify = function (string) {
//   const words = string.toLowerCase().split(' ');
//   const slug = words.join('-');

//   return slug;
// };

// // const slug1 = slugify('Изучение HTML руководства и уроки');
// // const slug2 = slugify('Изучение CSS');
// // Проверяем код через консол лог
// // console.log(slug1);
// // console.log(slug2);

// // теперь создаем массив для списка статей

// const articles = [
//   'Изучение HTML руководства и уроки',
//   'Изучение CSS',
//   'Доставка аудио и видео контента',
//   'Обработка аудио и видео',
//   'Руководство разработчика событий',
// ];

// // создаем пустой маасив, для того, чтоб собрать все слаги в новый массив слагов
// const slugArr = [];

// // с помощью цикла перебираем массив со статьями, а с помощью вызова функции для каждого слага в массиве названий статей,
// // мы будем превращать название в слаг

// for (const article of articles) {
//   const slug = slugify(article);

//   // методом пуш мы добавляем новые элементы (слаги) в новый массив
//   slugArr.push(slug);
// }

// console.log(slugArr); // выходим из цикла и проверяем результат - т.е. массив слагов

// ----------------------ЗАДАЧА-------------------------------------
//  поиск самого длиного слова в строке

function findLongestWord(string = '') {
  // Write code under this line
  const newArr = string.split(' ');
  let longestWord = newArr[0];

  for (let i = 1; i < newArr.length; i += 1) {
    if (longestWord.length < newArr[i].length) {
      longestWord = newArr[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
