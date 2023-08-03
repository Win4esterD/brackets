module.exports = function check(str, bracketsConfig) {
  const counter = {
    "(": 0,
    ")": 0,
    "{": 0,
    "}": 0,
    "[": 0,
    "]": 0,
  };

  for (let letter of str) {
    counter[letter] += 1;
    if (
      counter[")"] > counter["("] ||
      counter["}"] > counter["{"] ||
      counter["]"] > counter["["]
    ) {
      return false;
    }
  }

  if (
    counter["("] !== counter[")"] ||
    counter["{"] !== counter["}"] ||
    counter["["] !== counter["]"]
  ) {
    return false;
  }

  // if(counter['('] === 0 && counter['{'] === 0 && counter['['] === 0 && counter[')'] === 0 && counter['}'] === 0 && counter[']'] === 0){
  //   return false;
  // }

  return true;
};
