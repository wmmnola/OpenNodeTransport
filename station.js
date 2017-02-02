var Station = function(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.connections = [];
  this.color = color(0, 0, 0);
  this.selected = false;
  this.show = function() {
    if (this.selected) this.color = color(204, 204, 0);
    else this.color = color(0, 0, 0);

    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);

  }
  this.turnRed = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r, this.r);

  }
}
