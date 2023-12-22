/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-13 17:14:28
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-22 11:15:25
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

export const ClassifyKey = ["orange" , "red" , "yellow" , "blue" , "green" , "purple"];

export interface TaskInfo {
  key?: number;
  content?: string;
  isMarked?: boolean;
  steps?: { content: string; hasDone: boolean }[];
  hasDone?: boolean;
  isToday?: boolean;
  startTime?: number;
  duplyType?: string;
  classify?: { key: typeof ClassifyKey[number], name: string }[];
  fileList?: string[];
  deadTime?: number;
  remindMe?: number;
  group?: string;
  tips?: string;
  lastEdit?: number;
  assignedToMe?: boolean;
}

const initData: TaskInfo[] = [
  {
    key: 1702957005411,
    content: "测试单元1",
    isMarked: false,
    steps: [
      { content: "第一步", hasDone: true },
      { content: "第二步", hasDone: false },
    ],
    hasDone: false,
    isToday: true,
    startTime: 1702953005411,
    duplyType: "daily",
    classify: [
      { key: 'green', name: '绿色类别' },
      { key: 'purple', name: '紫色类别' }
    ],
    fileList: ["111", "222"],
    deadTime: 1702957005411 + 1101000000,
    remindMe: 1702957005411 + 500000,
    group: undefined,
    tips: "测试备注功能",
    lastEdit: 1702957005411 - 10000,
    assignedToMe: false,
  },
  {
    key: 1702957005410,
    content: "测试单元2",
    isMarked: false,
    steps: [
      { content: "第一步", hasDone: true },
      { content: "第二步", hasDone: false },
    ],
    hasDone: false,
    isToday: true,
    startTime: 1702953005411,
    duplyType: "daily",
    classify: [
      { key: 'green', name: '绿色类别' },
      { key: 'purple', name: '紫色类别' }
    ],
    fileList: ["111", "222"],
    deadTime: 1702957005411 + 1101000000,
    remindMe: 1702957005411 + 500000,
    group: undefined,
    tips: "测试备注功能",
    lastEdit: 1702957005411 - 10000,
    assignedToMe: false,
  },
];

const TaskSlice = createSlice({
  name: TASKMODULENAME,
  initialState: initData,
  reducers: {
    [ActionType.ADDTASK]: (
      state: TaskInfo[],
      { payload }: { payload: TaskInfo }
    ) => {
      const nowDate = new Date();
      const newTask: TaskInfo = {
        key: nowDate.getTime(),
        lastEdit: new Date().getTime(),
      };
      state.push(Object.assign(newTask, payload));
    },

    [ActionType.CHANGE]: (
      state: TaskInfo[],
      { payload }: { payload: TaskInfo }
    ) => {
      if (!payload.key) return;
      console.log(payload);
      state.map((item) => {
        if (item.key === payload.key) {
          Object.assign(item, { ...item, ...payload, ...{ lastEdit: new Date().getTime() }});
        }
      });
      console.log(state.forEach((item) => console.log(item.hasDone)));
    },

    [ActionType.DELETETASK]: (
      state: TaskInfo[],
      { payload }: { payload: number }
    ) => {
      const index = state.findIndex((item) => {
        return item.key === payload;
      });
      if (index !== -1) state.splice(index, 1);
    },
  },
});

export default TaskSlice.reducer;
