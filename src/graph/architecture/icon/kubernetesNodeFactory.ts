import { readFileSync } from "fs";
import { IconNode } from "../iconNode";
import { NodeFactoryHandler } from "../nodeFactory";

const kubeCroleRegex = /^kube_crole\s*\((.+?)\)\s*/;
const kubeCmRegex = /^kube_cm\s*\((.+?)\)\s*/;
const kubeCrbRegex = /^kube_crb\s*\((.+?)\)\s*/;
const kubeCronJobRegex = /^kube_cronjob\s*\((.+?)\)\s*/;
const kubeDeployRegex = /^kube_deploy\s*\((.+?)\)\s*/;
const kubeDsRegex = /^kube_ds\s*\((.+?)\)\s*/;
const kubeEpRegex = /^kube_ep\s*\((.+?)\)\s*/;
const kubeGroupRegex = /^kube_group\s*\((.+?)\)\s*/;
const kubeHpaRegex = /^kube_hpa\s*\((.+?)\)\s*/;
const kubeIngRegex = /^kube_ing\s*\((.+?)\)\s*/;
const kubeJobRegex = /^kube_job\s*\((.+?)\)\s*/;
const kubeLimitsRegex = /^kube_limits\s*\((.+?)\)\s*/;
const kubeNetpolRegex = /^kube_netpol\s*\((.+?)\)\s*/;
const kubeNsRegex = /^kube_ns\s*\((.+?)\)\s*/;
const kubePodRegex = /^kube_pod\s*\((.+?)\)\s*/;
const kubePspRegex = /^kube_psp\s*\((.+?)\)\s*/;
const kubePvRegex = /^kube_pv\s*\((.+?)\)\s*/;
const kubePvcRegex = /^kube_pvc\s*\((.+?)\)\s*/;
const kubeQuotaRegex = /^kube_quota\s*\((.+?)\)\s*/;
const kubeRbRegex = /^kube_rb\s*\((.+?)\)\s*/;
const kubeRoleRegex = /^kube_role\s*\((.+?)\)\s*/;
const kubeRsRegex = /^kube_rs\s*\((.+?)\)\s*/;
const kubeSaRegex = /^kube_sa\s*\((.+?)\)\s*/;
const kubeScRegex = /^kube_sc\s*\((.+?)\)\s*/;
const kubeSecretRegex = /^kube_secret\s*\((.+?)\)\s*/;
const kubeStsRegex = /^kube_sts\s*\((.+?)\)\s*/;
const kubeSvcRegex = /^kube_svc\s*\((.+?)\)\s*/;
const kubeVolRegex = /^kube_vol\s*\((.+?)\)\s*/;

export class KubernetesNodeFactory {
    createRules() : [RegExp, NodeFactoryHandler][] {
        return [
            [ kubeCroleRegex, this.createCRoleNode ],
            [ kubeCmRegex, this.createCmNode ],
            [ kubeCrbRegex, this.createCrbNode ],
            [ kubeCronJobRegex, this.createCronjobNode ],
            [ kubeDeployRegex, this.createDeployNode ],
            [ kubeDsRegex, this.createDsNode ],
            [ kubeEpRegex, this.createEpNode ],
            [ kubeGroupRegex, this.createGroupNode ],
            [ kubeHpaRegex, this.createHpaNode ],
            [ kubeIngRegex, this.createIngNode ],
            [ kubeJobRegex, this.createJobNode ],
            [ kubeLimitsRegex, this.createLimitsNode ],
            [ kubeNetpolRegex, this.createNetpolNode ],
            [ kubeNsRegex, this.createNsNode ],
            [ kubePodRegex, this.createPodNode ],
            [ kubePspRegex, this.createPspNode ],
            [ kubePvRegex, this.createPvNode ],
            [ kubePvcRegex, this.createPvcNode ],
            [ kubeQuotaRegex, this.createQuotaNode ],
            [ kubeRbRegex, this.createRbNode ],
            [ kubeRoleRegex, this.createRoleNode ],
            [ kubeRsRegex, this.createRsNode ],
            [ kubeSaRegex, this.createSaNode ],
            [ kubeScRegex, this.createScNode ],
            [ kubeSecretRegex, this.createSecretNode ],
            [ kubeStsRegex, this.createStsNode ],
            [ kubeSvcRegex, this.createSvcNode ],
            [ kubeVolRegex, this.createVolNode ],
        ]
    }

    private createCRoleNode() {
        const data = readFileSync("resources/kubernetes/c-role.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createCmNode() {
        const data = readFileSync("resources/kubernetes/cm.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }
    
    private createCrbNode() {
        const data = readFileSync("resources/kubernetes/crb.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createCronjobNode() {
        const data = readFileSync("resources/kubernetes/cronjob.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createDeployNode() {
        const data = readFileSync("resources/kubernetes/deploy.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createDsNode() {
        const data = readFileSync("resources/kubernetes/ds.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createEpNode() {
        const data = readFileSync("resources/kubernetes/ep.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createGroupNode() {
        const data = readFileSync("resources/kubernetes/group.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createHpaNode() {
        const data = readFileSync("resources/kubernetes/hpa.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createIngNode() {
        const data = readFileSync("resources/kubernetes/ing.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createJobNode() {
        const data = readFileSync("resources/kubernetes/job.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createLimitsNode() {
        const data = readFileSync("resources/kubernetes/limits.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createNetpolNode() {
        const data = readFileSync("resources/kubernetes/netpol.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createNsNode() {
        const data = readFileSync("resources/kubernetes/ns.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createPodNode() {
        const data = readFileSync("resources/kubernetes/pod.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createPspNode() {
        const data = readFileSync("resources/kubernetes/psp.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createPvNode() {
        const data = readFileSync("resources/kubernetes/pv.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createPvcNode() {
        const data = readFileSync("resources/kubernetes/pvc.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createQuotaNode() {
        const data = readFileSync("resources/kubernetes/quota.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createRbNode() {
        const data = readFileSync("resources/kubernetes/rb.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createRoleNode() {
        const data = readFileSync("resources/kubernetes/role.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createRsNode() {
        const data = readFileSync("resources/kubernetes/rs.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createSaNode() {
        const data = readFileSync("resources/kubernetes/sa.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createScNode() {
        const data = readFileSync("resources/kubernetes/sc.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createSecretNode() {
        const data = readFileSync("resources/kubernetes/secret.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createStsNode() {
        const data = readFileSync("resources/kubernetes/sts.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createSvcNode() {
        const data = readFileSync("resources/kubernetes/svc.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }

    private createVolNode() {
        const data = readFileSync("resources/kubernetes/vol.svg").toString();
        return new IconNode({x: 2.5, y: 2.5}, {x: 2, y: 2}, data);
    }
}