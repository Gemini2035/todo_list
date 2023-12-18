/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-14 17:17:39
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-18 10:00:19
 * @FilePath: \todo_list\src\components\mainPart\sideAndData\sideBar\SideBarHeader.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import SideButton from "./SideButton";

interface PropType {
  $clickEvent: (target: boolean) => void;
}

const SideBarHeader = (props: PropType) => {
  return (
    <StyledSideBarHeader>
      <SideButton {...props} />
    </StyledSideBarHeader>
  );
};

export default SideBarHeader;

const StyledSideBarHeader = styled.div`
  height: 48px;
  margin-top: 16px;
  padding: 0 24px;
`;
