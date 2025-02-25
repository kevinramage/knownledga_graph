import {writeFile } from "node:fs/promises";
import { ArchitectureGraph } from "./graph/architecture/graph";

export class Generator {
    private _outputFile: string;
    private _graph : ArchitectureGraph;

    constructor(outputFile: string, graph: ArchitectureGraph) {
        this._outputFile = outputFile;
        this._graph = graph;
    }

    public generate() : Promise<void> {
        const outputFile = this._outputFile != "" ? this._outputFile : "output.svg";
        return writeFile(outputFile, this._graph.toXML());
    }
}