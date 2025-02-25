import { readFileSync } from "fs";
import { IconNode } from "../iconNode";

export class ProxyNode extends IconNode {
    constructor() {
        super();
        this._iconData = readFileSync("resources/infrastructure/proxy.svg").toString();
        this._scale = { x: 0.45, y: 0.45 };
        this._initPoint = { x: -5, y: -5 };
    }
}