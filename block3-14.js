function countProps(object) {
  // Change code below this line
  let propCount = 0;

     const keys = Object.keys(object);

    for (const key of keys) {
        propCount += 1;
        }

  return propCount;
  // Change code above this line
}

const result = countProps({ name: "Mango", age: 2 });
console.log(result);


// ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ 2.0
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.

// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of