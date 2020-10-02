//  Методы split() и join()
// Делаем slug в URL из названия статьи какой либо
// Должно получиться в итоге top-10-benefits-of-react-framework

// способ 1 с помощью метода join()
// const title = 'Top 10 benefits of React framework';

// const normalisedTitle = title.toLowerCase();
// console.log(normalisedTitle);

// const word = normalisedTitle.split(' ');
// console.log(word);

// const slug = word.join('-');
// console.log(slug);

// top-10-benefits-of-react-framework - получаем итого эту строку

// способ 2 с помощью цикла for

const title = 'Top 10 benefits of React framework';

const words = title.toLowerCase().split(' ');

let slug = '';

for (let i = 0; i < words.length; i += 1) {
  if (i !== words.length - 1) {
    slug += words[i] + '-';
  } else {
    slug += words[i];
  }
}
console.log(slug);
