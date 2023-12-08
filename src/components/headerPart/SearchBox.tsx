import SearchInput from "../../containers/headerPart/SearchInput";
import SearchIcon from "./searchBox/SearchIcon";
import styled from "styled-components";
import HoverTips from "../../utils/hoverTips";

export default () => {
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