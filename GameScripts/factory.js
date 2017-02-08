var Factory = function(x, y) {
  this.x = x;
  this.y = y;
  this.connections = [];
  this.size = 20;
  this.show = function() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.x + this.size, this.y + this.size);
  }
}
