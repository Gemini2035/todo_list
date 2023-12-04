import { Component } from "react";
import AppBoxIcon from "../components/headerPart/appBoxIcon";
import styled from "styled-components";

const StyledContainer = styled.div`
height: 100%;
width: 48px;
display: flex;
align-items: center;
justify-content: center;

&:hover {
    background-color: #005A9E;
    cursor: pointer;
}
`

class AppBox extends Component {

    clickHandle() {
        console.log('111')
    }

    render(): React.ReactNode {
        return (
            <StyledContainer onClick={ this.clickHandle }>
                <AppBoxIcon />
            </StyledContainer>
        )
    }
}

export default AppBox;