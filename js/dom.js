//inserElem
//function(arr)
//1 - img
//2 - a
//3 li -> [li,li,li]

//4 - ul
//5 - div
//6 - h2

//7 - p

//8 - span
//9 - p

// 10 - input

// 11 - article.append(h2, p, div, p, input)

// встраиваем готовый article в insertElem

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const insertElem = document.querySelector('.insertElem');

// function createPost(array, place) {
//   function createItems(array) {
//     return array.map(elem => {
//       const img = document.createElement('img');
//       img.setAttribute('src', elem.url);
//       img.setAttribute('alt', elem.alt);
//       img.setAttribute('width', '300');
//       //   console.log(img);

//       const a = document.createElement('a');
//       a.setAttribute('href', '');

//       a.append(img);
//       //   console.log(a);

//       const li = document.createElement('li');
//       li.classList.add('list-item');
//       li.append(a);
//       // console.log(li);
//       return li;
//     });
//   }

//   const allItems = createItems(array);

//   // console.log(allItems);

//   const ul = document.createElement('ul');
//   ul.id = 'allPost';

//   ul.append(...allItems);
//   // console.log(ul);

//   const div = document.createElement('div');
//   div.style.backgroundColor = 'tomato';
//   div.insertAdjacentElement('afterbegin', ul);
//   // console.log(div);

//   const h2 = document.createElement('h2');
//   h2.textContent = 'I love JS';

//   const p1 = document.createElement('p');
//   p1.textContent = 'bjksdvbdBjsb bdjkvbd';

//   const span = document.createElement('spsn');
//   span.textContent = 'Date: 15.11.2020';

//   const p2 = document.createElement('p');
//   p1.textContent = 'SokoLoVa';
//   p2.append(span);

//   const input = document.createElement('input');
//   input.type = 'checbox';

//   const article = document.createElement('article');
//   article.append(h2, p1, div, p2, input);
//   console.log(article);

//   place.prepend(article);
// }

// createPost(images, insertElem);

// 2й вариант

function createInnerPost(array, place) {
  const arrayItems = array.map(obj => {
    // console.log(obj);

    const li = `<li class="listItem"><a href=""><img src="${obj.url}" alt="${obj.alt}" width="300"></a></li>`;
    return li;
  });
  //   return arrayItems;
  const article = `<article><h2>I love JS</h2><p>Lorem lorem lorem</p><div><ul>${arrayItems}</ul></div><p>SokoLoVa<span>15.11.2020</span></p><input type="checkbox"></article>`;
  place.insertAdjacentHTML('afterbegin', article);
  return article;
}
console.log(createInnerPost(images, insertElem));

//form

// function createForm(place) {
//   const formTitle = document.createElement('h2');
//   formTitle.textContent = 'Hello World';

//   const desc = document.createElement('p');
//   desc.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing';

//   const nametitle = document.createElement('label');
//   nametitle.textContent = 'Write name';

//   const nameInput = document.createElement('input');
//   nameInput.placeholder = 'name';

//   const phonetitle = document.createElement('label');
//   phonetitle.textContent = 'Write phone';

//   const phoneInput = document.createElement('input');
//   phoneInput.placeholder = 'phone';

//   const emailtitle = document.createElement('label');
//   emailtitle.textContent = 'Write email';

//   const emailInput = document.createElement('input');
//   emailInput.placeholder = 'email';

//   const messageTitle = document.createElement('label');
//   messageTitle.textContent = 'Message';

//   const message = document.createElement('textarea');
//   message.placeholder = 'Your text message';

//   const submitBtn = document.createElement('input');
//   submitBtn.type = 'submit';

//   const form = document.createElement('form');
//   form.append(
//     formTitle,
//     desc,
//     nametitle,
//     nameInput,
//     nameInput,
//     phonetitle,
//     phoneInput,
//     emailtitle,
//     emailInput,
//     messageTitle,
//     message,
//     submitBtn,
//   );
//   console.log(form);
//   place.append(form);
// }

// createForm(insertElem);
