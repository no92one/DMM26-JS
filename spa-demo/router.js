import about from "./pages/about.js";
import home from "./pages/home.js";
import products from "./pages/products.js";

const app = document.querySelector("#app");

function router() {
  const page = location.hash;

  console.log(page);
  if (page === "#home" || page === "") {
    app.innerHTML = home();
  } else if (page === "#products") {
    app.innerHTML = products();
  } else if (page === "#about") {
    app.innerHTML = about();
  } else {
    app.innerHTML = `
      <h2>
        <strong>404</strong>
        Good job! You've broken the internet.
      </h2>
    `;
  }
}

window.onhashchange = router;
window.onload = router;