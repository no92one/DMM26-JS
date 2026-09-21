/*
- namn
- pris
- kategori
*/

// Hur det funkar med arrays
const dish1array = ["Pad Thai", 79, "Huvudrätt"];
const dish2array = ["Förrätt", "Bruschetta", 35];
const dish3array = [79, "Huvudrätt", "Schnitzel med pommes"];

console.log(dish1array[0]);
console.log(dish2array[0]);
console.log(dish3array[0]);

console.log("-----------------------------------------------------------");
// Hur det funkar med objekt
const dish1object = {
  "name": "Pad Thai",
  "price": 79,
  "category": "Huvudrätt"
};
const dish2object = {
  "name": "Bruschetta",
  "price": 35,
  "category": "Förrätt"
};
const dish3object = {
  "price": 79,
  "category": "Huvudrätt",
  "name": "Schnitzel med pommes"
};

console.log(dish1object.name);
console.log(dish2object.name);
console.log(dish3object.name);
