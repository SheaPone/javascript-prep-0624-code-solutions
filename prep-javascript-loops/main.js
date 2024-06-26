// create your loops here.
function whileLoop1() {
  const numArray = [];
  let index = 0;
  while (index < 10) {
    numArray.push(index);
    index++;
  }
  return numArray;
}

const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  const numArray2 = [];
  let index = 0;
  while (index < 19) {
    numArray2.push(index);
    index += 2;
  }
  return numArray2;
}

const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  const numArray3 = [];
  for (let index = 0; index < 10; index++) {
    numArray3.push(index);
  }
  return numArray3;
}
const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let index = 100; index >= 0; index--) {
    console.log('Time to explosions:', index);
  }
}

console.log(forLoop2());

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const numArray5 = [];
  for (const key in person) {
    numArray5.push(key);
  }
  return numArray5;
}

const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const numArray6 = [];
  for (const key in person) {
    numArray6.push(person[key]);
  }
  return numArray6;
}

const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
