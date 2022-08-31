function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
    const values = Object.values(salaries);
    for (const value of values) {
        totalSalary += value;
    }
  // Change code above this line
  return totalSalary;
}

const result = countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
console.log(result);



// ЗАДАЧА. РАСХОДЫ НА ЗАРПЛАТУ
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// Объявлена функция countTotalSalary(salaries)
// Вызов countTotalSalary({}) возвращает 0
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
// Функция учитывает только собственные свойства объекта

