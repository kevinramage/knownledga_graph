import { CommonNodeFactory } from "./icon/commonNodeFactory";
import { InfrastructureNodeFactory } from "./icon/infrastructureNodeFactory";
import { KubernetesNodeFactory } from "./icon/kubernetesNodeFactory";
import { GraphNode } from "./node";

export type NodeFactoryHandler = () => GraphNode;

const nodeRegex = /^node\s*\((.+?)\)\s*/;


export class NodeFactory {

    private _commonFactory : CommonNodeFactory;
    private _kubernetesFactory : KubernetesNodeFactory;
    private _infrastructureFactory : InfrastructureNodeFactory;
    

    constructor() {
        this._commonFactory = new CommonNodeFactory();
        this._kubernetesFactory = new KubernetesNodeFactory();
        this._infrastructureFactory = new InfrastructureNodeFactory();
    }

    public createRules() {
        let list : [RegExp, NodeFactoryHandler][] = this._createRules();
        list = list.concat(this._commonFactory.createRules());
        list = list.concat(this._infrastructureFactory.createRules());
        return list.concat(this._kubernetesFactory.createRules());
    }

    private _createRules() : [RegExp, NodeFactoryHandler][] {
        return [
            [nodeRegex, this.createNode],
        ]
    }

    public createNode() : GraphNode { return new GraphNode(); }
}