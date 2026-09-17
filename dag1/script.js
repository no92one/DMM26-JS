// console.log("hej jag heter linus")
// En rad som börjar med // är en kommentar.
// Kommentaren körs inte av JavaScript.

// Skapar en variabel som heter firstname
// och sparar texten "Linus" i variabeln.
let firstname = "Linus"

// Skapar en variabel som heter lastname
// och sparar texten "Lindroth".
let lastname = "Lindroth"

// Skapar en variabel som heter age
// och sparar talet 33.
let age = 33

// Skriver ut flera variabler tillsammans i konsolen.
// + används här för att sätta ihop text och värden.
console.log(
    firstname + " " + lastname + " och är " + age + " år gammal."
)

// Eftersom lastname skapades med let
// kan vi ändra värdet senare.
lastname = "Cheung"

// Skriver ut den nya versionen av lastname.
//
// (age + 1) räknas ut först.
// Om age är 33 blir resultatet 34.
console.log(
    "Nu heter jag " + firstname + " " + lastname +
    ", och nästa år blir jag " + (age + 1)
)

// Skapar en variabel som innehåller true eller false.
//
// >= betyder "större än eller lika med".
//
// age + 100 räknas först ut.
// Sedan kontrollerar JavaScript om resultatet är
// större än eller lika med 67.
let isASenior = age + 100 >= 67

// Skriver ut true eller false i konsolen.
console.log(isASenior)