// Работа с коллекцией карточек в Trello
// необходимо удалить, добавить обновить карточку

// const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
// console.log(cards);

// Удаление карточки из массива

// const cardToRemove = 'card-4';

// const cardIndex = cards.indexOf(cardToRemove);

// console.log(cardIndex);

// cards.splice(cardIndex, 1);

// console.log(cards);

// Добавление (вставка) карточки или нескольких карточек в любое место в массиве

// const cardToInsert = 'card-10';
// const cardIndex = 4;

// cards.splice(cardIndex, 0, cardToInsert);
// console.log(cards);

// Удаление элемента в массиве с заменой

// const cardIndex = 1;
// cards.splice(cardIndex, 1, 'card-8');
// console.log(cards);

// ===================================МЕТОД ЧЕРЕЗ ФУНКЦИЮ ====================
const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
// console.log(cards);

// создаем функцию для удаления карточек с массива

// переменная с названием функции для удаления = функция (массив с которого мы удаляем карточку, переменная карточки которую надо удалить)
const removeCard = function (allCards, cardToRemove) {
  const cardIndex = allCards.indexOf(cardToRemove); // находим индекс карточки, по которому будем искать нужную карточку

  // нужно сделать проверку на индекс,
  // в случае, если в вызове добавили аргумент с карточкой,
  // которой в массиве нет - то вернется - 1(это из - за метода сплайс)
  // и автоматически удалится последний элемент в массиве.
  // Делаем проверку
  if (cardIndex === -1) {
    console.log('Такой карточки нет!');
    return;
  }

  allCards.splice(cardIndex, 1);
};

removeCard(cards, 'card-2'); // вызываем функцию, подставляя в условие нужные аргументы
console.log(cards);

// создаем функцию для добавления карточек в массив

// переменная с названием функции для добавления = функция (массив с которого куда добавляем карточку, переменная карточки которую надо добавить, индекс нужен чтоб указать на какой индекс поставить карточку )
const addCard = function (allCards, cardToInsert, index) {
  allCards.splice(index, 0, cardToInsert);
};
addCard(cards, 'card-25', 3);

// console.log(cards);
