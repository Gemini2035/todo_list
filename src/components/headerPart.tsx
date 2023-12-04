import AppBox from "../containers/appBox";
import AppTitle from "./headerPart/AppTitle";
import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    background-color: var(--ms-main-blue-light);
    height: 48px;
`

export default () => {
    return (
        <StyledHeader>
            <AppBox />
            <AppTitle />
            {/* <SearchPart /> */}
            {/* <Settings /> */}
            {/* <QAA /> */}
            {/* <Notice /> */}
            {/* <UserAvatar /> */}
        </StyledHeader>
    )
}