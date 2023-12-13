/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-13 15:22:30
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-13 15:52:40
 * @FilePath: \todo_list\src\store\userInfoModule\searchModule.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from "@reduxjs/toolkit";

export const USERINFOMODULENAME = "search";
export enum ActionType {
  SET = 'setInfo'
}

export interface UserInfo {
  token?: string,
  userName?: string,
  userMail?: string,
  userAvatar?: string
}

const initData: UserInfo = {
  token: '',
  userName: '展示账号',
  userMail: '123456789@xxx.com',
  userAvatar: ''
};

const UserInfoSlice = createSlice({
  name: USERINFOMODULENAME,
  initialState: initData,
  reducers: {
    [ActionType.SET]: (state: UserInfo, { payload }: { payload: UserInfo }) => { Object.assign(state, payload) }
  },
});

export default UserInfoSlice.reducer;
