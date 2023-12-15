/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-15 11:08:28
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-15 13:52:49
 * @FilePath: \todo_list\src\store\listGroupModule\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { typeFormate } from "../utils";
import { ActionType, ItemInfo, LISTGROUPMODULENAME } from "./listGroupModule";

export const addList = (payload: ItemInfo) => ({
  type: typeFormate<ActionType>(LISTGROUPMODULENAME, ActionType.ADD),
  payload,
});

export const changeList = (payload: ItemInfo) => ({
  type: typeFormate<ActionType>(LISTGROUPMODULENAME, ActionType.CHANGE),
  payload,
});

export const deleteList = (payload: string) => ({
  type: typeFormate<ActionType>(LISTGROUPMODULENAME, ActionType.DELETE),
  payload
})