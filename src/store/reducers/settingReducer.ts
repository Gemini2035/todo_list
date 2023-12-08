import { SettingInfo, ActionInterface } from "../class"; 

enum ActionType {
    TOGGLE = 'toggle'
}

interface ContentInterface {
    key: string,
    value: string
}

export default (state: SettingInfo[], action: ActionInterface<ContentInterface>) => {
    switch (action.type) {
        case ActionType.TOGGLE: 
            for (let groupItem of state) {
                for (let item of groupItem.content) {
                    if (item.key === action.content.key) {
                        Object.assign(item, action.content);
                        return state;
                    }
                }
            }
            return state;
    }
}