/*
 * @Author: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @Date: 2023-12-09 19:59:44
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-09 21:11:59
 * @FilePath: /todo_list/src/store/actions/bassicSettingActions.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { ActionType, MODULENAME } from './';

const typeFormate = (target: ActionType) => {
    return MODULENAME + '/' + target;
}

export const toggle = (payload: {key: string, value: boolean}) => ({
        type: typeFormate(ActionType.TOGGLE),
        payload
    }
)