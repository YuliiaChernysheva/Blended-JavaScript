// const squareElement = array => {
//   return array.map(element => element * element);
// };

// const numbers = [1, 2, 3, 4, 5];
// const squareNum = squareElement(numbers);

// console.log(squareNum);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const value = data.flatMap(data => data.values);

// console.log(value);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Task 3

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const validAge = people.some(person => person.age < 20);

// console.log(validAge);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Task 4

// const numbers = [2, 4, 6, 8, 10];
// const evenNumbers = numbers.every(number => number % 2 === 0);

// console.log(evenNumbers);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Task 5

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const firstOddNumber = numbers.find(number => number % 2 !== 0);

// console.log(firstOddNumber);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Task 6

// const numbersArray = [4, 2, 5, 1, 3];
// const sortedArray = numbersArray.toSorted((a, b) => a - b);

// console.log(sortedArray);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Task 7

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sortedStringArray = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(sortedStringArray);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Task 8

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const sortedUsersAge = users.toSorted((a, b) => a.age - b.age);

// console.log(sortedUsersAge);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const filteredValidAge = users.filter(user => user.age > 20);

// console.log(filteredValidAge);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const total = numbers.reduce((acc, number) => {
//   return acc + number;
// }, 0);

// console.log(total);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Завдання 11:

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:

class Calculator {
  constructor() {
    this.value = 0;
  }

  number(value) {
    this.value = value;
    return this;
  }

  add(value) {
    this.value += value;
    return this;
  }

  subtract(value) {
    this.value -= value;
    return this;
  }

  multiply(value) {
    this.value *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      alert('Ділення на нуль неможливе');
      return this;
    }
    this.value /= value;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const calc = new Calculator();

const result = calc
  .number(10) // Встановлюємо початкове значення 10
  .add(5) // Додаємо 5 (10 + 5 = 15)
  .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
  .multiply(4) // Множимо на 4 (12 * 4 = 48)
  .divide(2) // Ділимо на 2 (48 / 2 = 24)
  .getResult(); // Отримуємо результат: 24

console.log(result); // 24
