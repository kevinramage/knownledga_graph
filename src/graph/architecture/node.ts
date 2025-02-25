import { IRectangle } from "../rectangle";

export class GraphNode {
    public static DEFAULT_XPOS = 20;
    public static DEFAULT_YPOS = 20;
    public static DEFAULT_NODEWIDTH = 120;
    public static DEFAULT_NODEHEIGHT = 30;
    public static DEFAULT_COLOR = "#000";

    protected _id: string;
    protected _area : IRectangle;
    protected _text ?: string;
    protected _color : string;

    constructor() {
        this._id = "";
        this._color = GraphNode.DEFAULT_COLOR;
        this._area = { x: GraphNode.DEFAULT_XPOS, y: GraphNode.DEFAULT_YPOS, width: GraphNode.DEFAULT_NODEWIDTH, height: GraphNode.DEFAULT_NODEHEIGHT};
    }

    public toXML(): string {
        const text = this._text || "";
        const fontSize = 20;
        const y = this._area.y + fontSize;
        const textNode = text != "" ? `<text x="${this._area.x}" y="${y}" font-size="${fontSize}" fill="${this._color}">${text}</text>` : "";
        return `
        <rect width="${this._area.width}" height="${this._area.height}" x="${this._area.x}" y="${this._area.y}" stroke="#000000" fill="none" />
        ${textNode}
        `;
    }

    public getArea() : IRectangle {
        return this._area;
    }
    public setArea(area: IRectangle) {
        this._area = area;
    }
    public getText() : string | undefined {
        return this._text;
    }
    public setText(text: string) {
        this._text = text;
    }
    public getId() {
        return this._id;
    }
    public setId(value: string) {
        this._id = value;
    }
    public getColor() {
        return this._color;
    }
    public setColor(value: string) {
        this._color = value;
    }
}