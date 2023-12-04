export enum ActionType {
    LogType,
    TodoType
}

export class ActionClass<T> {
    type: ActionType;
    content: T;
    constructor (type: ActionType, content: T) {
        this.type = type;
        this.content = content;
    }
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