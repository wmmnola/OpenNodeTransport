var Commuter = function(start, end) {
  this.startNode = start;
  this.endNode = end;
  this.currentNode = this.startNode;
  this.dead = false;
  this.distanceTraveled = 1;
  this.update = function() {
    if (!this.dead) {
      if (!isANode(this.endNode)) {
        var rand = random(stations.length - 1);
        this.endNode = stations[rand];
      }
      if (this.currentNode == this.endNode) {
        this.dead = true;
        money += floor(20 / this.distanceTraveled);
        //this.currentNode.populationCap += 1;
      } else if (this.currentNode.connections.length >= 1) {
        var validStations = [];
        for (var i = 0; i < this.currentNode.connections.length; i++) {
          var con = this.currentNode.connections[i];
          if (con.station1.type == "Station" && con.station1 != this.currentNode) {
            validStations.push(con.station1);
          }
          if (con.station2.type == "Station" && con.station2 != this.currentNode) {
            validStations.push(con.station2);
          }
        }
        if (validStations.length >= 1) {
          var randIndex = round(random(validStations.length - 1));
          var randConnection = validStations[randIndex];
          var oldNode = this.currentNode;

          this.currentNode = randConnection;
          var index = oldNode.population.indexOf(this);
          oldNode.population.splice(index, 1);
          this.currentNode.population.push(this);
        }
      }
    }
  }
}

function isANode(Node) {
  for (var i = 0; i < stations.length; i++) {
    if (stations[i] == Node) return true;
  }
  return false;
}
