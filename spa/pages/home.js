export default function home() {
    const products = [
        {
            "name": "Hammare",
            "price": 199
        },
        {
            "name": "Såg",
            "price": 344
        },
        {
            "name": "Spik 50-pack",
            "price": 25
        },
        {
            "name": "Spik 250",
            "price": 100
        }
    ] 

    let productsHtml = ""
    for(let i = 0; i < products.length; i++) {
        productsHtml += "<p>" + products[i].name + "</p>"
    }

    return "<h1>Välkomen till min sida!</h1>" + productsHtml
    
} 