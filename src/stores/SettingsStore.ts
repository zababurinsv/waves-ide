import { observable, action, computed } from 'mobx';
import RootStore from '@stores/RootStore';
import SubStore from '@stores/SubStore';
import { mediator } from '@src/services';
import { EVENTS } from '@src/layout/Main/TabContent/Editor';
import { NETWORKS } from '@src/constants';

interface INode {
    chainId: string
    url: string
    system?: boolean
    faucet? : string
}


class SettingsStore extends SubStore {
    systemNodes: INode[] = [
        {...NETWORKS.STAGENET, system: true},
        {...NETWORKS.TESTNET, system: true},
        {...NETWORKS.MAINNET, system: true},
    ];

    @observable nodeTimeout = 60000;
    @observable testTimeout = 60000;
    @observable defaultAdditionalFee = 0;
    @observable theme: 'light' | 'dark' = 'light';
    @observable customNodes: INode[] = [];

    @observable activeNodeIndex = 1;

    constructor(rootStore: RootStore, initState: any) {
        super(rootStore);
        if (initState != null) {
            this.customNodes = initState.customNodes;
            this.activeNodeIndex = initState.activeNodeIndex;
            this.nodeTimeout = initState.nodeTimeout;
            this.defaultAdditionalFee = initState.defaultAdditionalFee || 0;
            this.testTimeout = initState.testTimeout;
            this.theme = initState.theme || 'light';
        }
    }

    @computed
    get nodes() {
        return [...this.systemNodes, ...this.customNodes];
    }

    @computed
    get defaultNode() {
        return this.nodes[this.activeNodeIndex];
    }

    @computed
    get defaultChainId() {
        return this.defaultNode.chainId;
    }

    @computed
    get consoleEnv() {
        const defNode = this.defaultNode;
        if (!defNode) return {};
        const activeAcc = this.rootStore.accountsStore.activeAccount;
        return {
            API_BASE: defNode.url,
            CHAIN_ID: defNode.chainId,
            SEED: activeAcc && activeAcc.seed,
            accounts: this.rootStore.accountsStore.accounts.map(acc => acc.seed),
            isScripted: activeAcc && activeAcc.isScripted,
            timeout: this.nodeTimeout,
            mochaTimeout: this.testTimeout,
            defaultAdditionalFee: this.defaultAdditionalFee,
            file: this.rootStore.filesStore.getFileContent
        };
    }

    @computed
    get contextInfo() {
        const accString = this.rootStore.accountsStore.activeAccount
            ? `Selected account: ${this.rootStore.accountsStore.activeAccount.address}`
            : 'No account selected';
        const currentNode = this.rootStore.settingsStore.defaultNode;
        return `${accString}. Using node: ${currentNode.url} with chainId ${currentNode.chainId}`;
    }

    @action
    addNode(node: INode) {
        this.customNodes.push(node);
    }

    @action
    deleteNode(i: number) {
        this.customNodes.splice(i - 3, 1);
        if (this.activeNodeIndex >= i) this.activeNodeIndex -= 1;
    }

    @action
    updateNode(value: string, i: number, field: 'url' | 'chainId') {
        this.customNodes[i - 3][field] = value;
    }

    @action
    setDefaultNode(i: number) {
        this.activeNodeIndex = i;
    }

    @action
    updateTimeout(t: number, field: 'node' | 'test') {
        if (field === 'node') {
            this.nodeTimeout = t;
        } else if (field === 'test') {
            this.testTimeout = t;
        }
    }

    @action
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        mediator.dispatch(EVENTS.UPDATE_THEME, this.theme);
    }

    public serialize = () => ({
        customNodes: this.customNodes,
        activeNodeIndex: this.activeNodeIndex,
        nodeTimeout: this.nodeTimeout,
        defaultAdditionalFee: this.defaultAdditionalFee,
        testTimeout: this.testTimeout,
        theme: this.theme
    });

}

export {
    SettingsStore,
    INode
};
