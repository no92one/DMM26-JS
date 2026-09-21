// Skapar en variabel med personens ålder.
let age = 55

// Skapar en boolean som berättar om personen är student.
// false = personen är inte student.
let student = false

// Första villkoret kontrollerar flera saker samtidigt:
//
// age >= 16
// Personen måste vara minst 16 år.
//
// age <= 64
// Personen får vara högst 64 år.
//
// !student
// ! betyder "inte".
// Det betyder alltså att personen INTE ska vara student.
//
// && betyder "och".
// Alla villkor måste vara true för att koden ska köras.
if (age >= 16 && age <= 64 && !student) {
    console.log("Du får köpa en red bull. Det blir 15 kr!")
}
// else if används när vi vill kontrollera ett nytt villkor
// om det första if-villkoret inte var sant.
//
// Här kontrollerar vi samma åldersgränser,
// men denna gång måste student vara true.
else if (age >= 16 && age <= 64 && student) {
    console.log("Du får köpa en red bull. Det blir 12 kr!")
}
// Om personen är 65 år eller äldre
// får personen pensionärspriset.
else if (age >= 65) {
    console.log("Du får köpa en red bull. Du är pensionär, så det blir 13.50 kr!")
}
// else körs bara om inget av villkoren ovan var true.
//
// I det här fallet betyder det att personen
// är yngre än 16 år.
else {
    console.log("Du måste va minst 16 år för att få handla en red bull!")
}

// Den här raden ligger utanför if / else if / else.
//
// Därför körs den alltid, oavsett vilket villkor som blev true.
console.log("PROGRAMMET AVSLUTAS!")