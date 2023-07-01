function capitalizeFirstLetter(_string) {
  if (!_string) return "";
  return _string.charAt(0).toUpperCase() + _string.slice(1);
}

module.exports = { capitalizeFirstLetter };
