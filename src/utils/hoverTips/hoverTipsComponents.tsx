import styled, { keyframes } from "styled-components";

export default (props: { $direction: string, $context: string }) => {
    return (
        <StyledHoverTip {...props}>
            <p className="tips">{props.$context}</p>
        </StyledHoverTip>
    )
}

const AppearAnimate = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`

const StyledHoverTip = styled.div<{ $direction: string }>`
    position: absolute;
    z-index: 1;
    cursor: default;
    background-color: var(--ms-main-white);
    border-radius: 3px;
    animation: ${AppearAnimate} 0.6s ease-in-out;
    ${prop => {
        switch (prop.$direction) {
            case 'left':
                return {
                    top: '50%',
                    right: '100%',
                    transform: 'translate3d(-10px, -50%, 0)'
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
    }}
    &::before {
        content: '';
        position: absolute;
        transform: translate3d(0, -50%, 0);
        width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-right: 10px solid var(--ms-main-white);
        border-bottom: 10px solid transparent;
        ${prop => {
        switch (prop.$direction) {
            case 'right':
                return {
                    top: '50%',
                    right: '100%',
                    transform: 'translate3d(0, -50%, 0)'
                }
            case 'bottomRight':
                return {
                    bottom: '100%',
                    left: '0',
                    transform: 'rotate3d(0, 0, 1, 90deg)'
                }
            case 'bottomMiddle': {
                return {
                    bottom: '100%',
                    left: '50%',
                    transform: 'translate3d(-50%, 0, 0), rotate3d(0, 0, 1, 90deg)'
                }
            }
            case 'bottomLeft': {
                return {
                    bottom: '100%',
                    right: '0',
                    transform: 'rotate3d(0, 0, 1, 90deg)'
                }
            }
            case 'left': {
                return {
                    left: '100%',
                    top: '50%',
                    transform: 'translate3d(0, -50%, 0) rotate3d(0, 0, 1, 180deg)'
                }
            }
            case 'topLeft': {
                return {
                    right: '0',
                    top: '100%',
                    transform: 'rotate3d(0, 0, 1, -90deg)'
                }
            }
            case 'topMiddle': {
                return {
                    left: '50%',
                    top: '100%',
                    transform: 'translate3d(-50%, 0, 0)'
                }
            }
            case 'topRight': {
                return {
                    left: '0',
                    top: '100%'
                }
            }
        }
    }}
    }
    .tips {
        white-space: nowrap;
        padding: 3px 2px;
        font-size: 0.8rem;
        letter-spacing: 1px;
    }
`