import { readFileSync } from "fs";
import { NodeFactoryHandler } from "../nodeFactory";
import { IconNode } from "../iconNode";

const cloudRegex = /^cloud\s*\((.+?)\)\s*/;
const databaseRegex = /^database\s*\((.+?)\)\s*/;
const dockerRegex = /^docker\s*\((.+?)\)\s*/;
const firewallRegex = /^firewall\s*\((.+?)\)\s*/;
const kubernetesRegex = /^kubernetes\s*\((.+?)\)\s*/;
const proxyRegex = /^proxy\s*\((.+?)\)\s*/;
const wifiRegex = /^wifi\s*\((.+?)\)\s*/;
const worldwideRegex = /^worldwide\s*\((.+?)\)\s*/;

export class InfrastructureNodeFactory {

    createRules() : [RegExp, NodeFactoryHandler][] {
        return [
            [ cloudRegex, this.createCloudNode ],
            [ databaseRegex, this.createDatabaseNode ],
            [ dockerRegex, this.createDockerNode ],
            [ firewallRegex, this.createFirewallNode ],
            [ kubernetesRegex, this.createKubernetesNode ],
            [ proxyRegex, this.createProxyNode ],
            [ wifiRegex, this.createWifiNode ],
            [ worldwideRegex, this.createWorldWideNode ]
        ]
    }

    private createCloudNode() {
        const data = readFileSync("resources/infrastructure/cloud.svg").toString();
        return new IconNode({x: 0.1, y: 0.1}, {x: 0, y: 0}, data);
    }

    private createDatabaseNode() {
        const data = readFileSync("resources/infrastructure/database.svg").toString();
        return new IconNode({x: 0.1, y: 0.1}, {x: 0, y: 0}, data);
    }

    private createDockerNode() {
        const data = readFileSync("resources/infrastructure/docker.svg").toString();
        return new IconNode({x: 3, y: 3}, {x: 0, y: 0}, data);
    }

    private createFirewallNode() {
        const data = readFileSync("resources/infrastructure/firewall.svg").toString();
        return new IconNode({x: 0.1, y: 0.1}, {x: 0, y: 0}, data);
    }

    private createKubernetesNode() {
        const data = readFileSync("resources/infrastructure/kubernetes.svg").toString();
        return new IconNode({x: 3, y: 3}, {x: 0, y: 0}, data);
    }

    private createProxyNode() {
        const data = readFileSync("resources/infrastructure/proxy.svg").toString();
        return new IconNode({x: 0.5, y: 0.5}, {x: -5, y: -5}, data);
    }

    private createWifiNode() {
        const data = readFileSync("resources/infrastructure/wifi.svg").toString();
        return new IconNode({x: 0.1, y: 0.1}, {x: 0, y: 0}, data);
    }

    private createWorldWideNode() {
        const data = readFileSync("resources/infrastructure/worldwide.svg").toString();
        return new IconNode({x: 0.1, y: 0.1}, {x: 0, y: 0}, data);
    }
}