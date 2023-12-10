/*
 * @Author: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @Date: 2023-12-10 16:53:59
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-10 17:33:14
 * @FilePath: /todo_list/src/store/searchModule/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createSlice } from "@reduxjs/toolkit";

export const SEARCHMODULENAME = "search";
export enum ActionType {
  STATE = "changeState",
  KEYWORD = "keyWord"
}

export interface SearchInfo {
  showSearch: boolean;
  keyWord: string;
}

const initData: SearchInfo = {
  showSearch: false,
  keyWord: '',
};

const SearchSlice = createSlice({
  name: SEARCHMODULENAME,
  initialState: initData,
  reducers: {
    [ActionType.STATE]: (state: SearchInfo, { payload }: { payload: boolean }) => { state.showSearch = payload; },
    [ActionType.KEYWORD]: (state: SearchInfo, { payload }: { payload: string }) => { state.keyWord = payload; }
  },
});

export default SearchSlice.reducer;
