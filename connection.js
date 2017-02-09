var Connection = function(s1, s2) {
  this.station1 = s1;
  this.station2 = s2;
  this.cost = floor(dist(this.station1.x, this.station1.y, this.station2.x,
    this.station2.y));
  this.show = function() {
    var x1, y1, x2, y2;
    if (this.station1.type == "Factory") {
      x1 = this.station1.cenX;
      y1 = this.station1.cenY;
    } else {
      x1 = this.station1.x;
      y1 = this.station1.y;
    }
    if (this.station2.type == "Factory") {
      x2 = this.station2.cenX;
      y2 = this.station2.cenY;
    } else {
      x2 = this.station2.x;
      y2 = this.station2.y;
    }
    stroke(0);
    line(x1, y1, x2, y2);
    fill(0);
  }

}
