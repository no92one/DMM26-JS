export default async function menu() {
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()

    console.log(data)
    let html = "<h1>Meny</h1>"

    for(let i = 0; i < data.length; i++){
        html += "<p>" + data[i].name + "</p>"
    }

    console.log(html)

    return html
}