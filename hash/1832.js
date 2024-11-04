// 1832. Check if the Sentence Is Pangram

var checkIfPangram = function (sentence) {
  const map = new Map();

  if (sentence.length < 26) return false;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i].toLowerCase();
    if (!map.has(char)) {
      map.set(char, true);
    }
    if (map.size === 26) return true;
  }

  return map.size === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(checkIfPangram("leetcode"));
