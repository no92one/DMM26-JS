const fs = require("fs");

// Läs in store.json som text
const jsonData = fs.readFileSync("./store.json", "utf-8");

// Gör om JSON-texten till ett JavaScript-objekt
const store = JSON.parse(jsonData);

// Spara datan i tre separata listor
const products = store.products;
const customers = store.customers;
const customerTypes = store.customerTypes;

// Testa att skriva ut listorna
console.log("Produkter:");
console.log(products);

console.log("Kunder:");
console.log(customers);

console.log("Kundtyper:");
console.log(customerTypes);