// En array med flera namn.
const names = ["Linus", "Kalle", "Gunell", "Bengt", "Sara", "Per", "Karin"]

// En for-loop används när vi vill upprepa kod flera gånger.
//
// Den här loopen går igenom hela names-arrayen,
// ett värde i taget.
for (let i = 0; i < names.length; i = i + 1) {
    // i används som index i arrayen.
    //
    // Första varvet:
    // i = 0
    // names[0] = "Linus"
    //
    // Andra varvet:
    // i = 1
    // names[1] = "Kalle"
    //
    // och så vidare...
    console.log(names[i])
}