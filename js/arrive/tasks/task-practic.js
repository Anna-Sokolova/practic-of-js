// git add .
// git commit -m "commit_name"
// git push

// == task-1 == //
// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару)
// Ця ф - я має повернути ціну замовлення
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 }
// const orderA = { apple: 5, cheese: 1, bread: 3 }
// const orderB = { orange: 10, pork: 2, bread: 1 }

// const toGetPrice = function () { }
// const toGetPrice = () => { }
// function toGetPrice() { }

// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 }
// const orderA = { apple: 5, cheese: 1, bread: 3 }
// const orderB = { orange: 10, pork: 2, bread: 1 }

// const toGetPrice = (a, b) => {
//     const keysA = Object.keys(a);
//     console.log(keysA);
//     const keysB = Object.keys(b);
//     console.log(keysB);
//     let total = 0;
//     for (let key of keysB) {
//         console.log(keysA);
//         console.log(b[key]);
//         if (keysA.includes(key)) {
//             total += a[key] * b[key];
//         }
//     }
//     return total;
//  }

// console.log(toGetPrice(productsPrice, orderA));
// console.log(toGetPrice(productsPrice, orderB));

// == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні.
// Якщо обєкт пустий то повернути true інакше false
// isObjectEmpty({}) // true
// isObjectEmpty({name: 'user, age: {21}}) // false

// const isObjectEmpty = (obj) => {
//     return Object.keys(obj).length === 0 ? true : false;
// }

// console.log(isObjectEmpty({})) // true
// console.log(isObjectEmpty({ name: 'user', age: 21 })) //false

// Practice. Classes.
// Counter

// const decBtn = document.getElementById('decrement');
// const incBtn = document.getElementById('increment');
// const count = document.getElementById('count');

// class Counter {
//     constructor(startCount, countStep, place) {
//         this.startCount = startCount;
//         this.countStep = countStep;
//         this.minCount = startCount;
//         place.textContent = this.startCount;
//     }

//     toIncrement(place) {
//         this.startCount += this.countStep;
//         this.toSetStartCount(place);
//     }

//     toDecrement(place) {
//         if (this.startCount <= this.minCount) return;
//         this.startCount -= this.countStep;
//         this.toSetStartCount(place);
//     }

//     toSetStartCount(place) {
//         place.textContent = this.startCount;
//     }
// }

// const myCounter = new Counter(5, 1, count);
// console.log(myCounter);

// incBtn.addEventListener('click', () => {
//     myCounter.toIncrement(count)
// });

// decBtn.addEventListener('click', () => {
//     myCounter.toDecrement(count)
// })

// // Calculate module 5
// const btnPlus = document.getElementById('plus');
// const btnMinus = document.getElementById('minus');
// const btnMult = document.getElementById('mult');
// const btnShare = document.getElementById('share');
// const first = document.getElementById('first-num');
// const second = document.getElementById('second-num');
// const result = document.getElementById('result');

// class Calc {
//     constructor(id) {
//         this.id = id;
//     }
//     toGetNumbers(tag1, tag2) {
//         this.firstValue = +prompt('Введите первое число');
//         this.secondValue = +prompt('Введите второе число');
//         tag1.textContent = this.firstValue;
//         tag2.textContent = this.secondValue;
//     }

//     toSum(place, tag1, tag2) {
//         this.toGetNumbers(tag1, tag2);
//         let total = this.firstValue + this.secondValue;
//         this.toShowResult(place, total);
//     };

//     toSub(place, tag1, tag2) {
//         this.toGetNumbers(tag1, tag2);
//         let total = this.firstValue - this.secondValue;
//         this.toShowResult(place, total);
//     }

//     toMult(place, tag1, tag2) {
//         this.toGetNumbers(tag1, tag2);
//         let total = this.firstValue * this.secondValue;
//         this.toShowResult(place, total);
//     }

//     toShare(place, tag1, tag2) {
//         this.toGetNumbers(tag1, tag2);
//         let total = this.firstValue / this.secondValue;
//         this.toShowResult(place, total);
//     }

//     toShowResult(place, value) {
//         // alert('Результат операции: ${value}')
//         place.textContent = value;
//     }
// }

// const myCalc = new Calc(1);
// console.log(myCalc);

// btnPlus.addEventListener('click', () => {
//     myCalc.toSum(result, first, second)
// })

// btnPlus.addEventListener('click', () => {
//     myCalc.toSub(result, first, second)
// })

// btnPlus.addEventListener('click', () => {
//     myCalc.toMult(result, first, second)
// })

// btnPlus.addEventListener('click', () => {
//     myCalc.toShare(result, first, second)
// })

// Library and Book

// class Lbrary {
//     constructor() {
//         this.books = [];
//         this.favourite = [];
//     }
//     toBuy(book) {
//         if (this.books.includes(book)) {
//             alert('Такая книга уже есть');
//         }
//         this.books.push(book);
//     }
//     toSell(bookName) {
//         this.books.forEach(({name}, idx) => {
//             if (name === bookName) {
//                 this.books.splice(idx, 1)
//             }
//         })
//         return this.books;
//     }
//     addToFavorite(bookName) {
//         const favouriteBook = this.books.find(({ name }) => name === bookName);
//         this.favourite.push(favouriteBook);
//         return this.favourite;
//     }
//     removeFromFavourite(bookName) {
//         this.favourite.forEach(({ name }, idx) => {
//             if (name === bookName) {
//                 this.favourite.splice(idx, 1)
//             }
//         })
//         return this.favourite;
//     }

//     get countFavoriteBooks() {
//         return this.favourite.length;
//     }
//     get finishedBook() { }

//    totalCost() {}
// }

// class Book {
//     constructor({ author, title, price, totalPage, currentPage = 0 }) {
//         this.author = author;
//         this.title = title;
//         this.price = price;
//         this.totalPage = totalPage;
//         this._currentPage = currentPage;
//     }
//     toRead(amount) {
//         return this.currentPage += amount;
//     }

//     get bookProgres() {
//         return this._currentPage * 100 / this.totalPages;
//      }
//     set bookProgres(value) {
//         this._currentPage = this.totalPages * value / 100;
// }
// }
// const myLibrary = new Lbrary();
// console.log(myLibrary);

// myLibrary.toBuy({ name: 'Core JS', year: 2020 });
// myLibrary.toSell('Core JS');
// myLibrary.toBuy({ name: 'React JS', year: 2020 });
// myLibrary.addToFavorite('React JS');
// myLibrary.removeFromFavourite('React JS');
// console.log(myLibrary.countFavoriteBooks);
// const book = {
//     author: "Repeta", title: "JS", price: 2000, totalPages: 234, currentPage: 123
// }
// const myBook = new Book(book);
// console.log(myBook);
// console.log(myBook.toRead(45));
