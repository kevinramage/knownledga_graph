import { IPosition } from "../position";
import { GraphNode } from "./node";

export class Link {
    public static DEFAULT_WIDTH = 150;

    protected _nodeId1: string;
    protected _nodeId2: string;
    protected _node1 : GraphNode | null;
    protected _node2 : GraphNode | null;
    protected _position1 : IPosition | null;
    protected _position2 : IPosition | null;
    protected _text : string | null;
    protected _color : string;

    constructor() {
        this._nodeId1 = "";
        this._nodeId2 = "";
        this._node1 = null;
        this._node2 = null;
        this._position1 = null;
        this._position2 = null;
        this._text = null;
        this._color = "#000000";
    }

    public toXML() {
        if (this._position1 && this._position2) {
            let content = `<line x1="${this._position1.x}" y1="${this._position1.y}" x2="${this._position2.x}" y2="${this._position2.y}" style="stroke:${this._color};stroke-width:1" />`;
            if ( this._text != null ) {
                const fontSize = 20;
                content += `<text x="${this._position1.x + 10}" y="${this._position1.y - 5}" font-size="${fontSize}" fill="${this._color}">${this._text}</text>`;
            }
            return content;
        } else {
            return "";
        }
    }

    public getNodeId1() {
        return this._nodeId1;
    }
    public setNodeId1(value: string) {
        this._nodeId1 = value;
    }

    public getNodeId2() {
        return this._nodeId2;
    }
    public setNodeId2(value: string) {
        this._nodeId2 = value;
    }

    public getNode1() {
        return this._node1;
    }
    public setNode1(value: GraphNode) {
        this._node1 = value;
    }

    public getNode2() {
        return this._node2;
    }
    public setNode2(value: GraphNode) {
        this._node2 = value;
    }

    public getPosition1() {
        return this._position1;
    }
    public setPosition1(value: IPosition) {
        this._position1 = value;
    }

    public getPosition2() {
        return this._position2;
    }
    public setPosition2(value: IPosition) {
        this._position2 = value;
    }

    public getText() {
        return this._text;
    }
    public setText(text: string | null) {
        this._text = text;
    }

    public getColor() {
        return this._color;
    }
    public setColor(color: string) {
        this._color = color;
    }
}