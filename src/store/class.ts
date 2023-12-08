export interface ActionInterface<T> {
    type: string;
    content: T;
}

export class UserInfo {
    token = '';
    userName = ''
}

export class TodoInfo {
    id = '';
    content = '';
    date = '';
    tag = '';
    state = false;
}

export interface SettingInfo {
    name: string,
    key: string,
    content: {name: string, key: string, value: string}[]
}