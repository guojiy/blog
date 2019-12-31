import User from '../model/User'

export default class IndexService {
    safeRequest: any
    constructor({safeRequest}) {
        this.safeRequest = safeRequest;
    }
    private userStorage: User[] = [
        {
            email: '123234@qq.com',
            name: 'guojy'
        },
        {
            email: 'jduhjskah@kd.com',
            name: 'ksdfh'
        }
    ]
    public async getUser(id: string) {
        let result: User;
        result = this.userStorage[id];
        return result;
    }
}