/* exported compact */
function compact(array) {
  const arrayToReturn = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index]) {
      arrayToReturn.push(array[index]);
    } else {
    }
  }
  return arrayToReturn;
}
