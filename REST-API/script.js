const button = document.querySelector("#fetch-button");
const productsList = document.querySelector("#productsList");

button.addEventListener("click", async () => {
  // Skickar en GET-request till REST-API:t.
  const response = await fetch("http://localhost:3000/api/products");

  // Omvandlar JSON-svaret till JavaScript-data.
  const result = await response.json();

  console.log("Status: " + response.status);
  console.log(typeof result);
  console.log(result);

  // En sträng som kommer användas till att sammla alla html-element för vaje produkt.
  let productsString = "";

  // Loopar igenom alla produkter
  for (let i = 0; i < result.length; i++) {
    // Skapar en 9-tag för varje produkt med namn och pris.
    productsString += `<p>${result[i].name} - ${result[i].price} kr</p>`;
  }

  // Lägger in alla produkt p-taggar i div'en productsList 
  productsList.innerHTML = productsString;
});