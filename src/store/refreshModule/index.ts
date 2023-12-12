/*
 * @Author: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @Date: 2023-12-12 08:07:09
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-12 08:12:44
 * @FilePath: /todo_list/src/store/refreshModule/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { typeFormate } from "../utils";
import { ActionType, REFRESHMODULENAME } from "./refreshModule";
import { StateType } from "./refreshModule";

export const changeState = (payload: StateType) => ({
  type: typeFormate<ActionType>(REFRESHMODULENAME, ActionType.STATE),
  payload,
});
