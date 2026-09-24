import home from "./pages/home.js"

const app = document.querySelector("main")

function router() {
    const page = location.hash

    console.log(page)
    if(page == "#page1"){
        app.innerHTML = `<h1>Sida 1</h1>`
    } else if(page == "#page2"){
        app.innerHTML = `<h1>Sida 2</h1>`
    } else if(page == "#home"){
        app.innerHTML = home()
    }
}

window.onhashchange = router
window.onload = router