import AppBox from "../components/headerPart/appBox";
import AppTitle from "../components/headerPart/AppTitle";
import SearchPart from "../components/headerPart/searchBox"
import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    background-color: var(--ms-main-blue-light);
    height: 48px;
`
import { Component, ReactNode } from 'react';

const clickMonitor = (e: any) => { console.log(e)};

class HeaderPart extends Component {
    render(): ReactNode {
        return (
            <StyledHeader onClick={ clickMonitor }>
                <AppBox />
                <AppTitle />
                <SearchPart />
                {/* <Settings /> */}
                {/* <QAA /> */}
                {/* <Notice /> */}
                {/* <UserAvatar /> */}
            </StyledHeader>
            )
    }
}

export default HeaderPart