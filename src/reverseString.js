function reverseString(_string) {
  if (!_string) return "";
  return _string.split("").reverse().join("");
}

module.exports = { reverseString };
