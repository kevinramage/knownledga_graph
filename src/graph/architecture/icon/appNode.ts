
import { readFileSync } from "fs";
import { IconNode } from "../iconNode";

export class AppNode extends IconNode {
    constructor() {
        super();
        this._iconData = readFileSync("resources/infrastructure/app.svg").toString();
        this._scale = { x: 0.08, y: 0.08 };
        this._initPoint = { x: 5, y: 5 };
    }
}