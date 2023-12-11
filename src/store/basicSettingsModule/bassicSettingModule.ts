/*
 * @Date: 2023-12-09 16:14:37
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-11 09:54:35
 * @FilePath: /todo_list/src/store/modules/settings.ts
 */
import { createSlice } from "@reduxjs/toolkit";

export const SETTINGMODULENAME = 'settings';
export enum ActionType {
  TOGGLE = 'toggle',
}

export interface SettingInfo {
  name: string,
  key: string,
  content: {name: string, key: string, value: boolean, tips?: string
  }[]
}

const settingData: SettingInfo[] = [
  {
    "name": "常规",
    "key": "1",
    "content": [
          { "name": "在删除前确认", "key": "11", "value": true, "tips": "" },
          { "name": "在顶部添加新任务", "key": "12", "value": true, "tips": "" },
          { "name": "将带有星标的任务移至顶部", "key": "13", "value": true, "tips": "" },
          { "name": "播放完成提示音", "key": "14", "value": true, "tips": "" },
          { "name": "显示右键单击菜单", "key": "15", "value": true, "tips": "" },
          { "name": "打开提醒通知", "key": "16", "value": true, "tips": "" },
          { "name": "打开夜间模式", "key": "17", "value": false, "tips": "" }
      ]
  },
  {
      "name": "智能列表",
      "key": "2",
      "content": [
          { "name": "重要", "key": "21", "value": true, "tips": "" },
          { "name": "计划内", "key": "22", "value": true, "tips": "" },
          { "name": "全部", "key": "23", "value": false, "tips": "" },
          { "name": "已完成", "key": "24", "value": false, "tips": "" },
          { "name": "已分配给我", "key": "25", "value": true, "tips": "" },
          { "name": "自动隐藏空的智能列表", "key": "26", "value": false, "tips": "" },
          { "name": "在\"我的一天\"中显示\"今天截止\"的任务", "key": "27", "value": true, "tips": "" }
      ]
  },
  {
      "name": "连接的应用",
      "key": "3",
      "content": [
          { "name": "Planner", "key": "31", "value": true, "tips": "在Planner中分配给你的任务"}
      ]
  },
  {
      "name": "通知",
      "key": "4",
      "content": [
          { "name": "电子邮件", "key": "41", "value": true, "tips": "与你共享列表时收到通知"}
      ]
  }
];

const SettingSlice = createSlice({
  name: SETTINGMODULENAME,
  initialState: settingData,
  reducers: {
    [ActionType.TOGGLE]: (state: SettingInfo[], { payload }: { payload: { key: string; value: string } }) => {
      for (const groupItem of state) {
        for (const item of groupItem.content) {
          if (item.key === payload.key) {
            Object.assign(item, payload);
            return;
          }
        }
      }
    },
  },
});

export default SettingSlice.reducer;
