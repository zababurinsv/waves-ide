import { History } from 'history';
import RootStore from '@stores/RootStore';
import { IFile } from '@stores/FilesStore';
import axios from 'axios';
import { logToTagManager } from '@utils/logToTagManager';

export class SharingService {
    constructor(private mobXStore: RootStore, private history: History) {
        let shareMatch = history.location.pathname.match(/s\/([a-f0-9]{24})$/);
        if (shareMatch != null) {
            const shareId = shareMatch[1];
            this.fileById(shareId)
                .then(remoteFile => {
                    let localFile = mobXStore.filesStore.files.find(file => file.content === remoteFile.content);
                    if (!localFile) {
                        localFile = mobXStore.filesStore.createFile(remoteFile);
                    }
                    mobXStore.tabsStore.openFile(localFile.id);
                    logToTagManager({event: 'ideOpenShareLink'});
                })
                .catch(err => console.error(err))
                .finally(() => history.push('/'));
        }
    }

    async shareableLink(file: IFile): Promise<string|{error: any}> {
        return axios.post(
            'api/v1/saveFile',
            file,
            {validateStatus: (status: number) => (status >= 200 && status < 300) || status === 413}
        )
            .then(({data}) => 'error' in data ? data : `${window.location.origin}/s/${data}`);
    }

    async fileById(id: string): Promise<IFile> {
        return axios.get(`api/v1/getFile/${id}`)
            .then(data => data.data);
    }
}
