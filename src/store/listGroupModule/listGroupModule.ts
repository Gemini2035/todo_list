/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-15 11:08:28
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-18 13:45:29
 * @FilePath: \todo_list\src\store\listGroupModule\listGroupModule.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from "@reduxjs/toolkit";

export const LISTGROUPMODULENAME = "listGroup";
export enum ActionType {
  ADD = "addGroup",
  CHANGE = "changeGroup",
  DELETE = "delectGroup",
}

export interface ItemInfo {
  name: string;
  path: string;
  type: "dir" | "list";
  child?: ItemInfo[];
}

const initData: ItemInfo[] = [
  { name: "aaa", path: "abcdef", type: "list" },
  { name: "bbb", path: "1234567", type: "dir", child: [] },
  { name: "aaa1", path: "abcdefa", type: "list" },
  {
    name: "bbb",
    path: "123456p7",
    type: "dir",
    child: [{ name: "aaa", path: "abcdefm", type: "list" }],
  },
];

const ListGroupSlice = createSlice({
  name: LISTGROUPMODULENAME,
  initialState: initData,
  reducers: {
    [ActionType.ADD]: (
      state: ItemInfo[],
      { payload }: { payload: ItemInfo }
    ) => {
      state.push(payload);
    },
    [ActionType.CHANGE]: (
      state: ItemInfo[],
      { payload }: { payload: ItemInfo }
    ) => {
      state.map((item) => {
        if (item.path === payload.path) Object.assign(item, payload);
      });
    },
    [ActionType.DELETE]: (
      state: ItemInfo[],
      { payload }: { payload: string }
    ) => {
      const index = state.findIndex((item) => item.path === payload);
      state.splice(index, 1);
    },
  },
});

export default ListGroupSlice.reducer;
