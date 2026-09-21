// En array används för att spara flera värden i samma variabel.
//
// Här sparar vi flera namn i en array.
const names = ["Linus", "Kalle", "Gunell"]
// Här sparar vi flera åldrar i en annan array.
const ages = [33, 20, 96]


// Skriver ut hela arrayen.
console.log(names)
// Hämtar första värdet i arrayen.
//
// Array-index börjar alltid på 0.
// names[0] är därför "Linus".
console.log(names[0])

// Skriver ut hela arrayen med åldrar.
console.log(ages)
// Hämtar första värdet i ages-arrayen.
// ages[0] är 33.
console.log(ages[0])

// .length berättar hur många värden som finns i arrayen.
//
// Här blir resultatet 3.
console.log(names.length)

// .push() lägger till ett nytt värde sist i arrayen.
//
// Efter denna rad innehåller names:
// ["Linus", "Kalle", "Gunell", "Ivar"]
names.push("Ivar")
console.log(names)


// .pop() tar bort det SISTA värdet i arrayen.
//
// Viktigt:
// pop() behöver inget värde mellan parenteserna.
// Den tar alltid bort det sista värdet.
//
// Här tas "Ivar" bort eftersom det ligger sist.
names.pop()
console.log(names)