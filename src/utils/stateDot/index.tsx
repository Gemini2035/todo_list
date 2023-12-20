/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-20 11:46:12
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-20 13:49:41
 * @FilePath: \todo_list\src\components\mainPart\stateDot\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";

interface PropType {
  // eslint-disable-next-line @typescript-eslint/ban-types
  $state?: boolean;
  $theme?: string;
}

const StateDot = (props: PropType) => {
  return <StyledStateDot {...props} />;
};

export default StateDot;

interface StylePropType {
  $state?: boolean;
  $theme?: string;
}

const StyledStateDot = styled.div<StylePropType>`
  cursor: pointer;
  position: relative;
  --dot-width: 16px;
  margin-left: 6px;
  width: var(--dot-width);
  height: var(--dot-width);
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(props) => props.$theme || "var(--ms-main-blue-light)"};
  background-color: ${(props) =>
    props.$state ? props.$theme || "var(--ms-main-blue-light)" : "transparent"};
  &:hover:before {
    border-color: ${(props) =>
      props.$state ? "var(--ms-main-white)" : "var(--ms-main-blue-light)"};
  }
  &:before {
    content: "";
    position: absolute;
    height: 8px;
    width: 3px;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: ${(props) =>
      props.$state ? "var(--ms-main-white)" : "transparent"};
    top: 45%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 45deg);
  }
`;
