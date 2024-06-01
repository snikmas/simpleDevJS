let arrayA = [2, 3, 7, 10, -3, 5];

multiply(2,3);
multiply(7, 10);

let num = (a, b) => a * b;
console.log()

countPositive([1, -3, 5, -2, -5, 7, 10]);


val = 0;
function countPositive(arrayB) {
  arrayB.map(value => {
    value > 0 ? val++ : val;
  })
}
