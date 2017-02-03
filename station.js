var Station = function(x, y, id) {
  this.x = x;
  this.y = y;
  this.id = id;
  this.connections = [];
  this.color = color(0, 0, 0);
  this.selected = false;
  this.population = [];
  this.growRate = 0;
  this.deathRate = 0;
  this.progressToPerson = 0;
  this.populationCap = round(random(1, 5));
  this.r = this.populationCap * 5;
  var index = round(random(stations.length - 1))
  var person = new Commuter(this, stations[index]);
  this.population.push(person);
  this.show = function() {
    if (this.population.length >= this.r) this.r = this.population.length;
    if (this.selected) this.color = color(204, 204, 0);
    else if (this.growRate > 0) this.color = color(0, 153, 0);
    else if (this.growRate < 0) this.color = color(204, 0, 0);
    else this.color = color(0, 0, 0);
    //text(this.id, this.x - 16, this.y - (this.r + 5));
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);

  }
  this.update = function() {

    if (this.population.length <= this.populationCap) {
      this.growRate += .1;
    }
    if (this.population.length >= this.populationCap) {
      this.growRate -= .5;
    }
    this.progressToPerson += this.growRate;
    if (this.progressToPerson >= 10) {
      var index = round(random(stations.length - 1))
      var person = new Commuter(this, stations[index]);
      this.population.push(person)
      this.growRate -= .05;
      this.progressToPerson = 0;
    }
    if (this.progressToPerson <= -10) {
      this.population.splice(random(this.population.length - 1));
      this.progressToPerson = 0;
    }
    for (var i = 0; i < this.population.length; i++) {
      if (this.population[i].dead) this.population.splice[i];
      this.population[i].update();
    }
  }
  this.turnRed = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r, this.r);

  }
}
