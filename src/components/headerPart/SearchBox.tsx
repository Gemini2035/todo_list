/*
 * @Date: 2023-12-09 14:54:06
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-09 17:04:24
 * @FilePath: /todo_list/src/components/headerPart/SearchBox.tsx
 */
import SearchInput from "../../containers/headerPart/SearchInput";
import SearchIcon from "./searchBox/SearchIcon";
import styled from "styled-components";
import HoverTips from "../../utils/hoverTips";

const SearchBox = () => {
    return (
        <StyledInputBox>
            <HoverTips $direction="left" $context="搜索" $innerNode={
                <div className="search-container">
                    <SearchIcon />
                    <SearchInput />
                </div>
            } />
        </StyledInputBox>
    )
}

export default SearchBox;

const StyledInputBox = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1.5;
    overflow: hidden;
    cursor: default;
    .search-container {
        display: flex;
        justify-content: center;
        height: 75%;
        background-color: var(--ms-main-white);
        position: relative;
        border-radius: 3px;
        &:hover {
            background-color: var(--ms-hover-gray-light);
        }
    }
`