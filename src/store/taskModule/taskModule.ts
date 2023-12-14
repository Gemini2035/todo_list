/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-13 17:14:28
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-14 11:04:36
 * @FilePath: \todo_list\src\store\taskModule\taskModule.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from "@reduxjs/toolkit";

export const TASKMODULENAME = "task";
export enum ActionType {
  ADDTASK = "addTask",
  DELETETASK = "deleteTask",
  CHANGE = "changeInfo",
}

export interface TaskInfo {
  key?: number;
  content?: string;
  isMarked?: boolean;
  steps?: { content: string }[];
  hasDone?: boolean;
  isToday?: boolean;
  startTime?: string;
  duplyType?: string;
  classify?: 'orange' | 'red' | 'yellow' | 'blue' | 'green' | 'purple';
  fileList?: string[];
  endDay?: string;
  remindMe?: string;
  group?: string;
  tips?: string;
  lastEdit?: number;
}

const initData: TaskInfo[] = [];

const TaskSlice = createSlice({
  name: TASKMODULENAME,
  initialState: initData,
  reducers: {
    [ActionType.ADDTASK]: (state: TaskInfo[], { payload }: { payload: TaskInfo }) => {
      const nowDate = new Date();
      const newTask: TaskInfo = {
        key: nowDate.getTime(),
        lastEdit: new Date().getTime()
      }
      state.push(Object.assign(newTask, payload));
    },

    [ActionType.CHANGE]: (state: TaskInfo[], { payload }: { payload: TaskInfo }) => {
      if (!payload.key) return;
      state.map(item => {
        if (item === payload.key) return {...item, ...payload, ...{ lastEdit: new Date().getTime() }};
      });
    },

    [ActionType.DELETETASK]: (state: TaskInfo[], { payload }: { payload: number }) => {
      const index = state.findIndex(item => { return item.key === payload});
      if (index !== -1) state.splice(index, 1);
    }
  },
});

export default TaskSlice.reducer;
