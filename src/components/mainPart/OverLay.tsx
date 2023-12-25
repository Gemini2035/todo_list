/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-14 14:11:06
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-25 17:15:38
 * @FilePath: \todo_list\src\components\mainPart\OverLay.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled, { CSSProperties } from "styled-components";

interface PropType {
  $style?: CSSProperties;
  $clickEvent: (target: boolean) => void;
}

const OverLay = (props: PropType) => {
  return (
    <StyledOverlay
      style={props.$style}
      onMouseDown={(e) => {
        e.preventDefault();
        props.$clickEvent(false);
      }}
    />
  );
};

export default OverLay;

const StyledOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 0.5;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
`;
