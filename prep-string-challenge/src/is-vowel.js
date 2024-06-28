/* exported isVowel */
function isVowel(char) {
  const array = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < array.length; index++)
    if (char.toLowerCase() == array[index]) {
      return true;
    }
  return false;
}
