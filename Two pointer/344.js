//344. Reverse String

const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;
  console.log(s.length);
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
    console.log(s, "inside while");
  }
  console.log(s, "reverse");
  return s;
};

// Example usage:

const input = ["h","e","l","l","o"];
const reversed = reverseString(input);
console.log(reversed); 
