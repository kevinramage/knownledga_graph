import { readFile, readFileSync } from "fs";
import { IconNode } from "../iconNode";

export class UserNode extends IconNode {
    constructor() {
        super();
		this._iconData = readFileSync("resources/common/user.svg").toString()
        this._scale = { x: 0.1, y: 0.1 };
        this._initPoint = { x: 0, y: 0 };
    }
}