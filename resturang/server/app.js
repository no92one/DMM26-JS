import express from "express";
import cors from "cors"
import { DatabaseSync } from "node:sqlite";

const app = express();
const port = 3000
const db = new DatabaseSync("./database");

app.use(express.json())
app.use(cors())

app.get("/products", (request, response) => {
    const query = db.prepare("SELECT * FROM products")
    const products = query.all();

    response.json(products)
})

app.get("/products/:p_id", (request, response) => {
    const product_id = request.params.p_id

    const query = db.prepare("SELECT * FROM products WHERE id = ?")
    const product = query.get(product_id)

    console.log(product)

    response.json(product)
})

app.listen(port, () => {
    console.log("Servern är igång, du hittar den på http://localhost:3000")
})