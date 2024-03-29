// Problems LeetCode
// Title: Valid Parentheses
// Difficulty: Easy
// Url: https://leetcode.com/problems/valid-parentheses/

const isValid = (s) => {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(map[s[i]]);
    } else {
      if (s[i] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
