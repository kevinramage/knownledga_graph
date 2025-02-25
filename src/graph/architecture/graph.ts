import { IPosition } from "../position";
import { IRectangle } from "../rectangle";
import { GraphDependency } from "./graphDependency";
import { Link } from "./link";
import { GraphNode } from "./node";

export class ArchitectureGraph {
    public static DEFAULT_WIDTH = 50;
    public static DEFAULT_HEIGHT = 50;
    public static MARGIN_X = 10;
    public static MARGIN_Y = 10;

    private _links: Link[];
    private _nodes: GraphNode[];
    private _width: number;
    private _height : number;

    constructor() {
        this._nodes = [];
        this._links = [];
        this._width = ArchitectureGraph.DEFAULT_WIDTH;
        this._height = ArchitectureGraph.DEFAULT_HEIGHT;
    }

    public addNode(node: GraphNode) : void {
        this._nodes.push(node);
    }

    public addLink(link: Link) {
        this._links.push(link);
    }

    public compute() {

        // Resolve link dependencies
        this.resolveLinkDependencies();

        // Determine node x and y position
        this.determineNodePosition();

        // Determine link position
        this.determineLinkPositions();

        // Compute graph width and height
        this.computeGraphProperties();
        console.debug("Graph width: " + this._width);
        console.debug("Graph height: " + this._height);
    }

    private resolveLinkDependencies() {
        this._links.forEach(l => {
            const node1 = this._nodes.find(n => n.getId() != "" && n.getId() == l.getNodeId1());
            if (node1) { l.setNode1(node1); }
            const node2 = this._nodes.find(n => n.getId() != "" && n.getId() == l.getNodeId2());
            if (node2) { l.setNode2(node2); }
        });
    }

    private determineNodePosition() {
        const graphDependency = new GraphDependency();
        graphDependency.build(this._nodes, this._links);
    }

    private computeGraphProperties() {
        let width = ArchitectureGraph.DEFAULT_WIDTH;
        let height = ArchitectureGraph.DEFAULT_HEIGHT;
        this._nodes.forEach(n => {
            const area = n.getArea() as IRectangle;
            if (area.x + area.width > width) {
                width = area.x + area.width + ArchitectureGraph.MARGIN_X;
            }
            if (area.y + area.height > height) {
                height = area.y + area.height + ArchitectureGraph.MARGIN_Y;
            }
        });
        this._width = width;
        this._height = height;
    }

    private determineLinkPositions() {
        this._links.forEach(l => {
            const node1 = l.getNode1();
            const node2 = l.getNode2();
            if (node1 && node2) {
                let minNode = node1;
                let maxNode = node2;
                if (node2.getArea().x < node1.getArea().x) {
                    minNode = node2; maxNode = node1;
                }
                let position1 : IPosition = {
                    x: minNode.getArea().x + minNode.getArea().width,
                    y: minNode.getArea().y + minNode.getArea().height / 2
                }
                let position2 : IPosition = {
                    x: maxNode.getArea().x,
                    y: maxNode.getArea().y + maxNode.getArea().height / 2
                }
                l.setPosition1(position1);
                l.setPosition2(position2);
            }
        });
    }

    public toXML() {
        let svgText = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="${this._width}"
   height="${this._height}"
   version="1.1"
   id="svg13826"
   inkscape:version="0.91 r13725">
`;
        this._nodes.forEach(n => {
            svgText += n.toXML() + "\n";
        });
        this._links.forEach(l => {
            svgText += l.toXML() + "\n";
        });
        svgText += '</svg>';
        return svgText;
    }

    public getWidth() {
        return this._width;
    }

    public getHeight() {
        return this._height;
    }

    public getNodesCount() {
        return this._nodes.length;
    }
    public getLinksCount() {
        return this._links.length;
    }
}