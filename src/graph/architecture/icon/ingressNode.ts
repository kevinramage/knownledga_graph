import { readFileSync } from "fs";
import { IconNode } from "../iconNode";

export class IngressNode extends IconNode {
    constructor() {
        super();
        this._iconData = readFileSync("resources/kubernetes/ing.svg").toString();
        this._scale = { x: 2.5, y: 2.5 };
        this._initPoint = { x: 2, y: 2 };
    }
}