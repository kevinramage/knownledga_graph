import { ArchitectureGraph } from "../graph/architecture/graph";
import { GraphNode } from "../graph/architecture/node";
import { Link } from "../graph/architecture/link";
import { NodeFactory, NodeFactoryHandler } from "../graph/architecture/nodeFactory";

const attributesRegex = /([a-z|A-Z|0-9|\_]+)=\"(.*?)\"((?:,(?:[a-z|A-Z|0-9|\_]+)=\"(?:.*?)\")*)/;
const commentRegex = /^#.+\r?\n?/;
const linkRegex=/([a-z|A-Z|0-9|\_]+)--->([a-z|A-Z|0-9|\_]+)\r?\n?/;

export class ArchitectureParser {
    private _nodeRegexs : [RegExp, NodeFactoryHandler][];
    private _text : string;

    constructor(text: string) {
        const nodeFactory = new NodeFactory();
        this._text = text;
        this._nodeRegexs = nodeFactory.createRules();
    }

    public parse() {
        const graph = new ArchitectureGraph();

        let content = this._text;
        while (content != "") {
            let [ result, newContent ] = this.parseElement(graph, content);
            content = newContent;
            if (!result) { 
                console.info("Invalid content: " + content);
                break;
            }
        }
        console.debug("Nodes count: " + graph.getNodesCount());
        console.debug("Link count: " + graph.getLinksCount());

        return graph;
    }

    private parseElement(graph: ArchitectureGraph, content: string) : [ boolean, string] {
        // Comment
        let [result, newContent] = this.parseComment(content);
        if (!result) {
            // Node

            [result, newContent] = this.parseNode(graph, content);
            if (!result) {

                // Link
                return this.parseLink(graph, content);
            } else {
                return [result, newContent];
            }
        } else {
            return [result, newContent];
        }
    }

    private parseComment(content: string) : [boolean, string] {
        if (commentRegex.test(content)) {
            let match = content.match(commentRegex);
            if (match) {
                content = content.substring((match[0].length))
                return [true, content];
            } else {
                return [false, content];
            }
        } else {
            return [false, content];
        }
    }

    private parseNode(graph: ArchitectureGraph, content: string) : [boolean, string] {
        for (let key in this._nodeRegexs) {
            const [regex, nodeCreation] = this._nodeRegexs[key];
            if (regex.test(content)) {
                let match = content.match(regex);
                if (match) {
                    this.addNode(graph, match, nodeCreation);
                    content = content.substring((match[0].length));
                    return [ true, content];
                }
            }
        }
        return [false, content]
    }

    private parseLink(graph: ArchitectureGraph, content: string) : [boolean, string] {
        if (linkRegex.test(content)) {
            let match = content.match(linkRegex);
            if (match) {
                this.addLink(graph, match);
                content = content.substring((match[0].length));
                return [true, content];
            } else {
                return [false, content];
            }
        } else {
            return [false, content];
        }
    }

    private addLink(graph: ArchitectureGraph, match: RegExpMatchArray) {
        const link = new Link();
        link.setNodeId1(match[1]);
        link.setNodeId2(match[2]);
        graph.addLink(link);
    }

    private addNode(graph: ArchitectureGraph, match: RegExpMatchArray, nodeCreation: NodeFactoryHandler) {
        const args = this.parseAttributes(match[1]);

        // Create node
        const node = nodeCreation();

        // Id
        const id = this.getTextAttr(args, "id") || "";
        node.setId(id);

        // Area
        const area = node.getArea();
        const x = this.getNumberAttr(args, "x") || GraphNode.DEFAULT_XPOS;
        const y = this.getNumberAttr(args, "y") || GraphNode.DEFAULT_YPOS;
        const width = this.getNumberAttr(args, "width");
        const height = this.getNumberAttr(args, "height");
        if (width) { area.width = width; }
        if (height) { area.height = height; }
        node.setArea(area);

        // Text
        const text = this.getTextAttr(args, "text") || "";
        node.setText(text);

        // Color
        const color = this.getTextAttr(args, "color") || GraphNode.DEFAULT_COLOR;
        node.setColor(color);
        
        // Add to graph
        graph.addNode(node);
    }

    private parseAttributes(text: string) {
        let attrs : {[key: string] : string} = {};
        const match = text.match(attributesRegex);
        if ( match != null ) {
            const key = match[1];
            const value = match[2];
            attrs[key] = value;
            if (match.length > 3) {
                const newObj = this.parseAttributes(match[3]);
                this.mergeAttrs(attrs, newObj);
            }
        }
        return attrs;
    }

    private mergeAttrs(obj1: {[key: string] : string}, obj2: {[key: string] : string} ) {
        Object.keys(obj2).forEach((key) => {
            obj1[key] = obj2[key];
        });
        return obj1;
    }

    private getTextAttr(obj: {[key: string] : string}, key: string) : string | undefined {
        return obj[key];
    }

    private getNumberAttr(obj: {[key: string] : string}, key: string) : number | undefined {
        if (obj[key]) {
            return Number.parseInt(obj[key]);
        } else {
            return undefined;
        }
    }
}