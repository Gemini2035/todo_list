/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-07 11:26:15
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-22 16:50:01
 * @FilePath: \todo_list\src\utils\asideView\DragLine.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

interface PropsType {
    $onChange: (width: number, height: number) => void; // 宽高变化函数
}

const DragLine = (props: PropsType) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default DragLine;

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