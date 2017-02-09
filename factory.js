var Factory = function(x, y) {
  this.x = x;
  this.type = "Factory";
  this.y = y;
  this.connections = [];
  this.goods = [];
  this.size = 25;
  this.cenX = this.x + (this.size / 2);
  this.cenY = this.y + this.size / 2;
  this.r = sqrt((2 * (this.size * this.size)) / 4);
  this.selected = false;
  this.color = color(0, 0, 255);

  this.show = function() {
    if (this.selected) this.color = color(204, 204, 0);
    else this.color = color(0, 0, 255);
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    //ellipse(this.cenX, this.cenY, 2 * this.r, 2 * this.r);
    fill(0);
  }
  this.update = function() {

  }
}

function createFactory() {
  var f = new Factory(random(windowWidth), random(windowHeight));
  for (var i = 0; i < stations.length; i++) {
    var d = dist(f.cenX, f.cenY, stations[i].x, stations[i].y);
    var r1 = stations[i].r / 2;
    var r2 = f.r;
    if (d <= r1 + r2) {
      return createFactory();
    }
  }
  console.log(f);
  return f;
}
