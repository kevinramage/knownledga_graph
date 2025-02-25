import { IPosition } from "../position";
import { GraphNode } from "./node";

export class IconNode extends GraphNode {
    public static DEFAULT_WIDTH = 50;
    public static DEFAULT_HEIGHT = 50;

    protected _iconData : string;
    protected _scale : IPosition;
    protected _initPoint : IPosition;

    constructor(scale ?: IPosition, initPoint ?: IPosition, iconData ?: string) {
        super();
        this._scale = scale || { x: 1, y: 1};
        this._initPoint = initPoint || { x: 0, y: 0 };
        this._iconData = iconData || "";
        this._area.width = IconNode.DEFAULT_WIDTH;
        this._area.height = IconNode.DEFAULT_HEIGHT;
    }

    public toXML(): string {
        const text = this._text || "";
        const fontSize = 20;
        const y = this._area.y + this._area.height;
        return `
        <g transform="translate(${this._area.x + this._initPoint.x} ${this._area.y + this._initPoint.y}) scale(${this._scale.x} ${this._scale.y})">
        ${this._iconData}
        </g>
        <text x="${this._area.x}" y="${y}" font-size="${fontSize}">${text}</text>
        `;
    }

    public getIconData() {
        return this._iconData;
    }
    public setIconData(data: string) {
        this._iconData = data;
    }
}