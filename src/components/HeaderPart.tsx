import AppBox from "./headerPart/AppBox";
import AppTitle from "./headerPart/AppTitle";
import FunctionBox from "./headerPart/FunctionBox";
import SearchPart from "./headerPart/SearchBox";
import styled from "styled-components";

export default () => {
    return (
        <StyledHeader>
            <AppBox />
            <AppTitle />
            <SearchPart />
            <FunctionBox />
        </StyledHeader>
    )
}


const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    background-color: var(--ms-main-blue-light);
    height: 48px;
`