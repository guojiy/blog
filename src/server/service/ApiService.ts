export default class ApiService{
    safeRequest: any
    constructor({ safeRequest }) {
        this.safeRequest = safeRequest;
    }
    public getInfo(url: string, arg?: Object, callback?: Function): Promise<Object> {
        return this.safeRequest.myFetch(url, arg, callback);
    }
}