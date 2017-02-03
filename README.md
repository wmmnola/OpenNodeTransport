# Open Node Transport

An open source Transportation game based on node connections. Game hosted (here)[https://wmmnola.github.io/OpenNodeTransport/]

## Technical Deitals

This is written in javascript, with the p5.js libray

## How to play

The game revovles around nodes and connections which you build between those nodes.
Each node begins with a random size. In the node there are commuters, whom have a specific destination node.
You are in the role of a builder, who must construct connections between the nodes.
The cost of construction is directly proportional to the (Euclidian Distance)[https://en.wikipedia.org/wiki/Euclidean_distance] between those two nodes
Once the nodes are constructed, the commuters navigate them randomly, until their destination node is reached.

Everytime a commuter reaches their destination node, you get money. The amount of which depends on the number of
nodes they had to travel in order to reach their destination.
The less nodes they went through the more money you get.

Commuters are spawned by the nodes. The number of which are determined by the growRate,
which is indicated by the color of the
node(Red is a negative growthRate, green is a postive one.)
The growth rate is usually positive so long as the node's infastructure can support more.
Infastructure of a destination node is increased everytime a commuter reaches that node.

## Improvements to make

* Implement a more elegent growth algorithim. Perhaps (Feignenbaum)[https://en.wikipedia.org/wiki/Feigenbaum_constants]

* Implement some way to express traffic on a node. 
