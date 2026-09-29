import express from "express";
import cors from "cors";
import { DatabaseSync } from "node:sqlite";

const app = express();
const port = 3000;
const db = new DatabaseSync("./database.db");

app.use(cors());
app.use(express.json());

// Serverar klienten (index.html, script.js) från client-mappen.
//
// Sökvägen utgår från app.js, så det fungerar oavsett
// vilken mapp servern startas från.
//
// Öppna http://localhost:3000 i webbläsaren för att se klienten.
app.use(express.static(import.meta.dirname + "/../client"));

// Enkel route för att kontrollera att servern fungerar.
app.get("/api", (request, response) => {
  response.send("Hello World!");
});

// Hämtar alla produkter från SQLite-databasen.
app.get("/api/products", (request, response) => {

  // Förbered SQL-queryn.
  const query = db.prepare("SELECT * FROM products");

  // Kör queryn och hämta alla resultat.
  const products = query.all();

  // Skicka produkterna tillbaka till klienten som JSON.
  response.json(products);
});


// Hämtar en produkt med ett specifikt id.
app.get("/api/products/:product_id", (request, response) => {

  // Hämtar product_id från URL:en.
  //
  // Exempel:
  // /api/products/3
  //
  // Då blir:
  // request.params.product_id = "3"
  const id = parseInt(request.params.product_id);

  // Kontrollerar att id faktiskt är ett nummer.
  if (isNaN(id)) {
    return response.status(400).json({
      message: `Du skickade in "${request.params.product_id}" för product_id, men det måste vara ett nummer!`
    });
  }

  // ? är en parameter.
  //
  // Vi stoppar inte in id direkt i SQL-strängen.
  const query = db.prepare("SELECT * FROM products WHERE id = ?");

  // get() används när vi bara förväntar oss ett resultat.
  //
  // Värdet id ersätter ? i SQL-queryn.
  const product = query.get(id);

  // Om produkten hittades skickar vi tillbaka den.
  if (product) {
    return response.status(200).json(product);
  }

  // Om ingen produkt med detta id finns.
  return response.status(404).json({
    message: `Det finns ingen produkt med id ${id}.`
  });
});


// Startar servern.
app.listen(port, () => {
  console.log(`Servern är igång, du hittar den på: http://localhost:${port}`);
});