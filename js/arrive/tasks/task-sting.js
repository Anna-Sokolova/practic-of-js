/* =================1. Преобразовать строку в массив слов

Напишите функцию stringToarray(str), которая преобразует строку в массив слов. */

// const str = 'Каждый охотник желает знать';

// function stringToarray(str) {
//     return str.split(' ');
// };

// const arr = stringToarray(str);

// console.log(arr); // ['Каждый', 'охотник', 'желает', 'знать']



/* =====================2. Удаление указанного количества символов из строки

Напишите функцию delete_characters(str, length), 
которая возвращает подстроку, состоящую из указанного количества символов. */

// const str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {

//     return str.slice(0, length);

// };

// console.log(delete_characters(str, 7)); // Каждый


/* =======================3. Вставить тире между словами строки

Напишите функцию insert_dash(str), 
которая принимает строку str в качестве аргумента и вставляет тире(-) между словами.
При этом все символы строки необходимо перевести в верхний регистр. */

// const str = "HTML JavaScript PHP";

// function insert_dash(str) {

//     const arr = str.split(' ');
//     const newArr = [];

//     for (const item of arr) {
//         const itemToUpperCase = item.toUpperCase();
//         // console.log(itemToUpperCase);
//         newArr.push(itemToUpperCase);
//     }
//     // console.log(newArr);
//     return str = newArr.join('-');
// }

// console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
 

// короткий метод решения

// const str = "HTML JavaScript PHP";

// function insert_dash(str) {

//     return str.split(' ').join('-').toUpperCase();
// }

// console.log(insert_dash(str));




// ============================================

// Что выведет консоль ????

// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());   //banana



// ========================== Задача 
/* Сделать первый символ заглавным

Напишите функцию ucFirst(str), 
возвращающую строку str с заглавным первым символом. 
Добавить проверку на пустую строку.
Например: */

// let str = 'катюша';
    
// function ucFirst(str) {
//     if (!str) {
//         return 'Неверный ввод данных';
//     }

//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }

// console.log(ucFirst(str)); //Катюша


/* ===========================Задача 4. Сделать первую букву строки заглавной
Напишите функцию, которая принимает строку в качестве аргумента и
преобразует регистр первого символа строки из нижнего регистра в верхний. */


// const str = "string not starting with capital";  
 
// function cursive_letter(str) {

//     return str = str[0].toUpperCase() + str.slice(1).toLowerCase();

// }

// console.log(cursive_letter(str)); //String not starting with capital


/* ========================= Задача 5. Первая буква каждого слова заглавная
Напишите функцию capitalize(str),
которая возвращает строку, в которой каждое слово начинается с заглавной буквы. */

// const str = "каждый охотник желает знать";  
 
// function capitalize(str) {

//     const arr = str.split(' ');
//     const newArr = [];

//     for (let item of arr) {
//         item = item[0].toUpperCase() + item.slice(1);
       
//         newArr.push(item);
//     }

//     return str = newArr.join(' ');

// }

// console.log(capitalize(str)); // "Каждый Охотник Желает Знать"

/* ======================== Задача 6. Смена регистра символов строки

Напишите функцию change_register(str), которая принимает 
в качестве аргумента строку и заменяет регистр каждого символа на противоположный.
Например, вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк»
*/


// const str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";   
 
// function change_register(str) {

//    let arrFromStr = str.split('');
//     // console.log(arrFromStr);
//     for (let i = 0; i < arrFromStr.length; i += 1) {
//         // console.log(arrFromStr[i]);
//         if (arrFromStr[i] === arrFromStr[i].toUpperCase()) {
//             arrFromStr[i] = arrFromStr[i].toLowerCase();
//         } else if (arrFromStr[i] === arrFromStr[i].toLowerCase()) {
//             arrFromStr[i] = arrFromStr[i].toUpperCase();
//         }
//     }
// return arrFromStr.join('')
// }

// console.log(change_register(str)); // "кАжДыЙ оХоТнИк ЖеЛаЕт ЗнАтЬ"


/* Задача)
Реализуйте функцию, которая принимает на вход номер кредитки (состоящей из 16 цифр) и возвращает его скрытую версию, которая может использоваться на сайте для отображения. Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581. Другими словами, функция заменяет первые 12 символов, на четыре звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

Проверка в консоле
// Кредитка передается внутрь как строка
getHiddenCard('1234567812345678', 2); // '**5678'
getHiddenCard('1234567812345678', 3); // '***5678'
getHiddenCard('1234567812345678'); // '****5678'
getHiddenCard('2034399002121100', 1); // '*1100'

Полезные методы:

String.prototype.slice() – извлекает часть строки или как говорят “подстроку”. Первым параметром принимает индекс элемента, с которого надо начинать извлечение, вторым – индекс элемента, до которого извлекаются символы. По умолчанию, извлекается все до конца строки.

  // с третьего индекса до конца строки
  'java script'.slice(3); // 'a script'

  // с первого индекса по четвертый
  'java script'.slice(1, 4); // 'ava'

  // можно использовать отрицательные индексы
  // тогда отсчет берется с конца строки
  'java script'.slice(-2); // 'pt'
String.prototype.padStart() – Дополняет строку “заполнителем” слева, до тех пор пока длина строки не станет равной указанной. Первым параметром функция принимает желаемую длину строки, вторым – заполнитель.

  '5'.padStart(2, '*'); // '*5'
  '10'.padStart(4, '+'); // '++10'
*/

// function getHiddenCard (cardNumber, starsLength = 4) {
// return cardNumber.slice(-4).padStart(starsLength + 4, '*');
// }


// console.log(getHiddenCard('1234567812345678', 2)); // '**5678'
// console.log(getHiddenCard('1234567812345678', 3)); // '***5678'
// console.log(getHiddenCard('1234567812345678')); // '****5678'
// console.log(getHiddenCard('2034399002121100', 1)); // '*1100'

// function padIt(str,n){
//   //coding here
//   var star = '*';
//   do {
//     str = str + star;
    
//     // n+=1;
//   } while (n <= n)
//   return str;
// }


//   console.log((padIt("a",1)));     //"*a");
//     console.log((padIt("a",2)));     //"*a*");
//     console.log((padIt("a",3)));     //"**a*");
//     console.log((padIt("a",4)));     //"**a**");
//     console.log((padIt("a",5)));     //"***a**");


const numbers = [1, 2, 3];

const doubledNumbers = numbers.map(num => num * 20);
console.log(doubledNumbers);
console.log(numbers);






