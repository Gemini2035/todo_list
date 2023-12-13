/*
 * @Date: 2023-12-09 16:07:02
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-12 08:08:54
 * @FilePath: /todo_list/src/store/index.ts
 */

import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./basicSettingsModule/bassicSettingModule";
import searchReducer from "./searchModule/searchModule";
import refreshReducer from "./refreshModule/refreshModule";
import userInfoReducer from "./userInfoModule/userInfoModule";

const RootStore = configureStore({
    reducer: {
        settingReducer,
        searchReducer,
        refreshReducer,
        userInfoReducer        
    },
})
export default RootStore;

export type RootStoreType = ReturnType<typeof RootStore.getState>;
export type AppDispatch = typeof RootStore.dispatch;