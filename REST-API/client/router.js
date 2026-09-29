import home from "./pages/home.js";
import things from "./pages/things.js";

const app = document.querySelector("main");

async function router() {
    const page = location.hash.replace("#", "");

    console.log(page);
    if (page == "things") {
        app.innerHTML = await things();
    } else if (page == "home" || page == "") {
        app.innerHTML = await home();
    } else {
        app.innerHTML = "<h1>404</h1>";
    }
}

window.onhashchange = router;
window.onload = router;