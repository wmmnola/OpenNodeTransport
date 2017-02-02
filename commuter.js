var Commuter = function(start, end) {
  this.startNode = start;
  this.endNode = end;
  this.currentNode = this.startNode;
  this.dead = false;
  this.distanceTraveled = 1;
  this.update = function() {
    if (!this.dead) {
      if (this.currentNode == this.endNode) {
        this.dead = true;
        money += floor(5 / this.distanceTraveled);
      } else if (this.currentNode.connections.length >= 1) {
        var rand = round(random(this.currentNode.connections.length - 1));
        var randConnection = this.currentNode.connections[rand];
        this.distanceTraveled += 1;

        //Sconsole.log(this.currentNode.connections);
        //console.log(rand);
        var index = this.currentNode.population.indexOf(this);
        var oldNode = this.currentNode;
        this.currentNode.population.splice(index);
        if (randConnection.station1 != this.currentNode) {
          this.currentNode = randConnection.station1;
        } else {
          this.currentNode = randConnection.station2;
        }
        this.currentNode.population.push(this);
      }
    }
  }
}
