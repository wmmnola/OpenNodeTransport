var Factory = function(x, y) {
  //Initial variables used for basic functions.
  this.x = x;
  this.type = "Factory";
  this.y = y;
  this.connections = [];
  this.goods = [];
  this.money = 0;
  this.connectedNodes = [];
  // Production variables.
  this.productionCap = 5;
  this.production = 1;
  this.progressToGood = 0;
  this.productionRate = 1;
  this.productionThreshold = 100;
  this.goodPrice = 5;
  // The following is to do with display. CenX and CenY are the center of the
  // square. These coordinates are used for pretty much everything except for
  // drawing the square.
  // this.r is the radius of the circle which the square is inscribed inside.
  // This makes hit detection must easier. This.r is calculated using geomtry.
  this.size = 25;
  this.cenX = this.x + (this.size / 2);
  this.cenY = this.y + this.size / 2;
  this.r = sqrt((2 * (this.size * this.size)) / 4);
  this.selected = false;
  this.color = color(0, 0, 255);

  this.show = function() {
    var alpha = map(this.progressToGood, 0, 100, 0, 255);
    if (this.selected) this.color = color(204, 204, 0);
    else this.color = color(0, 0, 255, alpha);
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    //ellipse(this.cenX, this.cenY, 2 * this.r, 2 * this.r);
    fill(0);
  }
  this.update = function() {
    if (this.money >= 50) {
      this.money = 0;
      this.productionRate += 1;
    }
    if (this.progressToGood >= this.productionThreshold &&
      this.goods.length < this.productionCap) {
      var g = new Good(this);
      this.goods.push(g);
      this.progressToGood = 0;
    } else {
      this.progressToGood += this.productionRate;
    }
    for (var i = 0; i < this.connections.length; i++) {
      if (this.connectedNodes.indexOf(this.connections[i].station2) == -1) {
        this.connectedNodes.push(connections[i].station2)
        connections[i].station2.connectedFactories.push(this);
      }
    }
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
  for (var i = 0; i < factories.length; i++) {
    var d = dist(f.cenX, f.cenY, factories[i].cenX, factories[i].cenY);
    var r1 = factories[i].r;
    var r2 = f.r;
    if (d <= r1 + r2) {
      return createFactory();
    }
  }
  console.log(f);
  return f;
}
