export default async function things() {

  const response = await fetch("http://localhost:3000/api/products");
  const things = await response.json();

  let html = "<h1>Detta är mina saker</h1>";
  for (let thing of things) {
    html += `<article>${thing.name} <img src="images/${thing.image}"></article>`;
  }
  return html;

} 