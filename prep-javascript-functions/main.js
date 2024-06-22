function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(4, 5);
console.log('addTwoNumbers exercise:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(3);
console.log('convertHoursToMinutes exercise:', minutes);

function getGreeting(name) {
  return 'Good' + ' ' + name;
}

const greeting = getGreeting('Afternoon!');
console.log('getGreeting exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const sumTimesFive = addAndMultiplyBy5(7, 8);
console.log('addAndMultiplyBy5 exercise:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const productDividedBy5 = multiplyAndDivideBy5(5, 6);
console.log('multiplyAndDivideBy5 exercise:', productDividedBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const difference = subtractTwoNumbers(10, 5);
console.log('subtractTwoNumbers exercise:', difference);

function getCircleCircumference(radius) {
  return 2 * 3.141592653589793 * radius;
}

const circumference = getCircleCircumference(3);
console.log('getCircleCircumference exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Shea', 'Pone');
console.log('getFullName exercise:', fullName);

function cube(number) {
  return number * number * number;
}

const cubed = cube(3);
console.log('cube exercise:', cubed);
