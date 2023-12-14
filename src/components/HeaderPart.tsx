/*
 * @Date: 2023-12-07 19:17:27
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-09 17:04:52
 * @FilePath: /todo_list/src/components/HeaderPart.tsx
 */
import AppBox from "./headerPart/AppBox";
import AppTitle from "./headerPart/AppTitle";
import FunctionBox from "./headerPart/FunctionBox";
import SearchPart from "./headerPart/SearchBox";
import styled from "styled-components";

const HeaderPart = () => {
    return (
        <StyledHeader>
            <AppBox />
            <AppTitle />
            <SearchPart />
            <FunctionBox />
        </StyledHeader>
    )
}

export default HeaderPart;

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    background-color: var(--ms-main-blue-light);
    height: var(--headpart-height);
`