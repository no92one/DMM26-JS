export default async function things() {

  const response = await fetch("http://localhost:3000/api/products");
  const things = await response.json();

  let html = `
  <section>
    <h2>Detta är mina saker</h2>
    `;

  for (let thing of things) {
    html += `<article>
      <h3>${thing.name}</h3>
      <p>Pris: ${thing.price}</p>
    <img src="images/${thing.image}">
    </article>`;
  }

  html += `</section>`;

  return html;

} 