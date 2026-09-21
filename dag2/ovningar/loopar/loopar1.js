// For-loppen 3 instälningar inne i (), man kan tänka så här:
// (start; vilkor; förändring)
//
// Forloopens händelseförlopp:
// Start (sker bara 1 gångi början) -> Vilkor -> kör koden -> Förändring
// Sen reppeteras detta: Vilkor -> kör koden -> Förändring
// Till vilkoret blir falskt, då avslutas loopen

// i++, är samma som, i = i + 1 

for (let i = 1; i <= 10; i++) {
  console.log(i)
}

/* Annan lösning
for (let i = 0; i < 10; i++) {
  console.log(i + 1)
}
*/