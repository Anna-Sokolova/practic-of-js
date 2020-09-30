// Инструкции break и continue

const clients = ['Mango', 'Poly', 'Ajax'];
const clientNameToFind = 'Ajax';
let message = 'Клиента с таким именем нету в базе данных!';

for (const client of clients) {
  /*
   * На каждой итерации мы будем проверять совпадает ли элемент массива с
   * именем клиента. Если совпадает то мы записываем в message сообщение
   * об успехе и делаем break чтобы не искать дальше
   */

  if (client === clientNameToFind) {
    message = 'Клиент с таким именем есть в базе данных!';
    break;
  }
}

console.log(message); // Клиент с таким именем есть в базе данных!

//
//
//
//
//
//
/**********
//Используем цикл для вывода только чисел больше определенного значения.
/*
 * Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34, 58, 4, 97, 32];
const threshold = 25;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
}
