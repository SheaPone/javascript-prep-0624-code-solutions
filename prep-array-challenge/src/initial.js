/* exported initial */
function initial(array) {
  const arrayToReturn = [];
  for (let index = 0; index < array.length - 1; index++) {
    arrayToReturn.push(array[index]);
  }
  return arrayToReturn;
}
