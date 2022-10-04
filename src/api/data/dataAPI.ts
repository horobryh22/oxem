import {instance} from 'api/config';
import {Data} from 'api/types';


export const dataAPI = {
    sendData: (data: Data) => {
        return instance.post('', data);
    },
};
