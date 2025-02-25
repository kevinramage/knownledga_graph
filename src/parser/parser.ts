import { readFile } from "fs/promises";
import { ArchitectureGraph } from "../graph/architecture/graph";
import { ArchitectureParser } from "./architecture";

const regexKnownledga = /\`\`\`knownledga\n(((.*)\r?\n)+)\`\`\`/;

export class KnownledgaParser {
    private _inputFile : string;

    constructor(inputFile: string) {
        this._inputFile = inputFile;
    }

    public async parse() : Promise<ArchitectureGraph | null> {
        const inputFile = this._inputFile || "input.md";
        const content = await readFile(inputFile);
        const text = content.toString().replace(/\r/, "");
        const match = text.match(regexKnownledga);
        if (match != null) {
            let graphText = match[1].trim();
            if (graphText.startsWith("architecture")) {
                graphText = graphText.substring(("architecture").length).trimStart();
                graphText += "\n";
                const graph = new ArchitectureParser(graphText).parse();
                return graph;
            } else {
                console.info("Unknown graph type");
            }
        } else {
            console.info("Not valid knownledga graph");
        }
        return null;
    }
}