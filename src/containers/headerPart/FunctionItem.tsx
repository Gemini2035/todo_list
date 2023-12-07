import { Component, ReactNode } from "react";
import styled from "styled-components";
import AsideView from "../../utils/asideView";

interface PropType {
    $icon: ReactNode,
    $asideContent: ReactNode
    $title: string,
    $isOpenModel: [boolean, (target: boolean, index: number) => void],
    $index: number
}

interface StateType {
    isOpen: boolean
}

class FunctionItem extends Component<PropType, StateType> {

    private changeOpenState = (target: boolean) => {
        this.props.$isOpenModel[1](target, this.props.$index);
    }

    render(): ReactNode {
        return (
            <>
                <StyledSettingContainer {...{ $isOpen: this.props.$isOpenModel[0] }} 
                    className={this.props.$isOpenModel[0] ? 'active' : ''}
                    title={this.props.$title}
                    onClick={ () => this.props.$isOpenModel[1](!this.props.$isOpenModel[0], this.props.$index)} >
                    {this.props.$icon}
                </StyledSettingContainer>
                <AsideView
                    $position="fixed"
                    $direction="right"
                    $showButton
                    $showModel={[this.props.$isOpenModel[0], this.changeOpenState]}
                    $childNode={this.props.$asideContent} />
            </>
        )
    }
}

const StyledSettingContainer = styled.div<{ $isOpen: boolean }>`
    & * {transition: 0.3s ease-in-out;}
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: default;
    & svg {
        height: 60%;
        width: auto;
        fill: ${prop => prop.$isOpen ? '#000' : '#fff'}
    }
    &:hover {
        background-color: var(--ms-hover-blue-light);
    }

    &.active {
        background-color: var(--ms-main-bg-light);
    }
    &.active:hover {
        background-color: var(--ms-hover-blue-light);
        svg {
            fill: #fff
        }
    }
`

export default FunctionItem;