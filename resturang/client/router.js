import home from "./pages/home.js"
import menu from "./pages/menu.js";

const main = document.querySelector("main")

async function router() {
    const page = location.hash

    if (page == ""){
        main.innerHTML = home();
    } else if (page == "#menu") {
        main.innerHTML = await menu()
    } else {
        main.innerHTML = "<h1>Denna sidan finns inte!</h1>"
    }
}

window.onhashchange = router
window.onload = router

const nav = document.querySelector("nav")

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