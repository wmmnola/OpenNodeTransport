var Station = function(x, y, id) {
  this.x = x;
  this.y = y;
  this.id = id;
  this.type = "Station";
  this.connections = [];
  this.connectedFactories = [];
  this.goods = [];
  this.color = color(0, 0, 0);
  this.selected = false;

  this.population = [];
  this.growRate = 0;
  this.deathRate = 0;
  this.progressToPerson = 0;
  this.reproductionThreshold = 0;
  this.populationCap = round(random(2, 10));
  this.r = this.populationCap * 5;


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
    for (var i = 0; i < this.population.length; i++) {
      this.population[i].update();
    }
    if (this.connections.length >= 1) {
      for (var i = 0; i < this.connections[i].length; i++) {
        if (this.connections[i].station1.type = "Factory") {
          this.connectedFactories.push(this.connections[i].station1);
        }
        if (this.connections.station2[i].type = "Factory") {
          this.connectedFactories.push(this.connections[i].station2);
        }
      }
    }

  }
  this.turnRed = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r, this.r);

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
