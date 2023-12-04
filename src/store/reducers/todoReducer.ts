import { TodoInfo } from "../class";
import { ActionType } from "../class";
import { ActionClass } from "../class";

export default (state: TodoInfo[] = [], action: ActionClass<TodoInfo>) => {
    switch (action.type) {
        case ActionType.TodoType: 
            return [...state, action.content];
        case ActionType.LogType:
            console.log('222');
            break;
        default: 
            return state;
    }

}