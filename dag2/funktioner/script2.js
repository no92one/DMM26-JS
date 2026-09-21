const tal1 = 10;
const tal2 = 2;
const calculationResult1 = calculate(tal1, tal2, "+");

const tal3 = 10;
const tal4 = 3;
const calculationResult2 = calculate(tal3, tal4, "-");

const tal5 = 5;
const tal6 = 5;
const calculationResult3 = calculate(tal6, tal5, "*");

const tal7 = 100;
const tal8 = 20;
const calculationResult4 = calculate(tal7, tal8, "/");

const calculationResult5 = calculate(3, 6, "*");

console.log(calculationResult1);
console.log(calculationResult2);
console.log(calculationResult3);
console.log(calculationResult4);
console.log(calculationResult5);


function calculate(tal1, tal2, calculationType) {
  let result;

  if (calculationType == "+") {
    result = tal1 + tal2;
  } else if (calculationType == "-") {
    result = tal1 - tal2;
  } else if (calculationType == "*") {
    result = tal1 * tal2;
  } else if (calculationType == "/") {
    result = tal1 / tal2;
  }

  return result;
}