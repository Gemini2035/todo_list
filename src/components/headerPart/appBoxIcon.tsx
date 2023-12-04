import styled from "styled-components";

const DotCanvas = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const DotItem = styled.p`
    width: calc(80% / 3);
    font-size: 1.5rem;
    line-height: 0.25;
    &::before {
        content: '·';
        color: var(--ms-main-white);
    }
`


export default () => {
    const dotArray = [];
    for (let i = 0; i < 9; i++) {
        dotArray.push(
            <DotItem key={i} />
        )
    }
    return (
        <DotCanvas>
            {dotArray}
        </DotCanvas>
    )
}