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
  var station = new Station(100, 100);
  stations.push(station)
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < MAX_STATIONS; i++) {
    var x = random(windowWidth);
    var y = random(50, windowHeight);
    var station = new Station(x, y);
    stations.push(station)
  }
  //c = new Connection(s1, s2);
}

function draw() {
  background(255);
  textSize(32);
  fill(0, 0, 113);
  text("Money: " + money, 0, 32);

  for (var i = 0; i < stations.length; i++) {
    stations[i].show();
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
        console.log(selectedStation);
        break;
      } else if (selected && stations[i] != selectedStation) {
        if (money >= 100) {
          selected = false;
          var c = new Connection(selectedStation, stations[i]);
          connections.push(c);
          selectedStation.connections.push(c);
          stations[i].connections.push(c);
          money -= 100;
          break;
        } else {
          console.log("Not enough money");
          alert("Not enough money");
        }
      }
    }
  }
}
