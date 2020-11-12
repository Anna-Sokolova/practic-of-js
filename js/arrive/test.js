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

// const getItemsString = function (etters) {
//   'use strict';

//   let result = '';

//   for (let i = 0; i < etters.length; i += 1) {
//     const itemArray = `${i + 1} - ${etters[i]}\n`;
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

// function findLongestWord(string = '') {
//   // Write code under this line
//   const newArr = string.split(' ');
//   let longestWord = newArr[0];

//   for (let i = 1; i < newArr.length; i += 1) {
//     if (longestWord.length < newArr[i].length) {
//       longestWord = newArr[i];
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));


// function reverseWords(str) {
  
  

// }

// console.log(reverseWords("This is an example!"));


/*ЗАДАЧА 

Удаление указанного количества символов из строки
Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов. */

// const str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {

// return str.slice(0, length);

// };

// console.log(delete_characters(str, 7)); // Каждый


/* ЗАДАЧА 
Нужно создать функцию которая будет принимать любую текстовую строку и 
возвращать эту же строку, только в перевернутом виде. 
Тоесть передаем 'Привет мир!' получаем '!рим тевирП'. */


//  function reverseStr(str) {

//    return str.split("").reverse().join('');

// }

// console.log(reverseStr("Привет Мир!")); 
 

 /* чтоб перевернуть ещё раз - повторяем алгоритм реверса ещё раз, но с разделителем пробел*/
 
// function reverseStr(str) {

//    return str.split("").reverse().join('').split(' ').reverse().join(' ');

// }
//  console.log(reverseStr("Привет Мир!")); 
// console.log(reverseStr('The quick brown fox jumps over the lazy dog.'));
// // //'ehT kciuq nworb xof spmuj revo eht yzal .god'

// console.log(reverseStr('apple')); //'elppa'
// console.log(reverseStr('a b c d')); //'a b c d'
// console.log(reverseStr('double  spaced  words')); //'elbuod  decaps  sdrow'




/* Вера, через точку - для объекта)
()()()() - если функция ретернит функцию)
От Vera всем:  09:27 PM
Лариса,спасибо, это уже пришло), осталось понять что вот это()()()()()())))))
От dm всем:  09:27 PM
Лариса, а откуда вы все знаете?))
От Vera всем:  09:27 PM
Лариса, уже 3 раза прочитала, а не халявила как я)))
От Larisa Antsifrova всем:  09:27 PM
()()() - каждая пара вызывает функцию, и каждая пара ретернит функцию) 
Получается каждая пара вызывает функцию, которую ретернула предыдущая пара)*/

const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['order-1', 'order-2', 'order-3'],
  changeDiscount(value) {
    this.discount = value;
  },
  showOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost;
    this.orders.push(order);
  },
};

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000
console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']


// CallBack function ===========

// const greet = function (name) {
//   console.log(`Hello ${name}`);
// }

// const greetWithName = function (callback) {
//   const name = 'Mango';

//   greet(name);
// }

// greetWithName(greet);




// ========


// const printMessage = function(message) {
//   console.log(message);
// };

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);



//  ====================


/* const printValue = function(value) {
  console.log(value);
};

const prettyPrint = function(value) {
  console.log('Logging value: ', value);
};

const repeat = function(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};

// Передаем printValue как callback-функцию
repeat(3, printValue);
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
repeat(5, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2
*/


const repeat = function(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};

const labels = [];

repeat(5, value => {
  labels.push(`Label ${value + 1}`);
});

console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]



// Фильтрация массива========================

// const filter = function(array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

const makeDish = function (sheftName, dish) {
  console.log(`${sheftName} готовит ${dish}`);
};

makeDish('Mango', 'salad');
makeDish('Mango', 'борщ');
makeDish('Катя', 'окрошку');
makeDish('Катя', 'кофе');

const makeNameSheff = function (name) {
  console.log(name);

  return function (dish) {
    console.log(`${name} готовит ${dish}`);
  }
};

const mango = makeNameSheff('Mango');
const kate = makeNameSheff('Катя');

mango('котлеты');
kate('оливье');



/* Это довольно просто. Ваша цель - создать функцию, 
которая удаляет первый и последний символы строки. 
Вам дается один параметр - исходная строка. 
Вам не нужно беспокоиться о строках, содержащих менее двух символов. */

// function removeChar(str) {

//   let deleteSymbolStr = str.slice(1, -1);

//   return deleteSymbolStr;
// };

// console.log(removeChar('eloquent')); //loquen
// console.log(removeChar('country')); //ountr



// ========================ЗАДАЧА ДОМАШКА=============================================

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//     // Write code under this line
//     if(cb(element, index, array)) {
//     numbers.push(element);
//     }
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5,1,2,5];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // [2, 4, 2]

// console.log(filterArray([1, 2], isUniq));



const str = 'Каждый охотник желает знать';
function delete_characters(str, length) {

return str.slice(0, length)

};

console.log(delete_characters(str, 7)); // Каждый