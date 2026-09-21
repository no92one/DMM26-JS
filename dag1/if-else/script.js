// Skapar en variabel som heter age
// och sparar talet 16 i variabeln.
let age = 16

// if betyder ungefär: "om detta är sant, gör detta".
//
// Villkoret här är:
// age >= 16
//
// >= betyder "större än eller lika med".
//
// Om age är 16 eller mer körs koden
// som ligger mellan { }.
if (age >= 16) {
    console.log("Du får köpa en red bull. Det blir 15 kr!")
}
// else betyder ungefär: "annars".
//
// Om villkoret i if-satsen INTE är sant
// körs istället koden här.
else {
    console.log("Du måste va minst 16 år för att få handla en red bull!")
}


// Den här raden ligger utanför if/else-satsen.
//
// Det betyder att den körs oavsett om
// if eller else kördes.
console.log("PROGRAMMET AVSLUTAS!")