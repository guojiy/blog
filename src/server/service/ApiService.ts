import SafeRequest from '../util/SafeRequest';

export default class ApiService {
    getInfo(
        url: string,
        arg?: Object,
        callback?: Function
    ) {
        return new SafeRequest().fetch(
            url,
            arg,
            callback
        );
    }
}