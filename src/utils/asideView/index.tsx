import { Component, ReactNode } from 'react';
import styled, { CSSProperties, keyframes } from "styled-components";
import DragLine from './DragLine';

interface PropsType {
    $height?: number,
    $width?: number,
    $position?: 'absolute' | 'fixed',
    $direction?: 'left' | 'right',
    $draggable?: boolean,
    $buttonText?: string,
    $showButton?: boolean,
    $showModel: [boolean, (target: boolean) => void],
    $maxWidth?: number,
    $minWidth?: number,
    $childNode?: ReactNode
    $style?: CSSProperties
}

interface StateType {
    width: number;
    cursorPositionX: number
}

class AsideView extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            width: this.props.$width || 350,
            cursorPositionX: 0
        }
    }

    private handleChange = (offsetX: number) => this.setState({ width: Math.max(300, (Math.min(window.innerWidth * 0.9, (this.state.width - offsetX)))) })

    render(): ReactNode {
        return (
            this.props.$showModel[0] && (
                <StyledAsideView {...this.props} style={Object.assign(this.props.$style || {}, { width: this.state.width })}>
                    {this.props.$showButton && (
                        <p className='close-button' onClick={() => this.props.$showModel[1](false)}>
                            {this.props.$buttonText ? this.props.$buttonText : 'X'}
                        </p>
                    )}
                    {this.props.$draggable && (
                        <DragLine $onChange={this.handleChange} />
                    )}
                    {this.props.$childNode}
                </StyledAsideView>
            )
        )
    }
}

const AppearAnimate = (prop: 'left' | 'right') => {
    return (keyframes`
        from { transform: translate3d(${prop === 'left' ? '0' : '100%'}, 0, 0) }
        to { transform: translate3d(0, 0, 0) }
`)
}

const StyledAsideView = styled.div<PropsType>`
    transition: 0.3s ease-in-out;
    animation: ${props => AppearAnimate(props.$direction || 'right')} 0.3s ease-in-out;
    background-color: var(--ms-main-bg-light);
    box-shadow: 0px 1.2px 3.6px var(--ms-bg-shadow),0px 6.4px 14.4px var(--ms-bg-shadow);
    position: ${props => props.$position};
    height: ${props => props.$height ? (props.$height + 'px') : 'calc(100vh - 48px)'};
    top: 48px;
    z-index: 1;
    ${props => {
        switch (props.$direction) {
            case 'left': return {
                left: 0
            }
            case 'right': return {
                right: 0
            }
        }
    }}

        .close-button {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 1px;
            right: 1px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            &:hover {
                background-color: var(--ms-button-hover);
            }
        }
`

export default AsideView;