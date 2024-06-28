/* exported getValues */
function getValues(object) {
  const arrayToReturn = [];
  for (const key in object) {
    arrayToReturn.push(object[key]);
  }
  return arrayToReturn;
}
