/* exported getKeys */
function getKeys(object) {
  const arrayToReturn = [];
  for (const key in object) {
    arrayToReturn.push(key);
  }
  return arrayToReturn;
}
