var stations = [];
var bigStations = [];
var connections = [];
var MAX_STATIONS = 20;
var grid = [];
var selected = false;
var selectedStation;
var money;

function setup() {
  frameRate(30);
  money = 1000;
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < MAX_STATIONS; i++) {
    var x = random(windowWidth);
    var y = random(50, windowHeight);
    var station = new Station(x, y, i);
    stations.push(station)
  }
  //c = new Connection(s1, s2);
}

function draw() {
  noStroke();
  background(255);
  textSize(32);
  fill(0, 0, 113);
  text("Money: " + money, 0, 32);
  for (var i = 0; i < connections.length; i++) {
    connections[i].show();
  }
  for (var i = 0; i < stations.length; i++) {
    stations[i].show();
    stations[i].update();
    for (var j = 0; j < stations.length; j++) {
      var d = dist(stations[i].x, stations[i].y, stations[j].x, stations[j].y);
      if (d <= stations[i].r / 2 + stations[j].r / 2 && stations[i] != stations[
          j]) {
        console.log("the firs circle has radius " + stations[i].r +
          " the second has radius " + stations[j].r +
          " and they are distance " + d + "apart");
        if (stations[j].populationCap > stations[i].populationCap) {
          absorbStation(stations[i], stations[j]);
        } else {
          absorbStation(stations[j], stations[i]);
        }
        break;
      }
    }
  }

}

function absorbStation(absorbed, absorbing) {

  for (var x = 0; x < absorbed.population.length; x++) {
    absorbing.population.push(absorbed.population[x]);
    absorbed.population[x].currentNode = absorbing;
  }
  for (var x = 0; x < absorbed.connections.length; x++) {
    if (absorbed.connections[x].station1 == absorbed) {
      absorbed.connections[x].station1 = absorbing;
    } else {
      absorbed.connections[x].station2 = absorbing;
    }
    absorbing.connections.push(absorbed.connections[x]);
  }
  var index = stations.indexOf(absorbed);
  stations.splice(index, 1);
  return;
}


function mousePressed() {
  console.log(selected);
  for (var i = 0; i < stations.length; i++) {
    if (dist(mouseX, mouseY, stations[i].x, stations[i].y) <= stations[i].r) {
      if (!selected) {
        selected = true;
        selectedStation = stations[i];
        selectedStation.selected = true;
        console.log(selectedStation);
        break;
      } else if (selected && stations[i] != selectedStation) {
        var c = new Connection(selectedStation, stations[i]);
        if (money >= c.cost) {
          selected = false;
          selectedStation.selected = false;
          connections.push(c);
          selectedStation.connections.push(c);
          stations[i].connections.push(c);
          money -= c.cost;
          break;
        } else {
          selected = false;
          selectedStation.selected = false;
          console.log("Not enough money");
          alert("Not enough money");
        }
      }
    }
  }
}
