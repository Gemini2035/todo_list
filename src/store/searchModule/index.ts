/*
 * @Author: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @Date: 2023-12-10 17:04:18
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-10 17:21:32
 * @FilePath: /todo_list/src/store/searchModule/searchActions.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { typeFormate } from "../utils";
import { ActionType, SEARCHMODULENAME } from "./searchModule";

export const changeState = (payload: boolean) => ({
  type: typeFormate<ActionType>(SEARCHMODULENAME, ActionType.STATE),
  payload,
});

export const changeKeyWord = (payload: string) => ({
  type: typeFormate<ActionType>(SEARCHMODULENAME, ActionType.KEYWORD),
  payload,
});
