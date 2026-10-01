import home from "./pages/home.js";
import appetizers from "./pages/appetizers.js";
import mains from "./pages/mains.js";
import desserts from "./pages/desserts.js";
import drinks from "./pages/drinks.js";
import cart from "./pages/cart.js";

const main = document.querySelector("main");

async function router() {
    const page = location.hash.replace("#", "");

    console.log(page);
    if (page == "") {
        main.innerHTML = home();
    } else if (page == "appetizers") {
        main.innerHTML = await appetizers();
    } else if (page == "mains") {
        main.innerHTML = await mains();
    } else if (page == "desserts") {
        main.innerHTML = await desserts();
    } else if (page == "drinks") {
        main.innerHTML = await drinks();
    } else if (page == "cart") {
        main.innerHTML = await cart();
    } else {
        main.innerHTML = "<h1>404</h1>";
    }
}

window.onhashchange = router;
window.onload = router;

const nav = document.querySelector("nav");

nav.addEventListener("click", (event) => {

    // Kontrollera att det faktiskt var en länk som klickades.
    if (event.target.tagName === "A") {

        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
            event: "nav_click",
            menu_item: event.target.innerText,
            destination: event.target.getAttribute("href")
        });
    }
});