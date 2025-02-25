import { AppNode } from "./icon/appNode";
import { DatabaseNode } from "./icon/databaseNode";
import { KubernetesNodeFactory } from "./icon/kubernetesNodeFactory";
import { ProxyNode } from "./icon/proxyNode";
import { UserNode } from "./icon/userNode";
import { GraphNode } from "./node";

export type NodeFactoryHandler = () => GraphNode;

const nodeRegex = /^node\s*\((.+?)\)\s*/;
const databaseRegex = /^database\s*\((.+?)\)\s*/;
const userRegex = /^user\s*\((.+?)\)\s*/;
const proxyRegex = /^proxy\s*\((.+?)\)\s*/;
const appRegex = /^app\s*\((.+?)\)\s*/;

export class NodeFactory {

    private _kubernetesFactory : KubernetesNodeFactory;

    constructor() {
        this._kubernetesFactory = new KubernetesNodeFactory();
    }

    public createRules() {
        const list : [RegExp, NodeFactoryHandler][] = this._createRules();
        return list.concat(this._kubernetesFactory.createRules());
    }

    private _createRules() : [RegExp, NodeFactoryHandler][] {
        return [
            [nodeRegex, this.createNode],
            [databaseRegex, this.createDatabase],
            [userRegex, this.createUserNode],
            [proxyRegex, this.createProxyNode],
            [appRegex, this.createAppNode]
        ]
    }

    public createNode() : GraphNode { return new GraphNode(); }
    public createUserNode() : GraphNode { return new UserNode(); }
    public createProxyNode() { return new ProxyNode(); }
    public createAppNode() { return new AppNode(); }
    public createDatabase() { return new DatabaseNode(); }
}