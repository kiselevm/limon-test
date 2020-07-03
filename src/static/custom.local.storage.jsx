import Config from 'Config';

class BaseLocalStorage {

    static get(type) {
        return localStorage.getItem(`subsystem[${Config.subsystem}]_type[${type}]`);
    }

    static set(type, val) {
        localStorage.setItem(`subsystem[${Config.subsystem}]_type[${type}]`, val);
    }
}

export class LoginStorage extends BaseLocalStorage {

    constructor(props) {
        super(props);
    }

    static getItem() {
        const val = JSON.parse(this.get('login'));
        return val;
    }

    static setItem(val) {
        this.set('login', JSON.stringify(val));
    }
}