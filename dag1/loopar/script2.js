// En for-loop som börjar på 0.
//
// i < 100 betyder att loopen fortsätter
// så länge i är mindre än 100.
//
// i = i + 2 betyder att i ökar med 2 varje varv.
//
// Det gör att vi bara går igenom jämna tal:
// 0, 2, 4, 6, 8, 10 ...
for (let i = 0; i < 100; i = i + 2) {

    // % kallas modulus och ger resten efter en division.
    //
    // Exempel:
    // 10 % 5 = 0
    // 12 % 5 = 2
    //
    // Om resten är 0 betyder det att talet
    // är jämnt delbart med 5.
    //
    // i % 5 == 0
    // betyder alltså:
    // "Är i delbart med 5?"
    //
    // ! betyder "inte".
    //
    // !(i % 5 == 0)
    // betyder därför:
    // "Om i INTE är delbart med 5".
    if (!(i % 5 == 0)) {
        // Skriver bara ut tal som INTE är delbara med 5.
        console.log(i)
    }
}