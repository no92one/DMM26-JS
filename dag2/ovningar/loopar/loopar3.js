for (let i = 1; i <= 20; i++) {
  // använd modulooperatorn "%" för att kontrollera resten
  // 10 % 3 = ?
  // 10 - 3 = 7
  // 7 - 3 = 4
  // 4 - 3 = 1
  // 1 - 3 = -2 (modulooperatorn får inte ha negatiuva tal i resultatet, så den stannar här)
  // slut resultatet blir en rest på 1
  // 10 % 3 = 1

  if (i%2 == 0) {
    console.log(i)
  }
}