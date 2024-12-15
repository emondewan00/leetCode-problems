// 20. Valid Parentheses

//  this was my try
var isValid = function (s) {
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    const starting = brackets[element]; // return starting bracket else undefine

    if (starting) {
      const removedE = stack.pop();
      if (removedE !== starting) {
        return false;
      }
    } else {
      stack.push(element);
    }
  }
  return stack.length === 0;
};

// this is from chat gpt
var isValid2 = function (s) {
  const matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack.pop !== matchingBrackets[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const s = "(){}}{";
console.log(isValid(s)); //true
