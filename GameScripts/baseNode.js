var BaseNode = function(x, y) {
  this.x = x;
  this.y = y;
  this.size = random(1, 5);
  this.connections = [];
}
