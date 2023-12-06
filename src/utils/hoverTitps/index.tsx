import { Component, ReactNode } from "react";
import HoverTipsComponents from "./hoverTipsComponents";

type Direction = 'topLeft' | 'topMiddle' | 'topRight' | 'bottomLeft' | 'bottomMiddle' | 'bottomRight' | 'left' | 'right';
interface PropsType {
    $direction: Direction;
    $context: string;
    $innerNode: ReactNode;
    $delayTime?: number;
}
interface StateType {
    flag: boolean;
}
class HoverTips extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            flag: false,
        }
    }
    private timer = 0;

    private hoverHandle_ENTER = () => {
        this.timer = window.setTimeout(() => {
            this.setState({ flag: true });
        }, this.props.$delayTime || 2000);
    }

    private hoverHandle_LEAVE = () => {
        clearTimeout(this.timer);
        this.setState({ flag: false });
    }

    render(): ReactNode {
        const showComponents = (this.state.flag && <HoverTipsComponents {...this.props as PropsType} />);
        return (
            <div style={{
                position: 'relative',
                height: '100%',
                display: 'inherit',
                justifyContent: 'inherit',
                alignItems: 'inherit'
            }} onMouseEnter={this.hoverHandle_ENTER} onMouseLeave={this.hoverHandle_LEAVE}>
                {showComponents}
                {this.props.$innerNode}
            </div>
        )
    }
}

export default HoverTips;