import * as fetch from 'node-fetch';

export default class SafeRequest {
    public async myFetch(
        url: string,
        arg?: Object,
        callback?: Function
    ): Promise<Object> {
        let result = {code: 'error'};
        await fetch(url).then(res => res.json())
            .then(json => (result = json));
        return result;
    }
}