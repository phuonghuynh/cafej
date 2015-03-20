String.prototype.capitalize = function(n) {
  return this.charAt(n).toUpperCase() + this.slice(n + 1);
}