import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

interface PropsType {
    $onChange: (width: number, height: number) => void; // 宽高变化函数
}

export default (props: PropsType) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const initialMouseX = useRef(0); // 初始x值
    const initialMouseY = useRef(0); // 初始Y值
    const position = useRef( {
        offsetX: 0,
        offsetY: 0
    });
    const [lineOffset, setLineOffset] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (isDragging && containerRef.current) {
                position.current.offsetX = event.clientX - initialMouseX?.current;
                position.current.offsetY = event.clientY - initialMouseY?.current;
                setLineOffset(position.current.offsetX);
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            props.$onChange(position.current.offsetX, position.current.offsetY);
            Object.assign(position.current, { offsetX: 0, offsetY: 0 });
            setLineOffset(0);
        };
        // 添加鼠标移动和抬起事件
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            // 记得清除监听事件
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, initialMouseX, initialMouseY, props.$onChange]);

    /** 监听鼠标按下事件 改变初始值 **/
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
        initialMouseX.current = event.clientX;
        initialMouseY.current = event.clientY;
    };

    return (
        <StyledDragLine {...{$isDragging: isDragging}}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            style={ { transform: `translate3d(${ lineOffset }px, 0, 0)`}}
        />
    );
};

const StyledDragLine = styled.div<{ $isDragging: boolean }>`
    position: absolute;
    left: 0;
    transition: none;
    width: 5px;
    height: 100%;
    cursor: ew-resize;
    background-color: ${ prop => prop.$isDragging? 'var(--ms-drag-line-gray)' : 'transparent'};
    &:hover {
        background-color: var(--ms-drag-line-gray);
    }
`