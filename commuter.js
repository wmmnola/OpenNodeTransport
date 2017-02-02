var Commuter = function(start, end) {
  this.startNode = start;
  this.endNode = end;
  this.currentNode = this.startNode;
  this.dead = false;
  this.update = function() {
    //  console.log("Current Node: " + this.currentNode.id + " startNode: " +
    //  this.startNode.id);
    if (!this.dead) {
      //console.log("im not dead");
      if (this.currentNode == this.endNode) {
        this.dead = true;
        console.log("I made it!");
      } else if (this.currentNode.connections.length >= 1) {
        var rand = round(random(this.currentNode.connections.length - 1));
        var randConnection = this.currentNode.connections[rand];
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
        //console.log("I moved from " + oldNode.id + " to " + this.currentNode
        //.id);
        this.currentNode.population.push(this);
      }
    }
  }
}
