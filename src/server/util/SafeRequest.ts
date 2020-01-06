const fetch = require('node-fetch');

export default class SafeRequest {
    public async fetch(
        url: string,
        arg?: Object,
        callback?: Function
    ): Promise<Object> {
        let result = {code: 'error'};
        await fetch(url)
            .then(res => res.json())
            .then(json => (result = json));
            console.log(result);
            
        return result;
    }
}