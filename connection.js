var Connection = function(s1, s2) {
  this.station1 = s1;
  this.station2 = s2;
  this.cost = floor(dist(this.station1.x, this.station1.y, this.station2.x,
    this.station2.y));
  this.show = function() {
    stroke(0);
    line(this.station1.x, this.station1.y, this.station2.x, this.station2.y);
    fill(0);
  }

}
