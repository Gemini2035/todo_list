import styled from "styled-components";
import H from "../../utils/hoverTips/index";

const StyledContainer = styled.div`
height: 100%;
width: 48px;
display: flex;
align-items: center;
justify-content: center;

&:hover {
    background-color: var(--ms-hover-color-light);
    cursor: pointer;
}

.dot-canvas {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .dot-item {
        width: calc(80% / 3);
        font-size: 1.5rem;
        line-height: 0.25;
        &::before {
            content: '·';
            color: var(--ms-main-white);
        }
    }
}
`


export default () => {
    const dotArray = [];
    for (let i = 0; i < 9; i++) {
        dotArray.push(
            <p key={i} className="dot-item" />
        )
    }
    return (
        <H $direction='right' $context='全部应用' $innerNode={
            <StyledContainer>
                <div className="dot-canvas" >
                    {dotArray}
                </div>
            </StyledContainer>
        }></H>
    )
}