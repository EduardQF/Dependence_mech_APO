/**********************************************+----------------------+*************************************************************/
/**********************************************|       Model      |*************************************************************/
/**********************************************+----------------------+*************************************************************/

/*
 * Color variabilities for importance level
*/
var Colorlvl = [{ background: '#F8CECC', border: '#B85450' },
{ background: '#FAD7AC', border: '#B46504' },
{ background: '#E1D5E7', border: '#9673A6' },
{ background: '#DAE8FC', border: '#6C8EBF' },
{ background: '#B0E3E6', border: '#0E8088' }];

/*
 * Color variabilities for different data flow present , Archive and PipeLine.
*/
var ColorFlow = [{ background: '#DAE8FC', border: '#6C8EBF' },//archive
{ background: '#B0E3E6', border: '#0E8088' },//pipeline
{ background: '#F5F5F5', border: '#9E9E9E' }];//others

/**
 * Inital values for each node
 * id: Identify for each node
 * lvl: Importance level. 1 more impoetant, 5 less important
 * tFlow: flow of each service
 * font: values of font in nodes
 * label: text in nodes
 * color: values of colors nodes
 * x: position of nodes in X axes 
 * y:position of nodes in Y axes 
*/
var nodes = [
  { id: 1, lvl: 1, tFlow: 0, font: { size: 20 }, label: 'DATABASE', color: { background: '#FFE6CC', border: '#fe0000' }, x: -531, y: -137 },
  { id: 2, lvl: 2, tFlow: 1, font: { size: 20 }, label: 'XTSS', color: { background: '#B0E3E6', border: '#0E8088' }, x: -488, y: -220 },
  { id: 3, lvl: 1, tFlow: 0, font: { size: 20 }, label: 'NGAS', color: { background: '#BAC8D3', border: '#23445D' }, x: -399, y: -268 },
  { id: 4, lvl: 2, tFlow: 1, font: { size: 20 }, label: 'LUSTRE', color: { background: '#D5E8D4', border: '#82B366' }, x: -334, y: -318 },
  { id: 5, lvl: 4, tFlow: 1, font: { size: 20 }, label: 'LUSTRE SCIOPS', color: { background: '#FAD9D5', border: '#AE4132' }, x: -216, y: -363 },
  { id: 6, lvl: 3, tFlow: 1, font: { size: 20 }, label: 'TORQUE/MAUI', color: { background: '#BAC8D3', border: '#23445D' }, x: -40, y: -356 },
  { id: 7, lvl: 5, tFlow: 1, font: { size: 20 }, label: 'JAOPOST MASTER', color: { background: '#BAC8D3', border: '#23445D' }, x: 217, y: -175 },
  { id: 8, lvl: 3, tFlow: 1, font: { size: 20 }, label: 'JAOPOST SPOOL', color: { background: '#BAC8D3', border: '#23445D' }, x: 152, y: -251 },
  { id: 9, lvl: 2, tFlow: 1, font: { size: 20 }, label: 'JAOPOST NODOS', color: { background: '#BAC8D3', border: '#23445D' }, x: 243, y: -101 },
  { id: 10, lvl: 5, tFlow: 2, font: { size: 20 }, label: 'SCIOPS', color: { background: '#BAC8D3', border: '#23445D' }, x: 61, y: -298 },
  { id: 11, lvl: 3, tFlow: 2, font: { size: 20 }, label: 'SCIOPS CLUSTER', color: { background: '#BAC8D3', border: '#23445D' }, x: 228, y: -38 },
  { id: 12, lvl: 5, tFlow: 2, font: { size: 20 }, label: 'SCIOPS PARKING', color: { background: '#BAC8D3', border: '#23445D' }, x: 208, y: 17 },
  { id: 13, lvl: 1, tFlow: 0, font: { size: 20 }, label: 'GOLDEN GATE', color: { background: '#FFF2CC', border: '#D6B656' }, x: 99, y: 66 },
  { id: 14, lvl: 2, tFlow: 1, font: { size: 20 }, label: 'HARVESTER', color: { background: '#BAC8D3', border: '#23445D' }, x: -17, y: 125 },
  { id: 15, lvl: 1, tFlow: 1, font: { size: 20 }, label: 'AQUA PIPELINE AGENT', color: { background: '#B1DDF0', border: '#10739E' }, x: -215, y: 153 },
  { id: 16, lvl: 5, tFlow: 1, font: { size: 20 }, label: 'PROTRACK', color: { background: '#BAC8D3', border: '#23445D' }, x: -362, y: 102 },
  { id: 17, lvl: 2, tFlow: 1, font: { size: 20 }, label: 'DATA TRACKER', color: { background: '#DAE8FC', border: '#6C8EBF' }, x: -458, y: 38 },
  { id: 18, lvl: 5, tFlow: 1, font: { size: 20 }, label: 'AQUA', color: { background: '#BAC8D3', border: '#23445D' }, x: -547, y: -42 }

];

/** 
 * Connections or relationes between nodes,
 * from: origin node 
 * to: destination node
 * arrows: arrow form. 
*/
var edges = [
  { from: 1, to: 3, arrows: 'to' }, { from: 1, to: 9, arrows: 'to' }, { from: 1, to: 11, arrows: 'to' }, { from: 1, to: 12, arrows: 'to' }, { from: 1, to: 13, arrows: 'to' }, { from: 1, to: 14, arrows: 'to' }, { from: 1, to: 15, arrows: 'to' }, { from: 1, to: 16, arrows: 'to' }, { from: 1, to: 17, arrows: 'to' }, { from: 1, to: 18, arrows: 'to' },
  { from: 2, to: 17, arrows: 'to' }, { from: 2, to: 15, arrows: 'to' },
  { from: 3, to: 9, arrows: 'to' }, { from: 3, to: 11, arrows: 'to' }, { from: 3, to: 15, arrows: 'to' }, { from: 3, to: 16, arrows: 'to' }, { from: 3, to: 18, arrows: 'to' },
  { from: 4, to: 9, arrows: 'to' },
  { from: 5, to: 11, arrows: 'to' },
  { from: 13, to: 3, arrows: 'to' }, { from: 13, to: 14, arrows: 'to' }, { from: 13, to: 15, arrows: 'to' }, { from: 13, to: 16, arrows: 'to' }, { from: 13, to: 17, arrows: 'to' }, { from: 13, to: 18, arrows: 'to' },
  { from: 17, to: 18, arrows: 'to' }
];

/**
 * html elmente what contain the vis diagram.
 */

var container = document.getElementById('cy');

/**
 * optiones for nodes, edges, physics, and other properties of network diagram.
 * randomseed: number of seed for diagram
 * physics: properties of physics in the model
 */
var options = {
  layout: {
    randomSeed: undefined,

  },
  edges: {
    smooth: {
      type: 'continuous'
    }
  }, nodes: {
    shape: 'box',

  },
  physics: false,
  /*interaction: {
    tooltipDelay: 200,
    hideEdgesOnDrag: true
  }*/
}

/**
 * variable what contain the diagram and his options. 
 */
var network = new vis.Network(container, { nodes, edges }, options);


/**********************************************+----------------------+*************************************************************/
/**********************************************|       functions      |*************************************************************/
/**********************************************+----------------------+*************************************************************/

/**
 * variable for recongince the flow tipe, ARCHIVE o PIPLINE
 */
var flow = true;

/**
 * function how change the color nodes in the diagram fo each level.
 */
function showLevels() {
  nodes.forEach(node => {
    node.color = Colorlvl[node.lvl - 1];
  });
  recharge();
}

/**
 * function how change the color nodes for flow type.
 */
function showPipe() {
  var tip = document.getElementById("flow");

  flow ? tip.innerText = "Archive" : tip.innerText = "PipeLine";

  nodes.forEach(node => {
    node.color = ColorFlow[2];

    if (flow && node.tFlow == 0) {
      console.log("Archive");
      node.color = ColorFlow[node.tFlow];
    }

    if (!flow && node.tFlow == 1) {
      console.log("Pipline");
      node.color = ColorFlow[node.tFlow];
    }
  });

  recharge();
  flow = !flow;
}

/**
 * 
 * @param {*} level number with the importancy level 
 * 
 * function who change the color nodes and print the nodes with the importancy level selected. 
 */
function showOneLevel(level) {

  nodes.forEach(node => {
    if (node.lvl == level) {
      node.color = Colorlvl[node.lvl - 1];
    } else {
      node.color = ColorFlow[2];
    }
  });
  recharge();
}

/**
 * function how recharge all model with the new properties, and add the function for select action.
 */
function recharge() {
  network = new vis.Network(container, { nodes, edges }, options);
  network.on('select', function (params) {
    document.getElementById("badFunction").innerHTML = 'Services Affeced';
    var nodesConnect = network.getConnectedNodes(params.nodes[0], 'to');
    nodesConnect.forEach(node => {
      var nod = document.createElement("LI");
      var textnod = document.createTextNode(nodes[node - 1].label);
      nod.append(textnod);
      document.getElementById("badFunction").appendChild(nod);
    });
  });
}

/**
 * function how present the services affected if the node have a problem.
 */
network.on('select', function (params) {
  document.getElementById("badFunction").innerHTML = 'Services Affeced';
  var nodesConnect = network.getConnectedNodes(params.nodes[0], 'to');
  nodesConnect.forEach(node => {
    var nod = document.createElement("LI");
    var textnod = document.createTextNode(nodes[node - 1].label);
    nod.append(textnod);
    document.getElementById("badFunction").appendChild(nod);
  });
});
