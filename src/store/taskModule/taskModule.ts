/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-13 17:14:28
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-13 17:57:36
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
  key?: string;
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
  lastEdit?: string;
}

const initData: TaskInfo[] = [];

const TaskSlice = createSlice({
  name: TASKMODULENAME,
  initialState: initData,
  reducers: {
    [ActionType.ADDTASK]: () => {

    }
  },
});

export default TaskSlice.reducer;
