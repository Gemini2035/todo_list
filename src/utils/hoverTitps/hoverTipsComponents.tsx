import styled from "styled-components";

export default (props: { $direction: string, $context: string }) => {
    return (
        <StyledHoverTip { ...props }>
            <p className="tips">{ props.$context }</p>
        </StyledHoverTip>
    )
}

const StyledHoverTip = styled.div<{ $direction: string }>`
    position: absolute;
    z-index: 1;
    cursor: default;
    ${ prop => {
        switch(prop.$direction) {
            case 'left':
                return {
                    top: '50%',
                    right: '100%',
                    transform: 'translate3d(0, -50%, 0)'
                }
            case 'topLeft': 
                return {
                    bottom: '100%',
                    left: '0'
                }
            case 'topMiddle': {
                return {
                    bottom: '100%',
                    left: '50%',
                    transform: 'translate3d(-50%, 0, 0)'
                }
            }
            case 'topRight': {
                return {
                    bottom: '100%',
                    right: '0'
                }
            }
            case 'right': {
                return {
                    left: '100%',
                    top: '50%',
                    transform: 'translate3d(0, -50%, 0)'
                }
            }
            case 'bottomRight': {
                return {
                    right: '0',
                    top: '100%'
                }
            }
            case 'bottomMiddle': {
                return {
                    left: '50%',
                    top: '100%',
                    transform: 'translate3d(-50%, 0, 0)'
                }
            }
            case 'bottomLeft': {
                return {
                    left: '0',
                    top: '100%'
                }
            }
        }
    } }
        .tips {
            white-space: nowrap;
        }
`