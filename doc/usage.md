# Usage
Knownledga graph help you to generate architecture graph from markdown syntax.
Basic syntax:

<u>simpleNode.md</u>
```
\```knownledga
architecture
node(text="myFirstNode")
\```
```

Compile source code to SVG image
```
tsc
node .\dist\index.js
```

<u>result_simpleNode.svg</u>

![simple node](./svg/result_simpleNode.svg)


## Graph
Graph syntax

## Node
Node syntax: 
node(key1="value1",...keyX="valueX")

All arguments possibles:

* id: node id (Uselfull to link node with other elements)
Must be a string

* x: x position in the graph
Must be between number value XXXX and XXXX values
Default value is XXXX

* y: y position in the graph
Must be between number value XXXX and XXXX values
Default value is XXXX

* width: node width
Must be between number value XXXX and XXXX values
Default value is XXXX

* height: node height
Must be between number value XXXX and XXXX values
Default value is XXXX

* text: node text
Must be a string value (maximum length authorized is XXXX)
Default value is empty

* color: text color
Must be a string value (Can be predefined html color, hexadecimal color or rgb color)
Default value is #000

## Link

Link syntax: 
node1 --> node2

<u>simpleLink.md</u>
```
\```knownledga
architecture
node(id="node1",text="myFirstNode")
node(id="node2",text="mySecondNode")
node(id="nodeRes",text="myResultNode")
node1--->nodeRes
node2--->nodeRes
\```
```

<u>result_simpleLink.svg</u>

![simple link](./svg/result_simpleLink.svg)

## Icon

Icon syntax: 
<iconName>(key1="value1",...keyX="valueX")

All icons name possibles are list [here](./icones.md)

All arguments possibles:

<u>simpleIcon.md</u>
```
\```knownledga
architecture
user(id="user1")
proxy(id="proxy1")
app(id="app1")
database(id="database1")
user1--->proxy1
proxy1--->app1
app1--->database1
\```
```

<u>result_simpleIcon.svg</u>

![simple icon](./svg/result_simpleIcon.svg)

## Group

## Improvement

* Only compatible with LR positionning
* Determine node positioning
* Smooth link