import { ICompilationError, ICompilationResult } from '@waves/ride-js';
import RideInfoCompilerWorker from './worker';
import EventEmitter from 'wolfy87-eventemitter';

export type TRideFileType = 'account' | 'asset' | 'dApp' | 'library';

export interface IRideFileInfo {
    readonly stdLibVersion: number,
    readonly type: TRideFileType,
    readonly maxSize: number,
    readonly maxComplexity: number,
    readonly compilation: ICompilationResult | ICompilationError,
    readonly size: number,
    readonly complexity: number
}

class RideInfoService extends EventEmitter {
    id = 0;
    worker: any;

    constructor() {
        super();
        this.worker = new RideInfoCompilerWorker();
        this.worker.addEventListener('message', (event: any) => {
            this.emit('result' + event.data.msgId, event.data.info);
        });
    }

    async provideInfo(content: string): Promise<IRideFileInfo> {
        const msgId = ++this.id;
        this.worker.postMessage({content, msgId});
        return new Promise((resolve, reject) => {
            console.log('Promise', msgId)
            this.once('result' + msgId, (info: IRideFileInfo) => {
                resolve(info)
            });
        });
    }

}

export default new RideInfoService();