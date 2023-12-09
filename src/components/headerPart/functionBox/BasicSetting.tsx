/*
 * @Author: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @Date: 2023-12-09 14:54:06
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-09 18:06:19
 * @FilePath: /todo_list/src/components/headerPart/functionBox/BasicSetting.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import SettingsList from "../../../containers/headerPart/SettingsList";

const BasicSetting = () => {
    return (
        <StyledSettingsContainer>
            <h2 className="title">设置</h2>
            <SettingsList />
        </StyledSettingsContainer>
    )
}

export default BasicSetting;

const StyledSettingsContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .title {
        font-size: 1.25rem;
        margin: 15px 0 18px 16px;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: default;
    }
`