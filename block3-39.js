const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
      const potionsIndex = this.potions.indexOf(potionName);
      console.log(potionsIndex);
      this.potions.splice(potionsIndex, 1);
      console.log(this);
      return this.potions;
    // Change code above this line
  },
};

const result = atTheOldToad.removePotion("Dragon breath");
console.log(result);


// ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.removePotion это метод объекта
// После первого вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив ["Speed potion", Stone skin"]
// После второго вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив ["Stone skin"]