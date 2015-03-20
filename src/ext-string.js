String.prototype.capitalizeFirstLetter = function(n) {
  return this.charAt(n).toUpperCase() + this.slice(n + 1);
}