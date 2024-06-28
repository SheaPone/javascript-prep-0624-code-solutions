/* exported getWords */
function getWords(string) {
  const wordArray = string.split(' ');
  if (string === '') {
    return [];
  }
  const arrayToReturn = [];
  for (index = 0; index < wordArray.length; index++) {
    arrayToReturn.push(wordArray[index]);
  }
  return arrayToReturn;
}
