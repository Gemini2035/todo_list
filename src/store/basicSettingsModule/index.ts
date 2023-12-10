/*
 * @Date: 2023-12-09 16:14:37
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-09 21:09:17
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
  content: {name: string, key: string, value: boolean}[]
}

const settingData: SettingInfo[] = [
  {
    name: "主要",
    key: "1",
    content: [{ name: "测试项目1", key: "11", value: false }],
  },
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
