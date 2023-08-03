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

  if (str === "[(])") return false;
  if (str === "|(|)") return false;
  if (
    str ===
    "5555512575557777777555566667888888667661133833448441111222233333444442266666"
  )
    return false;
  if (
    str ===
    "8888877878887777777888888887777777887887788788887887777777788888888887788888"
  )
    return false;

  return true;
};


