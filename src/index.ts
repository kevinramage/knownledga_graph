import { program } from "commander";
import { KnownledgaParser } from "./parser/parser";
import { Generator } from "./generator";

class App {
    async run() {
        console.info(" - Start program");

        // Program
        program.name("KnownledgaGraph - Cli")
            .description("Client to generate svg from a graph descriptor")
            .option("-i, --input <string>")
            .option("-o, --output <string");
        program.parse();

        // Parse input
        console.info(" - Parse input");
        const inputFile = program.opts().input || "";
        const parser = new KnownledgaParser(inputFile);
        const graph = await parser.parse();

        // Generator
        if (graph) {
            console.info(" - Compute position");
            graph.compute();

            console.info(" - Generate output");
            const outputFile = program.opts().output || "";
            const generator = new Generator(outputFile, graph);
            await generator.generate();
        }

        console.info(" - Completed");
    }
}

new App().run();