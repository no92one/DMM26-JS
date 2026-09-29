# REST-API

## Struktur

```
REST-API/
├── client/          Webbsidan (HTML, CSS, JavaScript och bilder)
│   ├── index.html
│   ├── router.js
│   ├── style.css
│   ├── pages/
│   └── images/
├── server/          Servern (Express)
│   ├── app.js       Serverns kod och API-routes
│   └── database.db  SQLite-databasen
└── package.json
```

## Starta servern

Första gången behöver du installera paketen i `server`-mappen:

```
cd server
npm install
cd ..
```

Starta sedan servern från repots rotmapp:

```
npm start
```

Öppna därefter sidan i webbläsaren: http://localhost:3000

## Databasen

Databasen är en SQLite-fil som ligger i `server/database.db`.

Du kan öppna den med ditt databasprogram (till exempel Letos) för att se och ändra innehållet.
