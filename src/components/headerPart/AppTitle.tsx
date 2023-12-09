/*
 * @Date: 2023-12-09 14:54:06
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-09 17:03:25
 * @FilePath: /todo_list/src/components/headerPart/AppTitle.tsx
 */
import styled from "styled-components"

const AppTitle = () => {
    return (
        <StyledTitle>To Do</StyledTitle>
    )
}

export default AppTitle;

const StyledTitle = styled.p`
    color: var(--ms-main-white);
    font-weight: bold;
    word-spacing: nowrap;
    min-width: 50px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`