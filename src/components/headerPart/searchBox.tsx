import SearchInput from "../../containers/headerPart/searchPart";
import styled from "styled-components";

const StyledInputBox = styled.div`
    position: relative;
    width: 50%;
    height: 25px;
`

export default () => {
    return (
        <StyledInputBox>
            <SearchInput />
        </StyledInputBox>
    )
}