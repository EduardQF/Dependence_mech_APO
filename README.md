# Dependence_mech_APO

This is a Frontend program in javascritp and vis.js how present a interactive dependence-mesh whit the services in Archive/pipline Operators.

The model is in cyt.js files in :public > assets > js > cyt.js

The model is allocated in the div label with id="cy" over the html.

<div id="cy"> </div>

The button options is present in a simple div and the <ul id="affected"></ul> lavel list the services affected in the model.
The nodes is charged of json with the values:
 
 * id: Identify for each node
 * lvl: Importance level. 1 more impoetant, 5 less important
 * tFlow: flow of each service
 * font: values of font in nodes
 * label: text in nodes
 * color: values of colors nodes
 * x: position of nodes in X axes 
 * y:position of nodes in Y axes 
 
 and the edges have the elements: 
 
 * from: origin node 
 * to: destination node
 * arrows: arrow form.
 
In the web page application:

The buttons:
imprtance level : change the colors of nodes and show the nodes with the color of his importance level.
PipLine/Archive : change the colors of nodes and show the nodes with the color of his flow data.

- Critic: show the nodes with Critic services.
- Important: show the nodes with Important services.
- Sencitive: show the nodes with Sencitive services.
- Less sensitive: show the nodes what services is less sensitive.
- Not affect: show the nodes what not affect other services.

For show the services affected if a service is stopped, only press the node with the stopped service and in down of model will present the services affected.

Important: 
the NAVBAR does nothing.
- In the recharge function is necessary have the network.on function.
