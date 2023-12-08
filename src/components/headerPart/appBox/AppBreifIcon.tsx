import styled from "styled-components";

interface PropType {
    $color?: string
}

export default (prop: PropType) => {
    return (
        <StyledAppBox title="全部应用" {...prop} >
            <div className="dot-canvas" >
                {Array(9).fill(0).map((_, index) => {
                    return (
                        <p className="dot-item" key={index} />
                    )
                })}
            </div>
        </StyledAppBox>
    )
}

const StyledAppBox = styled.div<PropType>`
    height: 100%;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
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
            color: ${ prop => prop.$color || 'var(--ms-main-white)' };
        }
    }
}
`