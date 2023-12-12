/*
 * @Author: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @Date: 2023-12-12 08:07:09
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-12 08:15:16
 * @FilePath: /todo_list/src/store/refreshModule/refreshModule.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from "@reduxjs/toolkit";

export const REFRESHMODULENAME = "refresh";
export enum ActionType {
  STATE = "changeState",
}

export type StateType ='success' | 'refreshing' | 'fail';

export interface RefreshInfo {
  refreshState: StateType;
}

const initData: RefreshInfo = {
  refreshState: 'refreshing',
};

const RefreshSlice = createSlice({
  name: REFRESHMODULENAME,
  initialState: initData,
  reducers: {
    [ActionType.STATE]: (state: RefreshInfo, { payload }: { payload: StateType }) => { state.refreshState = payload; },
  },
});

export default RefreshSlice.reducer;