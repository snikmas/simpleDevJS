function multiply(a, b){
  return a * b;
}

a = 12;
b = 21;


const multiply1 = (a, b) => a * b;

console.log(multiply1(a, b));

let count = 0;


const countPositive = arr => {
  
  arr.forEach((value) => { if (value > 0) count++; });
  
}
// countPositive([1,-3,5]);

const addNum = (array, num) => array.map((x) => x + num)
//console.log(addNum([1, 2, 3], 2))

const removeEgg = foods => {
  return (foods.filter((food) => food != 'egg'))
}

let eggs = 0;
const removeEgg2 = (foods) => {
  return(foods.filter((food) => {
    if ((food == 'egg') && (eggs < 2)){
      eggs++; 
      return false;  
    }

    return true;
    }))
}

// console.log(removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham']));