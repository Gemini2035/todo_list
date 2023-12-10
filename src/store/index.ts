/*
 * @Date: 2023-12-09 16:07:02
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-10 17:19:37
 * @FilePath: /todo_list/src/store/index.ts
 */

import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./basicSettingsModule/bassicSettingModule";
import searchReducer from "./searchModule/searchModule";
const RootStore = configureStore({
    reducer: {
        settingReducer,
        searchReducer
    },
})
export default RootStore;

export type RootStoreType = ReturnType<typeof RootStore.getState>;
export type AppDispatch = typeof RootStore.dispatch;