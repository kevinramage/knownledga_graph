import { readFileSync } from "fs";
import { IconNode } from "../iconNode";
import { NodeFactoryHandler } from "../nodeFactory";

const appRegex = /^app\s*\((.+?)\)\s*/;
const binaryRegex = /^binary\s*\((.+?)\)\s*/;
const laptopRegex = /^laptop\s*\((.+?)\)\s*/;
const mailRegex = /^mail\s*\((.+?)\)\s*/;
const usbRegex = /^usb\s*\((.+?)\)\s*/;
const userRegex = /^user\s*\((.+?)\)\s*/;

export class CommonNodeFactory {

    createRules() : [RegExp, NodeFactoryHandler][] {
            return [
                [ appRegex, this.createAppNode ],
                [ binaryRegex, this.createBinaryNode ],
                [ laptopRegex, this.createLaptopNode ],
                [ mailRegex, this.createMailNode ],
                [ usbRegex, this.createUsbNode ],
                [ userRegex, this.createUserNode ]
            ]
    }

    private createAppNode() {
        const data = readFileSync("resources/common/app.svg").toString();
        return new IconNode({x: 0.08, y: 0.08}, {x: 5, y: 5}, data);
    }

    private createBinaryNode() {
        const data = readFileSync("resources/common/binary.svg").toString();
        return new IconNode({x: 0.12, y: 0.12}, {x: 5, y: 5}, data);
    }

    private createLaptopNode() {
        const data = readFileSync("resources/common/laptop.svg").toString();
        return new IconNode({x: 0.11, y: 0.11}, {x: 0, y: 0}, data);
    }

    private createMailNode() {
        const data = readFileSync("resources/common/mail.svg").toString();
        return new IconNode({x: 0.11, y: 0.11}, {x: 0, y: 0}, data);
    }

    private createUsbNode() {
        const data = readFileSync("resources/common/usb.svg").toString();
        return new IconNode({x: 0.11, y: 0.11}, {x: 0, y: 0}, data);
    }

    private createUserNode() {
        const data = readFileSync("resources/common/user.svg").toString();
        return new IconNode({x: 0.1, y: 0.1}, {x: 0, y: 0}, data);
    }
}