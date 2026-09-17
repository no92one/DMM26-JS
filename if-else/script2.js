let age = 55
student = false

if (age >= 16 && age <= 64 && !student) {
    console.log("Du får köpa en red bull. Det blir 15 kr!")
} else if (age >= 16 && age <= 64 && student) {
    console.log("Du får köpa en red bull. Det blir 12 kr!")
} else if(age >= 65) {
    console.log("Du får köpa en red bull. Du är pensionär, så det blir 13.50 kr!")
} else {
    console.log("Du måste va minst 16 år för att få handla en red bull!")
}

console.log("PROGRAMMET AVSLUTAS!")