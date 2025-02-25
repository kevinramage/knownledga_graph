import { ArchitectureGraph } from "./graph";
import { Link } from "./link";
import { GraphNode } from "./node";

export class GraphDependency {
    private _elements: GraphDependencyElement[];

    constructor() {
        this._elements = [];
    }

    build(nodes: GraphNode[], links: Link[]) {
        nodes.forEach(n => {
            const elt = new GraphDependencyElement(n);
            this._elements.push(elt);
        });
        links.forEach(l => {
            const nodeDep = l.getNode1();
            const nodeRes = l.getNode2();
            if (nodeDep && nodeRes) {
                const element = this.getDependencyElement(nodeRes);
                const depElement = this.getDependencyElement(nodeDep);
                element?.addDependency(depElement as GraphDependencyElement);
            }
        });
        this.determineOrder();
    }

    private determineOrder() {
        let basedElement = this.getRootElements();
        let order = 0;
        while (basedElement.length > 0) {
            basedElement.forEach((e, i) => {
                const x = order * (GraphNode.DEFAULT_NODEWIDTH + Link.DEFAULT_WIDTH) + ArchitectureGraph.MARGIN_X;
                const y = i * (GraphNode.DEFAULT_NODEHEIGHT * 1.5) + ArchitectureGraph.MARGIN_Y;
                const area = e.getNode().getArea();
                area.x = x; area.y = y;
                e.getNode().setArea(area); 
                e.setOrder(order); 
            });
            order++;
            basedElement = this.getNextElements(basedElement);
        }
    }

    getRootElements() {
        return this._elements.filter(e => e.isRootElement());
    }

    getNextElements(elts: GraphDependencyElement[]) {
        const nextElts = elts.map(e => e.getNextElements()).flat();
        let uniqueElts : GraphDependencyElement[] = [];
        nextElts.forEach(e => {
            const eltExisted = uniqueElts.find(e => e.getNode().getId() == e.getNode().getId());
            if (eltExisted == undefined) {
                uniqueElts.push(e);
            }
        });
        return uniqueElts;
    }

    getDependencyElement(node: GraphNode) {
        return this._elements.find(e => e.getNode().getId() == node.getId());
    }
}

export class GraphDependencyElement {
    private _node: GraphNode;
    private _nextElements : GraphDependencyElement[];
    private _dependencies : GraphDependencyElement[];
    private _order : number;

    constructor(node: GraphNode) {
        this._node = node;
        this._nextElements = [];
        this._dependencies = [];
        this._order = 0;
    }

    public addDependency(dependency: GraphDependencyElement) {
        dependency._nextElements.push(this);
        this._dependencies.push(dependency);
    }

    public getOrder() {
        return this._order;
    }

    public setOrder(value: number) {
        this._order = value;
    }

    public getNode() : GraphNode {
        return this._node;
    }

    public getNextElements() {
        return this._nextElements;
    }

    public isRootElement() {
        return this._dependencies.length == 0;
    }
}