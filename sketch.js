var stations = [];
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

  for (var i = 0; i < stations.length; i++) {
    stations[i].show();
    stations[i].update();
  }
  for (var i = 0; i < connections.length; i++) {
    connections[i].show();
  }
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
