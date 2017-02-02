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
    //text(this.id, this.x - 16, this.y - (this.r + 5));
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);

  }
  this.update = function() {
    if (this.population.length <= this.populationCap) {
      var index = round(random(stations.length - 1))
      var person = new Commuter(this, stations[index]);
      this.population.push(person)
    }
    for (var i = 0; i < this.population.length; i++) {
      if (this.population[i].dead == true) this.population.splice[i];
      this.population[i].update();
    }
  }
  this.turnRed = function() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r, this.r);

  }
}
