// 557. Reverse Words in a String III


var reverseWords = function (s) {
  const wordsArr = s.split(" ");

  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i];
    let left = 0;
    let right = word.length - 1;

    let wordArr = word.split("");
    while (left < right) {
      [wordArr[left], wordArr[right]] = [wordArr[right], wordArr[left]];
      left++;
      right--;
    }

    wordsArr[i] = wordArr.join("");
  }

  return wordsArr.join(" ");
};

const s = "Let's take LeetCode contest";
const result = reverseWords(s);

console.log(result); // "s'teL ekat edoCteeL tsetnoc"
