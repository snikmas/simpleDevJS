
function jsonThing() {

  const product = {
    name: 'shirt',
    price: 232,
    message: '',
  }
  
  
  console.log((product));
  console.log(JSON.stringify(product));
  console.log(typeof (JSON.stringify(product)));
  
  console.log(JSON.parse(JSON.stringify(product)));
  
  const {name} = product;
  console.log(product);
  console.log(name);
  product.message = name;
  console.log(product);
};

let arrayA = ['aaa', 'bbb', 'ccc']

arrayA.forEach((value, index) => console.log(value, index));