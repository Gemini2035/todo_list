/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-11 14:52:31
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-11 17:31:42
 * @FilePath: \todo_list\src\components\headerPart\functionBox\BasicSetting.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import SettingsList from "../../../containers/headerPart/SettingsList";
import StaticSettings from "./settingsBox/StaticSettings";

const BasicSetting = () => {
    return (
        <StyledSettingsContainer>
            <h2 className="title">设置</h2>
            <SettingsList />
            <StaticSettings />
        </StyledSettingsContainer>
    )
}

export default BasicSetting;

const StyledSettingsContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 16px;
    .title {
        font-size: 1.25rem;
        line-height: 65px;
        padding: 3px 0 0 0;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: default;
        height: 65px;
    }
`