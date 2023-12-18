/*
 * @Date: 2023-12-09 16:07:02
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-18 11:34:00
 * @FilePath: /todo_list/src/store/index.ts
 */

import { configureStore } from "@reduxjs/toolkit";
import basicSettingReducer from "./basicSettingsModule/bassicSettingModule";
import searchReducer from "./searchModule/searchModule";
import refreshReducer from "./refreshModule/refreshModule";
import userInfoReducer from "./userInfoModule/userInfoModule";
import taskReducer from "./taskModule/taskModule";
import listGroupReducer from "./listGroupModule/listGroupModule";

const RootStore = configureStore({
    reducer: {
        basicSettingReducer,
        searchReducer,
        refreshReducer,
        userInfoReducer,
        taskReducer,
        listGroupReducer,
    },
})
export default RootStore;

export type RootStoreType = ReturnType<typeof RootStore.getState>;
export type AppDispatch = typeof RootStore.dispatch;