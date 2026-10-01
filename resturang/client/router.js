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