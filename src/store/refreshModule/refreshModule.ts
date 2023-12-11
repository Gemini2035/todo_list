import { createSlice } from "@reduxjs/toolkit";

export const SEARCHMODULENAME = "search";
export enum ActionType {
  STATE = "changeState",
}

type StateType ='success' | 'refreshing' | 'fail';

export interface RefreshInfo {
  refreshState: StateType;
}

const initData: RefreshInfo = {
  refreshState: 'success',
};

const SearchSlice = createSlice({
  name: SEARCHMODULENAME,
  initialState: initData,
  reducers: {
    [ActionType.STATE]: (state: RefreshInfo, { payload }: { payload: StateType }) => { state.refreshState = payload; },
  },
});

export default SearchSlice.reducer;