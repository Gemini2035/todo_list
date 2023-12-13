/*
 * @Date: 2023-12-09 16:07:02
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-13 18:01:08
 * @FilePath: /todo_list/src/store/index.ts
 */

import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./basicSettingsModule/bassicSettingModule";
import searchReducer from "./searchModule/searchModule";
import refreshReducer from "./refreshModule/refreshModule";
import userInfoReducer from "./userInfoModule/userInfoModule";
import taskReducer from "./taskModule/taskModule";

const RootStore = configureStore({
    reducer: {
        settingReducer,
        searchReducer,
        refreshReducer,
        userInfoReducer,
        taskReducer
    },
})
export default RootStore;

export type RootStoreType = ReturnType<typeof RootStore.getState>;
export type AppDispatch = typeof RootStore.dispatch;