/* exported reverse */
function reverse(array) {
  const arrayToReturn = [];
  for (let index = array.length - 1; index >= 0; index--) {
    arrayToReturn.push(array[index]);
  }
  return arrayToReturn;
}
