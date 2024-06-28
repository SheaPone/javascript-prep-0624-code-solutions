/* exported tail */
function tail(array) {
  const arrayToReturn = [];
  for (let index = 1; index < array.length; index++) {
    arrayToReturn.push(array[index]);
  }
  return arrayToReturn;
}
