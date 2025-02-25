import { readFileSync } from "fs";
import { IconNode } from "../iconNode";

export class DatabaseNode extends IconNode {
    constructor() {
        super();
        this._iconData = readFileSync("resources/infrastructure/database.svg").toString();
        this._scale = { x: 0.07, y: 0.07 };
        this._initPoint = { x: 8, y: 8 };
    }
}