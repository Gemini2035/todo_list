/*
 * @Author: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @Date: 2023-12-10 17:04:18
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-14 11:07:08
 * @FilePath: /todo_list/src/store/searchModule/searchActions.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { typeFormate } from "../utils";
import { ActionType, TASKMODULENAME, TaskInfo } from "./taskModule";

export const changeTask = (payload: TaskInfo) => ({
  type: typeFormate<ActionType>(TASKMODULENAME, ActionType.CHANGE),
  payload,
});

export const deleteTask = (payload: number) => ({
  type: typeFormate<ActionType>(TASKMODULENAME, ActionType.DELETETASK),
  payload
});

export const addTask = (payload: TaskInfo) => ({
  type: typeFormate<ActionType>(TASKMODULENAME, ActionType.ADDTASK),
  payload
})