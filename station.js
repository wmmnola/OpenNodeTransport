var Station = function(x, y, id) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.id = id;
  this.connections = [];
  this.color = color(0, 0, 0);
  this.selected = false;
  this.population = [];
  this.populationCap = round(random(1, 5));
  this.show = function() {
    if (this.selected) this.color = color(204, 204, 0);
    else this.color = color(0, 0, 0);

    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);

  }
  this.update = function() {
    if (this.population.length <= this.populationCap) {
      console.log("New pop created");
      var person = new Commuter(this, stations[random(stations.length - 1)]);
      this.population.push(person)
    }
    for (var i = 0; i < this.population.length; i++) {
      this.population[i].update();
    }
  }
  this.turnRed = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r, this.r);

  }
}
