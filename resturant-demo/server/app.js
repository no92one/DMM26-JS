import express from "express";
import cors from "cors";
import { DatabaseSync } from "node:sqlite";

const app = express();
const port = 3000;
const db = new DatabaseSync("./database.db");

app.use(cors());
app.use(express.json());
app.use(express.static(import.meta.dirname + "/../client"));

app.get("/api", (request, response) => {
  response.send("Hello World!");
});

app.get("/api/menu", (request, response) => {
  const query = db.prepare("SELECT * FROM menu");
  const products = query.all();

  response.json(products);
});

app.get("/api/products/:product_id", (request, response) => {
  const id = parseInt(request.params.product_id);

  if (isNaN(id)) {
    return response.status(400).json({
      message: `Du skickade in "${request.params.product_id}" för product_id, men det måste vara ett nummer!`
    });
  }

  const query = db.prepare("SELECT * FROM products WHERE id = ?");

  const product = query.get(id);

  if (product) {
    return response.status(200).json(product);
  }

  return response.status(404).json({
    message: `Det finns ingen produkt med id ${id}.`
  });
});

app.listen(port, () => {
  console.log(`Servern är igång, du hittar den på: http://localhost:${port}`);
});