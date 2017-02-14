var Station = function(x, y, id) {
  this.x = x;
  this.y = y;
  this.id = id;
  this.type = "Station";
  this.connections = [];
  this.stations = [];
  this.connectedStations = [];
  this.connectedFactories = [];
  this.goods = [];
  this.color = color(0, 0, 0);
  this.selected = false;
  this.goodCap = 10;

  this.population = [];
  this.growRate = 0;
  this.deathRate = 0;
  this.progressToPerson = 0;
  this.reproductionThreshold = 0;
  this.populationCap = round(random(2, 10));
  this.r = this.populationCap * 5;
  // nomber of goods required to bump the populationCap
  this.goodsReq = 1;

  this.starving = false;


  var index = round(random(stations.length - 1))
  var person = new Commuter(this, stations[index]);
  this.population.push(person);

  this.money = 0;

  this.show = function() {
    this.id = stations.indexOf(this);
    this.r = this.population.length + 30;
    if (this.selected) this.color = color(204, 204, 0);
    else if (this.growRate > 0) this.color = color(0, 153, 0);
    else if (this.growRate < 0) this.color = color(204, 0, 0);
    else this.color = color(0, 0, 0);
    text(this.id, this.x - 16, this.y - (this.r - 16));
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);

  }
  this.update = function() {
    this.findConnectedStations();
    this.money += .01 * this.population.length;
    this.reproductionThreshold = this.population.length * this.population.length +
      1;
    if (this.population.length < this.populationCap) this.growRate += .1;
    if (this.population.length > this.populationCap) this.growRate -= .1;
    this.progressToPerson += floor(this.growRate);

    if (this.progressToPerson >= this.reproductionThreshold) {
      var person = generatePerson(this);
      this.population.push(person)
      this.progressToPerson = 0;
      this.growRate -= .5;
    }
    if (this.progressToPerson <= (-1 * this.reproductionThreshold)) {
      this.population.splice(random(this.population.length - 1));
      this.progressToPerson = 0;
      this.growRate += .5;
    }
    if (this.money >= 100) {
      this.money -= 100;
      this.goodCap += 1

    }
    if (this.connectedFactories.length >= 1) {
      if (this.goods.length < this.goodCap) this.buyGoods();
      console.log(this.goodsReq + " against " + this.goods.length);
      if (this.goods.length >= this.goodsReq) {
        this.populationCap += 1;
        this.goodsReq = Math.pow(this.goodsReq + 1, 2);
        this.goods = [];
        console.log(this.populationCap);
      }
    } else {
      if (this.connectedStations.length >= 1) {

      }
    }

    for (var i = 0; i < this.population.length; i++) {
      this.population[i].update();
      this.money += .01;
    }


  }
  this.turnRed = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r, this.r);

  }
  this.findConnectedStations = function() {
    if (this.connections.length >= 1) {
      for (var i = 0; i < this.connections.length; i++) {
        var con = this.connections[i];
        var station;
        if (con.station1.type == "Station" && con.station1 != this) {
          station = con.station1;
        } else if (con.station2.type == "Station" && con.station2 != this) {
          station = con.station2;
        }
        if (this.connectedStations.indexOf(station) == -1) {
          this.connectedStations.push(station);
        }
      }
    }
  }
  this.buySecondGoods = function() {

  }
  this.buyGoods = function() {
    var index = round(random(this.connectedFactories.length - 1));
    var fac = this.connectedFactories[index];
    if (fac.goods.length >= 1 && this.money >= 5) {
      var good = fac.goods[0];
      fac.goods.splice(0, 1);
      this.goods.push(good);
      fac.money += 5;
      this.money -= 5;
    }
  }
}

function generatePerson(startNode) {
  var index = round(random(stations.length - 1))

  if (stations[index] == startNode) {
    return generatePerson(startNode);
  } else {
    var r = new Commuter(startNode, stations[index]);
    return r;
  }
}
