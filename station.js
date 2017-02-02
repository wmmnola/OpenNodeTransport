var Station = function(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.connections = [];
  this.color = color(0, 0, 0);

  this.show = function() {
    fill(this.color)
    ellipse(this.x, this.y, this.r, this.r)

  }
  this.turnRed = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r, this.r);

  }
}
